---
title: "Multithreading paradigms: windows and *nix"
date: "2008-03-31"
categories: 
  - "c"
  - "linux"
  - "windows"
---

Before we visit this topic, let us go off-topic for a bit: let us examine the CFS scheduler (part of the Linux GIT tree after 2.6.22) and the round robin Windows scheduler.

The Ingo Molnar developed CFS (Completely Fair Scheduler - inspired by Con Kolivas' SD scheduler) maintains a RB-Tree of "_wait\_runtime"_. When a task's _wait\_runtime_ increases so that some other task is now the leftmost task (I assume they are using "Strictly Weak Ordering" to define leftmost), the new task pre-empts the previous task and gets hold of the kernel.

The Rotating Staircase Deadline scheduler by Con Kolivas constituted queues at each priority level. At a given priority level, scheduling happened using a standard Round Robin algorithm. When a task used up its timeslices, it dropped to a lower priority level but with a different quota. This makes it (reasonably) sure that every process gets a slice of processor time.

It is easy to see how the RB-Tree based approach is similar to the queue based approach - as I understand it, if we use the principle of "Strict Weak Ordering", we find all the nodes with similar priority before we go on to any other node. Therefore in effect, it is the same thing.

As far as I can understand - Windows uses a standard round-robin based scheduler ( to be more precise  [Statistical Rate Monotonic Scheduling](http://lite.ncstrl.org:3803/Dienst/UI/2.0/Describe/ncstrl.bu_cs%252f98-010))

As far as differences in thread types are concerned - [several](http://world.std.com/~jmhart/opensource.htm) [people](http://softwarecommunity.intel.com/ISN/Community/en-US/forums/post/840096.aspx) have commented about it. (I can completely sympathize with the notion that WaitForSingleObject does not tell you whether you are working with a mutex, an event or something else!)

But I am not able to find an apples to apples comparison between performance of threads in Windoes vs XP.

Next time maybe...
