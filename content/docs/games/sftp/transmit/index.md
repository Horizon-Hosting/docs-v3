---
title: Transmit (MacOS Only)
description: How to use Transmit to transfer files to and from your service.
type: How To
---

:::info[Prerequisites]
This guide assumes you already have [Transmit installed](/games/sftp/transmit/installing).
:::

## Find your SFTP details \[step]

On your service's console tab, look for the "SFTP Details" card. This shows the Host, Port, and Username you'll need, your password is your panel account password.

## Connect using a new Favorite \[step]

Open Transmit and click the **+** button (or `File` → `New Favorite`):

1. Set the protocol dropdown to **SFTP**
2. **Server**: the host shown on your panel
3. **Port**: the port shown on your panel
4. **User**: the username shown on your panel
5. **Password**: your panel account password
6. Click **Connect**

## Transfer files \[step]

Once connected, your service's files are shown in the Transmit window. Drag and drop files from Finder into this window to upload them, or drag files out of it to download them.

## 🎉 Done \[step]

Any changes you make will be reflected on your service, some changes (like editing a config file) may need a server restart to take effect.
