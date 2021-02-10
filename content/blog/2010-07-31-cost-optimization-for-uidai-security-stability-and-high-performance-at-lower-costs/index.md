---
title: "Cost optimization for UIDAI : security, stability and high-performance at lower costs"
date: "2010-07-31"
---

This is in regards to the recent news about reduced budget allocation for the UIDAI project. I have been investigating technologies that are able to deliver on your original mission and targets at a significantly reduced cost.

Most of the technologies I refer to are built upon very robust Open-Source foundations.

Reuse of these components could go a long way in reducing capital overlay and redundant effort.

There is another reason for the choice of these technologies - these offer unparalleled security, performance and stability. This may sound surprising, but it appears feasible when you realize that most of these technologies have the backing of gigantic enterprises like Google (for distributed computation), Yahoo (for high performance search), Paypal (for security and databases), NSA (for security), etc.

**Biometric middleware**

As per the tender documents, the UIDAI have planned out that biometric hardware be sourced from different manufacturers. This is a great idea to prevent total reliance on any one vendor and also reducing chances of bugs. However the next step is to make sure there is a middleware that is able to connect all these different hardware and incorprorate workflows, error recovery and security.

The **Multimodal Biometric Application Resource Kit (**[http://www.nist.gov/itl/iad/ig/mbark.cfm](http://www.nist.gov/itl/iad/ig/mbark.cfm)) is a public domain effort which was initiated by the U.S. Govt. as a response to their **[National Biometric Challenge](http://www.nist.gov/cgi-bin/exit_nist.cgi?url=http://www.biometrics.gov/NSTC/pubs/biochallengedoc.pdf).** As per their own [goals](http://mbark.nist.gov/docs/MBARK_brochure.pdf):

> Despite existing efforts, building modern biometric applications (or clients) that are flexible with respect to changes in sensors, workflow, configuration, and responsiveness remains both difficult and costly. The Multimodal Biometric Application Resource Kit, or MBARK reduces the complexity and costs of implementing such an application. MBARK is public domain source code that may be leveraged to develop the next-generation of biometric and personal identity verification applications.

The source code is available in the .NET format (hence, Windows only) - however, it could be easily ported over to any framework that you choose.

It is also accompanied by the **[Biometric Configuration Domain-Specific Language](http://biometrics.nist.gov/cs_links/mbark/docs/BiCCL_NISTIR_7531.pdf)** that allows client biometric devices to directly encode their **intent** w.r.t the biometric information acquisition process. It is an important tool to validate and guarantee security at the collection points.

Network Transmission Standards for Biometric Data

The Federal Bureau of Investigation (FBI) has [specifications](https://www.fbibiospecs.org/biospecs.html) for how biometric data should be transmitted. This takes into account various use cases like local-to-FBI transmission, sharing of identity history information, etc.

The most relevant of these standards is the **[Electronic Biometric Transmission Specification (EBTS)](https://www.fbibiospecs.org/ebts.html).** An opensource implementation of these standards (source code

) is at the [OpenBiometrics Initiative](http://www.openbiometricsinitiative.org/download.html).

**Federated identity management**

Most of the UIDAI's programming interfaces have been designed with a view that identity information is never stored anywhere, except at UIDAI. If you pay attention to the micropayments document (published by UIDAI), you would see that they implicitly trust UIDAI's correctness.

Let's take that one step further - imagine if the micropayment is moving forward to a insurance provider, or a loan provider, etc. etc. - then what is happening is that this new party is trusting the **bank's** correctness. It might be happening that at some point, this new party is also interacting with UIDAI servers, but nevertheless the fact remains that the bank is now implicitly the identity provider for the new party.

This is unavoidable - this is why you need to have **federated identity** workflows.

Source code for several of these federation toolkits is available at SourceID. The most ambitious project (and used in production in various universities) is [Shibboleth](http://shibboleth.internet2.edu/). Though originally architected for web-based federated identity, it can easily be adapted for UUID - since a system designed for the open internet has to be much more secure.

**Server & Systems Infrastructure**

**_Operating Systems_**

There is absolutely no reason why the entire backend server and systems should be built using anything but Linux. Windows have absolutely no performance advantage, however you are also safeguarded against export restrictions (anytime in the future), since you will be able to retain the source code as well as the **build infrastructure** for Linux. A significant majority of all internet and banking related infrastructure is built using Linux.

A recent example is the London Stock Exchange, which chose to dump its Windows-based Tradelect system and acquired a Sri Lankan company to enable its migration to Linux ([http://technology.globalthoughtz.com/index.php/london-stock-exchange-goes-the-linux-way/](http://technology.globalthoughtz.com/index.php/london-stock-exchange-goes-the-linux-way/))

**_Databases_**

The database to consider is the open source [PostgreSQL](http://www.postgresql.org/) database server.

Here ([http://www.enterprisedb.com/solutions/business\_case.do](http://www.enterprisedb.com/solutions/business_case.do)) is a case study of a company offering Postgresql case studies - it demonstrates a **83%** cost savings over OracleDB. The upcoming [PostgreSQL 9.0](http://wiki.postgresql.org/wiki/Illustrated_9_0) release provides features similar to Oracle Dataguard for free - this allows the system to keep running even after a catastrophic failure has knocked out the main server.
