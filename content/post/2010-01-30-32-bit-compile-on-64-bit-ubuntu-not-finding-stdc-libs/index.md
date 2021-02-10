---
title: "32 bit compile on 64-bit ubuntu, not finding stdc++ libs"
date: "2010-01-30"
---

This is really dumb - I was getting errors of "skipping incompatible libraries" when I was compiling a 32-bit executable (using -m32) on 64-bit linux

And this is after I have installed "ia32-libs lib32gcc1 libc6-dev-i386"

The solution is apparently "ln -s /usr/lib32/libstdc++.so.6 /usr/lib32/libstdc++.so", because the package manager is not making the links that the linker expects.

And this wasted an hour of my time.
