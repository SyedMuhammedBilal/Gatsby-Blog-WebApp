---
title: "Liar Liar at the DAC"
date: "2008-09-20"
tags: 
  - "c"
  - "eda"
  - "technology"
---

Well [this](http://www.deepchip.com/items/0475-10.html "DeepChip - The Biggest Lies Told by the EDA Vendors at DAC") was interesting DeepChip post ;)

It was interesting to read about Cadence's Parallel VCS. I dont know what was the underlying technology that they tried to use, but it is heartening to know that multi processing/threading, does have a few champions left in EDA.

Looking at the non-EDA enterprise world, I see the shift towards trying to capitalize as much processor real estate as possible. Take for instance _virtualization -_ it exists simply because people want to save money and power by running two operating systems on the same physical **box**, yet keep them separate (IP address, hardware ID, etc.) Probably, the problem space allows you to scale in that way - which EDA does not.

EDA is one of the most processor hungry software I know of. Yet, it is not capitalizing and scaling with multiple processors. It will be a darn shame if we are going to use only one of Intel [Larrabee's](http://en.wikipedia.org/wiki/Larrabee_(GPU) "Wikipedia entry about Larrabee") cores, when it hits the market (**P.S.** nVidia vs Intel will be fun to watch)

EDA will have to move to these computing systems, but the question is still open, on whether C++ (the traditional turf of EDA) will capture the flag, or will it be some other language. 

Note that the advantage of manual memory management loses its sheen when compared to the raw brawn of 16 cores.
