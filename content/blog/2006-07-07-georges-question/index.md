---
title: "George's Question: Of threads and cores"
date: "2006-07-07"
categories: 
  - "compiler"
  - "software"
---

[George Harper](http://chipsandbs.blogspot.com) asks a nice [question](http://chipsandbs.blogspot.com/2006/07/multi-cores-and-microsoft.html) - Are next gen multicore technologies even possible: One that take advantage of multiple cores at the thread (or even smaller) level.

Here's [my take](http://chipsandbs.blogspot.com/2006/07/multi-cores-and-microsoft.html#c115224980988060732) on it -

> In my opinion if there is a way of efficiently handling race conditions at the hardware level then it could (atleast partially work)
> 
> Now this is non trivial because compilers map into a lot of virtual registers, which are later mapped onto hard registers. The problem is that the same virtual register (in two threads) can be mapped to different hard registers. I havent thought this problem through, but problems like these need to be solved before anything can be done ... and remember register allocation itself is NP hard (bin-packing) problem.

Let us go down to the basics and see what do current processors do : **Simple Multithreading** This is basically a misnomer, the processor switches between different processes so fast (_context switching_) that we are led to believe that multiple processes/threads are running simultaneously. **SMP Multithreading** SMP - _Symmetric MultiProcessing_ means an architecture with multiple-cores on it. In this architecture the easiest way to do multiprocessing is to have an entire process on a core. Highly inefficient. **SMP Superthreading** Lets not get too carried away by the _super_ marketing jingo, it is a different way of scheduling threads which is much more efficient. Say for example there are 4 pipelines (each 10 deep) in the cpu and 2 processes. Then after decoding the instructions, the decoder sends one or more instructions to **ALL** the four pipelines **simultaneously**, for **each thread**. What that means is a particular position (say depth 6 of all 4 pipelines) will either have an instruction from one particular thread, or it will have nothing. A valid question is why have the above requirement at all and why not just mix and match.

This is where I believe (!) my earlier contention comes through - the throughput of all 4 pipelines is the same, therefore a particular slot in all the pipelines will be computed simultaneously. First of all, the decoder in the cpu does funky things like **branch prediction** (which when it goes wrong has to result in **ALL**  instructions corresponding to that branch prediction to be flushed) and second of all, a single variable in both the threads might be used - a slot position in the pipelines is more-or-less atomic **Hyper-Threading** Another technology marketed by intel  - in this architecture instructions from different threads are more or less mix and matched. This architecture is highly library and compiler dependent. This is because the ROB (CPU Reorder buffers), etc. cannot take care of the race conditions, the compiler must generate code which avoids race or flag race conditions in code. I think a large part of building multi-threaded applications is in the compiler - OOE (out of order execution) should be able to avoid race conditions if compiled that way. Given that the scheduling is correct (say for example two simultaneously accessing threads are one after the other in the pipeline queue), the next part is to build hardware support for locking, etc. Not an easy problem, but a very interesting one. del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [compiler](http://del.icio.us/sss8ue/compiler)
