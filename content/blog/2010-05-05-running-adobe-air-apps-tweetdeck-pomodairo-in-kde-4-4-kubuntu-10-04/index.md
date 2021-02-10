---
title: "Running Adobe Air apps (Tweetdeck, Pomodairo) in Kde 4.4 (Kubuntu 10.04)"
date: "2010-05-05"
tags: 
  - "adobeair"
  - "kde"
  - "tweetdeck"
---

So, I wanted to run [Pomodairo](http://code.google.com/p/pomodairo/) and [Tweetdeck](http://tweetdeck.com/go/download/tweetdeck) in my KDE 4.4.2 installation, over Kubuntu 10.04. Adobe gave nice clear directions on what to do and how to install them. I downloaded the .bin file, duly installed it.

It was all crap.

The only way to run Air apps in KDE is using their SDK (not the Air installation file). Download the tar file from [here](http://www.adobe.com/cfusion/entitlement/index.cfm?e=airsdk).  Oh and that tar file needs to be unzipped in a sub-directory and only using _sudo_ (asinine, I know). _chown_ it back to you.

Then download any _.air_ file (for the app of your choice). Unzip it using

> unzip <something>.air

Run the whole thing using

> ﻿<AIR SDK Dir>/bin/adl -nodebug  <air application dir>/META-INF/AIR/application.xml  <air application dir>

**P.S.** You may need _python-gtk2_ and _python-gconf_

**P.P.S** The best and viable _[pomodoro timer](http://www.pomodorotechnique.com/)_ for KDE4 (or Kubuntu) is [RSIBreak](www.rsibreak.org/). Gnome has its stuff, but somehow RSIBreak doesnt crop up for any pomodoro related searches. It is already in the Ubuntu repositories, so a simple _apt-get_ will install it for you
