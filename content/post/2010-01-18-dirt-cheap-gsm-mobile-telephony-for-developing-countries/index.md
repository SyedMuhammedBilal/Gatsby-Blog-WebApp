---
title: "Dirt-cheap GSM mobile telephony for developing countries"
date: "2010-01-18"
tags: 
  - "asterisk"
  - "openbts"
  - "rural-telephony"
---

This [discussion thread](http://groups.google.com/group/village-telco-dev/browse_thread/thread/d4465cf1a54f6690?pli=1) (as part of a special interest group - [Village Telco](http://groups.google.com/group/village-telco-dev) ) is quite interesting in its discussion about an open-source, low cost, GSM base station for developing countries.

A very common question that crops up is why not use special technologies like Wireless-in-Local-Loop, Wimax, etc. technologies for low cost, rural communication ? The answer is because of the extremely low cost of consumer GSM hardware (cellphones) as compared to more expensive handsets you would need with other systems. Moreover, the technology to build value-added-services (e.g. weather forecast systems through SMS) is well established in the mobile telephony world - it is not so well developed in other technologies. Which means, you are basically stuck with plain voice if you do not use GSM as your communication foundation.

One of the key part of any mobile telephony network is a Base Transceiver System (or BTS in short). A BTS can cost anywhere from a few lakhs to a few crores - depending on whether the system is 2G, 3G, 4G, etc. The [OpenBTS](http://openbts.sourceforge.net/) project is an attempt to recreate a BTS using software rather than expensive, custom hardware. such a system is also known as USRP (Universal Software Radio Peripheral).

A typical system would be OpenBTS mobile network connected to VOIP lines (through the [Asterisk](http://www.asterisk.org/) open source telephony project) and suddenly you have a cellphone system which is connected the whole wide world.

Pity it will never happen - too difficult to get around entrenched service providers to create a service that can truly deliver education, health and other necessary information to India's villages.
