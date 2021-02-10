---
title: "How a country's IT infrastructure is held hostage"
date: "2009-10-27"
tags: 
  - "activex"
  - "firefox"
  - "openoffice"
  - "opensource"
---

There is a very interesting [article](http://english.chosun.com/site/data/html_dir/2009/10/27/2009102700899.html) about South Korea's internet problem - it is stuck to using Internet Explorer and ActiveX technology. Which means that the people of South Korea do not have choice in using the safer browsers (Firefox, Chrome) or other operating systems (Linux, Apple Mac).

Every citizen, no matter how poor, needs to pay for a license of Windows - unless he/she wants to stay away from using the govt's websites, bank websites, etc.

It all happened because of a [choice](http://www.kanai.net/weblog/archive/2007/01/26/00h53m55s#003095) the govt made - to develop a non-standard encryption standard called [SEED](http://en.wikipedia.org/wiki/SEED). Adhering to the technology choices of that time, the govt. developed a ActiveX [plugin](http://webstandard.or.kr/en/?p=10) that was made [mandatory](http://opendotdotdot.blogspot.com/2008/07/activex-law-in-korea.html) for any kind of secure access (for example to bank websites, etc.).

The world moved forward - ActiveX as a technology was found to be a significant security risk. However, South Korea remained to be stuck to its old technology. The situation became so bad that the govt. [advised](http://english.chosun.com/w21data/html/news/200701/200701240013.html) its citizens against using Microsoft Vista, because the ActiveX plugin would not work on it.

In the first week of October this year, a [patch](https://bugzilla.mozilla.org/show_bug.cgi?id=478839) was added to Mozilla Firefox (by volunteers of Mozilla along with employees of Korea's govt. agency) that **may or may not** work in actual practice.

What has this got to do with India ?

We do the exact same thing.

As I have written before, we have a few similar issues:

- the digital certificate registration site is [only usable](http://digitalsarkaar.wordpress.com/2009/05/09/digital-certificates-and-identity-management-in-the-indian-govt/) using Internet Explorer (rather than a standardized system accessible to all browsers)
- Income Tax deptt's site [uses a proprietary](http://digitalsarkaar.wordpress.com/2009/07/23/cryptographic-usage-on-indian-govt-websites-why-the-java-fetish/) Java plugin for certificate upload (rather than use free plugins for browsers like Firefox)
- Income Tax deptt's [tax calculation tools](http://digitalsarkaar.wordpress.com/2009/07/22/not-free-after-all-indian-govts-free-income-tax-software/) are all in Microsoft Excel (which costs Rs 20000), rather than the free OpenOffice format.

We need to get rid of such lock-in immediately - or the _aam aadmi_ will need to shell out a month's salary to calculate his income tax.
