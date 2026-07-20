---
title: Getting Started
description: "Your first steps towards setting up your Palworld service."
icon: Rocket
type: How To
---

## Set your server details \[step]

In the "Startup" section, set:

* **Server Name**: shown in the server browser and connection screen
* **Server Password**: optional, leave blank for a public server
* **Admin Password**: required, used to gain admin access via in-game chat commands or RCON

## Set your player count \[step]

Set **Max Players** to however many slots you'd like available, up to the game's own limit of 32.

## Make your server public (optional) \[step]

Toggle **Public Lobby** on to list your server in Palworld's official Community Server browser, so players can find it without needing your IP. Leave it off to keep your server private, joinable only by IP or invite.

## Set up RCON or the REST API (optional) \[step]

Neither has a dedicated field in the panel, both are enabled directly in `PalWorldSettings.ini` instead, and are off by default.

### Stop your server \[step]

Palworld rewrites this file on shutdown, so any changes made while it's still running will be lost. Stop your server before editing it.

### Edit PalWorldSettings.ini \[step]

Using [SFTP](/games/sftp) or the file manager, open `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` and set:

* `RCONEnabled=True` and `RCONPort=<port>` for RCON
* `RESTAPIEnabled=True` and `RESTAPIPort=<port>` for the REST API

:::warning[Single line, no line breaks]
The entire settings block is one comma-separated line. Adding a line break anywhere in it will break the file.
:::

### Allocate the port(s) \[step]

If you'd like to connect from outside your service, create a matching allocation on the "Network" tab for each port you set above, [see our guide on managing allocations](/general/changing-gameserver-port) if you need more detail.

## 🎉 Done \[step]

Start your server.

:::tip[Memory usage]
Palworld dedicated servers are memory-hungry, and have a known memory leak that Pocketpair are aware of. If your server becomes unstable after running for a while, a scheduled restart every few hours can help in the meantime.
:::
