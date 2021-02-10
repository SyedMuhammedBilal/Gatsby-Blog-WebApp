---
title: "Optimizing battery life on Dell Latitude (with ATI graphics) on Ubuntu 12.04"
date: "2012-03-23"
tags: 
  - "ati"
  - "battery"
  - "graphics"
  - "precise"
  - "ubuntu"
---

One of the big problems I noticed with my Latitude 3450 was that I had a dual graphics card - ATI + Intel built in. while I love the fact that I can use my ATI card for my Steam games fix, it does consume a lot of power under Ubuntu.

Yes, even 12.04 with its RC6 power consumption fixes are not immune.

It was interesting that the solution appeared to be selectively disabling the ATI card using the commandline:

> echo OFF | sudo tee /sys/kernel/debug/vgaswitcheroo/switch

or put the following in your _rc.local_ file **before the last line** (exit 0)

> echo OFF > /sys/kernel/debug/vgaswitcheroo/switch
