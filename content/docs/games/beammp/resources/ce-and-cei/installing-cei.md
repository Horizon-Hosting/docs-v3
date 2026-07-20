---
title: Installing Cobalt Essentials Interface
description: How to install Cobalt Essentials Interface on top of CE
type: How To
---

:::warning[Read before installing!]
CEI is an extension for Cobalt Essentials, **ensure that you have Cobalt Essentials installed before continuing!**
:::

## What is Cobalt Essentials Interface

Cobalt Essentials Interface is a extension for CE which allows users to interact with the CE mod using a user friendly interface.

### Requirements
- A BeamMP server running any `3.x.x` version.
- A working installation of Cobalt Essentials

## Installing via the mod manager (recommended)

### Navigate to the game panel [step]
Navigate to the game panel and select the "Mods" section via the sidebar.

### Install the mod [step]
Click install on "Cobalt Essentials Interface" and wait for it to finish installing.

### 🎉 Done [step]
Restart your service and the mod should appear.

## Installing manually

### Download Cobalt Essentials [step]
- Download Cobalt Essentials Interface by going to [their GitHub repo](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases)
- Open the assets dropdown on the latest release (the top-most one)
- Click on the .ZIP named "Cobalt_Essentials_Interface_vX.X.X.zip"

### Upload to your service [step]
Upload the downloaded ZIP using either SFTP or the file manager to the root of your service. (where BeamMP-Server is)

### Unzip the file [step]
Once the file has been uploaded, unzip the file and delete the .ZIP file, leaving only the folder.

### Add the extension to CE [step]
Navigate to and open `/Resources/Server/CobaltEssentials/LoadExtensions.cfg`, then add `CEI = "CEI"` to the bottom of the file.

### 🎉 Done [step]
Restart your service and the mod should appear.

## Using the interface
You can open the interface by using the `/CEI` command in chat.
