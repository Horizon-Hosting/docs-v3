---
title: Server Configuration
description: Configurable options for your Minecraft server, including server.properties.
icon: Settings
type: Quick Reference
---

:::tip[Top Tip]
Changes made to `server.properties` require a server restart to take effect.
:::

## server.properties

This file is located in your server's root directory and can be edited using [SFTP](/general/sftp) or the file manager.

| Name                 | Description                                                                                                  | Example          |
| --------------------- | -------------------------------------------------------------------------------------------------------------| ----------------- |
| motd                  | The message shown for your server in the multiplayer server list, [supports formatting codes](#text-styling-and-special-characters). | `A Minecraft Server` |
| difficulty            | How difficult the game is. One of `peaceful`, `easy`, `normal`, `hard`.                                       | `normal`          |
| gamemode              | The default gamemode players join in. One of `survival`, `creative`, `adventure`, `spectator`.                | `survival`        |
| hardcore              | Whether the server runs in hardcore mode, players are banned on death instead of respawning.                  | `false`           |
| pvp                   | Whether players can damage each other.                                                                        | `true`            |
| max-players           | The max players that can join at once. **This value can only be modified by upgrading it on your billing panel** | `20`           |
| white-list            | Whether only players on the whitelist can join.                                                               | `false`           |
| enforce-whitelist     | Whether whitelisted players are kicked immediately if removed from the whitelist while online.                | `false`           |
| spawn-protection      | The radius (in blocks) around spawn that non-operators cannot build or break in.                              | `16`              |
| view-distance         | How many chunks (radius) are sent to clients. Higher values use more resources.                               | `10`              |
| simulation-distance   | How many chunks (radius) are simulated around each player. Higher values use more resources.                  | `10`              |
| allow-flight          | Whether players can fly in survival mode without being kicked for "flying".                                   | `false`           |
| force-gamemode        | Whether players are forced back to the default `gamemode` on join, instead of keeping their last one.         | `false`           |
| enable-command-block  | Whether command blocks are enabled.                                                                            | `false`           |
| level-seed            | The seed used to generate the world. Leave empty for a random seed. **Only takes effect on a new world**.     | `""`              |
| resource-pack         | A URL clients are prompted to download a resource pack from on join.                                          | `""`              |
| require-resource-pack | Whether clients are disconnected if they decline the `resource-pack` download.                                | `false`           |

## Text Styling and Special Characters

Minecraft supports styling chat, MOTDs, and signs using formatting codes, applied by typing the section symbol `§` followed by a code from the table below before the text you want to style.

| Code | Description  |
| :--: | ------------ |
| `§r` | Reset        |
| `§l` | Bold         |
| `§m` | Strikethrough |
| `§n` | Underline    |
| `§o` | Italic       |
| `§k` | Obfuscated (randomly cycling characters) |
| `§0` | Black        |
| `§1` | Dark blue    |
| `§2` | Dark green   |
| `§3` | Dark aqua    |
| `§4` | Dark red     |
| `§5` | Dark purple  |
| `§6` | Gold         |
| `§7` | Gray         |
| `§8` | Dark gray    |
| `§9` | Blue         |
| `§a` | Green        |
| `§b` | Aqua         |
| `§c` | Red          |
| `§d` | Light purple |
| `§e` | Yellow       |
| `§f` | White        |

:::tip[Typing the § Symbol]
The `§` symbol isn't on most keyboards. Copy it from this page, or from the formatting codes table above, and paste it directly into `server.properties`.
:::

## Custom Server Icon

To set a custom icon for your server in the multiplayer list, upload an image to your server's root directory using [SFTP](/general/sftp) or the file manager, then restart your server. The image must be:

- Named `server-icon.png`
- In PNG format
- 64x64 pixels
