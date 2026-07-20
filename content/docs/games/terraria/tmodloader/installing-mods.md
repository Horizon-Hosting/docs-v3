---
title: tModLoader Install Mods
description: How to install mods on your tModLoader server.
type: How To
---

tModLoader mods are `.tmod` files, tracked by a `Mods/enabled.json` file that tells the server which installed mods to actually load.

## Installing a mod you already own \[step]

If you've already subscribed to a mod on the Steam Workshop through the tModLoader client, its `.tmod` file will be in your local tModLoader Mods folder.

* Locate the `.tmod` file on your computer (this is usually inside your tModLoader install's `Mods` folder).
* Upload it to your server's `Mods/` folder using [SFTP](/games/sftp) or the file manager.

## Enabling the mod \[step]

Open `Mods/enabled.json` using [SFTP](/games/sftp) or the file manager. This is a JSON list of the internal mod names you want active, for example:

```json
["CalamityMod", "ThoriumMod", "RecipeBrowser"]
```

:::warning[Names must match exactly]
Mod names in `enabled.json` are case sensitive and must match the mod's **internal** name, not its display name. This is usually shown on the mod's Workshop page or in its filename.
:::

Add the mod's internal name to the list, save, and restart your server.

## Installing directly from the Workshop \[step]

tModLoader's dedicated server tools also support pulling mods straight from the Workshop using an `install.txt` file (a list of Workshop mod IDs) placed alongside `Mods/enabled.json`, without needing to upload a `.tmod` manually. See [tModLoader's official dedicated server documentation](https://docs.tmodloader.net/docs/stable/md__github_workspace_src_t_mod_loader__terraria_release_extras__dedicated_server_utils__r_e_a_d_m_e.html) for the exact format, this can vary between tModLoader versions.

## 🎉 Done \[step]

Restart your server, your enabled mods will now load on boot.
