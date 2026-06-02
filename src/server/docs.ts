import { createServerFn } from '@tanstack/react-start';
import { source } from '@/lib/source';
import type { Folder, Node } from 'fumadocs-core/page-tree';

export interface CleanFolderData {
	title: string;
	url: string;
	description: string;
}

function findFolderByPath(nodes: Node[], targetPath: string): Folder | null {
	const cleanTarget = targetPath.replace(/^\/|\/$/g, '');

	for (const node of nodes) {
		if (node.type === 'folder') {
			const folderPath = node.index?.url.replace(/^\/|\/$/g, '') || '';

			if (folderPath === cleanTarget) {
				return node;
			}

			if (node.children) {
				const found = findFolderByPath(node.children, targetPath);
				if (found) return found;
			}
		}
	}
	return null;
}

export const getSubFolderData = createServerFn({ method: 'GET' })
	.inputValidator((path: string) => path)
	.handler(async ({ data: path }): Promise<CleanFolderData[]> => {
		const targetFolder = findFolderByPath(source.pageTree.children, path);

		if (!targetFolder || !targetFolder.children) return [];

		return targetFolder.children
			.filter((node: Node): node is Folder => node.type === 'folder')
			.map((folderNode: Folder) => {
				let safeDescription = 'View guide';

				if (folderNode.index?.description) {
					if (typeof folderNode.index.description === 'string') {
						safeDescription = folderNode.index.description;
					} else {
						safeDescription = String(folderNode.index.description);
					}
				}

				return {
					title: String(folderNode.name),
					url: folderNode.index?.url || '#',
					description: safeDescription,
				};
			});
	});