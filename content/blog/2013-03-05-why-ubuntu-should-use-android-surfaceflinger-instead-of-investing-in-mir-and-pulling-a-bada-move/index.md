---
title: "Why Ubuntu should use Android Surfaceflinger instead of investing in Mir and pulling a \"Bada\" move"
date: "2013-03-05"
---

The Ubuntu foundation recently released a new spec for a new display server called [Mir](https://wiki.ubuntu.com/MirSpec). This comes on the heels of a similar [discovery](http://www.phoronix.com/scan.php?page=news_item&px=MTMwODg) by Phoronix that Ubuntu touch was using SurfaceFlinger under the covers as well as an announcement that Unity will be [switching](http://www.phoronix.com/scan.php?page=news_item&px=MTMxNzM) to Qt/QML for its next version.

I think investing in Mir is a poor move and Ubuntu seems to be all over the place. Most top end device SoC manufacturers will only release Android compatible binary drivers for a long time to come. Even if they go Linux, they will most likely stick to xorg compatible drivers (because the big enterprise Linux gorilla - Redhat - is still invested in Xorg).

If one has already made significant investment in porting Ubuntu userspace to Android+Surfaceflinger (on touch) why would you **NOT** use that work and port it over to the desktop. There is significant opportunity for innovation on the Android stack and though Google would need a little pushing to allow Ubuntu as a special tech member, it can still be done.

And here's the most important reason of all - yesterday, I had to attend an important GoToMeeting. I used my Ubuntu desktop and clicked the link only to be faced with a "unsupported platform message". I dont know why, but I decided to try it on my Android mobile device. I installed the GoToMeeting app - clicked on the email and in less than 2 minutes from the time I got the Linux-unsupported message, I was connected to my meeting.

Android already has a huge, huge, HUGE ecosystem that works frikking well - why would you not want to leverage that ? Ubuntu is trying to pull an Opera Browser or a Bada here with its Mir announcement - and we all know how that panned out.
