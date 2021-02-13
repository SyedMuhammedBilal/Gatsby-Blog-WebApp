---
title: "Renaming with part of the original filename"
date: "2007-10-29"
Head: "2007"
categories: 
  - "linux"
  - "software"
---

quirky ... but necessary. Unless you want to spend hours renaming everything by hand

in short it is:

>  find . -name \\\*Wac\\\* | awk '{print "mv", "\\"" $0 "\\"" " " $1 "\_" $3 "\_" $5}' | sh

That came after a lot of trime trying quirky things like:

>  find . -name \\\*Wac\\\* | xargs -J X \`awk '{print $1,"\_",$3,"\_",$5}'\` find . -name \\\*Wac\\\* | xargs -J X awk '{print $1,"\_",$3,"\_",$5}' find . -name \\\*Wac\\\* | xargs -J X \`awk '{print $1,"\_",$3,"\_",$5}'\` find . -name \\\*Wac\\\* | awk '{print $1,"\_",$3,"\_",$5}' find . -name \\\*Wac\\\* | awk '{print $0, $1,"\_",$3,"\_",$5}' find . -name \\\*Wac\\\* | awk '{print "mv",$0, $1,"\_",$3,"\_",$5}' find . -name \\\*Wac\\\* | awk '{print "cp",$0, $1,"\_",$3,"\_",$5}'

In all honesty, I must also mention [this link](http://www.linuxfocus.org/English/September1999/article103.html), which did point me to the right direction.
