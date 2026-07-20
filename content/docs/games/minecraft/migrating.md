---
title: Migrating to Horizon
description: How to move your server from another hosting provider to Horizon Hosting.
icon: CloudDownload
type: How To
---

## Download server data \[step]

You will need to download any important data from your old provider.

We have provided a list of common places for data to be stored (this is not exhaustive):

* `world/`, `world_nether/`, `world_the_end/` (or your custom world name)
* `plugins/`
* `mods/`
* `server.properties`
* `whitelist.json`
* `ops.json`
* `banned-players.json` / `banned-ips.json`

## Save any server panel configurations \[step]

We reccomend you save any configuratins made on the panel. These could be any of the following:

* Minecraft Version & server software (Paper, Spigot, Forge, Fabric, etc.)
* Max Players
* Any environment/startup variables specific to your old host

## Backup & Migrate Databases \[step]

If you use the databases your current host provides (for plugins like LuckPerms), you will need to migrate these.
We reccomend taking a backup of the data on it so you can restore the data on a Horizon database.

You can view our guide on [how to manage a horizon database](/games/managing-databases).

## Transfer / Upload \[step]

:::tip[Top Tip]
When migrating your service, remember to update any credentials specific to your old provider (such as DB credentials, or API endpoints) to avoid unexpected issues.
:::

Using a tool like [SFTP](/games/sftp) or the game panel file manager, re-upload all the downloaded files.
At this time, also set and configurations you stored from the old panel.

You can also [create a new database via your panel](/games/managing-databases) and restore your database to it.
