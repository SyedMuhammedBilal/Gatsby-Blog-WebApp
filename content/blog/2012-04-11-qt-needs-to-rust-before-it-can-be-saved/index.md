---
title: "Qt needs to rust before it can be saved"
date: "2012-04-11"
tags: 
  - "gnome"
  - "mozilla"
  - "qt"
  - "rust"
  - "vala"
---

One of the big news this week was the increased focus on javascript as a first class citizen for qt. This sucks. The designers.of qt,unity and gnome shell intend developers to play at creating widgets. While extensions.gnome.org is indeed nifty, the scope of things ypu can accomplish is very limited - in fact there are open bugs on gnome shells network manager, because it calls nm-applet in "external gui mode" to be able to use things like VPN.

The problem is that this JavaScript focus doesnt lead to anything - if someone wants to write a serious app like Sequel Pro for gnome or qt, they definitely cannot us javascript.

But gnome has a secret.weapon -Vala. Qt has no equivalent.

Here's an idea - why not make Qt the tatget for Mozilla's systems programming language - Rust ? Two advantages to this - Qt gains a non-C++ language for writing serious apps and Rust gains its golden framework (like Rails was for Ruby) to drive adoption.
