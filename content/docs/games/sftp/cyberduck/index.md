---
title: Cyberduck
description: How to use Cyberduck to transfer files to and from your service.
type: How To
---

:::info[Prerequisites]
This guide assumes you already have [Cyberduck installed](/games/sftp/cyberduck/installing).
:::

## Find your SFTP details \[step]

On your service's console tab, look for the "SFTP Details" card. This shows the Host, Port, and Username you'll need, your password is your panel account password.

## Connect using Open Connection \[step]

Open Cyberduck and click **Open Connection** in the top-left corner:

1. Set the protocol dropdown to **SFTP (SSH File Transfer Protocol)**
2. **Server**: the host shown on your panel
3. **Port**: the port shown on your panel
4. **Username**: the username shown on your panel
5. **Password**: your panel account password
6. Click **Connect**

## Transfer files \[step]

Once connected, your service's files are shown in the main Cyberduck window. Drag and drop files from Finder/Explorer into this window to upload them, or drag files out of it to download them.

## 🎉 Done \[step]

Any changes you make will be reflected on your service, some changes (like editing a config file) may need a server restart to take effect.
