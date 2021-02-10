---
title: "Windows 7 screws with your partitions"
date: "2009-10-07"
tags: 
  - "karmic"
  - "linux"
  - "ubuntu"
  - "windows7"
---

As my Dell XPS laptop's video card failed (I'm looking at you - 'olde nVidia with yer heating and packaging problems) and I had a corrupt Linux installation, I was suddenly in the mood to give Windows 7 a spin (There were a few games I still could only play in Windows).

Windows 7 truly is nice - but I was in for a rude surprise when I got ready to install [Karmic Koala](http://www.google.co.in/url?sa=t&source=web&ct=res&cd=1&url=https%3A%2F%2Flists.ubuntu.com%2Farchives%2Fubuntu-devel-announce%2F2009-February%2F000536.html&ei=yjPMSp-zD5rg6gOgq8CDAw&usg=AFQjCNETRzAauxMtYUQa6bLnfrMxY5N_2w&sig2=lzvz9ajDFP18XRXAlSd6IA). I have separate home and root partitions to keep up with my ever changing base installs. As a force of habit (which comes from the Redhat 6.0 days, where you could not boot if the primary partition was not in the first 8GB), I create primary partitions for all my mounts.

When Win7 started to be installed, I had 50 GB of unutilised space lying around in my HDD. What Win7 does is create two partitions  - one for the main install and another 100mb partition for recovery. Now partition table holds a maximum of 4 entries - which means if you want more than 4 partitions, you need to have an extended partition somewhere (with anything over 4 partitions under it).

What Win7 does is **silently,** knock out one of the linux partitions from the partition table and creates two partitions for itself. It was catastrophic, because it knocked out my home folder. Now, I was not able to access my home partition, even by booting a linux livecd and using gparted.

After a lot of googling, I found [Testdisk](http://www.cgsecurity.org/wiki/TestDisk) - a truly excellent, open source partition recovery software that works on windows and linux.

All I had to do is mark my home partition and write the partition table - this causes everything else to get screwed up (including my Win 7 partitions), but I was OK with that.

The only way around is prevention - **always install windows 7 on an extended partition if you have more than one OS on it.** The next time around I installed Win7, I **pre-created** extended partitions using gparted and installed Win7 on the extended partitions - note that the Win7 installer does not give you any sort of partition manager (the way Linux does)
