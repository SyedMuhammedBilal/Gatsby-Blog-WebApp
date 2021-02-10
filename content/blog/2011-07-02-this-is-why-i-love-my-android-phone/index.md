---
title: "How to reset your Android bluetooth settings without factory reset"
date: "2011-07-02"
---

so my bluetooth was acting all wonky - and I really, really did not want to do a factory reset of my phone. My android was not pairing, or pairing and not connecting, etc. etc.

So what do I do ?

I fire up my good ole terminal on my android handset and do

> "rm -rf /data/misc/bluetoothd/\*"

Reboot and all bluetooth settings are reset.

Awesome!
