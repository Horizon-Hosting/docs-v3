---
title: Installing Mods
description: How to install Forge, Fabric, and NeoForge mods on your Minecraft server.
type: How To
---

Mods change the game itself, adding new blocks, items, and mechanics that plugins can't.

:::warning[Check your server software]
Mods need a mod loader, which means **Forge**, **Fabric**, or **NeoForge**. If your service is running Vanilla, Paper, or Spigot, mods will be ignored entirely, [see our plugin guides](/games/minecraft/plugins) instead, or [switch your server software](/games/minecraft/getting-started).
:::

:::tip[Want a ready-made pack instead?]
If you're installing a whole modpack rather than individual mods, use the modpack installer, [see our modpack guide](/games/minecraft/installing-a-modpack).
:::

## Download the mod \[step]

Get the mod's `.jar` file from [Modrinth](https://modrinth.com/mods) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods).

Each download is built for a specific mod loader **and** Minecraft version, so pick the file matching both, a Fabric build will not load on Forge, and vice versa.

## Check its dependencies \[step]

Many mods require a library mod to work, Fabric API and Fabric Language Kotlin are the most common on Fabric. The mod's download page lists what it needs, download those too.

## Upload them to the mods folder \[step]

Using either the panel file manager or [SFTP](/games/sftp), upload the `.jar` files into your service's `mods` folder.

## Restart your server \[step]

Go to the console tab and restart your server. Mods are only loaded at startup, so a running server won't pick up a newly uploaded jar.

## Install the same mods on your client \[step]

Unlike plugins, most mods have to be installed on both sides. Anyone joining needs the same mod loader, the same Minecraft version, and the same mods as the server, or they'll be kicked on connect.

Server-side-only mods are the exception, their download pages say so explicitly.

## 🎉 Done \[step]

Watch the console as the server starts, it will list the mods it loaded and name any that failed. We also have a guide for [Simple Voice Chat](/games/minecraft/mods/simple-voice-chat), a popular proximity voice chat mod.
