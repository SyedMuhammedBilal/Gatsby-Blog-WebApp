---
title: "Easier said than done #1"
date: "2011-08-08"
---

**Q. Why cant I build an open-source version of Skype using SIP ?**

**A.** From http://linux.slashdot.org/comments.pl?sid=2170464&cid=36186778

> SIP is just one part of a rather large tool box needed to build an internet phone. SIP is actually a small part - the bit that handles the negotiation between the two ends over how to send the voice. It does not send actually send the voice - it leaves that job to another protocol, RTP. It doesn't even negotiate the codec - SDP does that. It does not resolve domain names - DNS does that. It does not pierce NAT - STUN does that. It does not do auto-configuration, but any number of SIP based phones out that can pull down their configuration information from a URL. Blaming SIP for not doing these things is like blaming a car engine for not coming with a fuel tank. You are blaming the wrong thing. Blame the person who designed the phone that uses SIP for not providing those things. Don't blame SIP. It has nothing to do with SIP.

**Q. Why must I use Gmail - what is a good alternative to Gmail with all its features (cool UI, spam, deliverability, etc)**

**A.** From http://ask.slashdot.org/comments.pl?sid=2368584&cid=37014742

> BIND, Postfix+Postgrey, DNSBLs, Spamassassin, ClamAV, SPF, Cyrus, Roundcube, and Nagios monitoring everything. Every now and then I get someone panicking because he hasn't got mail for 4 hours, and every now and then I have to investigate where a specific mail went wrong. Every 2 years or so I rebuild the systems on a newer distro and in the mean time I apply updates as needed. I have learn/spam and learn/ham folders that all users can dump spam and ham in and spamassassin is trained from those. It is work to look after these things
