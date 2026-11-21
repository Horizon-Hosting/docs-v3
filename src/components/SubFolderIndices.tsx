import { Card, Cards } from 'fumadocs-ui/components/card';
import { useTreeContext } from 'fumadocs-ui/contexts/tree';
import { getSubFolderData } from '@/server/docs';

interface SubFolderIndicesProps {
	path: string;
}

export function SubFolderIndices({ path }: SubFolderIndicesProps) {
	const data = getSubFolderData(useTreeContext().full.children, path);

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
