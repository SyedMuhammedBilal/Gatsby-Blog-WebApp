---
title: "And God said...let there be"
date: "2006-09-21"
categories: 
  - "eda"
  - "software"
---

And there was a new EDA tool. Rife with all the pleasures of architecting it and the pains of seeing it dissected by infidels!!

> But verily I say unto thee, I will show you the path of     O(log n) complexity upon which you will walk with <10% inaccuracy!!

A large part of EDA tool designing is being able to think ahead of the designers - huddling together and brainstorming on how a designer may be working on his design and the ways that fundamental assumptions in which an algorithm is designed could be broken. But of course, there is always the disconnect between working day in and day out on C++ and thinking in terms of Verilog. Naturally, there are trip ups .. but the question is - how many do you have? How well have you anticipated the breakages?

Which brings us to another aspect of programming - the _assert_ construct. Similar to the discussion of [_whether Balrogs have wings_](http://www.glyphweb.com/ARDA/b/balrogs.html) , there is nothing in the [debate](http://groups.google.com/group/comp.lang.c++/msg/bad7a8029bc09b7a) of the _assert_ that has not been beaten to death. I believe that _assert_ is invaluable as a developmental/prototyping tool in the hands of a developer. However, as development progresses from _code monkeying_ to _testing_ , the asserts in the code should be phased out **when they are hit**. Instead, they should be replaced with comments and handling of code for exceptional circumstances.

If you dont handle inout ports, then you dont. While writing code, you could have asserted to check that you only get input ports. Suppose, you manage to write a testcase that gets you an inout gate. Wham! You assert out of the program, however now it is the responsibility of the developer to handle such situations cleanly and gracefully (since it is proven that such situations may occur).

Therefore an **effort** has to be made to test the code to remove assertions. I personally believe that the greatest embarassment is when a piece of software asserts at in a customers face - which means he did something you did'nt anticipate...or more dangerously.. did'nt reproduce in your testing.

And so the endless circle goes on....

On the topic of circles, I never knew that GDSII [had support](http://www.eet.com/news/latest/showArticle.jhtml?articleID=10806053) for **curvilinear shapes**. What the hell do you do with curvilinear shapes in chips? And somebody please explain why a data format that is 10 times better than GDSII has [no adopters](http://www.eetimes.com/news/design/showArticle.jhtml?articleID=193004337).

del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda) [software](http://del.icio.us/sss8ue/software)
