---
title: Setting up SSH
description: How to connect to your VPS over SSH and set up key-based authentication.
icon: KeyRound
type: How To
---

:::tip[Setting up a new VPS?]
You can add a new SSH key (or pick an existing one) directly during [first time setup](/vps/first-setup#add-an-ssh-key-step), before you even image your VPS. The steps below are for generating a key pair, and for adding one to a VPS that's already set up.
:::

## Generate an SSH key pair \[step]

On your own computer (not the VPS), generate a key pair if you don't already have one:

```
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Press enter to accept the default file location, and optionally set a passphrase.

## Add your public key to an existing VPS

If your VPS is already set up and you didn't add a key during initial setup, you have two options:

### From the panel \[step]

Open your VPS's management page and look for an "SSH Keys" section, you can paste your public key (the contents of `~/.ssh/id_ed25519.pub`) in there directly, no terminal required.

### Manually, over SSH \[step]

Connect for the first time using the IP address and root password from your install email:

```
ssh root@<your-vps-ip>
```

Then, from your own computer, copy your key across:

```
ssh-copy-id root@<your-vps-ip>
```

If `ssh-copy-id` isn't available, you can instead paste the contents of your `~/.ssh/id_ed25519.pub` file into `~/.ssh/authorized_keys` on the VPS.

## Test key-based login \[step]

From your own computer, try connecting again:

```
ssh root@<your-vps-ip>
```

You should be logged in without being prompted for a password.

## Disable password authentication (recommended) \[step]

Once you've confirmed key-based login works, edit `/etc/ssh/sshd_config` on the VPS and set:

```
PasswordAuthentication no
```

Then restart SSH:

```
systemctl restart sshd
```

:::warning[Don't lock yourself out!]
Only disable password authentication after you've confirmed your key works. If you lose your key and passwords are disabled, you'll need to use your panel's console/recovery tools to regain access.
:::
