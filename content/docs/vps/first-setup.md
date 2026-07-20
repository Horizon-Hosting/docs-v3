---
title: First Time Setup
description: How to log in, secure your account, and image your VPS for the first time.
icon: Rocket
type: How To
---

## Log in to the panel \[step]

After purchasing a VPS, you'll receive a welcome email containing your username, password, and a link to the VPS panel.

:::info[Didn't get an email?]
If you don't receive this within 10-20 minutes, [contact us](/general/contact-us).
:::

## Change your password \[step]

Once logged in, we recommend changing your password. Navigate to "Security" in the panel, enter your old password and a new one, then save.

## Set up 2FA \[step]

While you're in the "Security" section, we highly recommend enabling two-factor authentication for extra account security. You can choose between an App-based TOTP authenticator or a Yubikey (OTP).

## Manage your VPS \[step]

From your dashboard, click "Manage" on your VPS. You'll land on a page where you can configure it before its first image.

## Configure the basics \[step]

* Choose a friendly name for your VPS, or click "Random" to generate one.
* Select the timezone you want your VPS to use.
* Optionally set a hostname, this is also used for your VPS's reverse DNS (rDNS).

## Add an SSH key \[step]

You can add a new SSH key or select an existing one from your account right here during setup, saving you from manually copying a key over later. If you don't have a key pair yet, [see our guide on setting up SSH](/vps/setup-ssh#generate-an-ssh-key-pair-step) for how to generate one, then come back and paste the public key in.

## Pick an operating system \[step]

Choose an operating system to image your VPS with. See [our guide on picking a distro](/vps/pick-a-distro) if you're not sure which to choose.

## 🎉 Done \[step]

Click "Install" and wait, you should receive an email within about 5 minutes containing your VPS's IP address and root login details.

:::info[Networking]
Every VPS is assigned an IPv6 address alongside its IPv4 address by default, no extra setup required. If you set a hostname during configuration, its reverse DNS (rDNS) record is set to match automatically, you can update this later from your VPS's management page if needed. If you need additional IPv4 addresses, [contact us](/general/contact-us).
:::
