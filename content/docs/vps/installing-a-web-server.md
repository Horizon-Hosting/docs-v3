---
title: Installing a Web Server
description: How to install Apache, Caddy, or Nginx on your VPS.
icon: Globe
type: How To
---

:::info[Debian/Ubuntu]
The commands below are for Debian/Ubuntu based distros (using `apt`). If you're running a different distro, [see our guide on picking a distro](/vps/pick-a-distro), or substitute your distro's package manager equivalent.
:::

Pick whichever fits your needs, you generally only need one.

## Apache

```
sudo apt update
sudo apt install apache2 -y
```

Once installed, Apache starts automatically. Site configs live in `/etc/apache2/sites-available/`.

## Nginx

```
sudo apt update
sudo apt install nginx -y
```

Once installed, Nginx starts automatically. Site configs live in `/etc/nginx/sites-available/`.

## Caddy

Caddy isn't in the default repos, so you'll need to add its official repository first.

### Add prerequisites and the repository \[step]

```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
```

### Install Caddy \[step]

```
sudo apt update
sudo apt install caddy -y
```

Caddy starts automatically as a systemd service, with its config at `/etc/caddy/Caddyfile`. Caddy's main draw is automatic HTTPS, it'll issue and renew certificates for any domain you point at it, with no extra setup.

## Opening the firewall

Whichever you choose, make sure ports `80` (HTTP) and `443` (HTTPS) are open in your VPS's firewall.
