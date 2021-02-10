---
title: "The definitive guide to creating a bootable USB installer for Windows 7 (any flavor)"
date: "2010-06-12"
---

Windows 7 is a wonderful OS.. and that is true inspite of my loyalty to Ubuntu (which has not been entirely generous lately).

I need Windows atleast to play my Steam games, for which I have a lot less time these days because of entrepreneurship and all that.

Anyway, this post is inspired by [another guy](http://www.linuxquestions.org/questions/linux-software-2/creating-windows-7-bootable-usb-from-linux-762229/#post3946086) who figured out how to do it. This guide assumes you are starting from Linux - this is reasonably guaranteed to work. The only case where it might not work is if Gparted was unable to set boot flags on your particular brand of USB drive.

You need to install GParted on your machine, download and compile [ms-sys](http://ms-sys.sourceforge.net/#Download). At this point, plug in your USB disk and launch Gparted (using '_sudo gparted_') to check which partition it is mounted in. You could also type '_mounts_' on your command line to see this information. In my case, it was mounted at _/dev/sdb1_. Format it as NTFS and set the boot flag to 1.

Now mount your win7 installation ISO - using '﻿_sudo mount -o loop win7.iso /mnt/iso_' (I assume you have created a directory called _/mnt/iso_ beforehand) and copy ALL the files in the ISO to your USB drive.

Compile _ms-sys_ , unmount the USB drive (using _sudo_ _umount /dev/sdb1_) and execute

> sudo ms-sys -7 /dev/sdX

That's it!
