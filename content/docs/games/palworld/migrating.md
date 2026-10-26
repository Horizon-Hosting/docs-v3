---
title: Migrating to Horizon
description: How to move your Palworld server from another hosting provider to Horizon Hosting.
icon: CloudDownload
type: How To
---

## Download server data \[step]

You will need to download any important data from your old provider.

We have provided a list of common places for data to be stored (this is not exhaustive):

* `Pal/Saved/SaveGames/0/` (your world save)
* `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

## Save any server panel configurations \[step]

We recommend you save any configuration made on the panel. These could be any of the following:

* Server Name, Server Password & Admin Password
* Max Players
* RCON / REST API settings, if you had them set up

## Transfer / Upload \[step]

:::tip[Recommended: use the Server Importer]
Game Panel V2 (currently in beta, not yet rolled out to every account) can pull your files directly from your old host instead of you downloading and re-uploading them yourself. [See our Server Importer guide](/general/server-importer) for how to set it up with a download link, SFTP, FTP, or FTP over TLS.
:::

:::tip[Top Tip]
When migrating your service, remember to update any credentials specific to your old provider (such as your Admin Password) to avoid unexpected issues.
:::

Using a tool like [SFTP](/games/sftp) or the game panel file manager, re-upload all the downloaded files. At this time, also set any configuration you stored from the old panel.

If you're uploading manually rather than using the Server Importer, also check the **Startup Command** in the Startup section matches your server, Game Panel V2 lets you set this explicitly rather than it being fixed for you.
