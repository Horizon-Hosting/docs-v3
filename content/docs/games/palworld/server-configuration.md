---
title: Server Configuration
description: "Configurable options for your Palworld server, including PalWorldSettings.ini and startup values."
icon: Settings
type: Quick Reference
---

## Startup Values

| **Name**         | **Description**                                                                | **Example**    |
| ------------------- | ------------------------------------------------------------------------------ | ------------------ |
| Auto Update         | Updates the server software on every restart.                                  | `Enabled`           |
| Server Name         | `ServerName`, shown in the server browser and connection screen.                | `My Palworld Server`|
| Server Password     | `ServerPassword`, optional, leave blank for a public server.                    | (blank)             |
| Admin Password      | `AdminPassword`, required, used to gain admin access via chat commands or RCON. | `changeme`           |
| Max Players         | `ServerPlayerMaxNum`, capped at the game's own limit of 32.                     | `32`                 |
| Public Lobby        | Lists your server in Palworld's official Community Server browser. Off keeps your server private, joinable only by IP or invite. | `Disabled` |

## PalWorldSettings.ini

Located at `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`, and can be edited using [SFTP](/games/sftp) or the file manager.

:::danger[Stop your server first]
Palworld rewrites this file on shutdown, overwriting any changes made while the server is still running. Always stop your server before editing it directly, and keep everything on the single existing line, adding a line break will break the file.
:::

:::info[Not DefaultPalWorldSettings.ini]
`DefaultPalWorldSettings.ini` is just the template the file is copied from on first install, editing it directly has no effect on your running server.
:::

| **Name**            | **Description**                                                                                          | **Example**   |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- |
| ServerDescription      | Shown alongside your server name.                                                                        | `"Welcome!"`        |
| RCONEnabled            | Enables RCON. Off by default.                                                                             | `True`               |
| RCONPort               | Port RCON listens on. Needs its own [allocation](/general/changing-gameserver-port) to connect externally.| `25575`              |
| RESTAPIEnabled         | Enables the REST API. Off by default.                                                                     | `True`               |
| RESTAPIPort            | Port the REST API listens on. Needs its own [allocation](/general/changing-gameserver-port) to connect externally. | `8212`      |
| CrossplayPlatforms     | Which platforms can connect. Default `(Steam,Xbox,PS5,Mac)`, crossplay is on for all platforms out of the box. | `(Steam,Xbox)`       |
| bUseAuth               | Verifies a connecting player's identity, and enforces Pocketpair's official ban list. On by default, we recommend leaving this on. | `True` |
| bIsUseBackupSaveData   | Enables automatic in-game world backups. Increases disk usage.                                             | `True`               |

## Popular Game Balance settings

| **Name**            | **Description**                             | **Example**  |
| ---------------------- | -------------------------------------------------| --------------- |
| ExpRate                | EXP gain multiplier.                              | `2.0`           |
| PalCaptureRate         | Capture rate multiplier.                          | `2.0`           |
| PalSpawnNumRate        | Pal spawn rate multiplier. Impacts performance.   | `1.5`           |
| CollectionDropRate     | Gatherable items multiplier.                      | `2.0`           |
| DeathPenalty           | What's dropped on death: `None`, `Item`, `ItemAndEquipment`, or `All`. | `Item` |

:::warning[Verify Against Your Version]
Palworld has a large number of additional performance, feature, and balance settings beyond what's listed above. If a specific option you need isn't listed, check [the official Palworld Server Guide](https://docs.palworldgame.com/settings-and-operation/configuration/) for the full, current list.
:::
