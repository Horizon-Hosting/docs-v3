---
title: WinSCP
description: How to use WinSCP to transfer files to and from your service.
type: How To
---

:::info[Prerequisites]
This guide assumes you already have [WinSCP installed](/games/sftp/winscp/installing).
:::

## Find your SFTP details \[step]

On your service's console tab, look for the "SFTP Details" card. This shows the Host, Port, and Username you'll need, your password is your panel account password.

## Connect using a new site \[step]

Open WinSCP, you'll land on the "Login" screen with a "New Site" panel:

1. Set **File protocol** to **SFTP**
2. **Host name**: the host shown on your panel
3. **Port number**: the port shown on your panel
4. **User name**: the username shown on your panel
5. **Password**: your panel account password
6. Click **Login**

:::tip[Save it for next time]
Click **Save** before logging in to keep these details as a site you can reopen later, instead of re-entering them each time.
:::

## Transfer files \[step]

Once connected, your service's files are shown on the right-hand pane, and your computer's files on the left. Drag and drop files between the two panes to upload or download them.

## 🎉 Done \[step]

Any changes you make will be reflected on your service, some changes (like editing a config file) may need a server restart to take effect.
