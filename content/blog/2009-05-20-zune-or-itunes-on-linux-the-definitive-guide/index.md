---
title: "Zune (or iTunes) on Linux - the definitive guide"
date: "2009-05-20"
categories: 
  - "linux"
  - "personal"
  - "windows"
tags: 
  - "zune"
---

A lot of people come to me moaning about their inability to cross the pearly Gates (or Windows.. 'tis all the same) into Linux heaven because they will miss the enchanting tones of their Zune or iTunes. And just for the record, the Zune 30GB is a player with better sound quality than the iPod - with a pair of high end IEMs, you can detect total silence in a Zune, vs a light hiss on the iPod.

Anyways, the only way about this, without crashing and burning in purgatory is using virtualization. That's right, you run Windows in a VM on Linux, and use it (via USB) to get a load of all your listening goodness.

You need to follow these steps exactly.

1\. Install Linux on your machine

2\. Install [VirtualBox](http://www.virtualbox.org/) on your linux machine - make sure you do **not** install the OSE version and also make sure you have USB support turned on. You can check this by creating a dummy VM (may I suggest the 28 mb [Slitaz](http://www.slitaz.org/en/) ISO to test out) and seeing if you can enable USB support and also "create a filter from existing USB device".

If not then you need to enable USB support. For more info - [these](http://forums.fedoraforum.org/showthread.php?t=162084) [links](http://www.ubuntu-unleashed.com/2008/04/howto-install-virtualbox-in-hardy-heron.html) should help. In short

> - sudo gpasswd -a user vboxusers
> - `grep vbox /etc/group "vboxusers:x:124:user"`
> - `## usbfs is the USB group in /etc/fstab file: none /proc/bus/usb usbfs devgid=124,devmode=664 0 0`
> - sudo /etc/init.d/vboxdrv setup
> - reboot

Now, you need to create a Windows XP VM and check that USB support is working on it.

**<begin thin-ice>**

_I usually go with a stripped down version of Windows XP - like TinyXP or Windows SP3 Performance Edition (a 200mb version of stripped down XP). Of course, these releases in itself are not illegal, however these distros have their own embedded license keys, which makes them illegal. What I do is install these lightweight distros and switch the license key to my own (which I got with my Dell XPS) using various [tools](http://magicaljellybean.com/keyfinder/)._

_I shall therefore be focussing on the Windows XP SP3 Performance Edition, which I think is one of the best XP flavors out there._

**</end thin-ice>**

To install Zune, you need to first install [windows update](http://windowsupdate.microsoft.com/) (since the Zune uses WSUS), [IE8](http://www.microsoft.com/windows/Internet-explorer/default.aspx) (for XMLLite) and the full, large 300mb [Zune installe](http://www.microsoft.com/downloads/details.aspx?familyid=6136349f-2b32-4946-83b5-a09775531ef4&displaylang=en)r. Install them in order.

Your Zune should be working now with USB support - I even updated my Zune from this VM.

Installing iTunes on Windows is of course, much less anally retentive, so not much to discuss there.
