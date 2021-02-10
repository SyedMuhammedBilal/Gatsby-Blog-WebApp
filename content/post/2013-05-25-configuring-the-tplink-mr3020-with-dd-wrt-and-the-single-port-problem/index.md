---
title: "Configuring the TP-Link travel router with DD-WRT (and solving the single port problem)"
date: "2013-05-25"
---

The TP-Link [MR3020](http://amzn.to/15uNU3k) / [702N](http://amzn.to/15uO2zS) or [703N](http://amzn.to/13fBj3U) are some brilliant tiny devices that fits in the palm of your hand. (I chose the [MR3020](http://amzn.to/15uNU3k) especially for its USB compatibilty). It is a superb replacement (improvement) of the sucky WTR54GS travel router.

Not only does the MR3020 have a great form factor (pack of cards), but it also has ability to connect your NAS through a USB port, your 3G dongle, is powered through a USB cable (!!!!) and best of all .. is 100% [DD-WRT compatible](http://wiki.openwrt.org/toh/tp-link/tl-mr3020).

This last factor changes the router from a simple to a super powered device.

I downloaded the firmware from ftp://dd-wrt.com/others/eko/BrainSlayer-V24-preSP2/2013/04-15-2013-r21286/ . There are many guides to install DD-WRT, like this one [here](http://joeyiodice.com/converting-tp-link-tl-wr1043nd-to-dd-wrt).

Now there is one problem with the MR3020 - in fact it is the same problem with any _**travel**_ router which has DD-WRT installed on it: there is only a single ethernet port on the device (marked as WAN). For some reasons, the defaults for DD-WRT assume that this port is in bridged mode with the lan system ... which means that you will not be able to use this like a conventional router. In fact, if you set the WAN connection to "Automatic Configuration - DHCP", the router seemingly stops working. (including assigning IP addresses). It took a look time (and blogs like [this](https://sites.google.com/site/moosyresearch/fast-fwr171-3g#TOC-Howto-install-dd-wrt) ) to finally understand why this is happening amd to fix it. I suggest whoever is attempting this to read the official DD-WRT doc [here](http://www.dd-wrt.com/wiki/index.php/Separate_LAN_and_WLAN).

The way to fix this is to break the bridging between the internal lan (which has the wifi) and the ethernet port. To do this, do the following steps without missing anything:

(Assuming your device's ip address is http://192.168.1.1/ )

- go to http://192.168.1.1/Networking.asp
- go to the section "Bridging"
- Click add - let page reload - fill in "br1" in the empty space at the beginning. go down to the bottom of the page and click save.
- now the section "Bridging" would have the "br1" row and some additional fields below (IP address and subnet mask).
- I chose "10.0.2.1" for IP Address and "255.255.255.0" for subnet mask.
- go to the bottom of the page and click "save". then go **again** to the bottom of the page and click on "apply settings"
- go to section "Assign to bridge" - click Add - let page reload.
- select "br1" from dropdown and interface "ath0". go to the bottom of the page and click "save". then go **again** to the bottom of the page and click on "apply settings"
- Go to the bottom of the page to the section called "dhcpd". click "Add" - let page reload.
- select "br1" from 1'st dropdown. go to the bottom of the page and click "save". then go **again** to the bottom of the page and click on "apply settings"
- then go to http://192.168.1.1/index.asp - go to "Local IP Address". fill in "10.0.2.1". go to the bottom of the page and click "save". then go **again** to the bottom of the page and click on "apply settings"
- at this point, your router IP has changed to 10.0.2.1, so now go to http://10.0.2.1/index.asp - go to "Connection type" and select "Automatic Configuration - DHCP" . go to the bottom of the page and click "save". then go **again** to the bottom of the page and click on "apply settings"

Voila. A brilliant, portable, travel router running DD-WRT for cheap !
