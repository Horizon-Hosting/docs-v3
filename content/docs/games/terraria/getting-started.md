---
title: Getting Started
description: Your first steps towards setting up your Terraria service.
icon: Rocket
type: How To
---

## Choose your server software \[step]

Your service comes with a few software options for Terraria: vanilla Terraria, [tModLoader](/games/terraria/tmodloader/getting-started) (for mods), and TShock (a popular admin/plugin framework). Pick whichever matches what you want to run from the "Software" section of your service.

:::tip[Not sure which to pick?]
Stick with vanilla unless you specifically want mods (tModLoader) or in-game moderation/plugins (TShock).
:::

:::warning[Switching software later?]
If you switch software after your service already has files on it, the install may need to overwrite files the old software left behind. Back up anything you need, then delete the old files via [SFTP](/games/sftp) or the file manager before reinstalling, otherwise the install may fail or leave old files behind.
:::

## Set your world options \[step]

In the "Startup" section, set:

* **World Name**: used when auto-creating a new world
* **World Size**: small, medium, or large
* **Difficulty**: normal, expert, master, or journey (only applies when a new world is generated)
* **Max Players**
* **Password**: leave blank for a public server

See [our server configuration guide](/games/terraria/server-configuration) for the full list of `serverconfig.txt` options.

## 🎉 Done \[step]

Start your server. On first boot, it'll generate a new world using the options you set above, this can take a few minutes for larger worlds.
