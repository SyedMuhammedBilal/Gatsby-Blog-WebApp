---
title: "Cheap webcam in Linux (Ubuntu Karmic 9.10) with Skype"
date: "2009-12-31"
Head: "2009"
categories: 
  - "compiler"
  - "linux"
  - "ubuntu"
tags: 
  - "driver"
---

I think I found a 5$ webcam which can be used with Skype in Linux. I used Skype 2.1 with Ubuntu Karmic 64-bit.

The said webcam is this : http://www.dealextreme.com/details.dx/sku.13 . I am not 100% sure, since I bought a variant of it in India, but as long as the lsusb output shows

> ﻿﻿﻿Bus 002 Device 010: ID 04fc:2001 Sunplus Technology Co., Ltd

you should be fine (the ID ﻿04fc:2001 being most important).

One needs to compile and install the gspca drivers, as outlined [here](http://stemp.wordpress.com/2009/11/03/karmic-get-the-latest-drivers-for-gspca-uvc-usbvideo-and-other/), but I have also checked in the .config file needed in my [github repository](http://github.com/sandys/scripts/blob/master/dot.config).

On that topic, the GSPCA linux webcam driver makes for very interesting history, with one man having written [235 drivers](http://www.theinquirer.net/inquirer/news/1047633/one-writes-linux-drivers-235-usb-webcams)! I'm not sure, who is the current maintainer, but hats off to all of them!

Guys, always buy UVC (USB Video Class) webcams.

**Edit**: By the way the Dealextreme product is pretty random in its choice of chipset - it sometimes comes with non-UVC class chipsets .. which then are a pain.
