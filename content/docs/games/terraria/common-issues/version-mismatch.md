---
title: Version Mismatch
description: Fixing "You are running a different version of Terraria than the server" errors.
type: Common Issue
---

## Issue

When trying to connect, a player sees a message along the lines of "You are running a different version of Terraria than the server", and is disconnected.

Terraria requires the client and server to be running the **exact same version**, there's no backwards/forwards compatibility.

## Solution

### Check your server's version \[step]

The server's version is shown in the console log on startup, and in the "Software"/"Version" section of the panel.

### Update the mismatched side \[step]

* If the **server** is behind, navigate to the settings page and click **Reinstall** to update it to the latest version.
* If the **player** is behind, they should update Terraria through Steam (or their platform's store) and restart the game.

:::tip[tModLoader]
If you're running [tModLoader](/games/terraria/tmodloader/getting-started), the tModLoader version (not just the base Terraria version) also needs to match between server and client.
:::
