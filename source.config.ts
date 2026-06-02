import { remarkDirectiveAdmonition, remarkSteps } from 'fumadocs-core/mdx-plugins';
import remarkDirective from 'remark-directive';
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkSteps, remarkDirectiveAdmonition, remarkDirective]
  }
});
