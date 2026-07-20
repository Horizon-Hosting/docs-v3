---
title: Invalid Java Version
description: Fixing the "requires running the server with Java X or above" error.
type: Common Issue
---

## Issue

The server fails to start, and the console outputs something along the lines of:

```
Minecraft x.xx requires running the server with Java xx or above.
```

This means your server is set to a Docker image running the wrong Java version for the Minecraft version you're trying to use.

## Solution

### Navigate to the Startup section \[step]

Go to [the game panel](https://panel.hrznhosting.com/), select your service, and open the "Startup" section.

### Pick the matching Docker image \[step]

Set the **Docker Image** field to match your Minecraft version:

| Minecraft Version | Java Version |
| ------------------- | -------------- |
| 1.8                  | Java 8         |
| 1.12                 | Java 11        |
| 1.17                 | Java 16        |
| 1.18+                | Java 17        |

:::info[Using a newer Minecraft version?]
Newer major Minecraft versions occasionally bump their required Java version further. If your version isn't listed above, or none of the available images resolve the error, [contact us](/general/contact-us) and we'll point you to the correct image.
:::

### Restart your server \[step]

Once you've selected the correct Docker image, start your server again.
