---
title: "Building ECL on Win32 using VS2005"
date: "2008-04-23"
categories: 
  - "lisp"
  - "software"
  - "win32"
---

While looking for a suitable lisp to use on a Win32 platform, I wanted to look for one that was natively buildable on it.

[Chicken](http://www.call-with-current-continuation.org/) sounded interesting, and moreover they had (at some point of time) made it buildable using [cmake](http://www.cmake.org/) (which made me particularly happy, because of the possibility of generating SLN files for Visual Studio 2005). However, for some unknown reason, they gave up on cmake... I wish they would take it up again

[ECL](http://ecls.sourceforge.net/) was the next best thing - which later turned out to be the best thing. All I needed to do now was to build it.

I use [Powershell](http://www.microsoft.com/windowsserver2003/technologies/management/powershell/default.mspx) - previously known as Monad (no.. seriously..) - for that unixy shell which is generations ahead of the lowly windows "cmd". It allows me to specify variables in a startup script and is therefore portable across machines (unlike traditional environment variables in windows which need to be set by right-clicking "My Computer")

All you need to do (theoretically) to build ecl is switch to the msvc directory and type "nmake" - this of course doesnt work unless you have some variables set.

First out, you get loads of **0xc0000139** errors in the build stage - clearly it points to certain DLL entry points not being found. What you need to do is set the path variable correctly:

> $env:path=$env:path +:\\Program Files\\Microsoft Visual Studio 8\\Common7\\IDE"

(I think it was due to **mspdb80.dll** or something). In addition I had to download **utildll.dll** and **mobsync.dll** from [NoDevice](http://www.nodevice.com/dll/download.html) (and put in one of the "path" directories).

Second out, I needed **ntwin32.mak** \- which as I discovered, defines platform specific variables for Makefiles.

> $env:include=$env:include + ";C:\\Program Files\\Microsoft Visual Studio 8\\VC\\PlatformSDK\\Include"

Third, I needed **user32.lib**:

> $env:lib = $env:lib + ";C:\\Program Files\\Microsoft Visual Studio 8\\VC\\PlatformSDK\\Lib"

Now that I have a working (and _buildable_ ) implementation of Common Lisp - where to start? SICP or PAIP?
