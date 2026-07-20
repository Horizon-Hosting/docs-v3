---
title: Installing Mods
description: "How to add Steam Workshop mods to your ARK: Survival Evolved server."
icon: Package
type: How To
---

There's no dedicated Mods field in the panel, mods are set up through `GameUserSettings.ini` and a launch argument instead.

## Find your mod IDs \[step]

Find the mod(s) you want on the [Steam Workshop](https://steamcommunity.com/app/346110/workshop/), the number at the end of the page's URL is its mod ID.

## Stop your server \[step]

ARK rewrites `GameUserSettings.ini` on shutdown, so any changes made while it's still running will be overwritten. Stop your server before editing it.

## Set ActiveMods \[step]

Using [SFTP](/games/sftp) or the file manager, open `ShooterGame/Saved/Config/LinuxServer/GameUserSettings.ini` and add the following under `[ServerSettings]`:

```
ActiveMods=<ModID1>,<ModID2>
```

List your mod IDs in the order you want them loaded, left to right, comma separated with no spaces.

:::warning[Capitalisation matters]
`ActiveMods` must be typed exactly as shown, ARK won't recognise it otherwise.
:::

## Enable auto-download \[step]

Add `-automanagedmods` to **Additional Arguments** in the "Startup" section, this makes the server automatically download and keep your mods updated from the Steam Workshop on every start, rather than you having to manage the files yourself.

## Start your server \[step]

Start your server, the first boot after adding mods will take longer than usual while they download.

:::warning[Verify Against Your Version]
Mod loading behaviour can change between ARK updates. If something isn't working as expected, check [the official ARK Community Wiki](https://ark.wiki.gg/wiki/Server_configuration) for the most current instructions.
:::
