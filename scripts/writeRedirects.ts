/**
 * Writes static redirect stubs for URLs from the old Starlight docs site into the
 * build output. GitHub Pages can't do server redirects, so each stub is an HTML
 * page with a canonical to the new URL, a meta refresh, and noindex so the stub
 * itself never ends up in search results.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const siteUrl = 'https://docs.hrznhosting.com';
const outDir = '.output/public';

// old URL -> new URL
const redirects: Record<string, string> = {
  '/general/about': '/',
  '/general/changing-port': '/general/changing-gameserver-port',
  '/general/getting-support': '/general/contact-us',
  '/general/using-sftp': '/games/sftp',
  '/general/using-filezilla': '/games/sftp/filezilla/installing',

  '/billing/cancel-paypal': '/billing/cancelling-your-subscription',
  '/billing/cancel-service': '/billing/cancelling-your-subscription',

  '/beammp/beammp-basics/beammp-install': '/games/beammp/getting-started/installing-beammp',
  '/beammp/beammp-basics/beammp-signup': '/games/beammp/getting-started',
  '/beammp/beammp-server-setup': '/games/beammp/server-configuration',
  '/beammp/beammp-server-update': '/games/beammp/updating-beammp-server',
  '/beammp/cobalt-essentials/cobalt-essentials-install': '/games/beammp/resources/ce-and-cei/installing-ce',
  '/beammp/cobalt-essentials/cobalt-vehicle-limits': '/games/beammp/resources/ce-and-cei/changing-the-vehicle-limit',

  '/gmod/gameserver-login-tokens': '/games/garrys-mod/getting-started/getting-a-gslt',
  '/gmod/installing-addons': '/games/garrys-mod/getting-started',
  '/gmod/installing-darkrp-gamemode': '/games/garrys-mod/gamemodes/darkrp',

  '/minecraft/changing-version': '/games/minecraft/changing-minecraft-version',
  '/minecraft/create-timings-report': '/games/minecraft/creating-a-timings-report',
  '/minecraft/erasing-the-server': '/games/minecraft/erasing-your-server',
  '/minecraft/how-much-ram': '/games/minecraft/how-much-ram-do-i-need',
  '/minecraft/install-mods': '/games/minecraft/mods',
  '/minecraft/changing-server-icon': '/games/minecraft/server-configuration#custom-server-icon',
  '/minecraft/plugins/installing-plugins': '/games/minecraft/plugins',
  '/minecraft/plugins/dynmap-install': '/games/minecraft/plugins/dynmap',
  '/minecraft/plugins/simple-voice-chat': '/games/minecraft/plugins/simple-voice-chat',

  '/vps/how-to-login': '/vps/first-setup',
  '/vps/setup': '/vps/first-setup',
  '/vps/reimaging': '/vps/pick-a-distro',
};

// Fail the build on a typo'd target rather than shipping a redirect to a 404.
function assertTargetExists(target: string) {
  const slug = target.split('#')[0].replace(/^\/|\/$/g, '');
  const base = join('content/docs', slug);
  const candidates = slug
    ? [`${base}.md`, `${base}.mdx`, join(base, 'index.md'), join(base, 'index.mdx')]
    : ['content/docs/index.mdx'];

  if (!candidates.some(existsSync)) {
    throw new Error(`Redirect target has no content page: ${target}`);
  }
}

function stub(target: string) {
  return `<!doctype html>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${siteUrl}${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<a href="${target}">This page has moved</a>
`;
}

for (const [from, to] of Object.entries(redirects)) {
  assertTargetExists(to);
  const dir = join(outDir, from.replace(/^\//, ''));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), stub(to));
}

console.log(`Wrote ${Object.keys(redirects).length} redirect stubs`);
