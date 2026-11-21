---
title: Installing a Modpack
description: How to install a pre-made Minecraft modpack on your server.
type: How To
---

A modpack bundles a mod loader together with a curated set of mods and configs, so you don't have to pick each one individually. This guide covers installing one on your service, [see our guide on individual mods](/games/minecraft/mods/simple-voice-chat) if you'd rather build your own selection instead.

## Modpack Installer (Game Panel V2 Only)

:::info[Still rolling out]
Game Panel V2 is currently in beta and hasn't rolled out to every account yet. If you don't have a "Modpack Installer" page, use the Old Method below instead.
:::

The Modpack Installer installs and sets up the modpack (including the matching mod loader) for you.

:::warning[Delete old files first]
Installing a modpack reinstalls your server's software, and the installer may not overwrite files left behind by whatever was previously installed. Back up anything you need, then delete these via [SFTP](/games/sftp) or the file manager before continuing, otherwise the install may fail or leave old files behind.
:::

### Open the Modpack Installer \[step]

Navigate to the "Modpack Installer" page of the panel.

### Pick and install your modpack \[step]

Choose the modpack you want from the list, then confirm to install. Your server's software and mods are set up automatically, start your server once it's done.

## Old Method

You'll need to set up the mod loader and install the pack's mods individually instead.

### Install the matching mod loader \[step]

Check the modpack's page (on CurseForge or Modrinth) for which mod loader and version it needs, then [set your software and version](/games/minecraft/changing-minecraft-version) to match.

### Install each mod \[step]

Download each mod listed on the modpack's page, matching your mod loader (Forge or Fabric), and upload the `.jar` files to your `mods` folder using [SFTP](/games/sftp) or the file manager.

:::tip[Configs and resource packs]
Some modpacks also include a `config` folder and/or a resource pack. If the modpack's page provides these, upload the `config` folder to your service's root alongside `mods`, and install the resource pack the same way you would for any server, via `server.properties`.
:::

### Restart your server \[step]

Restart your server to load the modpack.
