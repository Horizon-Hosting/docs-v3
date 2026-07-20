---
title: Migrating to Horizon
description: How to move your server from another hosting provider to Horizon Hosting.
icon: CloudDownload
type: How To
---

## Download server data \[step]

You will need to download any important data from your old provider.

We have provided a list of common places for data to be stored (this is not exhaustive):

* `ShooterGame/Saved/` (contains your world save, tribe data, player profiles, and cluster data)
* `ShooterGame/Saved/Config/LinuxServer/GameUserSettings.ini`
* `ShooterGame/Saved/Config/LinuxServer/Game.ini`

:::tip[Matching map]
Your save data is tied to the map it was generated on. Make sure your new service is set to the same **Server Map** before uploading, otherwise your world won't load correctly.
:::

## Save any server panel configurations \[step]

We recommend you save any configuration made on the panel. These could be any of the following:

* Server Name, Server Password & Admin Password
* Server Map
* Max Players
* Query Port & RCON Port
* Battle Eye & Additional Arguments

## Transfer / Upload \[step]

:::tip[Top Tip]
When migrating your service, remember to update any credentials specific to your old provider (such as your Admin Password) to avoid unexpected issues.
:::

Using a tool like [SFTP](/games/sftp) or the game panel file manager, re-upload all the downloaded files. At this time, also set any configuration you stored from the old panel.
