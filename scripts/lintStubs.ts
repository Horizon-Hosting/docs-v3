import matter from "gray-matter";
import { glob } from "glob";

// distinct, unlikely-to-appear-in-real-prose markers; deliberately excludes
// generic words like "test" which would flood this with false positives
const STUB_MARKERS = [
  "STUB",
  "TODO",
  "FIXME",
  "TBD",
  "WIP",
  "PLACEHOLDER",
  "Lorem ipsum",
  "Coming soon",
];

const stubPattern = new RegExp(
  `\\b(${STUB_MARKERS.map((marker) => marker.replace(/\s+/g, "\\s+")).join("|")})\\b`,
);

const SHORT_BODY_LINE_THRESHOLD = 10;

interface Finding {
  file: string;
  issue: string;
}

async function lintStubs() {
  const files = await glob("content/{docs,blog}/**/*.{md,mdx}");
  const findings: Finding[] = [];

  for (const file of files) {
    const raw = await Bun.file(file).text();
    const { content } = matter(raw);
    const body = content.trim();

    if (body.length === 0) {
      findings.push({ file, issue: "empty body (frontmatter only)" });
      continue;
    }

    const match = body.match(stubPattern);
    if (match) {
      findings.push({ file, issue: `contains stub marker "${match[0]}"` });
    }

    const lineCount = body.split("\n").filter((line) => line.trim().length > 0).length;
    if (lineCount < SHORT_BODY_LINE_THRESHOLD) {
      findings.push({ file, issue: `short body (${lineCount} non-empty lines)` });
    }
  }

  if (findings.length === 0) {
    console.log("No stub or empty content files found.");
    return;
  }

  console.log(`Found ${findings.length} issue(s):\n`);
  for (const { file, issue } of findings) {
    console.log(`${file}: ${issue}`);
  }
  process.exitCode = 1;
}

void lintStubs();
