---
title: "Now & the future - EDA in design"
date: "2006-03-30"
categories: 
  - "eda"
---

There is a difference between EDA technologies that are _cool_ and technologies that are actually cool for designers. There is this nice article by EDA _femme fatale_ [Peggy Aycinena](http://www.aycinena.com/index2/template_voices.html?index3/archive/tets%20maniwa%20-%20dvcon%202006%20keynote) that details the DVCon keynote by Synopsys Vice-President John Chilton. Synopsys evaluated the design **infrastructure** costs and their relation to productivity.

Some very interesting findings came of it :

- Changing from Verilog/VHDL to SystemVerilog builds verification into the design process - I think what they mean here is implementation processes; because of what he says later on
- SystemC is important for transaction level modeling and simulation - well SystemC is also verifiable ( I happen to make my living off that!). However, **currently** SystemVerilog is closer to the language that implementation tools operate on.
- Parallel processing - Now this is controversial . George Harper [puts](http://chipsandbs.blogspot.com/2006/03/auto-parallelization-of-c-code-is-not.html) it best on his (ongoing??) series on parallelism. It is not very easy to parallelise a lot of programs. Simulation may be one of them - they key is to break the design into blocks that dont interfere with each other . A sort of conflict graph
- Better place 'n route - like TeraRoute and K-Route?
- Finally, full design suites - blechhhh. Well, I cant say I blame the Big Three to sneak this one in. What with the recent spate of buffet deals.

Well, this is interesting - I wonder if these are all that is important. I have heard designers ask for better usability, better look-ahead (prototyping) and ... 64-bit support. Wonder why those did'nt come up.

del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda)
