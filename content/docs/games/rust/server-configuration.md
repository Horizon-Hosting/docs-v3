---
title: Server Configuration
description: Configurable options for your Rust server, including server.cfg and startup parameters.
icon: Settings
type: Quick Reference
---

:::tip[Top Tip]
Startup values are passed to the server as launch parameters, and take priority over anything set in `server.cfg`.
:::

## Startup Values

| **Name**            | **Description**                                                                                     | **Example**                       |
| --------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Server Name           | `server.hostname`, shown in the server browser.                                                        | `My Rust Server`                     |
| Server Description    | `server.description`, shown when a player selects your server.                                         | `Welcome to my server!`              |
| Server URL            | `server.url`, an optional website link shown on the connection screen.                                 | `https://example.com`                |
| Header Image URL      | `server.headerimage`, an optional banner image shown on the connection screen.                          | `https://example.com/banner.png`     |
| Seed                  | `server.seed`, controls map generation. **Only takes effect on a wipe.**                                | `793197`                             |
| World Size            | `server.worldsize`, controls the map size (1000-6000). **Only takes effect on a wipe.**                 | `3500`                               |
| Max Players           | `server.maxplayers`. **This value can only be modified by upgrading it on your billing panel**          | `100`                                |
| RCON Password         | `rcon.password`, required for remote console access and most Oxide/Carbon admin tools.                 | `changeme`                           |
| Modding Framework     | Which modding framework to install, one of `vanilla`, `oxide`, or `carbon`. [See our guide on setting up modding libraries](/games/rust/installing-modding-libraries). | `oxide`                              |

## server.cfg

This file is located at `server/<identity>/cfg/server.cfg` and can be edited using [SFTP](/games/sftp) or the file manager. Anything in this file runs as a console command on boot.

:::tip[Startup Values Take Priority]
Startup values are applied after `server.cfg`, so they will always override a matching value set in the file.
:::

| **Name**                | **Description**                                                                                           | **Example**       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------| -------------------- |
| server.hostname            | **Reference Only**, please set via the startup values                                                        | `"My Rust Server"`  |
| server.description         | **Reference Only**, please set via the startup values                                                        | `"Welcome!"`         |
| server.seed                | **Reference Only**, please set via the startup values                                                        | `793197`             |
| server.worldsize           | **Reference Only**, please set via the startup values                                                        | `3500`               |
| server.maxplayers          | **Reference Only**, please set via the startup values                                                        | `100`                |
| rcon.password              | **Reference Only**, please set via the startup values                                                        | `changeme`           |
| rcon.port                  | The port RCON listens on. Not usually required to be set manually.                                           | `28016`              |
| server.saveinterval        | How often (in seconds) the server auto-saves the world.                                                      | `600`                |
| server.globalchat          | Whether global chat is enabled, as opposed to only team/local chat.                                          | `true`               |

:::warning[Verify Against Your Version]
Rust adds and changes convars fairly often. If a specific option you need isn't listed above, check [Rust's official server documentation](https://wiki.facepunch.com/rust/Creating-a-server) for the most current list.
:::

## Popular convars for admins

| **Value**            | **Description**                                                     |
| ----------------------- | ----------------------------------------------------------------------|
| `ownerid <steamid>`     | Grants a SteamID full admin/owner access on the server.               |
| `moderatorid <steamid>` | Grants a SteamID moderator access (kick/mute, no admin commands).     |
| `server.writecfg`       | Writes the server's current convar values back to `server.cfg`.       |
