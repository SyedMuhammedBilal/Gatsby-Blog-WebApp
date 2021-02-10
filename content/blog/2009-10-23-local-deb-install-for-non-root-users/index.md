---
title: "Local deb install for non-root users"
date: "2009-10-23"
tags: 
  - "development"
  - "linux"
  - "ubuntu"
---

I wanted to examine the firmware files of a binary only third-party software. Now they had released their package as a tar.gz and makefiles assumed all libraries to be available in the system library path.

The most interesting discussion on why the developers **dont** want this functionality in is [here](http://ubuntuforums.org/archive/index.php/t-465425.html). Frankly, I think the discussion is asinine - rather than discuss use cases on why I should not be given this functionality as a non-root user, why not make it simply easier. I mean even Windows does the right thing (since Vista) by incorporating [Folder Virtualization](http://www.west-wind.com/Weblog/posts/5584.aspx).

I think there are two choices to get around the system - [chroot/debootstrap](https://wiki.ubuntu.com/DebootstrapChroot) method or the [fakeroot](http://www.csamuel.org/2007/11/29/installing-lacie-4l-lightscribe-software-on-amd64-ubuntudebian-systems) method. These are quite useful to create a 32 bit toolchain on a 64 bit system as well (that is something that [FatELF](http://icculus.org/fatelf/) should take care of nicely! more about that later)

Anyway, I did neither and  quickly converted the deb into tgz to work with.

> sudo apt-get install fakeroot alien
> 
> `fakeroot alien -t something.deb`
