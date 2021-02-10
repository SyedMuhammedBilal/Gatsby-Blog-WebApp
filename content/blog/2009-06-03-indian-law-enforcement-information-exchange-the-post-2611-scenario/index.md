---
title: "Indian Law-enforcement information exchange: the post 26/11 scenario"
date: "2009-06-03"
tags: 
  - "law-enforcement"
  - "schema"
---

One of the biggest fallouts of the 26-11 [incident](http://en.wikipedia.org/wiki/Mumbai_attacks) was the realization that though the IB had specific information about pending attacks, this information was [not analyzed](http://cleveland.indymedia.org/news/2008/11/33276.php) in relation to other data (like missing boats, etc.) to triangulate time and position of attacks.

This is not a failure of human intelligence - it is a failure stemming from a lack of technology.

Enter [NIEM](http://www.niem.gov/) \- National Information Exchange Model.

The NIEM is a machine-readable schema (or format) which can be processed automatically by software. Why is this important at all? Look at the current functioning of any government branch - information is locked up in proprietary formats like Microsoft Word or Adobe Acrobat, or even if saved in plain text, are lying rotting in some hard disk .. on a desktop or a server. There is no easy way to search it and there is no **standard** (re-emphasize "_standard")_ way of sharing it between different stakeholders - for example intelligence authorities, police, ministers, port authorities, etc. Of course, the complexity of the entire affair has to be considered as well - not everyone has the same access to information, some information has to be restricted, etc.

All these issues were present in 2001, when 9-11 happened and the United States government came up with technological measures to ensure information flow through the right channels.

For example, one of the specifications for the data-format, deals solely with [Suspicious Activity Reporting](http://www.niem.gov/pdf/ISE-FS-200_ISE-SAR_Functional_Standard_V1_5_Issued.pdf). Another specifies [Hospital Availability Exchange](http://www.niem.gov/niem-2/niem/have/2.0/have.xsd) (invaluable for aftermath of a terrorism incident), [Immigration](http://www.niem.gov/niem-2/niem/domains/immigration/2.0/immigration.xsd) data, [Terrorist Watchlist Person Data Exchange Standard](http://www.niem.gov/niem-2/niem/twpdes/2.0/twpdes.xsd). In fact there are a load of standardised specifications for specific data exchange [requirements](http://www.niem.gov/niem-2/niem/index.html) (also available as an [Excel sheet](http://www.niem.gov/niem-2/niem/niem-2.0.xls)).

The advantage of having standardised schemas for **information storage and retrieval**, is so that a lot of tools can be developed for these standardised and used anywhere. What it does is enable collaboration on a national and international scale for law enforcement.

One can develop a billion different software algorithms for mining data, to figure out terrorist probability, etc. - but they are all useless until the many different databases in which information is contained are tied together. This will only happen if  the data format is standardised.

But what about legacy (pre-existing) data? the answer is to convert them into the newer format - it can be done very cheaply using open source tools like Python, Lisp (with its STP package to manipulate XML), etc.

Mr. P Chidambaram, it is not enough to institute a National Investigative Agency, you need to make sure the tools needed to fight crime have been migrated to this century. In a world where criminals use encryption tools, it is beyond paramount to ensure that the bureaucracy are dragged, kicking and screaming, into putting in place technology to make this country safer.
