---
title: Installing a Database Server
description: How to install MySQL, MariaDB, or PostgreSQL on your VPS.
icon: Database
type: How To
---

:::info[Debian/Ubuntu]
The commands below are for Debian/Ubuntu based distros (using `apt`). If you're running a different distro, [see our guide on picking a distro](/vps/pick-a-distro), or substitute your distro's package manager equivalent.
:::

Pick whichever engine your application needs, you generally only need one.

## MySQL

### Install the package \[step]

```
sudo apt update
sudo apt install mysql-server -y
```

### Secure the install \[step]

```
sudo mysql_secure_installation
```

Follow the prompts to set a root password and lock down default settings.

## MariaDB

### Install the package \[step]

```
sudo apt update
sudo apt install mariadb-server -y
```

### Secure the install \[step]

```
sudo mariadb-secure-installation
```

## PostgreSQL

### Install the package \[step]

```
sudo apt update
sudo apt install postgresql postgresql-contrib -y
```

### Set a password for the postgres user \[step]

```
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'yourpassword';"
```

## Allow remote connections (optional)

By default, all three only accept local connections. If an application outside the VPS needs to connect, you'll need to edit the engine's config to listen on your VPS's IP, and open the relevant port (`3306` for MySQL/MariaDB, `5432` for PostgreSQL) in your firewall.

:::warning[Be careful exposing databases publicly]
Only open your database port to specific trusted IPs where possible, and always use strong, unique passwords, exposed database ports are a common attack target.
:::
