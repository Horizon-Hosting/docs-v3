import { source } from '@/lib/source';
import { createFileRoute } from '@tanstack/react-router';

const siteUrl = 'https://docs.hrznhosting.com';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET() {
        const urls = source.getPages().map((page) => `${siteUrl}${page.url}`);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

        return new Response(body, {
          headers: { 'Content-Type': 'application/xml' },
        });
      },
    },
  },
});
