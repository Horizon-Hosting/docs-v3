---
title: '"RCON connection refused" on startup'
description: Why your console shows RCON errors right after starting your server.
type: Common Issue
---

## Issue

You've just started your server, and the console is repeatedly showing messages like `RCON connection refused`.

## Solution

This is expected. Your server relies on a local RCON connection to finish starting up and to save/shut down gracefully, and it isn't available until the world has finished loading. This can take anywhere from 10 to 20 minutes on a fresh boot, longer on larger maps or with a lot of mods installed.

Let it run, the messages will stop once the server has fully started. If it's been significantly longer than 20 minutes with no change, [contact us](/general/contact-us) for further help.
