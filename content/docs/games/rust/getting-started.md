---
title: Getting Started
description: Your first steps towards setting up your Rust service.
icon: Rocket
type: How To
---

## Set your server identity \[step]

In the "Startup" section of your service, set the following fields so your server shows up correctly in the in-game server browser:

* **Server Name**: shown in the server list
* **Server Description**: shown when a player selects your server
* **Server URL / Header Image URL**: optional, shown on the connection screen

## Set your world options \[step]

Also in the "Startup" section, set your **Seed** and **World Size**.

:::warning[Only takes effect on a fresh map]
Changing the seed or world size after your server has already generated a map will not regenerate it, you'll need to wipe your server first.
:::

## Set an RCON password \[step]

Set a strong **RCON Password** in the startup section, this lets you (and tools like Oxide-based admin plugins) send commands to your server remotely. Keep this secret.

## Install modding support (optional) \[step]

If you'd like to run plugins, set the **Modding Framework** field (also in the "Startup" section) to `oxide` or `carbon`, then reinstall your server. [View our guide on installing Rust modding libraries](/games/rust/installing-modding-libraries) for the full walkthrough and the difference between the two.

## 🎉 Done \[step]

Start your server. The first boot will take longer than usual while the map generates.
