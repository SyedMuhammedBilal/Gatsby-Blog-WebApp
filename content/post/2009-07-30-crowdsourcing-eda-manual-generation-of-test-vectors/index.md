---
title: "Crowdsourcing EDA: manual generation of test-vectors"
date: "2009-07-30"
tags: 
  - "dft"
  - "eda"
  - "multithreading"
  - "parallel-processing"
  - "satisfiability"
---

I am not sure how practical this is, but given that verification takes place over months in chip design, [this](http://www.ns.umich.edu/htdocs/releases/story.php?id=7252) could well be interesting.

A bunch of people from the University of Michigan have created a [web game](http://funsat.eecs.umich.edu/), which tries to pose on-chip satisfiability (SAT) problems as a game. However, reading its description makes it sound more a [DFT](http://en.wikipedia.org/wiki/Design_For_Test) problem.

Essentially, each dot on a grid is [controllable](http://en.wikipedia.org/wiki/Controllability), which may or may not toggle a dot's [observability](http://en.wikipedia.org/wiki/Observability). Essentially, what they are doing is the exact opposite of this paper: [Satisfiability-Based Automatic Test Program Generation and Design for Testability for Microprocessors](http://ieeexplore.ieee.org/xpl/freeabs_all.jsp?arnumber=4212148). Rather than use a automatic solver for test-pattern generation, they are using humans to solve these puzzles.

I would not call it a true webgame sat solver - because that would entail a game in which you have to generate a combination where two puzzles **dont** match each other.

I am not entirely too sure about the objective of this study - unlike [Amazon Mechanical Turk](http://en.wikipedia.org/wiki/Amazon_Mechanical_Turk) or [Google Image Labeler](http://en.wikipedia.org/wiki/Google_Image_Labeler), both of which are online initiatives which incentivizes (in the form of fun or financial compensation), small tasks which can be combined to create a meaningful whole result.

There is a technical basis for this question - unlike tagging images, test pattern generation cannot really be partitioned. If indeed it could be, then you could simply multi-thread them (or run something like MapReduce to enable distributed computing). A large enough problem, and you will have lost your ability to attract people, willing to solve the problem.

So, my conclusion is that this is an impractical, highly speculative academic exercise.
