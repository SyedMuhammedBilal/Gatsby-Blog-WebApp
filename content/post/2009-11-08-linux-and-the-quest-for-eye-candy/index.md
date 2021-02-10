---
title: "Linux and the Quest for Eye Candy"
date: "2009-11-08"
tags: 
  - "eye-candy"
  - "gnome"
  - "gtk"
  - "icons"
  - "osx"
---

For the past couple of days, I have been struggling with my eyesight on a 12 inch monitor with Ubuntu Karmic. It has not helped that, for some reason or other, I have been working frequently on a Windows 7 machine. As much as I hate to admit it - Win7 beats the pants off Karmic with its eye candy and usability.

These days I am building a Linux NAS box using [ZFS-FUSE](http://groups.google.com/group/zfs-fuse/) on a Hardy Box and I keep running into unfixed driver **regressions** like this one for a [Davicom Ethernet Card](https://bugs.launchpad.net/ubuntu/+bug/435244/comments/3). I personally believe that for Lucid Lynx, all that Ubuntu should work on is getting driver support cleaned up.

However, one thing I would like to see is [resolution independence](http://en.wikipedia.org/wiki/Resolution_independence) (Ubuntu's [blueprint](https://wiki.ubuntu.com/ResolutionIndependence)) - which is where my eyesight and the 12 inch desktop comes in. In essence what it means is that the operating system resizes it's UI - fonts, icons, windows - at any hardware resolution to match the physical size that you are comfortable with. This does away with the problem that at higher screen resolution, fonts look smaller (because at higher resolution the pixels themselves take up lesser space). Win7 included this feature after a lot of [brainstorming](http://blogs.msdn.com/e7/archive/2008/09/13/follow-up-on-high-dpi-resolution.aspx).

And of course, the question of high quality icons for Linux - there have been quite a few ideas [submitted](http://brainstorm.ubuntu.com/idea/1134/) to Ubuntu about this - most of which rely on Scalable Vector Graphics for this. While being theoretically sound - there is a huge performance hit by using scalable graphics, rather than bitmaps for icons. OSX - which has arguably the sweetest eye candy - does **not** use vector graphics for its icons.

The key to this is its [ICNS](http://en.wikipedia.org/wiki/Apple_Icon_Image) format - which has a set of images at [varying resolutions](http://ezix.org/project/wiki/MacOSXIcons) for icons. Interestingly, GTK has had [support](https://bugzilla.gnome.org/show_bug.cgi?id=395738) for Apple .icns for a [long time](http://svn.gnome.org/viewvc/gtk%2B/tags/GTK_2_13_0/gdk-pixbuf/io-icns.c?view=markup) now. A very interesting discussion on the impact of resolution-independence on [icons](http://blog.cocoia.com/2007/truths-on-resolution-independence/) is quite lively to read.

I would be all in favor of using the Apple ICNS format as the standard supported format in Linux. Except for not-invented-here, what's not to like ? The format itself may demand support of scaling and resolution independent technologies to be included in GTK - which I think is a good thing, rather than mutating the icon format to support the state of GTK as it is now.

One gets access to a big market of designers who create high quality icon sets for MacOS (may more out there than for Gnome) and readily available toolchains (including for [Gimp](http://www.giantmike.com/articles/gimp_icon_tutorial.html))

Take a look here and tell you dont want [these](http://www.cultofmac.com/icon-porn-feast-your-eyes-on-snow-leopards-beautiful-icons/15764 "Icon candy") .... and then let's talk.
