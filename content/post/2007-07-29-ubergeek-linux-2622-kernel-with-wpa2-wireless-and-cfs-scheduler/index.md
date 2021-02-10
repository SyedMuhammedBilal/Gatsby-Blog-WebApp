---
title: "Ubergeek - Linux 2.6.22 kernel with WPA2 wireless and CFS scheduler"
date: "2007-07-29"
categories: 
  - "linux"
  - "personal"
---

'Tis only every few days that I get the urge to show off my uber geek cred.

For almost a year (since I got my XPS 1210 with nVidia 7400.. beat that Apple fanboyz..) I have been wanting to switch to Ubuntu and get rid of my WinXP installation. However Ubuntu is notoriously finicky with WPA2 wireless security - which I use to keep my neighbors from surfing pronz on my connection.

So after multiple kernel compiles, I got the perfect way to have that kernel that runs everything.

In addition, I wanted to test out the **Completely Fair Scheduler** which is due to be merged onto the mainline 2.6.23 kernel (odd numbered .. so use at own risk). The CFS scheduler has been at the forefront of a [bitter fight](http://kerneltrap.org/node/8059) between [Ingo Molnar](redhat.com/~mingo) (2.6 kernel scheduler maintainer and author of CFS) and [Con Kolivas](ck.wikia.com) (author of Staircase Deadline scheduler). Ingo had been for a very long time, a strict opponent of the fair-scheduling approach taken by Kolivas and his _\-ck_ kernel patchset. Then Ingo came up with a scheduler that more or less was based on the approach that Kolivas took (also not original, but he pioneered it in the kernel). This was accepted by [He-Who-Shall-Not-Be-Named](http://en.wikipedia.org/wiki/Linus_Torvalds) and taken up for merge in the kernel. It is only quite recently that he [defended](http://kerneltrap.org/node/14008) his decision to do so.

Anyway, I wanted to test out the new scheduler, because it gave a better performance on 3D games - especially [World Of Warcraft](http://armory.mmoguildsites.com/characters/north+america/khaz'goroth/dehaant)

Pre-requisites - make sure you have all compilers and build tools handy. On Ubuntu this means _build-essentials, ncurses5-dev, modutils, debhelper, kernel-package, fakeroot_

- Download  linux-2.6.22.1
- Download sched-cfs-v2.6.22.1-v19.1.patch
- Inside linux-2.6.22.1 directory, run "patch -p1 < $DIR/sched-cfs-v2.6.22.1-v19.1.patch
- Download [IWLWifi-0.1.x](http://intellinuxwireless.org/iwlwifi/downloads/iwlwifi-0.1.5.tgz)   , [mac80211-9.x.x](http://intellinuxwireless.org/mac80211/downloads/mac80211-9.0.2.tgz)  , [Intel3945 firmware](http://intellinuxwireless.org/iwlwifi/downloads/iwlwifi-3945-ucode-2.14.4.tgz)
- untar mac80211:
    
    - set $KSRC env variable to the linux-2.6.22.1 directory
    
    - make;make patch\_kernel
- go into your linux-2.6.22.1 directory and make menuconfig.
    - whatever else you do, please do select your processor architecture correctly. The first time around, I got a lot of build errors due to incorrect processor
- make-kpkg --initrd kernel\_image kernel\_headers (standard kernel building, this can be googled
- install ur new kernel (using dpkg -i). reboot
- when ur in the new kernel, copy the intel firmware to /lib/firmware/<kernel-version>/ directory
- go into iwlwifi directory: make
- first load up mac80211 drivers: modprobe -a mac80211
- then try loading up the newly built iwlwifi drivers : insmod compatible/iwl3945.ko
- type iwconfig and see if ur wireless card is being recognised
- At this point use ur regular configuration tool - I am a big fan of [WICD](http://wicd.sourceforge.net/)

I know only this - I have wireless and World of Warcraft responds much nicer now!!
