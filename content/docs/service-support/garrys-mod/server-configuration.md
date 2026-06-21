---
title: Server Configuration
description: Configurable options for your Garry's Mod server, including server.cfg and startup parameters.
icon: Settings
type: Quick Reference
---

:::tip[Top Tip]
Changes made to `server.cfg` require a server restart to take effect.
:::

## Startup Values

| **Name**             | **Description**                                                                                                                                                                    | **Example**                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Map                   | The map your server will load on start.                                                                                                                                           | `gm_construct`                      |
| Steam Account Token   | Your server's GSLT, required if you want it to appear on the public server list. [View our guide on getting a GSLT](/service-support/garrys-mod/getting-started/getting-a-gslt). | `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`  |
| Workshop ID           | The ID of a Steam Workshop collection, content from it will be automatically downloaded and served to players who join.                                                          | `123456789`                         |
| Gamemode              | The gamemode your server will load on start.                                                                                                                                      | `sandbox`                           |
| Max Players           | The max players that can join at once. **This value can only be modified by upgrading it on your billing panel**                                                                  | `16`                                 |
| Tickrate              | How many times per second the server updates. Higher values reduce lag but use more resources.                                                                                   | `66`                                 |
| Extra Arguments       | Any other launch parameters appended to your server's startup command, [view some useful examples below](#useful-extra-arguments).                                                | `-noworkshop -noaddons`             |

:::tip[64-bit Server]
Garry's Mod also has a 64-bit server binary. This isn't a startup value, switching to it requires reinstalling your server from the panel rather than just changing a setting.
:::

### Useful Extra Arguments

| **Value**            | **Description**                                                                       |
| --------------------- | -------------------------------------------------------------------------------------- |
| `-noworkshop`         | Temporarily disables Steam Workshop addons.                                            |
| `-noaddons`           | Temporarily disables legacy/folder-based addons.                                       |
| `+<convar> <value>`   | Sets a console variable on startup, e.g. `+sv_lan 0`.                                  |

## server.cfg

This file is located at `garrysmod/cfg/server.cfg` and can be edited using [SFTP](/general/sftp) or the file manager.

:::tip[Startup Values Take Priority]
Startup values (including Extra Arguments) are applied after `server.cfg`, so they will always override a matching value set in the file.
:::

| **Name**                | **Description**                                                                                          | **Example**                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------| -------------------------------------- |
| hostname                 | The name shown for your server in the server browser.                                                     | `"My Garry's Mod Server"`             |
| sv_password              | Password required to join the server. Leave empty for a public server.                                   | `""`                                   |
| rcon_password            | Remote console password. Keep this secret, anyone with it can run commands on your server.                | `"changeme"`                           |
| sv_setsteamaccount       | **Reference Only**, please set via the startup values                                                     | `"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"`   |
| sv_lan                   | Restricts the server to local network connections only. **Should be `0` for public servers.**             | `0`                                     |
| sv_cheats                | Enables cheat-protected commands and convars. **Should be `0` on a live server.**                          | `0`                                     |
| sv_allowcslua            | Allows clients to run their own clientside Lua. **A security risk, should be `0` unless you need it.**     | `0`                                     |
| sv_allowupload           | Allows clients to upload custom content (such as sprays) to the server.                                    | `1`                                     |
| sv_allowdownload         | Allows clients to download custom content from the server.                                                 | `1`                                     |
| sv_downloadurl           | A FastDL URL clients will download custom content from, instead of directly from the server.               | `""`                                   |
| net_maxfilesize          | The maximum size (in MB) of a file clients are allowed to download from the server.                        | `64`                                    |
| sv_loadingurl            | A URL to a web page shown to clients while they're loading into the server.                                | `"https://example.com/motd.html"`       |
| sv_voiceenable           | Whether voice chat is enabled on the server.                                                                | `1`                                     |
| sv_alltalk               | Whether players can hear everyone regardless of team, `0` restricts to team chat.                          | `1`                                     |
| sv_steamgroup            | The SteamID64 of a Steam Group, used alongside `sv_steamgroup_exclusive`.                                  | `""`                                   |
| sv_steamgroup_exclusive  | Whether only members of `sv_steamgroup` are allowed to join.                                               | `0`                                     |
| mp_timelimit             | How many minutes are spent on a map before rotating. `0` disables rotation.                                | `60`                                     |
| mp_friendlyfire          | Whether players can damage their own team.                                                                 | `0`                                     |
| fps_max                  | The maximum rate the server's processing loop will run at.                                                 | `600`                                    |
| sbox_godmode             | Whether players have godmode (cannot take damage) by default in Sandbox.                                   | `0`                                     |
| sbox_noclip              | Whether players are allowed to noclip by default in Sandbox.                                                | `1`                                     |

### Example server.cfg

```
hostname "My Garry's Mod Server"
sv_password ""
rcon_password "changeme"
sv_lan 0
sv_cheats 0
sv_allowcslua 0
sv_allowupload 1
sv_allowdownload 1
sv_voiceenable 1
mp_timelimit 60
mp_friendlyfire 0
sbox_godmode 0
```

## Mounting Content

Your server can load extra content (maps, models, textures) from other Source games using `garrysmod/cfg/mount.cfg`. This tells Garry's Mod which other game folders to scan and mount.

**Counter-Strike: Source (`cstrike`) content comes pre-mounted on your service**, you only need this file if you want to mount content from another game (such as Team Fortress 2).

```txt title="mount.cfg"
{
    "tf"    "../tf"
}
```

Add one line per game you want to mount, using the game's folder name as the key and the path to its content folder as the value.

## Other Config Files

| **File**                          | **Description**                                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| mapcycle.txt                        | A list of maps (one per line) the server rotates through once `mp_timelimit` is reached.                                                  |
| banned_user.cfg / banned_ip.cfg     | Auto-generated ban lists, written via the `writeid`/`writeip` commands. Add `exec banned_user.cfg` and `exec banned_ip.cfg` near the top of `server.cfg` so bans persist across restarts. |
