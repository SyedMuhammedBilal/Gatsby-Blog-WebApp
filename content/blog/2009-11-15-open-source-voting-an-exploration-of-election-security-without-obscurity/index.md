---
title: "Open Source Voting: an exploration of election security without obscurity"
date: "2009-11-15"
tags: 
  - "election"
  - "opensource"
  - "security"
  - "votingsystem"
---

Frequently, I am asked whether releasing software as opensource, compromises security - especially when it is used in critical areas like [voting systems](http://digitalsarkaar.wordpress.com/2009/10/29/first-wicket-sequoia-voting-systems-open-sources-its-software/). Such systems can potentially make it impossible for people to claim their vote was cast falsely, ease the govt's job to audit unused ballots and even make it **impossible for** **political parties to buy votes**.

The simple fact is that security is **never** based on source-code - it is always based on the mathematical impossibility (or difficulty) of [factoring prime numbers](http://en.wikipedia.org/wiki/One-way_function). However this is, understandably, a difficult idea to digest - especially by laymen.

The easiest way to demonstrate it is,  through real life.

[Scantegrity II](http://www.scantegrity.org), is a [reliable-voting-system](http://digitalsarkaar.wordpress.com/2009/05/30/reliable-e-voting-systems/), developed by a team of researchers at MIT. The source code is, of course, [available](http://www.scantegrity.org/wiki/index.php/Getting_the_Source) for free -  as are any [patents](http://www.scantegrity.org/wiki/index.php/Scantegrity_Wiki:Copyrights#Patents_and_other_Intellectual_Property) related to it. This system was recently put to practice in the municipal elections at  [Takoma Park](http://www.scantegrity.org/takoma/index), USA.

One can see how wonderfully open the system is - by checking out the [audit website](http://sites.google.com/site/takomapark2009audit/). The digital "_seed"_ used to randomize the data is also given away at the [website](http://sites.google.com/site/takomapark2009audit/audit-data/meeting-4) ! Unused ballots are [audited and released](http://sites.google.com/site/takomapark2009audit/audit-data/unused-ballots) to the public. Note that the Election Commission meetings themselves are audited and released to public in a [verifiable manner](http://sites.google.com/site/takomapark2009audit/audit-data/meeting-1). And after the elections, any citizen can double check his/her vote on a [website](http://www.scantegrity.org/takoma/checkcodes) (however, the actual information of which vote goes to which political party is not published. Therefore there is no incentive for vote-buying).

These are all part of the process for the public to maintain faith in the system. Security is not compromised by this openness - it is only enhanced. Since any citizen can potentially audit the election, it does away with the age old problem of - _Who will watch the watchmen ?_
