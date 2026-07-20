---
title: Getting Started
description: Your first steps towards setting up your BeamMP service.
icon: Rocket  
type: How To
---

:::tip[Temporary Change]
Due to BeamMP's disruption with their account services, you will need to run your service with allow guests enabled.

For more details, you can read [our guide on how to enable guests](/games/beammp/common-issues/allow-guests).
:::

## Getting a server key \[step]

**If you want your server to show on the serverlist, you will need a server key.**

* To begin, navigate to [the BeamMP keymaster](https://keymaster.beammp.com/) and sign in.
* Then, navigate to the AuthKeys section and create a key using the green plus button.
* After a key has been made, copy the hidden value from the Key column.
* Please enter this key into the "Authentication Key" field on the startup section of the game panel.

**Please do not share this key, it is unique to you.**

BeamMP requires 1 key per server in order for it to show on the serverlist.
If you require more keys, BeamMP offers them via their [Patreon](https://patreon.com/BeamMP)

## Adding resources to your server \[step]

To avoid file corruption and for the best speeds, we reccomend [using SFTP to transfer resources](/games/sftp) to your service.

* To begin, download the relevant resource.
* Then, using eiher SFTP or the file manager, upload your service to its relevant folder.
  * **For client resources** (maps, cars): Upload to `/Resources/Client/`
  * **For server resources** (gamemodes, moderation mods, etc): Upload to `Resources/Server/`
  * As a general rule, if the game client would need to download the resource, it will need to be installed as a client resource.
* **If your resource is a server resurce, it will need to be unzipped.** Ensure that the resources are still in their own folder, to verify, you should see .lua files in the folder.

## Changing your servers map \[step]

By default BeamMP comes with a set of pre-installed maps. To choose a map, you enter the maps path into the "Map" field of the startup section.

Below are the pre-installed map paths you can use:

* `/levels/gridmap_v2/info.json`
* `/levels/automation_test_track/info.json`
* `/levels/east_coast_usa/info.json`
* `/levels/hirochi_raceway/info.json`
* `/levels/italy/info.json`
* `/levels/jungle_rock_island/info.json`
* `/levels/industrial/info.json`
* `/levels/small_island/info.json`
* `/levels/smallgrid/info.json`
* `/levels/utah/info.json`
* `/levels/west_coast_usa/info.json`
* `/levels/driver_training/info.json`
* `/levels/derby/info.json`

### Finding custom map paths

For custom maps, you will need to find the path in order to set it.

* You will need to open the map .ZIP file, then open the `levels` folder
* Inside this folder, there should be another folder. Copy the name of it.
* Your custom map path will be `/levels/MAPNAME/info.json`, replace MAPNAME with the folder name you copied.
* You can then place this into the "Map" field on the startup section of the game panel.

## Joining your server \[step]

If your server is visible on the serverlist, you can search for the name in-game and join it.

Alternatively, if your server is not visible on the serverlist, you can join it by:

First copying the IP address visible in the “Console” tab on the panel. (Example 127.0.0.1:25612)
Then, go to the “Direct Connect” tab in the multiplayer menu and click “Paste from Clipboard”.
Finally, click “Connect” and you will be on your server.
