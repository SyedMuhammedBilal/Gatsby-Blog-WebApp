---
title: "Reliable E-voting systems"
date: "2009-05-30"
tags: 
  - "e-voting"
---

There has been a lot of technology exploration done in electronic voting systems, since the Diebold voting systems [controversy](http://en.wikipedia.org/wiki/Premier_Election_Solutions#Security_issues) in the 2004 US Presidential elections. A recent attempt has been made by the OSDV -[Open Source Digital Voting](http://osdv.org) foundation.

There is a ton of information available on OSDV's site (personally, I dont see why they can structure the information much more cleanly - accessing specs, source code, repositories should be made much easier). Anyway, I think one of the coolest things they are attempting is create a [open-source Linux platform](http://wiki.osdv.org/index.php/SHARP_Project#SHARP_Project_Status) (The SHARP platform) to implement open source digital voting.This is NOT vaporware - you can actually download an ISO, burn it to a CD and try it out. The architecture of the underlying hardware is also described in [detail](http://wiki.osdv.org/index.php/Open_Toaster_Architecture).

This is a very important step - it opens an opportunity to audit and sanitize the source code for the systems that will eventually go on to decide who rules the country. Nothing is more important than this. As the Diebold controversy has shown, closed source software from vendors, no matter who they are - can never be taken at face value. I do support giving of contracts to vendors to create software - but such software must be open to audit by any citizen to ensure that his/her rights are safeguarded (unlike India [e-governance standards portal](http://egovstandards.gov.in/), which is more famous for [hiding information](http://digitalsarkaar.wordpress.com/2009/05/12/indias-e-governance-standards-information-withheld/) than sharing it).

I especially like the [Pvote](http://pvote.org/) project (by [Ka-Ping Yee](http://zesty.ca/) ) - which has created a voting system in 460 lines of Python code, rather than the hundreds of thousands of lines of code by commercial vendors. His thesis outlining the technology is mentioned [here](http://pvote.org/docs/).

There have been incredible research done on open-source voting system, like [Scantegrity](http://www.google.com/url?sa=t&source=web&ct=res&cd=1&url=http%3A%2F%2Fwww.scantegrity.org%2F&ei=FjIhSvu_JJW6tgO4kez3Aw&usg=AFQjCNEwcZIUClycipCVUYe8dmLim4Ajxg&sig2=53sX1TT3p4aOS69jPkMqkA) (which allows a citizen to cast their vote anonymously and then go home and verify that the vote was recorded accurately, without losing his privacy)
