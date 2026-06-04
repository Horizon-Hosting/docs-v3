import { createServerFn } from '@tanstack/react-start';
import { source } from '@/lib/source';
import type { Folder, Item, Node } from 'fumadocs-core/page-tree';

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

function getDescription(node: Item | Folder['index'] | undefined): string | null {
	if (!node?.description) return null;
	return typeof node.description === 'string' ? node.description : String(node.description);
}

export const getSubFolderLinks = createServerFn({ method: 'GET' })
	.inputValidator((data: { path: string; targetSlug: string }) => data)
	.handler(async ({ data: { path, targetSlug } }): Promise<CleanFolderData[]> => {
		const targetFolder = findFolderByPath(source.pageTree.children, path);
		if (!targetFolder || !targetFolder.children) return [];

		return targetFolder.children
			.filter((node: Node): node is Folder => node.type === 'folder')
			.flatMap((folderNode: Folder) => {
				// Prefer a child folder whose index URL ends with /targetSlug
				const matchingFolder = folderNode.children?.find(
					(child): child is Folder =>
						child.type === 'folder' &&
						(child.index?.url?.endsWith(`/${targetSlug}`) ?? false)
				);
				if (matchingFolder?.index?.url) {
					return [{
						title: String(folderNode.name),
						url: matchingFolder.index.url,
						description:
							getDescription(matchingFolder.index) ??
							getDescription(folderNode.index) ??
							'View guide',
					}];
				}

				// Fall back to a child page whose URL ends with /targetSlug
				const matchingPage = folderNode.children?.find(
					(child): child is Item =>
						child.type === 'page' && child.url.endsWith(`/${targetSlug}`)
				);
				if (matchingPage) {
					return [{
						title: String(folderNode.name),
						url: matchingPage.url,
						description: getDescription(matchingPage) ?? 'View guide',
					}];
				}

				return [];
			});
	});

export const getSubFolderData = createServerFn({ method: 'GET' })
	.inputValidator((path: string) => path)
	.handler(async ({ data: path }): Promise<CleanFolderData[]> => {
		const targetFolder = findFolderByPath(source.pageTree.children, path);

		if (!targetFolder || !targetFolder.children) return [];

		return targetFolder.children
			.filter((node: Node): node is Folder => node.type === 'folder')
			.map((folderNode: Folder) => ({
				title: String(folderNode.name),
				url: folderNode.index?.url ?? '#',
				description: getDescription(folderNode.index) ?? 'View guide',
			}));
	});