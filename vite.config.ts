import react from '@vitejs/plugin-react';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import mdx from 'fumadocs-mdx/vite';
import { nitro } from 'nitro/vite';
import { globSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';

// Safely read the package.json file directly from node_modules bypassing export maps
let optionalDeps: string[] = [];
try {
  const packageJsonPath = join(process.cwd(), 'node_modules', '@takumi-rs', 'core', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  optionalDeps = packageJson.optionalDependencies ? Object.keys(packageJson.optionalDependencies) : [];
} catch (e) {
  console.warn('Could not read @takumi-rs/core package.json for optional dependencies extraction.');
}

function getPrerenderRoutes() {
  const routes: string[] = [];
  const getUrl = createGetUrl('');

  const entries = globSync('**/*.mdx', { cwd: 'content/docs' });

  for (const entry of entries) {
    const slugs = getSlugs(entry);
    routes.push(getUrl(slugs));
    routes.push(`/og/docs/${[...slugs, 'image.webp'].join('/')}`);
  }

  return routes;
}

export default defineConfig({
  server: {
    port: 3000,
  },
  ssr: {
    external: ['@takumi-rs/core'],
    noExternal: optionalDeps,
  },
  plugins: [
    mdx(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
      },
    }),
    react(),
    nitro({
      prerender: {
        routes: getPrerenderRoutes(),
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: 'tslib/tslib.es6.js',
    },
  },
});