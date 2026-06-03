import { createFileRoute } from '@tanstack/react-router';
import { source } from '@/lib/source';
import { OgCard } from '@/lib/og/og-card';
import { ogImageResponse } from '@/lib/og/image';

function clamp(s: string, max: number) {
	return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
}

export const Route = createFileRoute('/og/docs/$/image/webp')({
	server: {
		handlers: {
			GET: async ({ request, params }: { request: Request; params: { _splat: string } }) => {
				const splatParts = params._splat.split('/').filter((v: string) => v.length > 0);

				// Remove trailing component if it contains image.webp
				if (splatParts[splatParts.length - 1]?.endsWith('.webp')) {
					splatParts.pop();
				}

				const page = source.getPage(splatParts);
				if (!page) {
					return new Response('Not Found', { status: 404 });
				}

				const { searchParams } = new URL(request.url);

				// FIX: Extract fallback text from Fumadocs metadata if query params don't override them
				const docTitle = page.data.title ?? 'Horizon docs';
				const docDescription = page.data.description ?? undefined;

				const title = clamp(searchParams.get('title') ?? docTitle, 60);
				const description = searchParams.get('description') ?? docDescription
					? clamp(searchParams.get('description') ?? docDescription!, 140)
					: undefined;

				const eyebrow = searchParams.get('eyebrow') ?? 'Documentation';
				const url = searchParams.get('url') ?? 'hrzn.link/docs';

				// Return the generated Image response directly from the API handler
				return ogImageResponse(
					<OgCard title={title} description={description} eyebrow={eyebrow} url={url} />,
					{
						width: 1200,
						height: 630,
						format: 'webp',
						headers: {
							'Cache-Control': 'public, max-age=31536000, immutable',
						},
					},
				) as unknown as Response;
			},
		},
	},
});