---
title: FileZilla
description: How to use FileZilla to transfer files to and from your service.
type: How To
---

:::info[Prerequisites]
This guide assumes you already have [FileZilla installed](/games/sftp/filezilla/installing).
:::

## Find your SFTP details \[step]

On your service's console tab, look for the "SFTP Details" card. This shows the Host, Port, and Username you'll need, your password is your panel account password.

## Connect using the Quickconnect bar \[step]

Open FileZilla and use the Quickconnect bar at the top of the window:

1. **Host**: enter `sftp://` followed by the host shown on your panel
2. **Username**: the username shown on your panel
3. **Password**: your panel account password
4. **Port**: the port shown on your panel
5. Click **Quickconnect**

:::tip[Save it for next time]
To avoid re-entering these every time, use `File` → `Site Manager` → `New Site` and save the same details there instead.
:::

## Transfer files \[step]

Once connected, your service's files are shown on the right-hand pane, and your computer's files on the left. Drag and drop files between the two panes to upload or download them.

## 🎉 Done \[step]

Any changes you make will be reflected on your service, some changes (like editing a config file) may need a server restart to take effect.
