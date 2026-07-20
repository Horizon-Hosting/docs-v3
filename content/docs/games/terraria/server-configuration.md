---
title: Server Configuration
description: Configurable options for your Terraria server, including serverconfig.txt.
icon: Settings
type: Quick Reference
---

:::tip[Top Tip]
Changes made to `serverconfig.txt` require a server restart to take effect.
:::

## serverconfig.txt

This file is located in your server's root directory and can be edited using [SFTP](/games/sftp) or the file manager.

| Name         | Description                                                                                          | Example              |
| -------------- | -------------------------------------------------------------------------------------------------------| ----------------------- |
| world          | The path to the world file to load.                                                                    | `worlds/MyWorld.wld`   |
| worldname      | The name used when auto-creating a new world.                                                          | `MyWorld`              |
| autocreate     | Automatically creates a world if one isn't found at the `world` path. `1` = small, `2` = medium, `3` = large. | `2`             |
| difficulty     | World difficulty, only applies when auto-creating a new world. `0` normal, `1` expert, `2` master, `3` journey. | `0`             |
| maxplayers     | The max players that can join at once. **This value can only be modified by upgrading it on your billing panel** | `8`             |
| port           | **Reference Only**, please set via the startup values                                                  | `7777`                 |
| password       | Password required to join the server. Leave empty for a public server.                                 | `""`                    |
| motd           | The message shown to players when they join.                                                            | `"Welcome!"`            |
| secure         | Enables extra anti-cheat checks.                                                                        | `1`                     |
| language       | The server console/log language.                                                                        | `en-US`                 |

:::warning[Not exhaustive]
Terraria adds new `serverconfig.txt` options with major updates. See the [official Terraria Wiki server setup guide](https://terraria.wiki.gg/wiki/Guide:Setting_up_a_Terraria_server) for the full, current list.
:::
