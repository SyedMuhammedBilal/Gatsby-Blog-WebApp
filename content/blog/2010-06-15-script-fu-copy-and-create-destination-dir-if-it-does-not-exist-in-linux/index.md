---
title: "script-fu: copy and create destination dir if it does not exist in linux"
date: "2010-06-15"
categories: 
  - "linux"
---

I had a directory (_/var/www_) of source code which was php and other junk (jpg) files mixed together. I needed to extract and recreate the same directory structure for all the php, but leave out all the other files.

This is my kungfu - I especially like the second command, where you fork out a shell to do the copying, thus keeping your _{}_ variable untouched.﻿

\[sourcecode language="bash"\]find /var/www/ -name \\\*php\\\* |xargs --replace=@ dirname @ | sed -e 's@\\(/var/www\\)/\*@@' | xargs mkdir -p

find   /var/www/  -name \\\*php\\\* -exec sh -vc ' cp -v {}   \`echo {} |sed -e 's@/var/www/\*@@'\`' \\;\[/sourcecode\]
