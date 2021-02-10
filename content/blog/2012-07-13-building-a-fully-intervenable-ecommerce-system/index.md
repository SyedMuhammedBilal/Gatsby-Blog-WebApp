---
title: "Building a fully \"intervenable\" ecommerce system"
date: "2012-07-13"
---

Complexity of ecommerce in Asia goes beyond a simple magento storefront and a mysql database. For example, an important payment method in India is cash on delivery - which means a transaction's semantics get completely twisted around. When is a COD transaction considered complete - at the time of online order (no money yet), at the time of delivery (amount collected not sent back to the company), or when money is finally sent back to the company (amount collected may mismatch).

Issues like these mean that Asian ecommerce must be built around a fully intervenable/overridable system, where each and every aspect of the system can be overridden manually.

Doing this is very hard - because how and when do you reconcile your finances? What is a delivery ? These in itself are flexible notions.

This is not simply typical of financial processes - it is very true in case of the core application itself. Bulk edits of products, bulk discounts to be applied ... all mean that your systems should be amenable to manual edits and intervention. Oh, but when you do this, your search index is now dirty and needs to be refreshed - so you better build a search system that you can refresh in specific parts.

It fundamentally brings to light a very simple aspect of engineering - **build a lot of tools to change data**.  It is at this point that your Magento installations start falling apart - primarily because a lot of these tools start being built as "modules"/"plugins"/"scripts", when really what needs to be done is to build scalable tools that take care of things like concurrency and queueing ("oh damn... the price got overridden because I pressed the button a second too late")

building an intervenable system is hard - because building these tools are hard.
