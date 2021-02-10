---
title: "[Software] Thread and register level debug using Solaris adb"
date: "2005-01-21"
---

gdb is a good tool..usually that it. But my experience has shown that gdb has issues when the problem is in symbol resolution, traps, etc. which occur at load time.

For example, given an application that actually loads a shared library at run time. If for some reason, there is an issue in symbol loading itself, gdb will not be able to instrument the code properly. Such an issue is not very common, but it occurs in certain cases. For example when you link a static library into a loadable library, there **might** be issues.

Then there is adb itself. It is not as easy and well documented as gdb. First of all, commands are not stuff like "run", "debug", "break", etc. For example, the command to quit an adb session is $q . Secondly, it has no prompt by default. (You could give it one using the $P command. )

Basics

To start adb, you use

> adb \[binary file\]

To run the binary, you use the command

> :r \[command line args\]

On crash, the backtrace comes up using $c

Breakpoints

Breakpoints can be set using

> function-name + offset :b

The offset is the number of bytes after start of function. On hitting a breakpoint, the program may be stepped using :s or ,10:s(to step 10 instructions). Program execution may continue to next breakpoint by :c. At any breakpoint, the program execution trace may be examined by $c. When doing so, often we can see function calls and the arguments passed to them in hex. To view the contents of the address pointed to, by the hex, use (hex value)?s (for address) and (hex value)/s for data. the s modifier at the end denotes values should be shown as string. You could as well use d (decimal), x (hex), etc.

Examining data

To examine the next 10 instructions from current location (breakpoint or abnormal termination point) is <pc,10?ia. The < modifier actually denotes that you are operating on individual registers (in this case the program counter - pc). Now, for example, if you do <o3,10?ia, adb will pick up the value in register o3, look at that address in memory and check if there are program instructions at that memory location. so we are looking at the contents of memory pointed to by o3. To look at the contents of o3, you need to use <o3=x. This will print the value contained in o3. To print the next 10 addresses , starting from address of function f1 is to use f1,10/ia.

Usually, during debugging, its sometimes good to remember the following info about typical registers: %l0 %l1 %l2 %l3 %l4 %l5 %l6 %l7 (not affected by function calls) %o0 %o1 %o2 %o3 %o4 %o5 (used for passing arguments into functions, usually by moving something in them) %i0 %i1 %i2 %i3 %i4 %i5 (used within a function to access arguments and return values) %g0 %g1 %g2 %g3 %g4 %g5 %g6 %g7 (globally accessible registers)

At any time contents of some typical registers can be seen using $r or $?

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [debug](http://del.icio.us/sss8ue/debug) [solaris](http://del.icio.us/sss8ue/solaris) [adb](http://del.icio.us/sss8ue/adb)
