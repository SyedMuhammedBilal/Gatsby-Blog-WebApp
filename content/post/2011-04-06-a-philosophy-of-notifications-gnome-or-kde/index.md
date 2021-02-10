---
title: "A philosophy of notifications - Gnome or KDE"
date: "2011-04-06"
---

## The philosophy

- Programs like skype sit on the system tray - because we are **anticipating** notifications
- Programs like music player sit on the system tray - because we want **fast access** to controls from multiple visual interface paradigms : multiple desktops, monitors, full-screen programs, etc.
- Things like the time-and-date widget is also a notification program : no reason why it should be treated differently special
- Notification messages - like OSX Growl and Gnome Notifications are **separate** from the programs that gave rise to them.
    - I want to be able to know that my friend had sent an IM to me a while back (even after the program was closed or ..... machine was rebooted for some reason) and that a program crashed a while back
    - In this - the notification messages are closer to a system log than anything else.
- The only difference between **notification messages/log** and **system-tray programs** is **time** : one _**is a**_ slice of time, the other will _**produce**_ these slices.

## The user

- Some users want to be able to have some sort of icon/button in the panel itself and not have it completely bare - the user should have this choice

- I should be able to group **notification logs** and **system tray programs** on the basis of functionality - this is similar to the philosophy that goes behind providing a unified messaging panel area, for audio, and so on.
    - Who is going to limit the number of these panels - Gnome ? Shuttleworth? Or is the answer to build an interface that allows flexibility without clutter

- I should be able to search notification logs, delete them, purge them in one shot, etc.

## My solution

Here's my proposal for a unified design

https://gomockingbird.com/mockingbird/#2hnvb9y

The way I envision this entire interface is somewhat like OSX Error Panes ([http://walkingtowel.org/images/pref\_panes\_howto\_step0.png](http://walkingtowel.org/images/pref_panes_howto_step0.png)) - or something like this : [http://web-kreation.com/demos/Sliding\_login\_panel\_jquery/#](http://web-kreation.com/demos/Sliding_login_panel_jquery/#) basically sliding down from the top panel.

Another advantage is that you can move the top panel around (at the bottom or be vertical on the side) and the only UI paradigm that changes is the direction of the slide.

The workflow is somewhat the following:

1. [https://gomockingbird.com/mockingbird/#2hnvb9y/PFSkm8](https://gomockingbird.com/mockingbird/#2hnvb9y/PFSkm8) - initially -> click on the "notifications" button in the panel
2. you should go to [https://gomockingbird.com/mockingbird/#2hnvb9y/mBiAW](https://gomockingbird.com/mockingbird/#2hnvb9y/mBiAW) -> click on the time and date button in the "Programs" section
3. you should go to [https://gomockingbird.com/mockingbird/#2hnvb9y/sCsPR](https://gomockingbird.com/mockingbird/#2hnvb9y/sCsPR) . This page aims to loosely replicate the "Time and Date" panel button dropdown in Gnome -> click on "Preferences"
4. you should go to [https://gomockingbird.com/mockingbird/#2hnvb9y/6yRgU7](https://gomockingbird.com/mockingbird/#2hnvb9y/6yRgU7) . Notice that I am changing the "default notification display on panel" from None to "Time and Date" as well as "Skype". Click on OK
5. You should see the top panel now has the Time and Date and Skype buttons as well - effectively replicating the current behavior for those who prefer it. Click on the "Time and Date" button in the panel.
6. You should have gone directly to step 3 [https://gomockingbird.com/mockingbird/#2hnvb9y/sCsPR](https://gomockingbird.com/mockingbird/#2hnvb9y/sCsPR)
