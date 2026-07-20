---
title: Server Running Out of Memory
description: Why your Palworld server's memory usage keeps climbing over time.
type: Common Issue
---

## Issue

Your server's memory usage steadily increases the longer it runs, eventually causing crashes or instability.

## Solution

Palworld dedicated servers have a known memory leak that Pocketpair are aware of, this isn't specific to your service. A couple of things can help in the meantime:

* Setting `bEnableInvaderEnemy=False` in `PalWorldSettings.ini` (stop your server first) has a noticeable impact on memory usage for some servers.
* Scheduling a restart every few hours resets memory usage before it becomes a problem. How often depends on your player count and available RAM, if you're unsure, [see our server configuration guide](/games/palworld/server-configuration) for where to adjust these settings.

If your service doesn't have enough RAM for your player count, [contact us](/general/contact-us) or [upgrade your plan](/billing/self-service-upgrades).
