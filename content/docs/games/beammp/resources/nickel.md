---
title: Installing Nickel
description: Installing and performing basic configuration of Nickel.
type: How To
---

## What is Nickel

Nickel is a lightweight moderation resource for BeamMP, similar to Cobalt Essentials. It provides commands for managing staff, banning/unbanning/kicking/muting players, whitelisting, and broadcasting messages to your server.

### Requirements

- A BeamMP server running any `3.x.x` version.

## Installing via the mod manager (recommended)

### Navigate to the game panel \[step]

Navigate to the game panel and select the "Mods" section via the sidebar.

### Install the mod \[step]

Click install on "Nickel" and wait for it to finish installing.

### 🎉 Done \[step]

Restart your service and the mod should appear.

## Installing manually

### Download Nickel \[step]

Download the latest `Nickel.lua` release from the [Nickel GitHub repo](https://github.com/boubouleuh/Nickel-BeamMP-Plugin/releases).

### Upload to your service \[step]

Using either SFTP or the file manager, upload the downloaded `Nickel.lua` file to `Resources/Server/Nickel/` on your service. Create the `Nickel` folder if it doesn't already exist.

### 🎉 Done \[step]

Restart your service. Nickel will automatically generate a `NickelConfig.toml` file inside the `Nickel` folder on its first run, which you can edit to configure the resource.

## Configuring the resource

Open `Resources/Server/Nickel/NickelConfig.toml` using [SFTP](/games/sftp) or the file manager to set up staff permission levels and other options.

:::tip[Restart Required]
Like most BeamMP resources, changes made to `NickelConfig.toml` require a full **Stop** and **Start** of the server to take effect, rather than a restart, otherwise your changes may be overwritten.
:::
