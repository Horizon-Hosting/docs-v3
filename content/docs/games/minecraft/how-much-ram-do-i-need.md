---
title: How much RAM do I need?
description: Learn how much RAM you need for your Minecraft server and which plan is right for you.
type: Quick Reference
---

Various amounts of RAM will be needed for different Minecraft servers depending on their setup and intended use. A Minecraft server's performance will suffer or even crash if it has less RAM than it requires, so it's critical to know what factors influence RAM usage and how much is required. A server will typically require more RAM the more players and addons (mods/plugins) it supports.

:::tip[Just a guideline]
The values below are only a suggestion, it's always better to have more RAM than you think you'll need.
:::

## Vanilla / Spigot / Paper

Vanilla servers normally use less RAM than Spigot/Paper servers as they don't use plugins, however there's a few variables to keep in mind when calculating RAM.

| Variable                              | Recommended RAM |
| -------------------------------------- | ----------------- |
| Minecraft 1.16.4 or previous versions  | 3GB                |
| Minecraft 1.17+                        | 4GB                |
| For every 5 additional players         | +1GB               |
| For every 10 additional plugins        | +1GB               |

## BungeeCord / Velocity

BungeeCord and Velocity servers use an extremely low amount of RAM, we recommend **500MB** as a base value, increased depending on players and plugins.

| Variable                     | Recommended RAM |
| ------------------------------ | ----------------- |
| BungeeCord / Velocity          | 500MB              |
| For every 5 plugins            | +500MB             |
| For every 200 additional players | +1GB             |

## Forge / Fabric

Forge and Fabric servers use a much larger amount of RAM as they fully customise the game.

| Variable                              | Recommended RAM |
| -------------------------------------- | ----------------- |
| Minecraft 1.12.2 or previous versions  | 3GB                |
| Minecraft 1.13 - 1.16.4                | 4GB                |
| Minecraft 1.17+                        | 5GB                |
| For every 5 additional players         | +1GB               |
| For every 10 additional mods           | +1GB               |
