---
title: Popular Rust Mods
description: A few popular Oxide/uMod plugins for your Rust server.
type: Quick Reference
---

:::info[Prerequisites]
You'll need [Oxide/uMod or Carbon installed](/games/rust/installing-modding-libraries) before any of these will work.
:::

All Oxide/uMod plugins install the same way: download the plugin's `.cs` file and upload it to `oxide/plugins/` using [SFTP](/games/sftp) or the file manager, then either restart your server or run `oxide.reload <PluginName>` in the console/RCON.

:::tip[Running Carbon?]
Carbon runs the large majority of Oxide plugins unmodified, drop the same `.cs` files into `carbon/plugins/` instead of `oxide/plugins/`.
:::

Below are a few popular, actively maintained plugins to consider, search for these by name on [umod.org](https://umod.org/plugins) to find their download page:

| Plugin       | What it does                                                                 |
| -------------- | -------------------------------------------------------------------------------|
| Economics      | Adds a virtual currency (`economics.balance`, etc.) other plugins build on top of. |
| Kits           | Lets players redeem pre-made item kits via chat command.                        |
| Backpacks      | Gives players an extra, separate inventory that (optionally) survives death.    |
| Clans          | Adds clan/team management, with chat and permission integration.               |
| Zone Manager    | Lets you define zones on the map with their own rules (no-PVP, no-build, etc). |
| Vanish         | Lets admins/moderators go invisible for moderation purposes.                   |

:::warning[Third-party content]
These are community-made plugins, not maintained by Horizon Hosting. Always read a plugin's page for compatibility notes before installing, and keep backups before trying something new.
:::
