# Horizon Hosting Knowledgebase

The source for [docs.hrznhosting.com](https://docs.hrznhosting.com), built with
[Fumadocs](https://fumadocs.dev) on [TanStack Start](https://tanstack.com/start).

## Running it locally

This repo uses [Bun](https://bun.sh).

```bash
bun install
bun run dev      # http://localhost:3000
```

```bash
bun run build    # static output in .output/public
bun run test     # all linters + typecheck
```

## Layout

| Path | What's in it |
| --- | --- |
| `content/docs/` | Every page, as `.md`/`.mdx` |
| `content/docs/**/meta.json` | Folder titles, icons, and sidebar ordering |
| `src/routes/` | Page shell plus `sitemap.xml`, `llms.txt`, `llms-full.txt`, OG images, search |
| `scripts/` | Linters, and `writeRedirects.ts` for old-site URL redirects |

A file's path is its URL: `content/docs/games/minecraft/getting-started.md` serves at
`/games/minecraft/getting-started`. A folder's `index.md` serves at the folder's own URL.

## Writing pages

See [Contributing to Docs](https://docs.hrznhosting.com/general/contributing-to-docs) for
the style rules. In short, every page starts with frontmatter:

```yml
---
title: Installing Plugins
description: How to install plugins on your Minecraft server.
type: How To
icon: Blocks
---
```

- `title` — short, descriptive, sentence-capitalised. No emoji, use `icon` instead.
- `description` — one line, shown in search results and on social cards.
- `type` — one of `How To`, `Quick Reference`, `FAQ`, `Common Issue`, `Overview`. Required.
- `icon` — optional [Lucide](https://lucide.dev/icons/) icon name.

Body conventions:

- Add `\[step]` to a heading that is a sequential step, which renders it as a numbered step.
- Use admonitions (`:::tip`, `:::info`, `:::warning`, `:::danger`) rather than bold text for callouts.
- Link to an existing page rather than repeating what it already covers.

Run `bun run test` before opening a PR. It checks markdown formatting, internal links,
frontmatter `type` values, and flags stub pages.

## Deployment

Pushing to `master` builds and deploys to GitHub Pages via
[`.github/workflows/pages.yml`](.github/workflows/pages.yml). The site is fully static, so
anything that needs to exist at a URL has to be prerendered, see `getPrerenderRoutes()` in
[`vite.config.ts`](vite.config.ts).

Redirects from the old Starlight site are static stubs written into the build output by
[`scripts/writeRedirects.ts`](scripts/writeRedirects.ts). Add a mapping there when a page
moves, so the old URL keeps working.
