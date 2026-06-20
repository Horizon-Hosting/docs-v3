import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";

export default {
  plugins: [
    remarkFrontmatter,
    remarkMdx,
    remarkDirective,
    remarkPresetLintRecommended,
    // fumadocs uses custom `[step]`/`[pro tip]` heading syntax that this rule
    // misreads as broken markdown reference links
    ["remark-lint-no-undefined-references", false],
  ],
};
