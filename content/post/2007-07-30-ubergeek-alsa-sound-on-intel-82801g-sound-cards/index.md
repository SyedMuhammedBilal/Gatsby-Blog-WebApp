---
title: "Ubergeek - Alsa sound on Intel 82801G sound cards"
date: "2007-07-30"
categories: 
  - "linux"
---

First compile and build the latest alsa-driver, alsa-lib and alsa-utils (ver 1.0.14). After they are installed:

>  sudo modprobe -r snd\_hda\_intel
> 
> sudo modprobe snd\_hda\_intel model=3stack

Well that took a while to figure out!!
