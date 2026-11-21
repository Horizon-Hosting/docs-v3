---
title: Migrating to Horizon
description: How to move your BeamMP server from another hosting provider to Horizon Hosting.
icon: CloudDownload
type: How To
---

## Download server data \[step]

You will need to download any important data from your old provider.

We have provided a list of common places for data to be stored (this is not exhaustive):

* `/Resource/`
* `ServerConfig.toml`

## Save any server panel configurations \[step]

We reccomend you save any configuratins made on the panel. These could be any of the following:

* Authentication Key (Serverlist Key)
* Server Name
* Server Description
* Map Path

## Backup & Migrate Databases \[step]

If you use the databases your current host provides, you will need to migrate these.
We reccomend taking a backup of the data on it so you can restore the data on a Horizon database.

You can view our guide on [how to manage a horizon databases](/games/managing-databases).

## Transfer / Upload \[step]

:::tip[Recommended: use the Server Importer]
Game Panel V2 (currently in beta, not yet rolled out to every account) can pull your files directly from your old host instead of you downloading and re-uploading them yourself. [See our Server Importer guide](/general/server-importer) for how to set it up with a download link, SFTP, FTP, or FTP over TLS.
:::

:::tip[Top Tip]
When migrating your service, remember to update any credentials specific to your old provider (such as DB credentials, or API endpoints) to avoid unexpected issues.
:::

Using a tool like [SFTP](/games/sftp) or the game panel file manager, re-upload all the downloaded files.
At this time, also set and configurations you stored from the old panel.

If you're uploading manually rather than using the Server Importer, also check the **Startup Command** in the Startup section matches your server, Game Panel V2 lets you set this explicitly rather than it being fixed for you.

You can also [create a new database via your panel](/games/managing-databases) and restore your database to it.
