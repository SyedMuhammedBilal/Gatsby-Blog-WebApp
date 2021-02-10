---
title: "Want portable development/demo machine? Use a VM"
date: "2009-02-20"
categories: 
  - "linux"
tags: 
  - "intrepid"
  - "kde"
  - "ubuntu"
---

That's right - a virtual machine. Virtualization is the technology that is going to save the world.

No really - not kidding. Actually running two VMs on a dual core machine with double everything is more power-efficient than having two single core machines.

But what it is also very good for is to have an entire development set-up, that you dont even have to _boot up -_ since you can just "save state" for a VM. And you can drag along the single 2 GB file to a windows, mac, unix machine and your choice of OS and all software and tools are there for you to enjoy.

Just dont ask it to play music - VMs get a little screwy there.

Anyway, my Virtual Machine Manager is [VirtualBox](http://www.virtualbox.org). But dont use the Open Source Edition (OSE) yet - its got some issues with USB on linux.

Anyway, I needed a setup with [QT](http://en.wikipedia.org/wiki/Qt_toolkit) and about 50 other toolkits chained in a particular way for it to be usable. I figured out then, that it was no use configuring it on my laptop. I cant hope to ask someone else to replicate it.

So I went about creating a minimal Ubuntu 8.10 + KDE minimal 4.2 + lots of screwy libs. Now I did not want to use the stock Ubuntu install CD to install the OS on a VM. I wanted a minimal custom OS with all the goodness of Ubuntu repositories behind me (sorry [Arch](http://www.archlinux.org)).

So I took a Ubuntu install cd - pressed F4 on the install screen and installed a "minimal commandline system". Then it was time to install _kdelibs_, _kdebase, kdebase-bin, kdebase-plasma, kwin,_ _kdebase-workspace,_ _kde-workspace-data_, _kdebase-workspace-bin, kdm, g++, gdb, python-qt4, python-qt4-dev_ and you were good to go

Oh and do remember to install "linux-headers-<kernel version>", so that you can install Virtual Box guest additions and have all the nice goodies like a nice screen resolution and auto fit guest resolution to fit window size.
