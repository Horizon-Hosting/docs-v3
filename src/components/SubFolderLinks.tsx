'use client';

import { useState, useEffect } from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { getSubFolderLinks, type CleanFolderData } from '@/server/docs';

interface SubFolderLinksProps {
	path: string;
	targetSlug: string;
}

export function SubFolderLinks({ path, targetSlug }: SubFolderLinksProps) {
	const [data, setData] = useState<CleanFolderData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSubFolderLinks({ data: { path, targetSlug } })
			.then((res) => {
				setData(res);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [path, targetSlug]);

	if (loading || data.length === 0) return null;

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
