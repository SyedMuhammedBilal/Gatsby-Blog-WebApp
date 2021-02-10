---
title: "Ubuntu Jaunty 9.04 and Sansa players - howto get them working together"
date: "2009-05-03"
categories: 
  - "linux"
  - "ubuntu"
tags: 
  - "player"
  - "ubuntu"
---

It seems Jaunty has a bug working with Sansa players - the Fuze, the E-series etc. It works intermittently in RhythmBox with MTP mode and doesnt work at all in the (more compatible) MSC mode.

The problem is with some of the other probes that are conflicting with this device - I think Ubuntu thinks the Sansa is a webcam for some reason.

anyway the fix is simply - just do

sudo mv /usr/share/hal/fdi/preprobe/10osvendor/20-libgphoto2.fdi ~/20-libgphoto2.fdi.bak

Connecting the sansa device should work now.
