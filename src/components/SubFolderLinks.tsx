'use client';

import { Card, Cards } from 'fumadocs-ui/components/card';
import { useTreeContext } from 'fumadocs-ui/contexts/tree';
import { getSubFolderLinks } from '@/server/docs';

interface SubFolderLinksProps {
	path: string;
	targetSlug: string;
}

export function SubFolderLinks({ path, targetSlug }: SubFolderLinksProps) {
	const data = getSubFolderLinks(useTreeContext().full.children, path, targetSlug);

	if (data.length === 0) return null;

	return (
		<Cards>
			{data.map((page) => (
				<Card key={page.url} title={page.title} href={page.url}>
					{page.description}
				</Card>
			))}
		</Cards>
	);
}
