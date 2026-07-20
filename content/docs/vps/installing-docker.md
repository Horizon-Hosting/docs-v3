---
title: Installing Docker
description: How to install Docker and the Compose plugin on your VPS.
icon: Container
type: How To
---

:::info[Debian/Ubuntu]
The commands below are for Debian/Ubuntu based distros. If you're running a different distro, [see our guide on picking a distro](/vps/pick-a-distro), or refer to [Docker's official install docs](https://docs.docker.com/engine/install/) for your distro.
:::

## Run the official install script \[step]

Docker provides a convenience script that installs the latest stable release:

```
curl -fsSL https://get.docker.com | sh
```

## Add your user to the docker group (optional) \[step]

By default only root can run Docker commands. To run Docker as your regular user, add them to the `docker` group:

```
sudo usermod -aG docker $USER
```

Log out and back in for this to take effect.

## Verify the install \[step]

```
docker --version
docker compose version
```

Both should print a version number, `docker compose` (the plugin, no hyphen) is included automatically by the install script.

## 🎉 Done \[step]

Test everything is working with:

```
docker run hello-world
```
