---
title: "Digital Certificates and Identity Management in the Indian Govt."
date: "2009-05-09"
tags: 
  - "infrastructure"
  - "security"
---

A little while back, I had gotten myself a Digital Certificate from [MTNL Trustline.](http://www.mtnltrustline.com/) - since the Indian government is taking its few baby steps towards a pure digital financial infrastructure. I think it is quite commendable, however there are some problems that still exist.

The motivation for this article comes from a [case study](http://www.ctg.albany.edu/publications/online/new_models/cases/irs?chapter=5&PrintVersion=1) for the United States Internal Revenue Service's Electronic Tax Administration. I strongly commend the Indian Goverment's strategy on this front - its a two step process: a manual identity verification step (done in person), issue of digital certificate that is then available to be used in several government transactions.

I have some problems with the way it is implemented though.

MTNL, which has the mandate for the digital certificates through its MTNL Trustline service is actually the most usable of all the certificate providers. The entire manual process was quite smooth and I was pleasantly surprised (with one caveat :The [registration site](http://mtnltrustline.com/products/online.htm) for the digital certificate is quite unusable. Compare this with the Australian Goverment's initiative -http://www.verisign.com.au/gatekeeper/).

However, the technology for actual generation of the digital certificates is [very, very bad and restrictive](http://www.mtnltrustline.com/keygencheck.htm). For example, the site is **restricted** to Windows and Internet Explorer. I would have thought that a country like India, we would provide secure, open-source and free alternatives to proprietary software and I see this as a step backward.

If I had to architect a solution, I would have used the most secure browser right now - Firefox - and created an addon like [this](https://addons.mozilla.org/en-US/firefox/addon/4471) (incidentally created by an Indian - Subrata Mazumdar) and used to generate and manage digital certificates. This solution works on Windows, Linux, Solaris, Apple Mac - any OS that supports Firefox and is much, much more secure and better than the way it is implemented right now. The addon could also remind the user when it is time to renew certificate.

The effort needed to create an addon would be a matter of weeks - the effort needed to create the backend web servers, etc. would be a matter of a month or so (using [OpenSSL](http://www.openssl.org/)). Cost of licensing would be **zero** - since they are all based on free and open source software
