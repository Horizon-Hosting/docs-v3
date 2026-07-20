---
title: ICMP (Ping) Test
description: How to produce an ICMP/ping test on Windows or Linux to diagnose network issues.
type: How To
---

## What is an ICMP Test?

An ICMP (ping) test sends small packets to a destination and measures how long each one takes to come back, and whether any are lost along the way. It's a quicker, lighter check than an [MTR report](/troubleshooting-tools/mtr-report), useful for a first look at latency and packet loss before running a longer diagnostic.

## How to produce a test

### Windows

1. Open the Start menu, search for `cmd`, and open `Command Prompt`
2. Run `ping -t <address>`, replacing `<address>` with the hostname or IP address provided to you
3. Let it run for a few minutes while you reproduce the issue (e.g. lag, disconnects)
4. Press `Ctrl+C` to stop it
5. Right-click the top of the window, select `Select All`, then press `Enter` to copy the output
6. Paste the results and send them to your technician

### Linux / macOS

1. Open a terminal
2. Run `ping <address>`, replacing `<address>` with the hostname or IP address provided to you
3. Let it run for a few minutes while you reproduce the issue
4. Press `Ctrl+C` to stop it, this will also print a summary with packet loss and round-trip time
5. Copy the full output, including the summary, and send it to your technician

:::tip[What we're looking for]
The most useful details are the **packet loss percentage** and the **round-trip time (min/avg/max)** shown in the summary. Consistent loss or unusually high/spiky times both point to a network issue worth investigating further.
:::
