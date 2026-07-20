---
title: Server Not Showing in the Browser
description: Why your server isn't appearing when players search for sessions.
type: Common Issue
---

## Issue

Players can't find your server when browsing for sessions in the convoy screen, even though it's running.

## Solution

This is usually one of two things:

**No query port allocation.** Your server's Query Port needs its own allocation to be reachable from outside your service, [see our getting started guide](/games/truck-simulator/getting-started#make-your-server-searchable-in-the-browser-step) for how to set one up. Without it, your server can still be joined directly by search ID, it just won't show up in the browse list.

**No Steam Auth Token set.** Without one, your server logs in anonymously and gets a new search ID every time it restarts, which can make it appear to "disappear" after a restart. [Add a Steam Auth Token](/games/truck-simulator/getting-started#keep-the-same-search-id-across-restarts-optional-step) to keep the same ID.

If neither applies, double check the search ID shown in your console on startup and search for it directly instead of browsing.
