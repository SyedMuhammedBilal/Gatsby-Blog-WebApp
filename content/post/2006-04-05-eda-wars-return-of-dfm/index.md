---
title: "EDA Wars: Return of DFM"
date: "2006-04-05"
categories: 
  - "eda"
  - "software"
---

I was going through one of John Cooley's slightly older [posts](http://www.deepchip.com/posts/0453.html), where he talks with two startups about DFM and what might happen in the world of EDA.

The interesting part that I saw was where everyone was speculating about who will have a consolidated DFM flow. Most of them hedged their bets with the Big Three - for no other reason, but the fact that they have an entire suite of tools.

Me? I bet its Magma.

Let us analyze how EDA tools maintain data - you have a set of base wrappers, which give rise to a little specialized wrappers and which may further be branched off into a million different highly specialized classes. Suppose, you had two different tools, a.k.a two different sets of base wrappers. Now, to be interoperable, you would have to fit in translators, to convert from one format to another.

Not too big a job - hell even one of us, underpaid developers in third world countries, could do that.

However there is a problem when you are dealing with stuff like DFM. In one short word, I would call the problem "incremental".

What happens is that whenever there is a change in the data - it may be change in netlist, or change in operating conditions, or change in naming conventions - there are two ways to do it. One could, iterate over the whole data and identify wrappers of data to-be-changed.. or ... we could register what are called _callbacks,_ which are hooks into change-procedures, and which actually change data. Maintaining callbacks between two sets of disparate data containers and keeping it consistent is **very** tough.

Now, let us look at [US Patent #6,505,328](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=/netahtml/srchnum.htm&r=1&f=G&l=50&s1=6,505,328.WKU.&OS=PN/6,505,328&RS=PN/6,505,328), a patent which belongs to Magma.  The interesting part is

> ...
> 
> What is claimed is:
> 
> 1\. A common data model representing a circuit that will be fabricated on an integrated circuit chip comprising: a data representation including a plurality of objects that together represent the circuit, certain ones of the objects including a netlist portion that represents a corresponding portion of the circuit, and each of the objects: being logically correlated to at least one other object so that all of the objects describe the circuit;
> 
> .... 
> 
> 15\. The model according to claim 1 wherein the area query takes place either immediately after synthesis or during final placement and routing. 

Very interesting. There is such a tight correlation between synthesis and layout data - area based queries also work. Which means that the underlying data model supports multiple layers of cascaded callbacks (where one callbacks trigger another) and consistency at several levels of design abstraction.

Why is this needed? Designers deal with changing design representations - they play around with operating conditions, timing constraints, area, power and a whole lot of things. Now add foundry data to it. And you have the need to maintain consistency and _speed_ when the user changes a little stuff. Things should be incremental - if they need to be recomputed completely, then all the Ph.D projects to date would have been multimillion dollar products.

But of course, there could be a major data-structure redesign going on in the other places too. Only time would tell.

 del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda) [software](http://del.icio.us/sss8ue/software)
