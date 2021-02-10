---
title: "Distributed EDA: sharing some CPU love"
date: "2008-09-26"
tags: 
  - "eda"
  - "programming"
---

**Is HDL simulation is amenable to distributed computing ?**

It all comes down to paritioning. Consider [map-reduce](http://en.wikipedia.org/wiki/Mapreduce "Mapreduce @ Wikipedia") - a paradigm borrowed from the Buddha of programming languages: LISP.  The map-reduce paradigm, a mainstay of parallel processing, is dependent on operations being [commutative](http://en.wikipedia.org/wiki/Commutative) and [associative](http://en.wikipedia.org/wiki/Associativity). 

I dont know how far will that get you in EDA.

Consider simulation - symbolic simulation (which is greatly used in formal verification), generates intermediate symbols to propagate further. This is actually done to stop explosion of minterms and to parition the assertions and verifications. This is the starting step for partitioning a simulation problem.

Now consider loops - you simplify this by actually making two copies of the node (corresponding to the forward path and backward paths) and send them off to the machines where they are to be processed.

Enter [locks](http://en.wikipedia.org/wiki/Synchronization_(computer_science)). Exit stage left.

Synchronization is among those problems of programming that starts with double espressos and ends off with sleep deprivation drugs. I'm not talking about computer science mind you - the lowly sweatshop programming is what I am referring to. 

I can imagine of various situations where you hold a lock on a node, and you need to communicate that to another process (on another machine or the same machine) - maybe the forward path problem doesnt have the right to hold the lock, because the backward path problem is the higher priority one. 

Enter priority scheduling and interrups. There is no stage.

It is a hard programming problem. Perhaps it can be better tackled in functional programming languages **with a strong message passing paradigm**  like Erlang.  But then EDA computing is highly, highly processor intensive - even on a single computation. I dont know how far that will scale - but as hardware is getting cheaper, I think it is time someone in EDA made the bet on functional programming languages and throw lots of cheap hardware at the problem.

I think it will scale better than expected.
