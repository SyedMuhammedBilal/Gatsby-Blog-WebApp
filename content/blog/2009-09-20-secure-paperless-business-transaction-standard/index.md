---
title: "Secure paperless business transaction standard"
date: "2009-09-20"
---

The European Union is [standardising](http://www.etsi.org/WebSite/NewsandEvents/200909_ElectronicSignature.aspx) on the PADeS - Advanced Electronic Signatures for Portable Document Format (PDF) - for all secure paperless business transactions done in the EU. While this is quite interesting, I have a problem with establishing PDF as an information standard. PDF is a layout mechanism - which means it defines how things look on the screen - rather than a content based mechanism. It is quite hard to parse data from within PDF in a predictable manner. According to a [press release](http://www.adobe.com/devnet/digitalpublishing/pdfs/EPUB_datasheet.pdf) by Adobe itself, [ePub](http://en.wikipedia.org/wiki/EPUB) is a XML based format that looks reasonably good on a variety of screens (including mobile screens) , is machine readable and has various encryption schemes built in.

Though the EU standard does define XAdES - XML Advanced Electronic Signatures - it is hardly practical, since XML (in its native form) is not human readable. What would have been best would be a hybrid format that defines layout (for human readability), **as well as** digital content (for machine readability).

This makes it extremely hard to justify standardising on PDF rather than ePub. In India, we are yet to define a paperless standard of our own - when we do so, I hope we take this into account.
