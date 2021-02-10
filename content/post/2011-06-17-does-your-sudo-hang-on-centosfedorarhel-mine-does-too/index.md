---
title: "Does your \"sudo \" hang on Centos/Fedora/RHEL/Debian ? mine does too"
date: "2011-06-17"
---

Warning: this is for google to index this and help out other poor hapless souls.

If your sudo adduser/passwd/vim , etc. are hanging on any of the Redhat distro variants - its because of [this](https://bugzilla.redhat.com/show_bug.cgi?id=479464) not-a-bug. Apparently, Redhat does a DNS lookup whenever you do a sudo.

This usually happens when you change the hostname incorrectly. The way to fix it is to fix  your _**/etc/sysconfig/network**_

The correct version looks like this

> NETWORKING=yes
> NETWORKING\_IPV6=yes
> HOSTNAME=myname
