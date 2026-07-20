---
title: Stuck on "Done" while connecting
description: When connecting to a BeamMP server, the client gets stuck on "Done" and wont progress.
type: Common Issue
---

## Issue

When joining a BeamMP server, my client will get stuck showing "Done" and wont progress any further.

## Solutions

### Mods other than BeamMP installed

One major cause of this is having mods other than BeamMP installed on your BeamNG client.
Ensure that you only have the BeamMP mod installed.

### Corrupted Resources

When uploading resources, sometimes they may become corrupted causing issues to players joining.

Try removing all the resources from your service and connecting to it, if the issue subsides then it's most likely due to a corrupted mod.

To avoid this issue in the future, we'd reccomend [transferring files via SFTP](/games/sftp) which greatly reduces the chances of corruption.

### Clearing Cache

Sometimes this may be caused by a bad cache. To clear it, go to the installation directory for BeamMP (for Windows, this path is usually `C:\Users\AppData\BeamMP-Launcher\`). Then, delete the `Resources` folder.
