---
title: Installing Rust Modding Libraries
description: How to install Oxide/uMod or Carbon on your Rust server to support plugins.
icon: Package
type: How To
---

Your service's "Startup" section has a **Modding Framework** field, this controls which (if any) plugin framework your Rust server installs. It accepts one of three values:

* `vanilla`: no modding framework, plugins won't work
* `oxide`: installs Oxide/uMod
* `carbon`: installs Carbon

## What is Oxide/uMod

Oxide is the original, long-established modding framework for Rust. The project has since rebranded to **uMod**, but you'll still see both names used interchangeably in the community, on plugin pages, and in server tooling. It has the largest plugin library (1000+ plugins on [umod.org](https://umod.org/plugins)) and the most community support.

## What is Carbon

Carbon is a newer modding framework, built as a drop-in replacement for Oxide. It runs the large majority of existing Oxide plugins unmodified (thanks to a compatibility layer), while offering faster boot times and its own "Carbon-only" plugins that take advantage of features Oxide doesn't have.

:::tip[Not sure which to pick?]
If you're not sure, Oxide/uMod has the widest plugin support and community documentation. Carbon is worth considering if you want faster boot times or a specific Carbon-only plugin, most Oxide plugins will still work.
:::

## Set the Modding Framework \[step]

Navigate to [the game panel](https://panel.hrznhosting.com/), select your service, and open the "Startup" section. Set **Modding Framework** to `oxide` or `carbon`.

## Reinstall your server \[step]

Navigate to the settings page and click the **Reinstall** button, this installs your chosen framework on top of your existing Rust install without wiping your map.

## 🎉 Done \[step]

Once reinstalled, an `oxide/` (or `carbon/`) folder will appear in your file manager. Drop plugin `.cs` files into `oxide/plugins/` (or `carbon/plugins/`) to install them, [see our list of popular Rust mods](/games/rust/popular-mods) for some recommendations.
