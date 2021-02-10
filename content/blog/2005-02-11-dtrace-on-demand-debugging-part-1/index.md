---
title: "[dtrace]  On demand debugging - Part 1"
date: "2005-02-11"
---

One of the best things that I have seen the OS world is Solaris 10 and its associated debug tools. This includes - [Dtrace](http://technorati.com/tag/dtrace), mdb, libumem . Together they can be combined into one of the most powerful debug frameworks that exists. Move over purify... All that I have tried out is actually gleaned from user groups at various sun forums. But there is one thing Leventhal, Shapiro and Cantrill are gods.

Alright, dtrace commands are very similar to mdb commands. The syntax is provider:module:function:name . The syntax is self explanatory, except the name part. This is a part which gives some part of the providers semantic meaning. e.g. exit will work when the function is about to exit. Some parts of the commands may be left blank. for example the pid provider pid1000::myFunc:entry is invoked when the function is entered.

For me, the most interesting part is when, we need to debug loadable libraries. A little awkward, but very cool.

dtrace -qwc a.out -n 'pid$target:ld:dlopen:entry{printf("pid=%d loading: %s\\n",pid,copyinstr(arg0))}'

This would print out the libraries that are being loaded. This small program hooks onto the pid of a.out using the pid provider. The $target is an implicit variable that gets the pid number of the a.out when it is run. Therefore consider the module ld. When the function dlopen in entered in this module (as part of the a.out process), dtrace will print the name of the library. Looking at the man page of dlopen, we can see that the first argument passed to the dlopen function (arg0) is the name of the loadable library. But we cannot print it directly. This is because dtrace operates in the solaris kernel space. To access names, etc. from the user-space, we need to copy them first to kernel space (via the copyinstr function). When the library you are interested in has loaded, suspend the process. In another shell,

dtrace -n 'pid:library\_name::entry{printf("function=%s probe= %s",probefunc,probename);}'

once dtrace has started its probes, resume the earlier suspended program. The pid provider, will be the most used provider for any software developer interested in looking at the execution trace of his/her programs.

There is another feature of Solaris 10 which is of great help in locating leaks, debugging invalid memory accesses, etc. Maybe not so effective as valgrind or purify but hundred's of times as fast. This is the libumem/mdb combo. Right now, I have only figured out how to detect memory leaks.

setenv LD\_PRELOAD libumem.so.1 setenv UMEM\_DEBUG default setenv UMEM\_LOGGING transaction

. This is necessary for the libumem memory debugging library to be loaded.

start the application using mdb

mdb ./a.out
>::sysbp \_exit        /\* to break before the program exits \*/ 

>::run
mdb: stop on entry to \_exit
mdb: target stopped at:
libc.so.1\`exit+0x14:    ta        8
mdb: You've got symbols!
mdb: You've got symbols!
Loading modules: \[ ld.so.1 libumem.so.1 libc.so.1 \]

Here comes the interesting part. Finding leaks is as simple as :

\>::findleaks
CACHE           LEAKED       BUFCTL          CALLER
someaddress      somenumber   impAddress     function address
----------------------------------------------------------------------
   Total       1 buffer, 24 bytes

>impAddress::bufctl\_audit   /\* to backtrace a particular leak  \*/
libumem.so.1\`umem\_cache\_alloc+0x13c
         libumem.so.1\`umem\_alloc+0x60
         libumem.so.1\`malloc+0x28
         main+4
         \_start+0x108

>::walk umem\_log|::bufctl\_audit   /\* to backtrace all leaks \*/

Whew.. end of day 1.

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [solaris](http://del.icio.us/sss8ue/solaris) [dtrace](http://del.icio.us/sss8ue/dtrace) [debug](http://del.icio.us/sss8ue/debug)
