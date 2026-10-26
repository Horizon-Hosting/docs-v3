---
title: Installing Simple Voice Chat (Plugin)
description: How to install Simple Voice Chat on your Minecraft server.
type: How To
---

Simple Voice Chat is a proximity voice chat plugin for Minecraft. Players can choose between push-to-talk (default key `CAPS LOCK`) or voice activation, and can access voice chat settings in-game with the `V` key.

## Install the plugin

### Download Simple Voice Chat \[step]

Go to the [Simple Voice Chat download page](https://modrinth.com/plugin/simple-voice-chat/versions) and download the latest version that supports your server's Minecraft version.

### Upload to your service \[step]

Using either the panel file manager or [SFTP](/games/sftp), upload the downloaded `voicechat-*.jar` file into your `plugins` folder.

### Restart your server \[step]

Go back to the console tab and restart your server to load the plugin.

## Give voice chat its own port

Simple Voice Chat needs its own allocation to handle voice traffic separately from the game.

### Create a new allocation \[step]

Stop your server, then navigate to the "Network" tab and create a new allocation. Note down the port shown, [see our guide on managing allocations](/general/changing-gameserver-port) if you need more detail.

### Edit the plugin's configuration \[step]

Using [SFTP](/games/sftp) or the file manager, open `plugins/voicechat/voicechat-server.properties` and change:

* `port=24454` → `port=<the port from the previous step>`

### Start your server \[step]

Voice chat will now be available once your server has fully started.
