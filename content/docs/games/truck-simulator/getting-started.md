---
title: Getting Started
description: Your first steps towards setting up your Truck Simulator service.
icon: Rocket
type: How To
---

## Choose your game \[step]

Your service supports both Euro Truck Simulator 2 (ETS2) and American Truck Simulator (ATS). Switch between them from the "Software" section of the game panel.

:::warning[Switching later?]
Switching between ETS2 and ATS reinstalls your service with a completely different game, the installer may not clean up files the previous game left behind. Back up anything you need, then delete old files via [SFTP](/games/sftp) or the file manager before reinstalling, otherwise the install may fail or leave old files behind.
:::

## Export your server packages \[step]

By default your service starts with a generic map configuration. To include your own DLC, mods, and map selection, you need to export these from your own copy of the game and upload them.

With ETS2 or ATS running on your PC, enable the in-game console (`g_console "1"` in `config.cfg`), open it with `~`, and run `export_server_packages`. This generates `server_packages.sii` and `server_packages.dat` in your game's home folder, reflecting whichever DLC and mods you currently have active.

Upload both files to your service using [SFTP](/games/sftp) or the file manager, they need to sit alongside `server_config.sii`.

## Set your server details \[step]

In the "Startup" section, set:

* **Server Name**: shown in the in-game session/convoy browser
* **Description**: shown when a player selects your server
* **Welcome Message**: shown to players once they connect
* **Password**: optional, leave blank for a public server
* **AI Traffic**: toggles AI-driven traffic on your map

## Increase your player slots (optional) \[step]

**Max Players** is locked to your plan's player slots. [Upgrade your plan](/billing/self-service-upgrades) if you need more.

## Make your server searchable in the browser \[step]

By default, your server can only be joined by pasting its search ID directly into the convoy screen. If you'd like it to also appear when players browse for sessions, it needs its own allocation for the query port.

### Create a new allocation \[step]

Navigate to the "Network" tab and create a new allocation, [see our guide on managing allocations](/general/changing-gameserver-port) if you need more detail.

### Set the Query Port \[step]

Back in the "Startup" section, set **Query Port** to the port from the new allocation.

## Keep the same search ID across restarts (optional) \[step]

By default your server logs in anonymously, which means it gets a new, non-persistent search ID every time it restarts. To keep the same ID, generate a logon token at [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) (you'll need to own the game) using the game's App ID, not the server's, then paste it into **Steam Auth Token** in the "Startup" section.

## 🎉 Done \[step]

Start your server. Once it's running, the console will print a line like `Session search id: 00000000000000000/101`, the number before the `/` is what players search for on the convoy screen to find your server directly.
