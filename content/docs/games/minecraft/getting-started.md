---
title: Getting Started
description: Your first steps towards setting up your Minecraft service.
icon: Rocket
type: How To
---

## Choose your server software \[step]

Your service comes with a range of server software to choose from, including Vanilla, Paper, Spigot, Forge, Fabric, and proxy software like Velocity/BungeeCord. You can switch between these from the "Software" section of the game panel.

:::tip[Not sure which to pick?]
If you just want plugins, choose Paper, [view our plugin guides](/games/minecraft/plugins/essentials). If you want mods, choose Forge or Fabric depending on which mod loader your mods target, [view our mod guides](/games/minecraft/mods/simple-voice-chat).
:::

:::warning[Switching software later?]
If you switch to different server software after your service already has files on it, the installer may not overwrite files the old software left behind, things like `server.jar`, the `libraries` folder, and the `cache` folder are common culprits. Back up anything you need, then delete these via [SFTP](/games/sftp) or the file manager before reinstalling, otherwise the install may fail or leave old files behind.
:::

## Set your Minecraft version \[step]

In the same "Startup" section, set the **Minecraft Version** field to the version you'd like to run, then reinstall your server from the settings page. See [our guide on changing versions](/games/minecraft/changing-minecraft-version) for more detail, including switching server software after the fact.

## Set your RAM \[step]

Not sure how much RAM to allocate? [View our guide](/games/minecraft/how-much-ram-do-i-need) covering the recommended amounts for Vanilla, Spigot/Paper, BungeeCord/Velocity, and Forge/Fabric servers.

## Accept the EULA \[step]

Minecraft requires you to accept Mojang's EULA before the server will start. This is done automatically for you on first boot, but if your server won't start and the console mentions the EULA, open `eula.txt` using [SFTP](/games/sftp) or the file manager and set `eula=true`.

## Configure your server \[step]

Most day-to-day settings (MOTD, difficulty, whitelist, etc.) live in `server.properties`. See [our server configuration guide](/games/minecraft/server-configuration) for the full list of options.

## 🎉 Done \[step]

Start your server and connect using the IP address shown on your panel's console tab.
