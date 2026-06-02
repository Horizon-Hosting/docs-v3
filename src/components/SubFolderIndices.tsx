import { useState, useEffect } from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { getSubFolderData, type CleanFolderData } from '@/server/docs';

interface SubFolderIndicesProps {
	path: string;
}

export function SubFolderIndices({ path }: SubFolderIndicesProps) {
	const [data, setData] = useState<CleanFolderData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSubFolderData({ data: path })
			.then((res) => {
				setData(res);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [path]);

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