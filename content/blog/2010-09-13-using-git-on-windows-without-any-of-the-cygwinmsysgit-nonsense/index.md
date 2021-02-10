---
title: "Using Git on Windows without any of the Cygwin/msysgit nonsense"
date: "2010-09-13"
categories: 
  - "linux"
  - "software"
  - "windows"
---

Git was made by Linus - of course there would'nt be a nice library which can be ported to other platforms. So the usual way of using Git on windows would be to use Cygwin/msysgit.

Well there are people who want to use Git, but dont want to use the \*nix way of doing things.

Jgit to the rescue - Jgit is a **library** which implements most of Git's functionality (which effectively is modeled like filesystem). It is also used as a base for the Eclipse and Netbeans Git plugin.

But there is another co-hosted project ﻿﻿_org.eclipse.jgit.pgm_ which implements a command-line interface over Jgit. The way to use it is interesting.

Download _[jgit.sh](http://eclipse.org/jgit/download/)__._ yes the script... it has an embedded _org.eclipse.jgit.pgm_ JAR library.

> java -cp jgit.sh   org.eclipse.jgit.pgm.Main <command>

Yes - that's not a typo. Use the script as the classpath. It works. It doesnt work exactly the same as the vanilla git - but damn close enough.

Java is smarter than I thought.
