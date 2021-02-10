---
title: "Getting too hot to handle?"
date: "2005-08-28"
---

[Gabe-on-EDA](http://www.gabeoneda.com) has a guest article by Tets Maniwa, whow writes about the Hot Chips conference at Stanford. Besides the perfunctory presentation on Moore's Law, it seems a focus was on power vs performance this time, especially by Intel. For example, Intel launched the [Viiv](http://www.google.co.in/url?sa=t&ct=res&cd=2&url=http%3A//www.intel.com/personal/desktop/viiv/&ei=dVURQ-uwIoHsYPyp8LMJ) platform, which is based on media-centric non-form factor devices. It essentially means chipsets which can perform tasks ranging from plain vanilla web surfing to computing intensive gaming, all taking place under the hood of a variety of form factors.

Form factors.

That is the key difference here. For this to be able to accomodate a variety of form factors, it essential to conquer the power problem. Enter William Holt and Intel.

It has been common knowledge that leakage power and interconnect losses are dominating current chip manufacturing technology generations. From a manufacturing point of view, they are trying new and funky things like high-K dielectric substrates and the new horse in the fab stable (in my opinion) - [silicon on nothing](http://www.eetimes.com/story/OEG20011203S0068). This would also cause changes in design methodologies - especially at routing (maybe a problem that companies like [Teraroute](http://www.eetimes.com/showArticle.jhtml?articleID=169400764) could solve) and in timing closure. For example, as Tets Maniwa points out, designing with multiple voltage islands is not a simple task. Current design methodologies are limited because of the extensive use of wireload models - these may be inaccurate in the face of dramatic on-chip variation (as is the case with voltage islands). This may require multiple respins of place and route to achieve accurate enough back-annotation of interconnect delays and suitable timing closure.

All in all, its an interesting world we live in.

del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda) [business](http://del.icio.us/sss8ue/business)
