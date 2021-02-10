---
title: "FUD alert ! 64-bit OS does not use twice the RAM"
date: "2009-06-20"
tags: 
  - "64-bit"
  - "linux"
  - "osx"
  - "windows7"
---

A few weeks back, I had to re-install Ubuntu because of a windows re-install and this time I went 64-bit. This way, I have the flexibility to upgrade to 4GB RAM, which I cannot do with 32 bit operating systems.

However, all over the IRC channels and forums, I see a lot of FUD about how 64-bit OSes use the double the memory for the **exact same** programs that you were running on 32-bit OSes... because of the doubling of word size.

All that is a load of crap - the actual increase is about 5% or so, with a substantial increase in video encoding, playback and a lot of other [application benchmarks](http://www.tuxradar.com/content/ubuntu-904-32-bit-vs-64-bit-benchmarks).

Program code uses memory allocation w.r.t primitive types like int, int64, char, etc. These retain their sizes and so memory allocation is explicitly same as before. Structs are aligned by the compiler anyways. However, pointer usage (e.g int\*, void\*) causes doubling of the space needed, since pointers use the native word size of the OS. These are called " swollen pointers". Roughly, these amount to 5% of a program's allocated memory.

So please upgrade to a 64-bit OS if your processor (core 2 duo, turion onwards) allow it. The next generation of MacOS - Snow Leopard is fully 64-bit  **only.** Linux has been 64-bit compatible for a long time now (and flash-player 10 for 64-bit linux works nicely). Windows 7 is targetted primarily for 64-bit machines, though there will still be a 32-bit release available.
