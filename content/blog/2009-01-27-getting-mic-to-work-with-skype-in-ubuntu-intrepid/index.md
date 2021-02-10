---
title: "Getting mic to work with Skype in Ubuntu Intrepid"
date: "2009-01-27"
categories: 
  - "linux"
tags: 
  - "ubuntu-intrepid-alsa-pulse-audio-bug"
---

This was something which almost made me go back to windows for sometime while I can use Skype. But then I went through several help [forums](http://ubuntuforums.org/showthread.php?t=789578), but could not get it to work.

Finally, I remembered something - Ubuntu Intrepid has a bug in which it mutes most of its sound devices. You need to re-enable it using

> alsamixer -Dhw

So I went about exploring in the sound voume preferences window (by double clicking the speaker icon on the top right)

First you need to click the "Preferences" button on the bottom of the sound-preferences window. Select **"mic as output"**. Now you get an extra tab called **"Switches"**. Click on it and if you find a damn option called

> mic as output

make sure it is **NOT** selected. I did this and voila.. everything worked.

I think what is happening is that by default, mic is selected as output in the Intrepid install.
