---
title: tModLoader Setup
description: Your first steps towards setting up your tModLoader service.
icon: Rocket
type: How To
---

tModLoader is a mod loader for Terraria, and is available as its own software option on your service. The basics (world size, difficulty, max players, password) work exactly the same as [our regular Terraria guide](/games/terraria/getting-started), this page only covers what's different.

:::warning[Version must match]
The tModLoader **version** (not just the Terraria version) must match between your server and every connecting player, [see our common issue guide](/games/terraria/common-issues/version-mismatch) if players can't connect.
:::

## Switch to tModLoader \[step]

If your service isn't already running it, switch to tModLoader from the "Software" section of your service, then reinstall.

:::warning[Delete old files first]
Switching software can require overwriting files the previous software left behind, and the install won't always do this for you. Back up anything you need, then delete old files via [SFTP](/games/sftp) or the file manager before reinstalling, otherwise the install may fail or leave old files behind.
:::

## Set your world options \[step]

Configure World Name, Size, Difficulty, Max Players, and Password the same way as a [regular Terraria server](/games/terraria/getting-started#set-your-world-options-step).

## Install your mods \[step]

Before starting your server for the first time, [install any mods you want to run](/games/terraria/tmodloader/installing-mods).

## 🎉 Done \[step]

Start your server. tModLoader will load every mod listed in `Mods/enabled.json` on boot.
