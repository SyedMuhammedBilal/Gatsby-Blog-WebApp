---
title: "Using BCM43142 (Vostro 2420, XPS, etc.) in Linux Mint or Ubuntu"
Head: "2012"
date: "2012-11-27"
---

So the BCM43142 chipset is supported by Dell, but I dont think they have merged their changes upstream. The official deb available from Broadcom is outdated.

To use the newer one, download the deb from here - http://jas.gemnetworks.com/wireless-bcm43142/. Also run "sudo apt-get install linux-headers-generic build-essential dkms" and then install the deb package and reboot.

Wifi should work fine - I tested with a Vostro 2420 on Linux Mint 14 (IMHO much better than Ubuntu)
