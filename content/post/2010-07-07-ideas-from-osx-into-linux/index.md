---
title: "Ideas from OSX into Linux"
date: "2010-07-07"
categories: 
  - "linux"
tags: 
  - "launchd"
  - "lennart-poettering"
  - "osx"
  - "systemd"
  - "upstart"
---

The news about [systemd](http://lwn.net/Articles/389149/) was very, very  cool. See, I had  recurring problems with upstart, which does not allow (in any easy way) to mark services as disabled. There is the very clunky way of removing symlinks which indicate runlevels.

systemd is an idea adopted from OSX's launchd which starts services only when they are requested to. Although I still have misgivings about services being bound to a socket - I wonder how that would work with something like nginx (or any webserver)  that starts worker processes and dispatches them with a central dispatcher.

I really hope that someone would work on the question that I [asked](http://stackoverflow.com/questions/3121385/is-it-possible-to-make-something-like-osx-services-for-linux-by-leveraging-pipes) on stackoverflow - I really think the architecture of services on OSX is pretty neat: dictionary services, URL converters, etc. They are NOT daemons, but simply a sophisticated analogue of unix pipes (you could therefore pipe a piece of text and have it spell checked, for e.g.)

I hope someone like Lennart Poettering takes it up next.
