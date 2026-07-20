---
title: Managing Databases
description: How to create, delete, and manage databases using our game panel.
icon: Database
type: How To
---

Some plugins, mods, and gamemodes (such as LuckPerms or SQL-backed economy plugins) store their data in a MySQL database instead of a flat file. You can create and manage these databases directly from the game panel, no separate hosting required.

## Create a database \[step]

* Navigate to [the game panel](https://panel.hrznhosting.com/) and open your service.
* Using the sidebar, navigate to the "Databases" tab.
* Click "New Database" and give it a memorable name.
* Click "Create" to confirm.

Your new database will appear in the list along with an auto-generated username and password.

## Get your connection details \[step]

Click on a database in the list to reveal its connection details:

* **Endpoint**: the host and port to connect to (e.g. `127.0.0.1:3306`)
* **Connection From**: which hosts are allowed to connect, `%` allows any host
* **Username** and **Password**: the credentials generated for this database

Enter these into your plugin/mod's configuration file wherever it asks for database credentials.

## Connecting with an external tool \[step]

:::tip[Optional]
This step is only needed if you want to browse or edit the database directly, most plugins only need the credentials from the step above.
:::

You can connect to your database using a tool such as [HeidiSQL](https://www.heidisql.com/), [DBeaver](https://dbeaver.io/), or phpMyAdmin, using the endpoint and credentials shown on the panel.

## Rotate a password \[step]

If you believe a database's credentials have been compromised, click the rotate icon next to it on the Databases tab to generate a new password. Remember to update the credentials in any plugin/mod configs that reference the old password.

## Delete a database \[step]

Click the trash icon next to the database you wish to remove, then confirm the deletion.

:::danger[This cannot be undone!]
Deleting a database permanently removes all data stored inside it.
:::
