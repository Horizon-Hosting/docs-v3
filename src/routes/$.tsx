import { createFileRoute, notFound } from '@tanstack/react-router';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { createServerFn } from '@tanstack/react-start';
import { source } from '@/lib/source';
import browserCollections from 'collections/browser';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/notebook/page';
import { baseOptions } from '@/lib/layout.shared';
import { useFumadocsLoader } from 'fumadocs-core/source/client';
import { Suspense } from 'react';
import { useMDXComponents } from '@/components/mdx';
import { getPageImage } from '@/lib/source.shared';

const siteUrl = 'https://docs.hrznhosting.com';

function slugToName(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export const Route = createFileRoute('/$')({
  component: Page,
  loader: async ({ params }) => {
    const slugs = params._splat?.split('/') ?? [];
    const data = await serverLoader({ data: slugs });
    await clientLoader.preload(data.path);
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { slugs, title, description } = loaderData;
    const canonicalUrl = slugs.length === 0 ? siteUrl : `${siteUrl}/${slugs.join('/')}`;
    const imageUrl = getPageImage(slugs).url;

    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        ...slugs.map((slug, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: i === slugs.length - 1 ? title : slugToName(slug),
          item: `${siteUrl}/${slugs.slice(0, i + 1).join('/')}`,
        })),
      ],
    };

    return {
      meta: [
        { title: `${title} | Horizon Hosting Docs` },
        ...(description ? [{ name: 'description', content: description }] : []),
        { property: 'og:title', content: title },
        ...(description ? [{ property: 'og:description', content: description }] : []),
        { property: 'og:image', content: imageUrl },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        ...(description ? [{ name: 'twitter:description', content: description }] : []),
        { name: 'twitter:image', content: imageUrl },
        { 'script:ld+json': breadcrumbList },
      ],
      links: [{ rel: 'canonical', href: canonicalUrl }],
    };
  },
});

const serverLoader = createServerFn({
  method: 'GET',
})
  .inputValidator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);
    if (!page) throw notFound();

    return {
      path: page.path,
      pageTree: await source.serializePageTree(source.getPageTree()),
      slugs: page.slugs,
      title: page.data.title,
      description: page.data.description,
    };
  });

const clientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }) {
    return (
      <DocsPage toc={toc} tableOfContent={{ style: 'clerk' }}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription>{frontmatter.description}</DocsDescription>
        <div className="flex flex-row gap-2 items-center border-b -mt-4 pb-6">
          <ViewOptionsPopover />
        </div>
        <DocsBody>
          <MDX components={useMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});

function Page() {
  const { path, pageTree } = useFumadocsLoader(Route.useLoaderData());

  return (
    <DocsLayout {...baseOptions()} tree={pageTree}>
      <Suspense>{clientLoader.useContent(path)}</Suspense>
    </DocsLayout>
  );
}
