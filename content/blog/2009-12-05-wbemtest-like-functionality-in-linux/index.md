---
title: "wbemtest like functionality in Linux"
date: "2009-12-05"
categories: 
  - "linux"
  - "win32"
  - "windows"
tags: 
  - "systeminfo"
  - "wbemtest"
  - "wmi"
---

when I was working on the Windows Management Instrumentation (WMI), we got to use _wbemtest_ quite a lot. Especially the _root/cimv2_ namspace was good to get information about system hardware.

These days if someone asks me (on a windows machine about how many RAM slots it has, etc., I can look it up in _wbemtest_ quick enough.

Call me stupid, but I never knew what the Linux equivalent was - considering Linux addresses everything as a file it was exceedingly straightforward

> read bv < /sys/class/sound/card0/device/modalias
> 
> echo $bv

or

> read bv < /sys/class/dmi/id/bios\_version
> 
> echo $bv
