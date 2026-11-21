---
title: Installing Plugins
description: How to install plugins on your Minecraft server.
type: How To
---

Plugins add new commands, features, and behaviour to your server without players needing to install anything themselves.

:::warning[Check your server software]
Plugins only work on Bukkit-based software, which means **Paper** or **Spigot**. If your service is running Vanilla, Forge, Fabric, or NeoForge, plugins will be ignored entirely, [see our mod guides](/games/minecraft/mods) instead, or [switch your server software](/games/minecraft/getting-started).
:::

## Download the plugin \[step]

Get the plugin's `.jar` file from a reputable source such as [Hangar](https://hangar.papermc.io/), [Modrinth](https://modrinth.com/plugins), or [SpigotMC](https://www.spigotmc.org/resources/).

Make sure the version you download supports your server's Minecraft version, a plugin built for a much older or newer version will usually fail to load.

## Upload it to the plugins folder \[step]

Using either the panel file manager or [SFTP](/games/sftp), upload the `.jar` file into your service's `plugins` folder.

If some plugins ship optional add-on jars (EssentialsX is a common example), upload those into the same folder.

## Restart your server \[step]

Go to the console tab and restart your server. Plugins are only loaded at startup, so a running server won't pick up a newly uploaded jar.

## Check the console \[step]

Watch the console as the server starts, each plugin logs itself as it loads. If a plugin is missing, the console will usually say why, the most common causes are a Minecraft version mismatch or a missing dependency plugin.

## Configure it \[step]

Most plugins generate their configuration inside `plugins/<PluginName>/` on first startup. Edit those files via the file manager or [SFTP](/games/sftp), then restart your server again to apply the changes.

## 🎉 Done \[step]

Your plugin is installed. We have tailored guides for some popular plugins:

- [EssentialsX](/games/minecraft/plugins/essentials), core commands like `/home`, `/warp`, and `/kit`
- [Dynmap](/games/minecraft/plugins/dynmap), a live web map of your world
- [Simple Voice Chat](/games/minecraft/plugins/simple-voice-chat), proximity voice chat
