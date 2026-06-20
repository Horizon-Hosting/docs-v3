import matter from "gray-matter";
import { glob } from "glob";

const VALID_TYPES = ["How To", "Quick Reference", "FAQ", "Common Issue", "Overview"];

interface Finding {
  file: string;
  issue: string;
}

async function lintTypes() {
  const files = await glob("content/docs/**/*.{md,mdx}");
  const findings: Finding[] = [];

  for (const file of files) {
    const raw = await Bun.file(file).text();
    const { data } = matter(raw);

    if (!("type" in data)) {
      findings.push({ file, issue: "missing `type` frontmatter field" });
      continue;
    }

    if (!VALID_TYPES.includes(data.type)) {
      findings.push({
        file,
        issue: `invalid type "${data.type}" (expected one of: ${VALID_TYPES.join(", ")})`,
      });
    }
  }

  if (findings.length === 0) {
    console.log("All doc pages have a valid `type`.");
    return;
  }

  console.log(`Found ${findings.length} issue(s):\n`);
  for (const { file, issue } of findings) {
    console.log(`${file}: ${issue}`);
  }
  process.exitCode = 1;
}

void lintTypes();
