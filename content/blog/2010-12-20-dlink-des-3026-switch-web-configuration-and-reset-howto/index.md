---
title: "DLink DES 3026 switch web configuration and reset howto"
date: "2010-12-20"
---

I suppose this goes for DLINK DES 3026, 3025 and all its kind. I also wouldnt be surprised if this is defacto for every DLink switch out there.

It is surprising how hard it is, to get to this. By default, its either the TFTP configuration (via a serial cable) or something else.

Set your computer's static IP to **10.90.90.93** (anything other that 10.90.90.90, but on the same subnet). Subnet mask is **255.0.0.0** and no gateway and no DNS.

check that the switch is reachable by pinging 10.90.90.90. If it is pingable, open 10.90.90.90 in a web browser. My default username was **admin** and no password.

Reset your switch by selecting **reset** from the left pane and **Reset System** from the right pane's selections.

 

This should solve 90% of all problems out there.
