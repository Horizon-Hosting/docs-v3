/**
 * lib/og/fonts.ts
 * ---------------------------------------------------------------------------
 * Lazily fetch the Horizon brand fonts as raw font data for Takumi.
 *  - Space Grotesk + Hanken Grotesk: pulled from Google Fonts (woff2; Takumi
 *    decodes WOFF2 natively).
 *  - 0xProto: self-hosted — read from /public/fonts (copy the files there).
 * Results are cached at module scope so each weight is fetched at most once
 * per server instance.
 * ---------------------------------------------------------------------------
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const cache = new Map<string, Promise<ArrayBuffer | Buffer>>();

export function loadGoogleFont(family: string, weight = 400): Promise<ArrayBuffer> {
	const key = `${family}@${weight}`;
	let p = cache.get(key) as Promise<ArrayBuffer> | undefined;
	if (!p) {
		p = (async () => {
			const api = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}`;
			// A modern UA makes Google serve woff2.
			const css = await fetch(api, {
				headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
			}).then((r) => r.text());
			const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(woff2|truetype|opentype)['"]?\)/);
			if (!match) throw new Error(`Could not resolve font URL for ${family} ${weight}`);
			return fetch(match[1]).then((r) => r.arrayBuffer());
		})();
		cache.set(key, p);
	}
	return p as Promise<ArrayBuffer>;
}

export function loadLocalFont(publicRelativePath: string): Promise<Buffer> {
	const key = `local:${publicRelativePath}`;
	let p = cache.get(key) as Promise<Buffer> | undefined;
	if (!p) {
		p = readFile(join(process.cwd(), 'public', publicRelativePath));
		cache.set(key, p);
	}
	return p as Promise<Buffer>;
}
