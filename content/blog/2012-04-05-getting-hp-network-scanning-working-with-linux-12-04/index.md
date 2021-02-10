---
title: "Getting HP network scanning working with Linux 12.04"
date: "2012-04-05"
tags: 
  - "12-04"
  - "hplip"
  - "linux"
  - "scanner"
  - "ubuntu"
---

Even after I configure my printer/scanner and _**scanimage**_ **-L** being able to successfully identify it, I was not getting any remote scanning to work.

Simple-scan used to complain about unable to locate scanners and scanimage complained about "_unable to load restricted library /usr/share/hplip/scan/plugins/bb\_soapht.so_"

What fixed it was reinstalling hplip and running _**sudo hp-plugin -i**_ (and saying Y to everything)
