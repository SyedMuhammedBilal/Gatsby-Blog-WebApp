---
title: "Dummies Guide to DVD/CD writer on Linux"
date: "2006-08-08"
categories: 
  - "dvd"
  - "linux"
---

After reading countless docs and tutorials, I have been able to get my DVD and CD writer working on an ancient Linux version - Redhat 7.2

Here's the story of my travails:

So basically, to use any CD/DVD writer on Linux, you need to turn on SCSI emulation. This is because the **standard** application - _cdrecord_ \- works with SCSI drivers **ONLY.**

To get around this problem, you need a wrapper driver called _**ide-scsi**_ loaded up and you need to tell your linux kernel to start your CD device in SCSI emulation mode.

First you need to find out which directory in your "/dev" maps to the CD device. Grep for CD, DVD, ATAPI in your /var/log/messages You should see a line like this

> hda: HL-DT-ST DVD+/-RW GWA4164B, ATAPI CD/DVD-ROM drive

So, in your grub.conf append the lines

> kernel /bzImage-2.4.32 ro root=/dev/sda7 hdc=ide-scsi hda=ide-scsi

And in your /etc/modules.conf add the lines

> alias scsi\_hostadapter ide-scsi

It means that the /dev/hda DVD device should now be emulated as scsi (in my case I had another device as SCSI too, ergo the hdc=ide-scsi) Now reboot. if you now do a ls -l on your /dev/cdrom, you should be able to see something like

> lrwxrwxrwx 1 root root 9 Jul 26 12:44 /dev/cdrom -> /dev/scd0

Your new SCSI emulated drive is /dev/scd0. Also remember to change appropriate entries in your /etc/fstab (if any).

In addition, you need to have the **_sr.o_** and **_sg.o_** modules loaded - these are to tell the SCSI device to behave as a block device (to write to it). Try locating _**sr.o**_ and **_sg.o_** . If you cannot find it, you may need to build it from your linux source (in /usr/src/linux-2.4 ). Do a **_make menuconfig_**  in your linux source and go to **_SCSI support_** . Check **SCSI disk support**<\*>, **SCSI tape support** <M>, **SCSI CDROM support**<M>, **SCSI generic support** <M>.  Then do **_make modules_** . The sr.o and sg.o modules should be built.

Add the following lines to your /etc/modules.conf

> alias character\_scsi sg alias driver\_scsi sr

**NOTE:** sometimes the order of these lines added to /etc/modules.conf is important, if on your next reboot, things dont work then make sure to do modprobe by hand

Now, we need to see if your DVD drive is accessible. Run **_cdrecord -scanbus_** . You should see something like

> Linux sg driver version: 3.1.25 Using libscg version 'schily-0.7' cdrecord: Warning: using inofficial libscg transport code version (schily - Red Hat-scsi-linux-sg.c-1.75-RH '@(#)scsi-linux-sg.c 1.75 02/10/21 Copyright 1997 J. Schilling'). scsibus0: 0,0,0 0) '' '' '' Disk 0,1,0 1) '' '' '' Disk 0,2,0 2) \* 0,3,0 3) \* 0,4,0 4) \* 0,5,0 5) \* 0,6,0 6) \* 0,7,0 7) \*

This means your CD drive is working fine. Note that you might have to be root to run **_cdrecord_** at this time, we will change that shortly.

Now, as far as CD writing goes, you are good to go - there are a million docs on that (my favorite is at [Yolinux](http://yolinux.com/TUTORIALS/LinuxTutorialCDBurn.html)) I first create an ISO using **_mkisofs_** and then I usually do

> cdrecord -v -speed=2 RedHat-7.0-i386-powertools.iso

About DVD writers - now there is a commercial version of cdrecord called **_cdrecord-prodvd_** which has a lot of funky licenses and is not opensource. It also has a lot of features. But the thing I use and has worked for burning a lot of DVD's is **_growisofs_**. This is opensource and developed by [Andy Polyakov of Chalmers.](http://fy.chalmers.se/~appro/linux/DVD+RW/) I compiled and built it on my machine. I usually do

> growisofs -dvd-compat -speed=2 -Z /dev/<name\_of\_dvd\_device> -R -J -pad /dir-path/file1

Now, it so happens that the DVD device on my machine used to be unwritable(by anyone except root) as soon as a DVD was put in it - the culprit was the file **_/etc/security/console.perms_**. This changed the permissions to read-only as soon as something was put in. I changed a line

> <console> 0600 <cdrom> 0660 root.disk

And everything was fine.

Whew.. hope that helps.

del.icio.us Tags: [linux](http://del.icio.us/sss8ue/linux) [dvd](http://del.icio.us/sss8ue/dvd)
