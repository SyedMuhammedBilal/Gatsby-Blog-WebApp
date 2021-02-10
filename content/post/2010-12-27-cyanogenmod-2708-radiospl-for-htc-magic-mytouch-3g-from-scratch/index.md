---
title: "Cyanogenmod 2708+ radio/SPL for HTC Magic (Mytouch 3G) .. from scratch"
date: "2010-12-27"
---

In what must be a truly awesome gesture, t-mobile released an update to the old Mytouch 3G with a new radio and SPL which increases the memory map to access 14mb more RAM. In a seriously memory starved device, this effectively means you can put off upgrading your 'olde phone for some more time.

Since, I use Cyanogenmod for my devices, it was a bit tricky getting the rooted version of this update on the phone. I'm collecting the exact way I upgraded my device, so that it would be helpful for everyone.

**IMPORTANT:** please check your MD5 checksums for each and every file.

**Base Assumption:** That you already have _some_ version of Cyanogenmod installed already. Which means your phone is rooted. Also assumed is that you are going to backup all important stuff like SMS, account settings, etc. because this process will completely wipe your phone.

List of files needed:

- [For Ubuntu Linux](http://forum.xda-developers.com/showthread.php?t=537508): download the SDK and copy the fastboot file into the "tools" folder of the SDK.
    - Make sure it is working by connecting your phone (in USB debugging mode) to your computer and typing **_fastboot devices_**. You should get the serial number of your phone. If not, then you need the next file, so that your phone is fastboot enabled.
- [update.Engineering-SPL-HBOOT-1.33.2009-signed.zip](http://rapidshare.com/files/267475617/update.Engineering-SPL-HBOOT-1.33.2009-signed.zip "External link") md5: 6FE91DDD2AC591F8EE838CEA3E5F84B0
    - this is needed to put an engineering SPL on your phone so that fastboot works.
- (From [here](http://forum.xda-developers.com/showthread.php?p=9055790#post9055790)) - [dream\_2708kit.zip](http://rapidshare.com/files/429271074/dream_2708kit.zip) ([mirrors](http://www.multiupload.com/ACFV74WUCP))
    - unzip this file and extract hboot-1.33.0013d.img (MD5: c35ff1159828a6186cb98a9cfaa81613) and radio-2.22.27.08.img (MD5: 61aee7fd274d39ca85644286f231836e)
    - instead of radio-2.22.27.08.img, you could download [update\_2.22.28.25\_S.zip](http://rapidshare.com/files/431351258/update_2.22.28.25_S.zip) ([mirror](http://depositfiles.com/files/mwn7ne6ts) md5: 2e384ab42da375458fdb135063b7536b) and extract ﻿﻿﻿﻿ **RADIO-2.22.28.25.img**
- [recovery-RA-sapphire-v1.7.0G-cyan.img](http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G-cyan.img) (MD5: 8846b53e3184d688e3e8a628ad81074f) from [here](http://forum.xda-developers.com/showpost.php?p=4029315&postcount=1)
- (from [here](http://forum.cyanogenmod.com/topic/11548-cm61-2708port-for-new-radiospl-unofficial/)): Download [update-cm-6.1.0-DS-2708port\_S.zip](http://sandbox.devnull.name/android/cyanogenmod/update-cm-6.1.0-DS-2708port_S.zip "External link") MD5: adf254aba8227849f588ac9cb30ba412
- [ezBiffTestKernel20101106-2708\_S.zip](http://sandbox.devnull.name/android/BiffTestKernel2/ezBiffTestKernel20101106-2708_S.zip) (MD5: 79c3634b8b691646735dc55d77cec714)
- (from [here](http://wiki.cyanogenmod.com/index.php?title=Latest_Version#Google_Apps)) Latest gapps tiny. In my case it was gapps-mdpi-tiny-20101020-signed.zip [Download](http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tiny-20101020-signed.zip); [Mirror1](http://cyanogenmod-mirror.local.host.name/gapps/gapps-mdpi-tiny-20101020-signed.zip); [Mirror2](http://goo-inside.me/google-apps/#tiny) MD5: bf7b653a4320dc33b15ad945a41cd56c

 

Process:

1. Copy [update.Engineering-SPL-HBOOT-1.33.2009-signed.zip](http://rapidshare.com/files/267475617/update.Engineering-SPL-HBOOT-1.33.2009-signed.zip "External link"), [update-cm-6.1.0-DS-2708port\_S.zip](http://sandbox.devnull.name/android/cyanogenmod/update-cm-6.1.0-DS-2708port_S.zip "External link"), gapps-mdpi-tiny-20101020-signed.zip to your SD card
2. Boot into recovery and flash [update.Engineering-SPL-HBOOT-1.33.2009-signed.zip](http://rapidshare.com/files/267475617/update.Engineering-SPL-HBOOT-1.33.2009-signed.zip "External link")
3. Boot into bootloader (three skating Androids!) and connect your phone to your PC.
4. type "_fastboot devices"_ and check that a serial number is returned.
5. type "_fastboot flash recovery recovery-RA-sapphire-v1.7.0G-cyan.img"_
6. type "_fastboot flash radio radio-2.22.27.08.img_" or "_fastboot flash radio RADIO-2.22.28.25.img_", depending on which radio you want to flash.
7. type "_fastboot flash hboot hboot-1.33.0013d.img_"
8. type "_fastboot reboot-bootloader_" . At this point, your phone should go dark and restart into bootloader.
9. type "_fastboot erase system -w_" to completely erase your system.
10. type "_fastboot erase boot_" to erase your previous boot partition
11. **WARNING:** at this point, I could not boot to recovery using any of the phone buttons (I should have been able to press menu to reboot). So I pulled out the battery and pressed home+power button to go to recovery menu.
12. flash [update-cm-6.1.0-DS-2708port\_S.zip](http://sandbox.devnull.name/android/cyanogenmod/update-cm-6.1.0-DS-2708port_S.zip "External link") and gapps-mdpi-tiny-20101020-signed.zip.
13. reboot
14. Voila! new phone...
15. Your phone display might be green colored now.
16. reboot to recovery again and flash [ezBiffTestKernel20101106-2708\_S.zip](http://sandbox.devnull.name/android/BiffTestKernel2/ezBiffTestKernel20101106-2708_S.zip)
17. reboot.
18. Voila! new phone redux.
