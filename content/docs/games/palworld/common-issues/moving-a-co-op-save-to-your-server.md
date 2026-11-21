---
title: Moving a Co-op Save to Your Server
description: Why your character resets after uploading a co-op save to a dedicated server.
type: Common Issue
---

## Issue

You've copied your co-op world save onto your dedicated server, but your character, Pals, or progress are missing or reset.

## Solution

This is expected. Co-op and dedicated servers assign player IDs differently, so a save copied over directly doesn't carry your character across.

Use a save converter to remap your character's player ID to the one your dedicated server expects, which keeps your character, Pals, guild, and bases intact. [palworld-host-save-fix](https://github.com/xNul/palworld-host-save-fix) is a free, open-source tool that does this, and its README includes a step-by-step walkthrough for migrating a co-op save to a dedicated server.

Once converted, upload the save to your server.

:::warning[Back up before you convert]
Save converters are community-made and experimental. Take a copy of both your co-op save and your server's existing save before running one, a failed conversion can leave a save unusable.
:::
