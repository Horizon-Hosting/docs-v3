---
title: Getting Started
description: Your first steps towards setting up your Minecraft service.
icon: Rocket
type: How To
---

## Choose your server software \[step]

Your service comes with a range of server software to choose from, including Vanilla, Paper, Spigot, Forge, Fabric, and proxy software like Velocity/BungeeCord. If your panel has a "Version Installer" page (Game Panel V2 Only, currently in beta), you can pick your software and specific version/build there in one place. For Forge and NeoForge, you'll also pick a matching **Startup Command** there instead of one being fixed for you, [see our server configuration guide](/games/minecraft/server-configuration#startup-command-game-panel-v2-only) for the available presets. Otherwise, switch between software from the "Software" section of the game panel, and set a specific version separately.

:::tip[Not sure which to pick?]
If you just want plugins, choose Paper, [view our plugin guides](/games/minecraft/plugins/essentials). If you want mods, choose Forge or Fabric depending on which mod loader your mods target, [view our mod guides](/games/minecraft/mods/simple-voice-chat). Want a ready-made modpack instead? [See our modpack installer guide](/games/minecraft/installing-a-modpack).
:::

:::warning[Switching software later?]
If you switch to different server software after your service already has files on it, the installer may not overwrite files the old software left behind, things like `server.jar`, the `libraries` folder, and the `cache` folder are common culprits. Back up anything you need, then delete these via [SFTP](/games/sftp) or the file manager before reinstalling, otherwise the install may fail or leave old files behind.
:::

## Set your Minecraft version \[step]

If you used the Version Installer above, this is already done. Otherwise, in the "Startup" section, set the **Minecraft Version** field to the version you'd like to run, then reinstall your server from the settings page. See [our guide on changing versions](/games/minecraft/changing-minecraft-version) for more detail, including switching server software after the fact.

## Check your RAM \[step]

RAM isn't a setting you change on the server, your service automatically uses the amount included with your plan (the Startup Command handles this for you). Not sure how much you need? [View our guide](/games/minecraft/how-much-ram-do-i-need) covering the recommended amounts for Vanilla, Spigot/Paper, BungeeCord/Velocity, and Forge/Fabric servers, and [upgrade your plan](/billing/self-service-upgrades) if you need more.

## Accept the EULA \[step]

Minecraft requires you to accept Mojang's EULA before the server will start. This is done automatically for you on first boot, but if your server won't start and the console mentions the EULA, open `eula.txt` using [SFTP](/games/sftp) or the file manager and set `eula=true`.

## Configure your server \[step]

Most day-to-day settings (MOTD, difficulty, whitelist, etc.) live in `server.properties`. See [our server configuration guide](/games/minecraft/server-configuration) for the full list of options.

## 🎉 Done \[step]

Start your server and connect using the IP address shown on your panel's console tab.
