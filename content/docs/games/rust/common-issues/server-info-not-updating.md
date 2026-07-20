---
title: Server Info Not Updating
description: Why your server's name, description, or image isn't updating in the in-game server browser.
type: Common Issue
---

## Issue

You've changed your Server Name, Description, or Header Image, restarted your server, but the in-game server browser still shows the old details.

## Solution

This is expected. Rust's server browser pulls data from Steam's master server list, which caches server info and only refreshes it periodically, it isn't reading the details live from your server.

Give it some time (this can take anywhere from a few minutes to a couple of hours) and it will update on its own. There isn't a way to force an immediate refresh from the server side.
