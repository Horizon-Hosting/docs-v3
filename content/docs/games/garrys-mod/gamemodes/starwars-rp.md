---
title: Installing Star Wars RP
description: How to set up a Star Wars RP server on Garry's Mod.
type: How To
---

"Star Wars RP" (SWRP) isn't its own gamemode, it's [DarkRP](/games/garrys-mod/gamemodes/darkrp) with its gamemode folder renamed and its jobs/models/weapons reskinned to a Star Wars theme. The traditional way to do this is to rename DarkRP itself, rather than installing a separate gamemode.

## Install DarkRP first \[step]

Follow [our DarkRP installation guide](/games/garrys-mod/gamemodes/darkrp) to get DarkRP installed to `garrysmod/gamemodes/darkrp` and working.

## Rename the gamemode folder \[step]

Using [SFTP](/games/sftp) or the file manager, rename the `garrysmod/gamemodes/darkrp` folder to `garrysmod/gamemodes/starwarsrp`.

## Rename and edit the gamemode info file \[step]

Inside that folder, rename `darkrp.txt` to `starwarsrp.txt`, then open it and update two lines:

```txt title="starwarsrp.txt (before)"
"darkrp"
{
    "base"          "sandbox"
    "title"         "DarkRP"
    ...
```

```txt title="starwarsrp.txt (after)"
"starwarsrp"
{
    "base"          "sandbox"
    "title"         "StarWarsRP"
    ...
```

:::warning[Keep the folder name and internal name matching]
The folder name (`starwarsrp`) and the internal name on the first line (`"starwarsrp"`) must match exactly, or Garry's Mod won't recognise the gamemode. The `"title"` line is just the display name, and can be anything, e.g. `"Star Wars RP"`.
:::

## Update the gamemode startup value \[step]

Go to the startup section of your service and set the "Gamemode" field to `starwarsrp` (matching the folder name from the previous step).

## 🎉 Done \[step]

Restart your service. It'll now show as "StarWarsRP" (or whatever you set as the title) rather than DarkRP.

## Adding the actual Star Wars content

Renaming the gamemode only changes its name, it doesn't add any Star Wars jobs, playermodels, or weapons on its own. For that, search the [Steam Workshop](https://steamcommunity.com/app/4000/workshop/) for a "Star Wars RP base" addon and [add it as a collection](/games/garrys-mod/getting-started#add-a-collection-step) or [file-based addon](/games/garrys-mod/getting-started#install-file-based-addons-step), the same way as any other DarkRP addon.

:::warning[Third-party content]
Star Wars RP bases are community-made addons that vary widely in quality and how up-to-date they are. Check the addon's workshop page for compatibility notes before committing to one.
:::
