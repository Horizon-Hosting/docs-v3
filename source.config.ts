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

// Legal docs use numbered headings (e.g. "1. Changes to this Policy") purely as
// clause numbering, not as sequential steps, so they're excluded from remarkSteps
// to avoid being rendered as a step-by-step UI.
function remarkStepsExceptLegal() {
  const transformer = remarkSteps() as (tree: any, file: any) => void;
  return (tree: any, file: any) => {
    const path: string = file?.path ?? '';
    if (/[\\/]legal[\\/]/.test(path)) return;
    return transformer(tree, file);
  };
}

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkStepsExceptLegal, remarkDirectiveAdmonition, remarkDirective]
  }
});
