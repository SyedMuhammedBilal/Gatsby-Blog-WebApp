---
title: "[timinganalysis] Why virtual clocks?"
date: "2005-04-25"
---

This is something that I learned from my great manager today. Why is there even a need for virtual clocks in timing analysis?

First the funda - virtual clocks are used to set timing-exceptions between two clocks on a particular timing path. There, that's all there is to it. Consider, two flops arriving at a output port (say out1), through some combo logic. Therefore, there exists, two timing paths terminating at the same output port. Assume that both flops are clocked by two different clocks (C1 and C3). Therefore, it is mandatory that the designer set two output-delays at the output port - one each w.r.t each clock. Now, while the tool is doing STA, it is likely that it would consider the flop (of clock C1), going through the combo-logic and terminating at out1. However, it will consider two scenarios - timing w.r.t the output-delay set with C1 and w.r.t the output-delay set with C2. Nothing wrong with this scenario, except that it assumes that a signal originating at C1 is going to go through out1 and end up, on the other side, on a flop clocked by C2. Suppose, this does not happen - as is often the case. So how do we handle this? A simple answer would be to use false-paths. So we put a false-path from C1 -> C2 and from C2 -> C1. Cool. Except, what if somewhere else in the design , C1 and C2 were actually communicating with each other. This false-path would cause those other timing-paths to be ignored by the tool. Not good. Enter virtual clocks. Let us create two clocks C3 and C4. C3 has the timing characteristics of C1 and C4 has the timing-characteristics of C2. Now, on port out1, instead of setting output-delays w.r.t C1 and C2, set them with C3 and C4. There would be no difference in the STA. However, this time, when we set the false-paths, do them with C3 and C4. This would cause the exact same thing as we wanted above, except that we cheated... and we did not cause other places where C1 and C2 are communicating to be treated as false-paths also.

Considering most designs these days are pad-limited (i.e. where chip area cannot be reduced because of the area taken up by pads), efforts are made by designers to reduce umbers of ports. This causes a junction of sorts, where different clock timing-paths intersect. This is a very good place to try out virtual-clocks.

Nice huh... thanks to my manager, now you know.

del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda) [timinganalysis](http://del.icio.us/sss8ue/timinganalysis)
