---
title: "A tale of Freetype and Apple"
date: "2008-01-03"
categories: 
  - "freedom"
  - "linux"
  - "software"
---

Some time back I was trying to get [Fvwm](http://www.fvwm.org/)  on my Ubuntu laptop. One of the prereqs was the open source font-rendering engine [Freetype](http://freetype.sourceforge.net/index2.html)  .

But no matter how hard I tried, I couldnt get the fonts to look pretty ( I even got the [Open Source Liberation Fonts](http://en.wikipedia.org/wiki/Liberation_fonts)  ).

And then I discovered about the Microsoft and Apple patents.

It seems that they own a few patents in font rendering, which meant that unless I turned them on by hand and compiled them in FreeType, these obviously superior engines would not be used for rendering.

The way to switch them on is:

>  in include/freetype/config/ftoption.h , uncomment lines:

>  /\* #define TT\_CONFIG\_OPTION\_BYTECODE\_INTERPRETER \*/  (Apple Patent)

> /\* #define FT\_CONFIG\_OPTION\_SUBPIXEL\_RENDERING \*/ (Microsoft Patent)

Voila. Ze beautiful fonts are heerre.
