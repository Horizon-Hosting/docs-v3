---
title: Server Configuration
description: "Configurable options for your ARK: Survival Evolved server, including GameUserSettings.ini, Game.ini, and startup values."
icon: Settings
type: Quick Reference
---

:::tip[Top Tip]
Startup values are passed to the server as launch parameters, and take priority over anything set in `GameUserSettings.ini`.
:::

## Startup Values

| **Name**                | **Description**                                                                                     | **Example**         |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| Server Name                | Shown in the server browser.                                                                          | `My ARK Server`         |
| Server Password            | Optional, leave blank for a public server.                                                            | (blank)                 |
| Admin Password              | Required. Used with the in-game `enablecheats <password>` command to gain admin access.               | `changeme`               |
| Server Map                 | Which map to run. See the list in [Getting Started](/games/ark-survival-evolved/getting-started).     | `TheIsland`              |
| Max Players                | Maximum number of players able to join.                                                               | `70`                     |
| Query Port                 | Used by Steam and the in-game server browser to list your server. Needs its own [allocation](/general/changing-gameserver-port) to work externally. | `27015` |
| RCON Port                  | Used for remote console access. Needs its own [allocation](/general/changing-gameserver-port) if you want to connect from outside your service. | `27020` |
| Auto Update                | Updates the server software on every restart.                                                         | `Enabled`                |
| Battle Eye                 | Toggles BattlEye anti-cheat. On by default.                                                           | `Enabled`                |
| Additional Arguments       | Extra launch flags, space separated, each starting with a dash. Used for things like crossplay.        | `-crossplay -exclusivejoin` |

:::warning[Local RCON is required]
The server uses a local RCON connection internally to save and shut down gracefully, this isn't optional and doesn't need an allocation to work. You'll only need to allocate the RCON Port if you want to connect to it yourself from outside your service using an RCON tool.
:::

## GameUserSettings.ini

Located at `ShooterGame/Saved/Config/LinuxServer/GameUserSettings.ini`, and can be edited using [SFTP](/games/sftp) or the file manager. Most day-to-day settings live under the `[ServerSettings]` section.

:::danger[Stop your server first]
ARK rewrites this file on shutdown, overwriting any changes made while the server is still running. Always stop your server before editing it directly.
:::

| **Name**                | **Description**                                                | **Example**  |
| --------------------------- | -------------------------------------------------------------------| --------------- |
| XPMultiplier                | Global XP rate multiplier.                                          | `2.0`           |
| TamingSpeedMultiplier       | How much faster taming completes compared to official rates.        | `5.0`           |
| HarvestAmountMultiplier     | How much resource is gathered per hit/harvest.                      | `3.0`           |

## Game.ini

Located at `ShooterGame/Saved/Config/LinuxServer/Game.ini`, under the `[/script/shootergame.shootergamemode]` section.

:::warning[Not the same file as GameUserSettings.ini]
Breeding, imprinting, per-level stat, and XP cap settings only work in `Game.ini`. If you paste them into `GameUserSettings.ini` instead, they'll be silently ignored.
:::

| **Name**                | **Description**                             | **Example**  |
| --------------------------- | -------------------------------------------------| --------------- |
| BabyImprintAmountMultiplier | How much imprint percentage each cuddle gives.    | `3.0`           |

:::warning[Verify Against Your Version]
ARK has a large number of configurable settings beyond what's listed above. If a specific option you need isn't listed, check [the official ARK Community Wiki](https://ark.wiki.gg/wiki/Server_configuration) for the full, current list.
:::
