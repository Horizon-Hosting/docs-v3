---
title: Migrating to Horizon
description: How to move your server from another hosting provider to Horizon Hosting.
icon: CloudDownload
type: How To
---

## Download server data \[step]

You will need to download any important data from your old provider.

We have provided a list of common places for data to be stored (this is not exhaustive):

* `worlds/` (your `.wld` world files, and matching `.twld` files if present)
* `serverconfig.txt`
* `tModLoader/Mods/` and `tModLoader/Mods/enabled.json` (if you run [tModLoader](/games/terraria/tmodloader/getting-started))

## Save any server panel configurations \[step]

We reccomend you save any configuratins made on the panel. These could be any of the following:

* World Name, Size & Difficulty
* Max Players & Password
* Software (Vanilla, tModLoader, TShock)

## Transfer / Upload \[step]

:::tip[Top Tip]
When migrating your service, remember to update any credentials specific to your old provider (such as DB credentials, or API endpoints) to avoid unexpected issues.
:::

Using a tool like [SFTP](/games/sftp) or the game panel file manager, re-upload all the downloaded files.
At this time, also set and configurations you stored from the old panel.
