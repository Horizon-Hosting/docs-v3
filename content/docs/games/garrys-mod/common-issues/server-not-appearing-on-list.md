---
title: Server Not Appearing on the List
description: Fixing a missing or expired GSLT causing your server not to show publicly.
type: Common Issue
---

## Issue

Your server runs fine, but doesn't show up in the in-game server browser for other players, or the console shows a message like:

```
Could not establish connection to Steam servers. (GSL token expired)
```

## Solutions

### Missing GSLT

If you haven't set a Steam Account Token yet, your server will only be joinable directly by IP, it won't be publicly listed. [Follow our guide on getting a GSLT](/games/garrys-mod/getting-started/getting-a-gslt) and enter it into the "Steam Account Token" field in your startup section.

### Expired GSLT

If a GSLT isn't used for a long period, it expires. To fix this:

1. Go back to [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) and click "Regenerate Token" on the token you're using.
2. Copy the newly generated token and update it in your startup section.
3. Restart your server.

### One token, multiple servers

Each GSLT can only be used on **one** server at a time. Using the same token across multiple servers will cause authentication issues and players being randomly kicked. Get a separate GSLT for each server.
