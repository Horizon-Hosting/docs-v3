---
title: Importing Your Server
description: How to use the Server Importer to pull your files directly from your old host.
type: How To
---

:::tip[Game Panel V2 Only]
The Server Importer is a Game Panel V2 feature (currently in beta, not yet rolled out to every account). If you don't see it, use [SFTP](/games/sftp) or the game panel file manager to upload your files manually instead.
:::

## Open the Server Importer \[step]

The Server Importer is available in two places: on the setup wizard shown the first time you view a newly provisioned service, or at any time from the "Import Server" entry in the sidebar.

## Paste or fill in your details \[step]

If your old host gave you connection details, for example an address like `sftp://user@host:2022`, or a download link, paste it into the "Paste your details here" field and it fills in the rest of the form for you. Otherwise, choose how to connect under "Or choose how to connect" and fill the fields in yourself:

- **Download link**: a direct URL to a file or backup. If it's an archive, it's unpacked for you automatically.
- **SFTP**
- **FTP**
- **FTP over TLS**

:::tip[Starting clean]
Tick "Delete everything on this server first" if you want the import to wipe your new service before transferring files, useful if you've already installed server software and want a clean slate.
:::

## Start the import \[step]

Click "Start import". Your files will transfer in the background, you can keep an eye on progress from the console.

## Check your Startup Command \[step]

Imported files can come from a different software build or modpack than what's currently installed on your service. Once the import finishes, open the "Startup" section and make sure the **Startup Command** matches what you imported, Game Panel V2 lets you set this explicitly rather than it being fixed by your software choice. For Minecraft specifically, [see our Startup Command guide](/games/minecraft/server-configuration#startup-command-game-panel-v2-only) for which preset to use.

## 🎉 Done \[step]

Once the transfer finishes and your Startup Command is confirmed, start your server as normal.
