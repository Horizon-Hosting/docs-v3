import path from 'node:path';
import matter from 'gray-matter';
import { globSync } from 'glob';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';

interface DocChunk {
	sectionHeading: string;
	content: string;
	url: string;
}

interface Doc {
	pageTitle: string;
	url: string;
	docType: string;
	tags: string[];
	chunks: DocChunk[];
}

function cleanMdxForAI(rawBody: string): string {
	let cleanText = rawBody;
	cleanText = cleanText.replace(/:::(?<type>\w+)\[(?<title>.*?)\]/g, (_, type, title) => `\n**[${type.toUpperCase()}] ${title}**\n`);
	cleanText = cleanText.replace(/:::/g, '');
	cleanText = cleanText.replace(/<\/?Tabs.*?>/g, '');
	cleanText = cleanText.replace(/<Tab\s+value=["'](?<platform>.*?)["']\s*>/g, (_, platform) => `\n### Platform: ${platform.charAt(0).toUpperCase() + platform.slice(1)}\n`);
	cleanText = cleanText.replace(/<\/Tab>/g, '\n');
	cleanText = cleanText
		.replace(/\[step\]/g, '')
		.replace(/#+ Video\s*\[VIDEO\]/gi, '')
		.replace(/\n{3,}/g, '\n\n');
	return cleanText.trim();
}

function chunkMarkdown(cleanText: string, baseUrl: string, pageTitle: string): DocChunk[] {
	const chunks: DocChunk[] = [];
	const sections = cleanText.split(/(?=\n?^#{1,3}\s+)/m);

	let currentHeading = 'Introduction';

	for (let section of sections) {
		section = section.trim();
		if (!section) continue;

		// Check if this chunk starts with a heading
		const headingMatch = section.match(/^#{1,3}\s+(.+)$/m);

		if (headingMatch) {
			currentHeading = headingMatch[1].trim();
		}

		const anchor = currentHeading
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-');

		const fullUrl = anchor === 'introduction' ? baseUrl : `${baseUrl}#${anchor}`;

		chunks.push({
			url: fullUrl,
			sectionHeading: currentHeading,
			content: section,
		});

	}

	return chunks;
}

function generateDocsJson() {
	try {
		console.log('🔄 Extracting, cleaning, and chunking Fumadocs content...');
		const contentFiles = globSync('content/docs/**/*.{md,mdx}');
		const allChunks: Doc[] = [];

		for (const filePath of contentFiles) {
			const fullPath = path.join(process.cwd(), filePath);
			const rawContent = readFileSync(fullPath, 'utf-8');
			const { data: frontmatter, content: rawBody } = matter(rawContent);

			if (frontmatter.type == null) continue;

			const urlSlug = filePath.replace('content/docs/', '').replace(/\.mdx?$/, '');
			const baseUrl = `/docs/${urlSlug}`;
			const pageTitle = frontmatter.title || urlSlug;

			const cleanedBody = cleanMdxForAI(rawBody);
			const fileChunks = chunkMarkdown(cleanedBody, baseUrl, pageTitle);

			allChunks.push({
				pageTitle: pageTitle,
				url: baseUrl,
				docType: frontmatter.type,
				tags: frontmatter.tags ?? [],
				chunks: fileChunks
			});
		}

		console.log(JSON.stringify(allChunks))
		console.log(`✅ Success! Generated ${allChunks.length} optimized semantic chunks inside ./public/docs-chunks.json`);

	} catch (error) {
		console.error('❌ Pipeline chunking failed:', error);
		process.exit(1);
	}
}


generateDocsJson();
