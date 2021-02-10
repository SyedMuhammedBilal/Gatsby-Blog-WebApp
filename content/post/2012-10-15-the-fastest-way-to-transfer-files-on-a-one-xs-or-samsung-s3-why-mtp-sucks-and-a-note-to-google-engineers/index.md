---
title: "The fastest way to transfer files on a One X/S, Nexus 7 or Samsung S3, why MTP sucks... and a note to Google engineers"
date: "2012-10-15"
---

The most recent iterations of the top-end Android devices have start using MTP as the mode to transfer files on their devices. Previously, it was possible to mount the internal (or a microSD card, if available) as a USB drive on your computer - through something called MSC mode. Google's engineers made the conscious decision to drop that mode. I do believe the choice of dropping MSC to be a valid one (read here for Dan Morrill's interview as to [why](http://www.androidpolice.com/2011/11/18/impromptu-qa-session-with-android-engineer-dan-morrill-brings-to-light-reasons-behind-galaxy-nexus-lack-of-usb-mass-storage/)).

I am completely unsupportive of the choice of MTP as the alternative. Google really screwed up on this one.

MTP is horrible - it has no notion of timestamps, it is super horrible on performance and it is really screwy to implement. There have been multiple implementations on linux - mtpfs, jmtpfs, go-mtpfs (this one was built by a Google engineer, tired of the poor performing alternatives). Most of them use the core libmtp, which by the way doesnt play too well with One X.

So.. what's the alternative ? Well, here you cant but admire Apple's engineering choices going back **a decade**. I'll try to explain it in brief, but you can read about it in much more detail by googling for AFC - [Apple File Connection](http://theiphonewiki.com/wiki/index.php?title=AFC) protocol and the [_usbmux_](http://theiphonewiki.com/wiki/index.php?title=Usbmux) service.

Essentially what Apple did was the following:

1. run a secure jailed service on the iPhone called _afcd_ - which acts like a server
2. build a desktop service called _usbmuxd_ which connects to the iPhone over USB and creates a TCP tunnel. This way, iTunes and other applications talk to the iPhone using the robust TCP protocol. (note: there is open source [python code](http://code.google.com/p/iphone-dataprotection/source/browse/usbmuxd-python-client/tcprelay.py) which allows you see how this is done.)

Now, it is true that not many applications other than iTunes can talk to the iPhone. But that is a very conscious, deliberate _**business**_decision. It has nothing to do with the superiority of this solution, which as we shall see shortly can be done easily on Android.

If we look in the android world, most of the pieces are in place - however, they have not been made available to you easily. For example, there is a piece of software called [ADB](http://developer.android.com/tools/help/adb.html), provided by Google, which allows you to connect to your phone and do a whole bunch of nifty things. This includes extremely fast file transfer over ssh if you want.

All you need to do is the following (this method should work perfectly on Linux as well as Mac/OSX. There is no reason why this should not work on Windows):

- run a ssh server on  your android device - I chose SSHDroid, but feel free to choose anything you like. Take note of the username, password and port number. Let us say the port number was 2222. Start the ssh server.
- download and install android SDK on your machine. Get to the stage where running "_adb devices"_ shows your phone. You can google for this, but it is not too hard. You need to make sure _USB debugging_ is enabled on your phone.
- create a port forward between your desktop and the android phone using **USB bridge** (see what I did there ?) using _adb forward tcp:2222_  _tcp:2222_ . This essentially causes any SSH connections on your desktop's localhost and port number 2222 to be forwarded **over USB** to the android device.
- Use a nice GUI tool like filezilla to open a SFTP connection to localhost:2222 . Use the same username and password that you had set when you installed the ssh server on your android phone.
- Transfer files. I got upto a 1mbps transfer rate using my old crappy laptop.

My request to Google engineers building Android 5.0 is this - drop this MTP crap. Use a tried and tested protocol like ssh and TCP as the media link between an Android device and a desktop. What is missing is the server part. I would prefer not to install a ssh server from the app store. Instead, build a secure, chroot-jailed ssh server inside the Android core - a smart (only comes up when USB is connected), power efficient and very performant service. Things like [sync over ssh](http://oreilly.com/pub/h/38) are already solved problems. In fact, you can also [mount a ssh connection](http://en.wikipedia.org/wiki/SSHFS) as a [drive](http://code.google.com/p/win-sshfs/) in your file manager.

Drop the MTP crap - it doesnt work very well and it doesnt make sense against the alternatives.
