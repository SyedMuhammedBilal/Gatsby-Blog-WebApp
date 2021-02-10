---
title: "Hacking the SD960/IXUS110 for scuba photography (using RAW)"
date: "2013-03-16"
---

The SD960 is the cheapest camera that I can buy with a decent scuba housing - the WP DC32. However, the reason why this camera is dissed is due to its inability to shoot RAW, which is near essential for underwater photography of any kind.

My current trip to the underwater wrecks of Sri Lanka did not get good pics because of this problem. However, there is a solution - the [CHDK project](http://chdk.wikia.com/wiki/CHDK "Canon Hack Development Kit ") (Canon Hack Development Kit) for the [SD960](chdk.wikia.com/wiki/SD960IS) ([forum](chdk.setepontos.com/index.php?topic=9133.45)). The best part is that it doesnt impact your camera firmware at all - every time your camera boots, CHDK is temporarily loaded into memory.

The way to hack the SD960IS is fairly simple - first identify your current firmware. I used the [ACID](http://chdk.wikia.com/wiki/ACID) utility to do that. Mine was **101d**. Incidentally, ACID downloaded the firmware for me, but you can download it yourself [here](http://mighty-hoernsche.de/). Unzip the firware zip somewhere. Inside there somewhere would be four files/folders:

- DISKBOOT.BIN
- PS.FI2
- vers.req
- CHDK/ (_folder)_

Prepare your SD card:

- Make sure your SD card is NOT locked (yes - I wasted many a hour because I forgot this)
- Partition your SD card to have two partitions (note: I used gparted to do this, use any tool that you want). A 16 mb FAT16 partition and the rest as a FAT32 partition. The larger partition is where your pictures will be stored.
- Make sure the 16 mb partition has "BOOT" flag set. In Gparted, you need to right click -> "manage flags" -> check "boot"
- Copy the four files/folders above to BOTH partitions.

Start your camera by pressing the play button not the on/off switch. In your play menu, at the very bottom, there will be a new option called "firmware update". Start the firmware update. CHDK should now be temporarily loaded into camera memory. You should see a brief flash of the CHDK splash screen. In any case, press "play" and then "menu" button. You should now see a different menu.

Go down to "**Miscellaneous Stuff -> Make card bootable".** If this does not work for you, then the linux command that does is

>  echo -n BOOTDISK | sudo dd bs=1 count=8 seek=64 of=/dev/sdb1 (where sdb1 is your 16 mb partition)

Now, switch off your camera, take the card out and click the SD card pin to the **lock** position (yes lock position. CHDK will ignore it and let you click photos without a problem. This is needed for the camera to load CHDK on every start).

Now your SD card will boot CHDK every time the camera is switched on - if you get a new SD card, you'll have to redo the steps above, since the camera is unaffected by any of this.

Enable RAW mode - this is what we have been waiting for ! Press "play" and "menu" and enter **"RAW Options".** Just check the "**Shoot in RAW**" option and you will generate a RAW picture everytime. This is stored in a different folder called "**100Canon**". The RAW format used is DNG which is the universally accepted RAW format.

The very first thing that you should do is press the shutter and get into photo shooting mode. Now pull up the CHDK menu (Play + Menu). Go to "**RAW Options"** and go to "**Create badpixel.bin**". The camera will automatically take a couple of pictures for you. This [eliminates bad pixels](http://chdk.wikia.com/wiki/Badpixel_removal) for you when you are shooting RAW.

Enjoy!
