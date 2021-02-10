---
title: "Kansas just went bye-bye"
date: "2008-03-16"
categories: 
  - "business"
  - "eda"
  - "linux"
  - "personal"
  - "software"
  - "startup"
---

Its been more than a week, and I got the heart to post this now. I have moved away from Calypto... and EDA (in my daily work routine atleast). I have moved to a new hush-hush company working with grid computing and distributed systems. And what's more.... I am working on the Windows platform.

Mind you I am working on using the Windows core architecture - so it has been a paradigm shift for me, rather than just transitioning from gcc to Visual Studio (although I insist on using "Vim" and "vimgrep" for any work - no compromise!)

It is certainly a difficult question to answer why. If I had to choose one word as an answer, I would choose "**impact**". When I see the tech landscape around me, I see people having a much larger impact than, I believe, I have succeeded in making. In both the EDA companies I have been, I have definitely seen my contribution and my work making a difference to how a chip is designed, but I dont affect it to the scale that I have wanted to.

I have a reasonable amount of technology and more specifically - code - absorbed into my DNA by now. However, at this point I want to see if at all it is possible to take that, and put it somewhere where I can beget a bigger footprint.EDA has certainly [taken](http://sramanamitra.com/2008/02/08/cadence-crashes-now-what/) [a](http://sramanamitra.com/2008/02/12/pdf-offers-value-finds-scaling-difficult/) [beating](http://jab-semi.blogspot.com/2008/01/cdns-like-rock.html) to its reputation recently, but I truly believe that a large part of the ability to beat Moore's Law, comes from the engineering that goes into EDA products.A value like that cannot be overlooked.

But yes, I have to concede that I have been concerned on the long term outlook of EDA - whether it can exist as a standalone industry, or will it be subsumed in the design industry. I truly hope it remains independent - a large part of EDA innovation stems from the fact that we are able to access designs and methodologies from various different places.I do not know it can continue by being restricted to a single design entity. Which makes this original suggestion from [Sramana Mitra](http://sramanamitra.com/2005/08/09/future-of-eda/), more relevant - by integrating with foundries, the EDA industry can avoid the myopic access that a design company will give it.

It has not been easy bridging the gap - Windows is certainly not an easy platform to work on (after being used to \*nix). But I have learnt quite a bit to make me feel more at home. I integrate Visual Studio with vim (and use its inbuilt grep utility "vimgrep"). I use Windows PowerShell to take advantage of features like startup ".rc" scripts, unix-like key mappings, etc. I use Virtuawin to have multiple desktops on Windows ...

Visual Studio is a piece of brilliant engineering.Its debugger  are simply too good (a reluctantly conceded victory). Downloading a few PDB files (for debugging symbols), effectively shows me how the entire Windows internal call-stack works.

And I now understand why Windows needs a registry !

I have discovered a different .. sensitivity.. to working in new environments. EDA software has its share, but now I truly understand the paranoia behind code-stealing, IP protection... yadda yadda yadda. I have, till now, worked on monolithic software, where a huge amount of code (right from the build scripts to the list of globals) is required to get anything to even compile. And here I work, where the operating system itself is the platform - I can as easily do my entire work at home from scratch.

What can I say - Dorothy forgot to buckle her seatbelts...
