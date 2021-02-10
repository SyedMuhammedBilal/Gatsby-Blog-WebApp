---
title: "Quick one liner to save a list of gems (with multiple versions) and install on another machine"
date: "2010-03-03"
categories: 
  - "linux"
  - "python"
tags: 
  - "gem"
  - "install"
  - "ruby"
---

This saves the list of gems

> ﻿﻿gem list | python -c "import sys;import re; from itertools import chain; l=sys.stdin.readlines();x=\[ \[  line\[:-1\]\[:line.index(' ')\] + ' --version=' +k for k in line\[line.index('(')+1:line.index(')')\].split(',')\]   for line in l\]; print '\\n'.join(item for item in chain(\*x))"

The resultant output looks like

> actionmailer --version=2.3.5
> 
> actionmailer --version= 2.3.4
> 
> actionmailer --version= 2.1.1
> 
> actionmailer --version= 1.2.3
> 
> actionpack --version=2.3.5
> 
> actionpack --version= 2.3.4

To read the file and install the gems later, run

> cat 2 |xargs -I$ echo $| xargs -t -I@ gem install @

Alternatively, you can run _gem list --local_ to save the list of gems in the following format

> actionmailer (2.3.5, 2.3.4, 2.1.1, 1.2.3)
> 
> actionpack (2.3.5, 2.3.4, 2.1.1, 1.13.6, 1.12.3)
> 
> actionwebservice (1.2.6, 1.1.4)
> 
> activerecord (2.3.5, 2.3.4, 2.1.1, 1.15.6, 1.14.3)
> 
> activeresource (2.3.5, 2.3.4, 2.1.1)
> 
> activesupport (2.3.5, 2.3.4, 2.1.1, 1.4.4, 1.3.1)

To read from this file and generate the final _install_ commands, do

> cat gem\_list.txt | python -c "import sys;import re; from itertools import chain; l=sys.stdin.readlines();x=\[ \[ ' install --no-ri --no-rdoc ' + line\[:-1\]\[:line.index(' ')\] + ' --version ' +k for k in line\[line.index('(')+1:line.index(')')\].split(',')\]   for line in l\]; print '\\n'.join(item for item in chain(\*x))" | xargs -L 1 -t gem
