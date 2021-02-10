---
title: "Ubuntu 10.04 KDE prevents me from even logging in"
date: "2010-04-16"
---

oh man, these guys really need to get there act together. After yesterday's update, the machine was booting up but I was unable to log in.

Turns out the issue was that /tmp permissions had been changed and I had to do "chmod ug+rwx,o+rwt /tmp" to set it back appropriately.

sucks..
