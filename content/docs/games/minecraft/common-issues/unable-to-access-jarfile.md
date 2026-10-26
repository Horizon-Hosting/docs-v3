---
title: '"Unable to Access Jarfile"'
description: Fixing the "Unable to access jarfile" error after changing Minecraft software or version.
type: Common Issue
---

## Issue

The server fails to start, and the console outputs something along the lines of:

```
Error: Unable to access jarfile server.jar
```

This usually happens right after changing your software or version using the Version Installer (Game Panel V2), and means the **Startup Command** no longer matches the software you're running, for example, still being set to `Forge / NeoForge` after switching to Vanilla or Paper, or vice versa.

## Solution

### Navigate to the Startup section \[step]

Go to [the game panel](https://panel.hrznhosting.com/), select your service, and open the "Startup" section.

### Pick the matching Startup Command \[step]

Set the **Startup Command** to match your current software, [see our server configuration guide](/games/minecraft/server-configuration#startup-command-game-panel-v2-only) for which preset to use:

| Software | Startup Command |
| ---------- | ------------------ |
| Vanilla, Paper, Spigot, Purpur, Fabric, Quilt, proxies (Velocity/BungeeCord) | Default |
| Forge, NeoForge | Forge / NeoForge |
| An imported server or modpack with its own run script | Start Script |

### Restart your server \[step]

Once you've selected the correct Startup Command, start your server again.

:::info[Still not starting?]
If you've confirmed the Startup Command matches your software and it's still not starting, [contact us](/general/contact-us) with your console log attached.
:::
