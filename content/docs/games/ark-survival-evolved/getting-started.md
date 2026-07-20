---
title: Getting Started
description: "Your first steps towards setting up your ARK: Survival Evolved service."
icon: Rocket
type: How To
---

## Choose your map \[step]

In the "Startup" section, set **Server Map** to the map you'd like to run (`TheIsland`, `TheCenter`, `Ragnarok`, `ScorchedEarth_P`, `Aberration_P`, `Extinction`, `Valguero_P`, `Genesis`, `CrystalIsles`, `Gen2`, `Fjordur`), then reinstall your server to apply it.

## Set your server details \[step]

Also in the "Startup" section, set:

* **Server Name**: shown in the server browser
* **Server Password**: optional, leave blank for a public server
* **Admin Password**: required, used with the in-game `enablecheats <password>` command to gain admin access

## Set your player count \[step]

Set **Max Players** to however many slots you'd like available.

## Make your server externally reachable (optional) \[step]

Your server can be joined directly by IP once it's running, but if you want it to show up when players browse for servers, or want to connect to RCON from outside your service, you'll need your own allocation for each.

### Create new allocations \[step]

Navigate to the "Network" tab and create a new allocation for each port you need, [see our guide on managing allocations](/general/changing-gameserver-port) if you need more detail.

### Set the ports \[step]

Back in the "Startup" section, set **Query Port** and/or **RCON Port** to match the allocations you created.

:::info[Query Port]
Without an allocated Query Port, your server can still be joined directly by IP, it just won't appear when players browse for sessions in-game or on Steam.
:::

## Review your anti-cheat and launch settings \[step]

**Battle Eye** is on by default, we recommend keeping it enabled unless a specific mod requires it to be off. Use **Additional Arguments** for extra launch flags, for example `-crossplay -exclusivejoin` to allow Epic Games players to join.

## Install mods (optional) \[step]

There's no dedicated Mods field, [see our guide on installing mods](/games/ark-survival-evolved/installing-mods) for how to add Steam Workshop mods via `GameUserSettings.ini`.

## 🎉 Done \[step]

Start your server.

:::tip[This is normal]
ARK needs a working local RCON connection to fully start, which can take 10-20 minutes on a fresh boot. You'll see "RCON connection refused" messages in the console during this time, this isn't a crash, just let it finish.
:::
