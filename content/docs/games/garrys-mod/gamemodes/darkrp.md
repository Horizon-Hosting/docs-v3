---
title: Installing DarkRP
description: How to install the DarkRP gamemode to your Garry's mod server.
type: How To
---

DarkRP is a non-serious, crime-based roleplay gamemode for Garry's Mod, maintained by [FPtje on GitHub](https://github.com/FPtje/DarkRP). It's one of the most popular gamemode bases on the workshop, and forms the foundation many other roleplay gamemodes (including most Star Wars RP servers) are built on top of.

:::warning[Gamemodes vs. Addons]
DarkRP is a **gamemode**, not an addon. It must be installed to the `garrysmod/gamemodes/` folder, not `garrysmod/addons/`.
:::

## Download DarkRP \[step]

Download the latest version of DarkRP [via GitHub](https://github.com/FPtje/DarkRP/archive/refs/heads/master.zip), or by visiting the [DarkRP repo](https://github.com/FPtje/DarkRP) and clicking the green "Code" button, then "Download ZIP".

## Upload to your service \[step]

Using either [SFTP](/games/sftp) or the file manager, upload the downloaded ZIP to `garrysmod/gamemodes/` on your service.

## Unzip and rename the folder \[step]

Unzip the file, then rename the extracted folder from `DarkRP-master` to `darkrp`, and delete the original .ZIP.

## Set the gamemode \[step]

Go to the startup section of your service and set the "Gamemode" field to `darkrp` (case sensitive).

## 🎉 Done \[step]

Restart your service. DarkRP will load, and you'll spawn in as a Citizen.

## Installing DarkRP Modification (recommended)

[DarkRP Modification](https://github.com/FPtje/darkrpmodification) is a companion addon that lets you customise DarkRP (jobs, entities, chat commands, etc.) without editing DarkRP's core files, which keeps future DarkRP updates from overwriting your changes.

Unlike DarkRP itself, this **is** an addon. Download it the same way as above, but upload it to `garrysmod/addons/` instead, keeping the extracted folder as-is.

## Common config

Once installed, most server-wide settings (starting money, F4 menu options, default jobs, etc.) are configured through `garrysmod/gamemodes/darkrp/settings.lua`. See [our Garry's Mod server configuration guide](/games/garrys-mod/server-configuration) for the general startup values and `server.cfg` options that also apply on top of DarkRP.
