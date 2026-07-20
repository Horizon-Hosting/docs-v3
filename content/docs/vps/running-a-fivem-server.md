---
title: Running a FiveM Server
description: How to run a FiveM server on your VPS.
icon: Gamepad2
type: How To
---

FiveM's recommended setup method is via **txAdmin**, a management interface bundled with the server artifacts, rather than hand-editing everything yourself.

## Create a directory and download the artifacts \[step]

```
mkdir -p ~/fivem/server-data && cd ~/fivem
```

Download the latest Linux server artifact (`fx.tar.xz`) from the [official FiveM artifacts page](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/), then extract it:

```
tar xf fx.tar.xz
```

## Get a base server-data folder \[step]

Clone a starter `server-data` (containing a default `server.cfg` and resources) into the `server-data` folder you created, for example:

```
cd server-data
git clone https://github.com/citizenfx/cfx-server-data.git .
```

## Open the required ports \[step]

FiveM needs both TCP and UDP on its port (default `30120`):

```
sudo ufw allow 30120/tcp
sudo ufw allow 30120/udp
```

## Start the server and run the txAdmin setup \[step]

From the `~/fivem` folder:

```
cd alpine  # or the folder matching your extracted artifact
./run.sh +set txAdminPort 40120
```

Visit `http://<your-vps-ip>:40120` in a browser to complete the guided txAdmin setup, which walks you through licensing (a Cfx.re key), choosing your `server-data` folder, and picking a starter resource set.

## 🎉 Done \[step]

Once setup finishes, txAdmin will start your FiveM server. Connect via the F8 console in-game using `connect <your-vps-ip>:30120`.

:::warning[Verify against current docs]
FiveM's setup tooling changes fairly often. Cross-check the steps above against [FiveM's official server setup documentation](https://docs.fivem.net/docs/server-manual/setting-up-a-server/) if anything doesn't match what you see.
:::
