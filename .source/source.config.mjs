// source.config.ts
import { remarkDirectiveAdmonition, remarkSteps } from "fumadocs-core/mdx-plugins";
import remarkDirective from "remark-directive";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true
    }
  }
});
function remarkStepsExceptLegal() {
  const transformer = remarkSteps();
  return (tree, file) => {
    const path = file?.path ?? "";
    if (/[\\/]legal[\\/]/.test(path)) return;
    return transformer(tree, file);
  };
}
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkStepsExceptLegal, remarkDirectiveAdmonition, remarkDirective]
  }
});
export {
  source_config_default as default,
  docs
};
