---
title: Erasing your Minecraft Server
description: How to erase your server and start fresh.
type: How To
---

There's two ways to erase a server, wiping everything, or wiping everything except your world and player data. Pick whichever matches what you're trying to do.

## Erase everything

:::danger[This cannot be undone!]
This will erase all player data, worlds, bans, and any other persistent data on your Minecraft server. Only continue if this is what you want.
:::

### Open the file manager \[step]

Navigate to [the game panel](https://panel.hrznhosting.com/), select your service, and open the file manager.

### Delete everything \[step]

Select all files, click "Delete", and confirm the deletion.

### Reinstall your server \[step]

Navigate to the settings page and click the **Reinstall** button. Your server will run through the install process again as if it were brand new.

## Erase everything except world & player data

Use this if you want a clean slate for plugins/mods and configuration, but want to keep your map and player records (bans, ops, whitelist) intact.

:::danger[This cannot be undone!]
Anything not listed below as "keep" will be permanently deleted. Take a backup first if you're not sure.
:::

### Open the file manager \[step]

Navigate to [the game panel](https://panel.hrznhosting.com/), select your service, and open the file manager.

### Keep your world and player data \[step]

Leave the following alone, everything else can be deleted:

* Your world folder(s), matching the `level-name` in `server.properties` (commonly `world`, `world_nether`, and `world_the_end`)
* `whitelist.json`
* `ops.json`
* `banned-players.json`
* `banned-ips.json`
* `usercache.json`

### Delete everything else \[step]

Select everything except the files/folders above (including `plugins`, `mods`, `server.properties`, `server.jar`, `libraries`, `cache`, and log files), then click "Delete" and confirm.

### Reinstall your server \[step]

Navigate to the settings page and click the **Reinstall** button. This redownloads your server software and regenerates configs like `server.properties`, without touching the world/player data you kept.
