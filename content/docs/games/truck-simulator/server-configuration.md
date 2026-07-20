---
title: Server Configuration
description: Configurable options for your Truck Simulator server, including server_config.sii and startup values.
icon: Settings
type: Quick Reference
---

:::tip[Top Tip]
Startup values are written directly into `server_config.sii` every time your server starts, and will always override anything set manually for the same field.
:::

## Startup Values

| **Name**         | **Description**                                                                                                                                                                                     | **Example**                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Auto Update       | Updates the server software on every restart.                                                                                                                                                        | `Enabled`                        |
| Steam Auth Token  | Optional. Gives your server a persistent search ID across restarts instead of a new one every time. Generate one at [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) using the game's App ID (not the server's). | `6544F7E034119F113526E96474F`    |
| Server Name       | `lobby_name`, shown in the session/convoy browser.                                                                                                                                                    | `My Truck Server`                |
| Max Players       | `max_players`. **This value can only be modified by upgrading it on your billing panel.**                                                                                                            | `8`                               |
| AI Traffic        | `traffic`, toggles AI-driven traffic on your map.                                                                                                                                                     | `Enabled`                         |
| Description       | `description`, shown when a player selects your server.                                                                                                                                               | `Welcome to my server!`           |
| Welcome Message   | `welcome_message`, shown to players once they connect.                                                                                                                                                | `Drive safe!`                     |
| Password          | `password`, optional, leave blank for a public server.                                                                                                                                                | (blank)                           |
| Query Port        | `query_dedicated_port`, used by Steam to list your server in the session browser. Needs its own [allocation](/general/changing-gameserver-port) to work externally.                                  | `27016`                           |

## server_config.sii

This file is located at `.local/share/Euro Truck Simulator 2/server_config.sii` (or `.local/share/American Truck Simulator/server_config.sii` on ATS), and can be edited using [SFTP](/games/sftp) or the file manager.

The fields below are overwritten by your Startup values on every restart, editing them directly in the file won't stick:

| **Name**                  | **Description**                                            | **Example**                    |
| --------------------------- | ------------------------------------------------------------- | --------------------------------- |
| connection_dedicated_port   | **Reference Only**, tied to your service's default allocation. | `27015`                           |
| query_dedicated_port        | **Reference Only**, please set via the Query Port startup value. | `27016`                        |
| server_logon_token          | **Reference Only**, please set via the Steam Auth Token startup value. | `6544F7E034119F113526E96474F` |
| lobby_name                  | **Reference Only**, please set via the Server Name startup value. | `"My Truck Server"`            |
| description                 | **Reference Only**, please set via the Description startup value. | `"Welcome!"`                   |
| welcome_message              | **Reference Only**, please set via the Welcome Message startup value. | `"Drive safe!"`             |
| max_players                 | **Reference Only**, please set via the Max Players startup value. | `8`                             |
| traffic                     | **Reference Only**, please set via the AI Traffic startup value. | `true`                           |
| password                    | **Reference Only**, please set via the Password startup value. | `""`                              |

Everything else in this file isn't touched by your Startup values, and can be customised directly:

| **Name**                                        | **Description**                                                          | **Example**  |
| --------------------------------------------------- | ----------------------------------------------------------------------------- | --------------- |
| max_vehicles_total                                  | Maximum number of vehicles (players + AI) allowed in the session at once.     | `100`           |
| max_ai_vehicles_player                              | Maximum AI vehicles visible around each player.                               | `50`            |
| max_ai_vehicles_player_spawn                        | Maximum AI vehicles spawned around each player.                               | `50`            |
| player_damage                                       | Whether players can damage each other.                                        | `true`          |
| hide_in_company                                     | Whether remote players are hidden while in a company area.                    | `false`         |
| force_speed_limiter                                 | Forces the in-game speed limiter on for all players.                          | `false`         |
| name_tags                                           | Shows player name tags above vehicles.                                        | `true`          |
| connection_virtual_port / query_virtual_port        | Internal virtual ports, allowed range 100-200. Not usually necessary to change. | `100` / `101`  |

:::warning[Verify Against Your Version]
SCS updates the dedicated server fairly often. If a specific option you need isn't listed above, check [the official SCS Modding Wiki](https://modding.scssoft.com/wiki/Documentation/Tools/Dedicated_Server) for the most current list.
:::

## Session Moderators

There's no panel field for moderators, they're added by editing `server_config.sii` directly:

```
moderator_list: 2
moderator_list[0]: <Steam64 ID>
moderator_list[1]: <Steam64 ID>
```

Moderators are promoted automatically when they join the session, and can use the following commands in the in-game chat:

| **Command**                             | **Description**             |
| ------------------------------------------ | ------------------------------- |
| `/set_time <HH:MM>`                        | Changes the in-game time.       |
| `/set_rain_factor <value from 0 to 1>`     | Adjusts rain intensity.         |
| `/help`                                    | Lists available commands.       |
