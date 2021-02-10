---
title: "DDA allotment software - scam and audit"
date: "2009-10-27"
tags: 
  - "security"
---

The housing allotment scheme of the Delhi Development Authority, has been under investigation for some time because of the possibility of the software having tampered with. Today's news [mentions](http://economictimes.indiatimes.com/News/News-By-Industry/Services/Property-Cstruction/DDA-given-clean-chit-in-housing-scam/articleshow/4878685.cms) the software having audited by Centre for Development of Advanced Computing and having gotten a clean chit.

Looking at C-DAC's [security research report card](http://cdachyd.in/research-development/e-security), does not exactly inspire confidence in its security hole research department. First of all, all its existing security efforts are focussed towards network security, rather than application security - which is what the DDA software seems to be all about.

Secondly, what were the security audit standards followed? The layman might see and have confidence in C-DAC, but there are rigorous [security and audit standards](http://www.vita.virginia.gov/library/default.aspx?id=537), which are the norm in most countries of the world.

Take for example [ITRM SEC502](http://www.vita.virginia.gov/uploadedFiles/Library/PSGs/Microsoft%20Word%20-%20IT%20SecAuditStd%20_ITRM%20SEC502-00_%20amend%202008%2002%2021.pdf) standard of the U.S. -  this defines the flow of role and responsibility in a security audit. [ITRM SEC512](http://www.vita.virginia.gov/uploadedFiles/Library/PSGs/ITSecurity_Audit_Guideline_512_00_jan09.pdf) defines the paperwork needed to audit the trail of whatever security measures and threat assessments have been made.

Companies like Coverity are [commissioned](http://arstechnica.com/security/news/2008/05/dhs-sponsored-audit-number-of-oss-code-defects-dropping.ars) (who have a proven track record in application security audit - and have done so for millions of lines of code for free as well) by governments to audit their software. Note that this is not the same as network security audit.

Moreover, a housing allotment software most probably works through a PRNG ([Pseudo Random Number Generator](http://en.wikipedia.org/wiki/Pseudorandom_number_generator)) - which is strongly dependent on the Operating System (windows XP, Vista, etc.) and the underlying hardware. There are several [ways](http://www.schneier.com/yarrow-attacks.html) in which a PRNG may be attacked - and all of them need not be in the software itself. It can be a **different** piece of software that affects the working of the computer's PRNG.

Until the details of what was audited is not revealed - this charade is going to go on.
