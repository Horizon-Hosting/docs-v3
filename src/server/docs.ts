import type { ReactNode } from 'react';
import type { Folder, Item, Node } from 'fumadocs-core/page-tree';

// ponytail: plain functions over the client-side page tree; server fns don't exist on static hosting
export interface CleanFolderData {
	title: ReactNode;
	url: string;
	description: ReactNode;
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

export function getSubFolderLinks(nodes: Node[], path: string, targetSlug: string): CleanFolderData[] {
	const targetFolder = findFolderByPath(nodes, path);
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
					title: folderNode.name,
					url: matchingFolder.index.url,
					description:
						matchingFolder.index.description ??
						folderNode.index?.description ??
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
					title: folderNode.name,
					url: matchingPage.url,
					description: matchingPage.description ?? 'View guide',
				}];
			}

			return [];
		});
}

export function getSubFolderData(nodes: Node[], path: string): CleanFolderData[] {
	const targetFolder = findFolderByPath(nodes, path);

	if (!targetFolder || !targetFolder.children) return [];

	return targetFolder.children
		.filter((node: Node): node is Folder => node.type === 'folder')
		.map((folderNode: Folder) => ({
			title: folderNode.name,
			url: folderNode.index?.url ?? '#',
			description: folderNode.index?.description ?? 'View guide',
		}));
}
