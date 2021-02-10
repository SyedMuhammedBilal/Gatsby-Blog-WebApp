---
title: "GIT the hell out of here"
date: "2008-01-18"
categories: 
  - "c"
  - "compiler"
  - "linux"
---

Since, several open-source projects are getting hosted using distributed version-control-systems like [Mercurial](http://www.selenic.com/mercurial/) (my favorite) and [GIT](http://git.or.cz/) , I had to build GIT on my laptop to check out a particular repository.

Now, I had to build it on Ubuntu Gutsy with http support (so I can pull and push via a remote repository). This meant I needed to have _libcurl_ installed.

As it so happens, for some godforsaken reason, the libraries on Ubuntu are libcurl**3**   , which meant that I had to build my own.

No problemo.

Yet.. and I say this again - **yet**..  I was getting no http features built in. So what was happening?

Well the GIT autoconf does not let you tell it where to look for libcurl : you think it does (with --with-curl=<path>), but it conveniently ignores it.

So I do:

> setenv LDFLAGS "-L<pathto curl libs>"; setenv CFLAGS "-I<pathto curl headers>"

All seemed to be going fine.. when it conks out in linking.

What now?

Ahh.. you need to hack the Makefile, where it helpfully mentions

>  # Define CURLDIR=/foo/bar if your curl header and library files are in # /foo/bar/include and /foo/bar/lib directories.

Why oh why.. cant u have a simple autoconf?

Needless to say, after this - it worked.
