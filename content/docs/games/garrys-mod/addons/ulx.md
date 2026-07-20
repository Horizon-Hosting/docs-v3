---
title: Installing ULX
description: How to install the ULX admin mod (and its ULib dependency) on your Garry's mod server.
type: How To
---

ULX is a popular admin mod for Garry's Mod, giving you rank-based access to commands like kick, ban, mute, freeze, and slay. ULX requires **ULib**, a shared library other addons (including ULX) depend on, to also be installed.

:::warning[Both addons are required]
ULX will not work without ULib also being installed. Make sure you install both.
:::

## Download ULib and ULX \[step]

Download both addons from GitHub:

* [ULib](https://github.com/TeamUlysses/ulib/archive/refs/heads/master.zip)
* [ULX](https://github.com/TeamUlysses/ulx/archive/refs/heads/master.zip)

## Upload to your service \[step]

Using either [SFTP](/games/sftp) or the file manager, upload both ZIPs to `garrysmod/addons/`, each in their own folder (e.g. `ulib` and `ulx`).

## Unzip the files \[step]

Unzip each file so only the folder remains in `garrysmod/addons/`, then delete the original .ZIPs.

## 🎉 Done \[step]

Fully restart your service (not just a map change) for ULib and ULX to load correctly.

## Alternative: Steam Workshop

ULib and ULX are also available on the Steam Workshop. Add both to a [collection](/games/garrys-mod/getting-started#add-a-collection-step) and set the collection's ID in the "Workshop ID" field on your service's startup section, rather than uploading them manually.

## Setting yourself as an admin

By default, nobody has ULX access. To give yourself superadmin, use the in-game `ulx adduser` command, or edit `garrysmod/data/ulib/users.txt` directly using [SFTP](/games/sftp) or the file manager while your server is stopped.
