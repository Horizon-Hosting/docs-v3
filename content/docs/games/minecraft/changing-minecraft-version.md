---
title: Changing the Minecraft Version
description: How to change and update the server with a different Minecraft version.
type: How To
---

:::danger[Back up first]
We highly encourage taking a backup of your server before switching versions. Data may be lost, and **going back to an older version is not supported and will cause world corruption.**
:::

## Version Installer (Game Panel V2 Only)

:::info[Still rolling out]
Game Panel V2 is currently in beta and hasn't rolled out to every account yet. If you don't have a "Version Installer" page, use the Old Method below instead.
:::

The Version Installer handles changing your software (Vanilla, Paper, Forge, NeoForge, Fabric, etc.) and picking a specific version or build in one place. For Forge and NeoForge, you'll also pick a matching **Startup Command** instead of one being fixed by the old Software/egg switcher, [see our server configuration guide](/games/minecraft/server-configuration#startup-command-game-panel-v2-only) for the available presets, this makes importing an existing modpack server much easier since you can match whatever command it already expects.

:::warning[Delete old files first]
Switching software can require overwriting files the previous software left behind, and the install won't always do this for you. Things like `server.jar`, the `libraries` folder, and the `cache` folder are common culprits. Back up anything you need, then delete these via [SFTP](/games/sftp) or the file manager before continuing, otherwise the install may fail or leave old files behind.
:::

### Open the Version Installer \[step]

Navigate to the "Version Installer" page of the panel.

### Pick your software and version \[step]

Select the software you want to run, then the specific version or build, and confirm to install.

## Old Method

### Update the Minecraft Version field \[step]

Navigate to [the game panel](https://panel.hrznhosting.com/) and select your service, then go to the "Startup" section and locate the **Minecraft Version** field.

### Set the new version \[step]

Replace the **Minecraft Version** value with a valid server version, for example `1.20.4` or `1.16.4`.

### Reinstall your server \[step]

Navigate to the settings page and click the **Reinstall** button to apply the change.

## Old Method: Changing Server Type

To change your server's software entirely (for example, `Paper` → `Forge`) without the Version Installer, follow the steps below instead.

:::warning[Delete old files first]
Switching software can require overwriting files the previous software left behind, and the install won't always do this for you. Things like `server.jar`, the `libraries` folder, and the `cache` folder are common culprits. Back up anything you need, then delete these via [SFTP](/games/sftp) or the file manager before continuing, otherwise the install may fail or leave old files behind.
:::

### Open the Software section \[step]

Navigate to the "Software" section of the panel.

### Select and confirm \[step]

Select the software you want to use, click "Change Version", ensure the "Reinstall Server" toggle is checked, and press "Change Version".
