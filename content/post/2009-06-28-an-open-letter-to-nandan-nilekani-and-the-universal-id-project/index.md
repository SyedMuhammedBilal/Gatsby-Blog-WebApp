---
title: "An open letter to Nandan Nilekani and the Universal ID project"
date: "2009-06-28"
tags: 
  - "nilekani"
  - "security"
  - "universal-id"
---

An Universal ID seems to be the magic pill that does all, yet it stands on a narrow ledge and could fall towards an expensive failure .. or worse, the turning of India into a police state. Take for example Iran, with its recent dubious elections and a [deep-packet inspection system](http://i1.democracynow.org/2009/6/23/deep_packet_inspection_telecoms_aided_iran), which helps them to monitor **and arrest** every citizen who posts against the govt.

A national ID project can easily turn into a system for tracking people's purchaes (you buy a book on homosexuality, using your credit card - which is linked to your Universal ID and which helps the govt to include you on a watch list). As Bruce Schneier [puts it](http://www.schneier.com/blog/archives/2009/02/privacy_in_the.html), it can easily turn into a grim reflection of a police state.

What is worse is that they dont help with our security problem - again, as Bruce Schneier's essay [puts it](http://www.schneier.com/essay-034.html), the 9/11 terrorists carried **valid** id cards, under false names.

I am even more worried if we decide to go for RFID - as has been shown repeatedly, RFID is extremely unsecure and easily [hackable](http://www.schneier.com/blog/archives/2008/01/dutch_rfid_tran.html), at a distance. I would be be very [paranoid](http://www.schneier.com/blog/archives/2004/10/rfid_passports.html) at the thought of the police going around with a couple of RFID scanners at a political rally and get the names of all the citizens who attended the rally - t**o be used in specifically targetted scare tactics later**.

Enough with the complaints - I am more concerned with the architecture of the **system.** The ID is but a portable token, the juice actually flows from a database, with all its complexity of authentication and authorizations. There is an excellent [report](http://www.dhs.gov/xlibrary/assets/privacy/privacy_advcom_05-2007_realid.pdf)\[PDF\], released by the US Department of Homeland Security, which describes the risks involved in the REAL-ID project of the US govt. Here are two of the most interesting recommendation made by the Deptt. itself:

> I. We recommend that DHS re‐evaluate the appropriateness of  the proposed technology for the Machine Readable Technology.  If the current  approach is maintained, the Final Rule should require a reduction in the amount and the type of information stored in the MRZ to include:
> 
> - Bearer’s name and address
> - Unique record identifier ‐ not the license number, but used to look up the license number on the state system
> - License issue and expiration date

> II. The Final Rule should require that states are accountable for the  personal information they collect and store and should assign individual responsibility to carry out that duty.

> III. The Final Rule should require that states include procedures for  individuals to submit inquiries and/or complaints about compliance with stated  collection, storage, use, sharing, and management of personal information in their Comprehensive Security Plans.

Now that safeguards are built in the policy, it is interesting to see how the architecture will be built that will support this.

I propose that the entire system be built using **open-source technologies**. This will prevent one of the countries most important security infrastructure, to be beholden to a companies' board of management. A number of private contractors, universities (including mine and Nilekani's alma mater - IIT Bombay) can be involved - but the source code for developing the infrastructure, the SQL queries, etc. should be made open source.This will have the added benefit of having the source whetted for security problems by anyone.

There will be a lot of FUD - Fear , Uncertainty, Doubt - sowed about the horrors of having such a critical system as open source, but remember this is not _security through obscurity._ If you dont find your own security holes fast enough, China will [do it for you](http://www.dnaindia.com/report.asp?newsid=1243563).

I propose that the authentication system be done using [SAML - Security Assertion Markup Language](http://xml.coverpages.org/saml.html). It is the same system that is being [used by the US Navy](http://www.eweek.com/c/a/Government-IT/Navy-Deploying-Its-Battle-Plan-SAML/) for a single sign-on authentication in its battlefields **as well as** for mundane things like email. What's better is that there are several [open-source implementations](http://saml.xml.org/wiki/saml-open-source-implementations) also available.

I also propose that the database be either built on [PostGresSQL](http://www.postgresql.org/) or [HBASE](http://www.searchenginecaffe.com/2007/05/hbase-powersets-bigtable.html) (which is being used in production at various search engines - including Yahoo - to power its huge petabyte scale databases). Both are open source, are highly scalable and have a great developer community.

The value that Nandan Nilekani brings as a person, is the ability to understand and make informed decisions about technology. A centralised database of identity could be the weakest link in India's cyber-security, one that can be broken down at a distance, rather than by people coming in on boats. Any system is **inherently hackable.** You need to build the system to not give people **authority**, on the basis of their credentials (which can be valid, though fake), but **authenticate** **only**.

And more importantly, let us not be slaves to closed source black-magic, just because Wipro or Infosys insists on annual maintenance contracts.
