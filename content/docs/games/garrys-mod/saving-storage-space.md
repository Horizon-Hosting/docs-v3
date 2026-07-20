---
title: Saving Storage Space
description: How to free up disk space on your Garry's Mod server by clearing cached workshop content.
type: How To
---

If your service is running low on disk space, the most common cause is cached Workshop content building up over time. Addons downloaded from a [collection](/games/garrys-mod/getting-started#add-a-collection-step) are cached so they don't need to be re-downloaded on every restart, but old/unused addons aren't cleaned up automatically.

:::tip[Safe to delete]
Both folders below are just a cache. Deleting them doesn't remove your actual addon files or configuration, your active Workshop content will simply be re-downloaded the next time your server starts.
:::

## Stop your server \[step]

Navigate to [the game panel](https://panel.hrznhosting.com/), select your service, and stop it before continuing.

## Delete the steam_cache folder \[step]

Using [SFTP](/games/sftp) or the file manager, delete the `steam_cache` folder in the root of your service.

## Delete the garrysmod/cache folder \[step]

If present, also delete the `garrysmod/cache` folder.

## Start your server \[step]

Start your server back up. Your active Workshop addons will automatically re-download, only what's currently used by your collection/gamemode will come back, freeing up space taken by anything no longer in use.

## Common Issues

### "Error! Failed to read the downloaded file"

This is usually caused by a corrupted cache entry. Delete `appworkshop_4000.acf` from the `steam_cache` folder (or delete the whole `steam_cache` folder as above) and restart your server.
