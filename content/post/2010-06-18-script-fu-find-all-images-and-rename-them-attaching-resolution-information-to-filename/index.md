---
title: "script-fu: find all images and rename them, attaching resolution information to filename"
date: "2010-06-18"
categories: 
  - "linux"
---

dont ask  
  
\[sourcecode lang="bash"\] find . -name \\\*image\\\* -exec sh -vc ' cp {} \`echo {} |xargs basename| sed "s@\\(.\*\\)\\.jpg\\|png\\|bmp@\\1@"\`\_\_\`identify -verbose {} | grep Geometry | sed -e "s@^.\*Geometry: \\(\[0-9\]\*\\)\\(\[x\]\*\\)\\(\[0-9\]\*\\).\*@\_\_\\1\_\\3@"\`.\`echo {} | sed "s@\\(.\*\\)\\.\\(jpg\\|png\\|bmp\\)@\\2@"\` ' \\; \[/sourcecode\]
