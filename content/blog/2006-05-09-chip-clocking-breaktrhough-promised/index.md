---
title: "Chip clocking breakthrough promised"
date: "2006-05-09"
categories: 
  - "eda"
---

A chip design startu, [Multigig Inc.](http://www.multigig.com/over.html) has promised a new design methodology that could result in power reduction of 75%. Now, I strongly suspect this is dynamic power as opposed to leakage power (which would require changes in manufacturing processes).

If this works, this would be very cool (pun intended). For a long time now, all efforts towards power reduction have focussed more and more on manufacturing processes. Dynamic power reduction has been focussed more and more on the placement side with technologies like optimal lib-cell, voltage islands, etc. And of course, there is always the heuristic driven clock-gating methodology.

The approach that Multigig vouches for, is something that would have to be taken care of at CTS (Clock Tree Synthesis). I was puzzled at how they would take care of skew, etc. However, going by one of their research [abstracts](http://www.ieeexplore.ieee.org/search/freesrchabstract.jsp?arnumber=962285&isnumber=20772&punumber=4&k2dockey=962285@ieeejrns&query=%28wood+j.%3Cin%3Eau%29&pos=12) it appears they are going to be using distributed CMOS inverters to take care of amplification - not unlike buffer insertion into Clock-Trees.

I suppose the basic premise is that phase-locked loops take lesser power than conventional clock-generators. However, I would be very interested in seeing how they take care of routing. Clock **Trees** do not need to be looped back, which eliminates the need for an entire section of wires - however this approach does need it. Taking care of coupling, etc. and maintaining area would not be funny.

In any case, I cant see any of their [papers](http://www.multigig.com/pub.html) talking about area implications

del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda)
