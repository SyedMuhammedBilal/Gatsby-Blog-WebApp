---
title: "Weird TCL behavior on Cygwin/MinGW"
date: "2005-07-26"
categories: 
  - "software"
---

A C++ program compiled with TCL stubs, which performs just fine on Linux, just seems to go out without a sound on Cygwin. TCL\_LIBRARY was set properly (also tried the  

> "export TCL\_LIBRARY=$(cygpath -w /usr/share/tcl8.4)"

hack). But the execution just seems to vanish after a call to Tcl\_Init(). Now internally, Tcl\_Init parses a whole load of stuff, starting from init.tcl.  
Also tried a weird hack that changes the "tclPreInitScript" variable to help set the $tcl\_library variable, et al. But nothing helped.  
On debugging the executable in gdb, the call to Tcl\_Init returns a segfault, which is not visible on a normal run.  
The solution to this mystery is a simple call to  

> "Tcl\_FindExecutable(argv\[0\])"

, which sets up some internal variables for use by tcl. Now since in cygwin there are two paths (the /usr type path and the /cygdrive/usr path) for all resources, this helps initialise everything correctly. I almost did'nt try this solution.  
But it works!!!

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software)
