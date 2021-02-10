---
title: "Security protocol for an India-wide national ID"
date: "2009-05-09"
tags: 
  - "security"
  - "sourcecode"
---

For a long time now, people have been talking about merging the PAN card, voters ID card, etc. into a single card for every Indian.

Of course, there lies the problem of guaranteeing security through a well defined and researched workflow. Most IT related decisions in the government take place through lack of knowledge on what digital security means and it is always assumed that writing a program which no else knows about (perhaps in a large outsourcing company) ensures security . This is called "[**security through obscurity**](http://en.wikipedia.org/wiki/Security_through_obscurity)" and it means

> an attempt to use [secrecy](http://en.wikipedia.org/wiki/Secrecy "Secrecy") (of design, implementation, etc.) to provide [security](http://en.wikipedia.org/wiki/Security "Security")

There is an alternative - put the source code of any program which you use for security up for public audit and rely on mathematical constraints to enforce security (like Public Key Cryptography, which is the foundation of all e-commerce)

One such system is the [PLAID](https://www.govdex.gov.au/confluence/display/PLAID/Home;jsessionid=C93B2B495C1DB55F74347B033712A3A9) - Protocol for Lightweight Authentication of Identity. It is a system which was developed by the Govt. of Australia for authentication of smart-cards. It was developed by them for about 500,000$ and then [released for free](http://www.computerworld.com.au/article/301216/centrelink_issues_500k_unbreakable_code_free) in the public domain.  It comes with a detailed description of the specs as well as sample [source-code](https://www.govdex.gov.au/confluence/download/attachments/61931545/PLAID_Reference_Implementation_Version_7.1.zip?version=1).

I would say that, this should make it the primary candidate for the security system for a national ID scheme. I will be much more comfortable knowing my identity is protected by a well audited system.
