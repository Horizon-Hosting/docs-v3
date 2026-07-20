---
title: Running a Minecraft Server
description: How to run a bare-metal Minecraft server on your VPS.
icon: Gamepad2
type: How To
---

:::tip[Consider a game panel instead]
This guide covers running Minecraft directly on your VPS by hand. If you'd rather manage it through a game panel instead, you can [purchase a Minecraft service](https://hrznhosting.com/services/minecraft) and follow [our Minecraft getting started guide](/games/minecraft/getting-started).
:::

## Install Java \[step]

Minecraft requires Java. Install a recent version (check your target Minecraft version's requirements first):

```
sudo apt update
sudo apt install openjdk-21-jre-headless -y
```

## Create a directory and download the server \[step]

```
mkdir ~/minecraft && cd ~/minecraft
```

Download the server jar for your chosen version/software (Vanilla from [minecraft.net](https://www.minecraft.net/en-us/download/server), or Paper from [papermc.io](https://papermc.io/downloads)) into this folder.

## Accept the EULA \[step]

Run the server once to generate its files:

```
java -Xms2G -Xmx4G -jar server.jar nogui
```

It'll create `eula.txt` and stop. Open it and change `eula=false` to `eula=true`.

## Open the port \[step]

Allow Minecraft's default port through your firewall:

```
sudo ufw allow 25565/tcp
```

## Run persistently \[step]

Running the java command directly stops when you disconnect. Use `screen` (or a systemd service) to keep it running in the background:

```
screen -S minecraft
java -Xms2G -Xmx4G -jar server.jar nogui
```

Press `Ctrl+A` then `D` to detach, leaving the server running. Reattach anytime with `screen -r minecraft`.

## 🎉 Done \[step]

Connect using your VPS's IP address and port.
