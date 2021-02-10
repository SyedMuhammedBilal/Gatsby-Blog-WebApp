---
title: "COSA: Is it for real?"
date: "2007-08-17"
categories: 
  - "compiler"
  - "software"
---

So today I ran across [this](http://eetimes.com/news/latest/showArticle.jhtml;jsessionid=2XV2J2EBFPNVUQSNDLSCKHA?articleID=201800428) article in EETimes about a new software development paradigm - **Coherent Object Software Architecture**. It seemed to work on a FSM (Finite State Machine) -cum- Decision Diagram type of model for software. Since, I have [frequently](http://sandeep.wordpress.com/2006/07/07/georges-question/) given [thought](http://chipsandbs.blogspot.com/2006/07/multi-cores-and-microsoft.html#c115224980988060732) to parallel programming, it seemed interesting to me when it claimed:

> ...that could make it easier to write parallel programs for multicore processors...

However, the next few lines brought this:

> ..enables fast pre-empting of threads and brings a new level of traceability to processes

Now, hold on to your horses just one moment - basically all these claims can be covered by the "more maintainable, less verbose, compacter code" paradigm. So implicitly, unless your compiler is doing some magic to reduce stack space (which is what gets saved in context switches while thread preemption), it is basically saying your code will be better, hence all problems solved.

I had always thought it would be compiler technology that would enable us to write better parallel programs - but perhaps its not such a bad an idea.
