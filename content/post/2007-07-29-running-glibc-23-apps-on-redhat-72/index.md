---
title: "Running Glibc 2.3 apps on Redhat 7.2"
date: "2007-07-29"
categories: 
  - "c"
  - "compiler"
  - "linux"
---

Working in a software firm with its baseline support at Redhat 7.2 certainly is hard - you have to make do with several apps that are old or forgo them altogether.

For all its opensource cred, Firefox 2.0 doesnt have an out-of-the-box build that works on Glibc 2.1 . However, Opera 9 does (praise their souls). And once you opera.. you never go back... well I think I have harped on Opera far too many times.

But there is one app that I  **have to use** and yet has no Glibc 2.1 version - Thunderbird. So the problem arose - how shall the twain come to meet?

Compile your own glibc 2.3 - hmm.. but I dont have root permissions, how do I use it and still use 2.1 for my company work.

aha... but therein lies the trick.

Actually the _thunderbird_ executable that we run, is in fact a script  - so we need to insert the appropriate _**ld.so**_ in between. But lets not get ahead of ourselves.

To compile Glibc-2.3 for Redhat 7.2 - we will pick the **_Glibc 2.3.2_** revision (glibc-2.3.2.tar.bz2).  After this revision, compiler idiosyncracies dont allow Glibc to be built on Redhat 7.2. In addition, we must also pick the corresponding glibc-linuxthreads revision - **_glibc-linuxthreads-2.3.2.tar.bz2_**

unzip the glibc package. unzip the linuxthreads package inside the glibc directory and build

>  ./configure --prefix=/home/sss --enable-add-ons=linuxthreads,linuxthreads\_db

> make

> make install

Now, you end up with _**$INSTALLPATH/lib/ld-2.3.2.so**_.

voila

_**./run-mozilla.sh  release//lib/ld-2.3.2.so --library-path release/lib:.:/usr/lib:/usr/X11R6/lib:/usr/local/lib ./thunderbird-bin**_ 

Incidentally, Thunderbird has been [relegated to the bi](http://www.mozillazine.org/talkback.html?article=22235)n by the Mozilla foundation . I suppose with Google putting millions of dollars into Mozilla, they did not really want to spend money on Thunderbird - what with Gmail and all (\*wink..wink\*)
