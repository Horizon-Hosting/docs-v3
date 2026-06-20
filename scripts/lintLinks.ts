import path from "node:path";
import { getTableOfContents } from "fumadocs-core/content/toc";
import { getSlugs } from "fumadocs-core/source";
import {
  printErrors,
  readFiles,
  scanURLs,
  validateFiles,
} from "next-validate-link";

async function checkLinks() {
  // we read them all at once to avoid repeated file read
  const docsFiles = await readFiles("content/docs/**/*.{md,mdx}");

  // other collections too!
  const blogFiles = await readFiles("content/blog/**/*.{md,mdx}");

  const scanned = await scanURLs({
    preset: "tanstack-start",
    pages: ["[[..._splat]]", "blog/[slug]"],
    populate: {
      "blog/[slug]": blogFiles.map((file) => {
        return {
          value: getSlugs(path.relative("content/blog", file.path))[0],
          hashes: getTableOfContents(file.content).map((item) =>
            item.url.slice(1),
          ),
        };
      }),
      "[[..._splat]]": docsFiles.map((file) => {
        return {
          value: getSlugs(path.relative("content/docs", file.path)),
          hashes: getTableOfContents(file.content).map((item) =>
            item.url.slice(1),
          ),
        };
      }),
    },
  });

  const files = [...docsFiles, ...blogFiles];

  // links: internal only
  const linkResults = await validateFiles(files, {
    scanned,
    markdown: {
      onNode(node) {
        if (node.type === "link") return { hrefs: [node.url] };
        return { hrefs: [] };
      },
    },
  });

  // images: internal and external
  const imageResults = await validateFiles(files, {
    scanned,
    checkExternal: true,
    markdown: {
      onNode(node) {
        if (node.type === "image") return { hrefs: [node.url] };
        return { hrefs: [] };
      },
    },
  });

  printErrors([...linkResults, ...imageResults], true);
}

void checkLinks();