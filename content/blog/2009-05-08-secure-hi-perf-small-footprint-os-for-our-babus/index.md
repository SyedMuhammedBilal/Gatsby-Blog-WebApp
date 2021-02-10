---
title: "Secure hi-perf, small footprint OS for our babus"
date: "2009-05-08"
---

While brainstorming on the way we should secure the desktops of our govt. employees, I had to face a few truths.

There are still quite a few Pentium-1 with 128mb memory (or less), black and white screens and sitting at critical points like immigration checkpoints at airports.

How do we bring them in the fold of security, easy administration and better performance.

Usually, these machines run DOS or some arcane Unix variant (most DOS).

Here's what I had in mind:

1. Linux kernel  with [PAX](http://en.wikipedia.org/wiki/PaX) patches - note that Ubuntu security advisory notes 41% of all security issues arising from buffer overflows which this hopes to address.
2. Link with GCC [Stack Smashing Protection](http://en.wikipedia.org/wiki/Stack-smashing_protection) (ProPolice)
3. [Python](http://www.python.org/) + [Urwid](http://excess.org/urwid/examples.html) for console based application development ( a much better route than C++ with ncurses)
4. A [Pacman](http://en.wikipedia.org/wiki/Pacman_(Arch_Linux)) based package manager - which needs to be enhanced to support different auth based package access and a SAT solver dependency resolution (so that access to certain packages are limited by authorisation)
5. [Samba4](http://wiki.samba.org/index.php/Samba4) - for integration with Windows and its authentication protocols. This is essential because any migration happens in stages and interoperability needs to maintained, especially in a bureaucratic organization.
6. [Cream](http://en.wikipedia.org/wiki/Cream_(software)) editor - based on vim. for a lightweight, easy to use console editor with nice productivity features.
7. [Alpine](http://en.wikipedia.org/wiki/Alpine_(e-mail_client)) based email client with SSL/TLS patches for security.
8. [sudo](http://en.wikipedia.org/wiki/Sudo) and [dbus](http://en.wikipedia.org/wiki/D-Bus) based security infrastructure (no all-powerful root account).
9. [UFW](http://www.ubuntugeek.com/ufw-uncomplicated-firewall-for-ubuntu-hardy.html) - uncomplicated firewall.

Cost of this OS - **zero**. Based on free and open-source software.

Considering that [Slitaz](http://www.slitaz.org/en/) fits a an entire GUI based Linux OS in 25 mb, I think it would be pretty easy to fit in the above OS in under 25 mb.

It is time our lawmakers migrated to a modern OS, instead of sticking to proprietary, outdated crap.
