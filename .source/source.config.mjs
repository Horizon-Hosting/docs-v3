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
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkSteps, remarkDirectiveAdmonition, remarkDirective]
  }
});
export {
  source_config_default as default,
  docs
};
