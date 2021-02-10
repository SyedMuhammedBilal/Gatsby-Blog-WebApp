---
title: "ATI IXP AD1981B (Thinkpad R51e) sound on Jaunty"
date: "2009-05-14"
categories: 
  - "linux"
  - "personal"
  - "ubuntu"
tags: 
  - "thinkpad"
---

This was tough.. so here's a quick list:

- Your sound preferences should look like this:

\[caption id="attachment\_243" align="alignright" width="150" caption="R51e sound preferences"\][![R51e sound preferences](http://sandeep.files.wordpress.com/2009/05/screenshot-sound-preferences.png?w=150 "Screenshot-Sound Preferences")](http://sandeep.files.wordpress.com/2009/05/screenshot-sound-preferences.png)\[/caption\]

- Your alsamixer should look like this

\[caption id="attachment\_244" align="alignleft" width="150" caption="R51e alsa preferences"\][![R51e alsa preferences](http://sandeep.files.wordpress.com/2009/05/screenshot-alsa.png?w=150 "Screenshot-alsa")](http://sandeep.files.wordpress.com/2009/05/screenshot-alsa.png)\[/caption\]  
  
  
  
  
  
  
  

- Install the following

> sudo apt-get install asoundconf-gtk gstreamer0.10-alsa libasound2-plugins libesd-alsa0

> sudo apt-get install gnome-alsamixer

> sudo apt-get install bum

- Your boot-up-manager should look like this (notice the unchecked PulseAudio) die.. pulse.. die!!

\[caption id="attachment\_245" align="alignright" width="150" caption="R51e boot up manager preferences"\][![R51e boot up manager preferences](http://sandeep.files.wordpress.com/2009/05/screenshot-boot-up-manager.png?w=150 "Screenshot-Boot-Up Manager")](http://sandeep.files.wordpress.com/2009/05/screenshot-boot-up-manager.png)\[/caption\]

Reboot and enjoy
