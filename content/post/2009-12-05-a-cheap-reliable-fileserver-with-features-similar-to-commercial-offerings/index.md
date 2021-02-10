---
title: "A cheap, reliable fileserver with features similar to commercial offerings"
date: "2009-12-05"
categories: 
  - "linux"
  - "software"
  - "startup"
tags: 
  - "fileserver"
  - "fuse"
  - "nas"
  - "zfs"
---

We needed to build a network storage system to store a few hundred gigabytes of data. Our goals were pretty basic at first : reliability and serving the data to windows clients. So started a search for several fileserver systems - we looked basically at OpenFiler and FreeNAS. Both were good enough, and had a sizeable community behind them.

OpenFiler was looking a little more desirable because of the Linux base (FreeNAS has a FreeBSD base). However, I could not wrap my head around the [snapshotting](https://forums.openfiler.com/viewtopic.php?id=922) system. Moreover, the backup methodology was a bit too [weird](https://forums.openfiler.com/viewtopic.php?id=3608). Incremental backup was simply [too](http://www.phi.co.uk/blog/blog.php?blog_id=6) [difficult](http://www.edugeek.net/forums/nix/24977-few-openfiler-questions.html#post238926) (Amanda?).

Eventually, my search led me to [ZFS](http://en.wikipedia.org/wiki/ZFS) - it is a filesystem built to simplify enterprise-scale data management. It handles everything - striping, mirroring, backups, incremental-backups, etc. at the filesystem level. It is free and opensource - developed by the wizards at Sun. Moreover, companies like Netapp (whose enterprise systems cost hundreds of thousands of dollars) have been embroiled with Sun over intellectual property rights on ZFS - I dont want to go into which one was first, just that they are both technically great.

What's the catch? ZFS has an opensource license which makes it incompatible with Linux's GPL2.

Enter the [ZFS-FUSE](groups.google.com/group/zfs-fuse) project - a way to get around the GPL2 by linking the ZFS filesystem with a user-mode driver (rather than the kernel). Both FreeNAS (based on FreeBSD) and Nexenta (a distribution built on OpenSolaris) have ZFS included - but I really preferred using a Linux based distribution.

ZFS-Fuse can be installed as part of the Ubuntu package manager, however it is a very old release (0.5.0). Instead, I checked it out from the [repository](rainemu.swishparty.co.uk/cgi-bin/gitweb.cgi?p=zfs;a=shortlog;h=refs/heads/new-master) and built it - well actually I [redid](http://github.com/sandys/zfs-fuse) the build system and contributed that [patchset](http://rainemu.swishparty.co.uk/cgi-bin/gitweb.cgi?p=zfs;a=commitdiff;h=e8fdd3bdedc8f636209f10bbec1338b52aa723e9) back to zfs-fuse.

# how ZFS-Fuse works

- Create a pool using _sudo zpool create tank /dev/sdb1_ . I like to think of a zfs pool as a one-to-one relationship between usable free space and it's underlying hardware. At this point, you can create zpools of various types - like RAIDZ, etc. ZFS-Fuse will create a directory called _/tank_ in your root.
- Going forward you can seamlessly grow the pool using _sudo zpool add tank /dev/sdb2 ._ No need to use third-party software to resize disks, etc.
- When you attach a blank disk to your compute, the raw disk (without any partitions) is addressable using monikers like _/dev/sda /dev/sdb_ , etc. while partitions (after creation) are addressable using _/dev/sda1 /dev/sdb1 ,_ etc. It is advisable to create one partition (using [gparted](http://gparted.sourceforge.net/)), since if you dont, the zfs volumes are not portable across linux and solaris - this is because zfs **implicitly** creates a partition on Solaris, while Linux doesnt.
- Once a pool is created/managed, you never need to bother about the hardware again.
- Create a filesystem using _zfs create tank/filesystem1_ . I like to think of a filesystem as a logical unit of management (as opposed to a pool, which has a hardware relationship) - in the same pool, I can have a read-only filesystem, an encrypted filesystem, etc.
- To set the filesystem as readonly, do _sudo zfs set readonly=yes tank/filesystem1_
- Delete a filesystem (or pool) by _sudo_ _zfs destroy tank/filesystem_ (or _sudo zpool destroy tank_). You may have to use the _\-r_ flag to destroy the filesystem and all its contained snapshots.

# Snapshots

In ZFS snapshots are instantaneous using _sudo zfs snapshot tank/fileserver@snapshot1 ._

ZFS is a [copy-on-write](http://en.wikipedia.org/wiki/ZFS#Copy-on-write_transactional_model) filesystem - which means that if you have snapshotted something and you overwrite the file, it will not actually overwrite the file, it makes copies (however it is smart enough not to copy the entire file, only at the block level).

In Solaris, you can navigate your snapshots by going in a special _.zfs_ directory and having all snapshots available as aseparate directory. In ZFS-Fuse on Linux, this facility is not available (yet). However one can create a clone (which is also instantaneous and does not occupy extra space) by doing _sudo zfs clone tank/fileserver1@snapshot1 tank/restore_ and you will instantaneously get a new directory _/tank/restore_ which has the contents of your _snapshot1._

# Backup

To backup, you need to create a snapshot - this allows your users to keep working and for you to know that you are backing up a known state.

- **Full backup** \- _sudo zfs send tank/fileserver1@snapshot2 > /media/externaldisk/backup.snapshot2_
- **Incremental backup -** _sudo zfs send -i tank/fileserver1@sourcesnapshot tank/fileserver1@newsnapshot > /media/externalsdisk/backup.incremental\_wrt\_newsnapshot_

# Restore

- **Full restore -** _sudo zfs receive tank/newfileserver < /media/externaldisk/backup.snapshot_
- **Incremental restore -** _sudo zfs receive tank/newfileserver < /media/externaldisk/backup.snapshot\_wrt\_original_

_(_you may have to use the _\-f_ flag to force, since even doing an _ls_ seems to make zfs think that the restore has been modified)

# Mirror

After you have added a new hard-disk **and** created a new partition on it, you can mirror your pool by doing _sudo zpool attach tank /dev/existingpartition /dev/newpartition_

One of the things that happened to me was that actually a 320 GB hdd doesnt have 320gb exactly - the addressable disk space varies according to model and/or manufacturer. A mirror can only be added if its size is greater than or equal to existing pool. What happened to me was that the new disk I got actually had a few hundred mb lesser than the original - which meant I got an error of _disk is not big enough._ What I then did was to create a new pool on the newer disk - copy over everything, destroy the previous pool and add **that** as the mirror.

# My current _el-cheapo_ setup

Two 320GB SATA hard disk as a mirror and a 80GB IDE harddisk as the OS.  I snapshot everyday for a week and then cleanup the next week. We do a full backup every monday and incremental backup every weekday. Your paranoia level may differ. If anybody screws up and wants to recover an older version of the fileserver - I simply clone a previous snapshot (as detailed above) and make it available.

I share this pool using samba. You may need to set the startup sequence (Linux distribution dependent) to start samba after zfs-fuse has already started up.
