---
title: "Harfbuzz, Graphite and dollar exchange rates"
date: "2009-08-23"
tags: 
  - "font"
  - "harfbuzz"
  - "hindi"
  - "ligature"
  - "linux"
  - "sil-graphite"
---

[Harfbuzz](http://behdad.org/text/) is the unified text layout engine for Linux (both Qt and Pango-Gnome). [Graphite](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=RenderingGraphite) is another text layout engine.

What's the difference?

Graphite behaves somewhat like [AAT](http://en.wikipedia.org/wiki/Apple_Advanced_Typography) - the same technology that powers Apple's beautiful fonts in OSX. It is what is called a [smart font](http://http://en.wikipedia.org/wiki/Smartfont) engine. [Problems occur](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&item_id=CmplxRndExamples) in most East Asian languages because of the complex ways that alphabets combine to form compound alphabets (what are called [_maatra_](http://en.wikipedia.org/wiki/Devanagari#Conjuncts) in Hindi). Typically, these rules are extremely complex and vary for every dialect of Hindi.

That is just one language - out of [415](http://en.wikipedia.org/wiki/Languages_of_India#Inventories) in India alone.

Linux is positioned in a very unique way for the Third World countries - no foreign-exchange-bleeding drives up adoption. However, in terms of usability, it is handicapped by lack of support for most East Asian languages in a well defined way.

And this defines the attitude

> For established scripts though, there is not much reason to prefer Graphite over OpenType.

English speaking countries are definitely not the turf for battle of OSes. A 1000$ Mac is more than 3 months salary (pre-tax) for a beginner software engineer in India. As a few [studies](http://biztech2.in.com/india/news/enterprise-solutions/it-organisations-turn-to-linux-in-economic-downturn/50832/0) put it :

> From a regional perspective, Asia/Pacific is the most bullish on increasing Linux adoption, as 73 percent of respondents said they would increase deployments on the server and 70 percent on the desktop. In the Americas, 66 percent of respondents said they are either evaluating or have already decided to increase adoption of Linux on the desktop and 67 percent on the serve

I do not know if a technology like Harfbuzz can ever solve the problem of sophisticated text layout for myriad East Asian languages - but undermining Graphite because _established_ languages do not require it, is definitely not the way ahead.

Practically, however, Harfbuzz has a lot of support gathering behind us - with Google Chrome already using it and Firefox to begin using it. What we need is integration of the Graphite rendering technology into an API compatible way inside Harfbuzz, to be enabled using a _~/fonts.conf_ . This prevents breakage for the English language users, while the rest of the world has a moderately usable desktop while they wait to catch up.

We need a H3W - Harfbuzz 3'rd World.
