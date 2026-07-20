---
title: Installing Dynmap
description: How to install Dynmap on your Minecraft server.
type: How To
---

Dynmap is a Google Maps-like live map for your Minecraft server, viewable in a browser. It works out-of-the-box using its own built-in webserver, and can render your world using a range of renderers, some suited for performance, others for high detail.

## Install the plugin

### Download Dynmap \[step]

Go to the [Dynmap download page](https://modrinth.com/plugin/dynmap/versions) and download the latest version that supports your server's Minecraft version.

### Upload to your service \[step]

Using either the panel file manager or [SFTP](/games/sftp), upload the downloaded `dynmap-*.jar` file into your `plugins` folder.

### Restart your server \[step]

Go back to the console tab and restart your server to load the plugin.

## Expose Dynmap's webserver

By default, Dynmap's built-in webserver isn't reachable from outside your service. You'll need to give it its own allocation.

### Create a new allocation \[step]

Stop your server, then navigate to the "Network" tab and create a new allocation. Note down the IP address and port shown, [see our guide on managing allocations](/general/changing-gameserver-port) if you need more detail.

### Edit Dynmap's configuration \[step]

Using [SFTP](/games/sftp) or the file manager, open `plugins/dynmap/configuration.txt` and update the following:

* `webserver-port: 8123` → `webserver-port: <the port from the previous step>`
* `deftemplatesuffix: hires` → `deftemplatesuffix: lowres` (or `vlowres`), for better performance on smaller servers

### Start your server \[step]

Once fully started, your map will be live at `http://<the IP from step 1>:<the port from step 1>`.

## Common Issues

### Webpage not loading

Make sure you're using `http://` and not `https://` in the URL. If it's still not loading, [contact us](/general/contact-us) for further help.
