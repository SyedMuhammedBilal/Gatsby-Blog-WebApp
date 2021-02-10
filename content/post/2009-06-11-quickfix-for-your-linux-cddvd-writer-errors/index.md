---
title: "Quickfix for your linux CD/DVD writer errors"
date: "2009-06-11"
tags: 
  - "linux"
  - "ubuntu"
---

Are you getting

> Buffer I/O error on device sr0

Change your [grub boot options](https://help.ubuntu.com/community/BootOptions#Change%20Boot%20Options%20Temporarily%20For%20An%20Existing%20Installation) to add

> all\_generic\_ide=1
