---
title: "Does heapsort make more sense for EDA algorithms ?"
date: "2005-09-29"
categories: 
  - "eda"
  - "personal"
  - "software"
---

Just a random thought - given that netlist representations of most HDL appear in the form of unbounded trees (parents with greater than 2 children), this can be most easily be represented by list of lists.  
Now, if we use a custom memory manager that pre-allocates large chunks, this means that the lists which will be created, be most probably contiguous in memory.. or we can make them contiguous, without loss of great processing power. This in turn means that they are similar to arrays.  
Now, heapsort will perform with O(n log(n) ) upper-bounded complexity. But, if the array like structure is enforced, it will be very easy to map it to a similar heap structure (just re-ordering). Which means that heapsort may have better cache-performance than, say quicksort (cos the temporary space required is inside the orginal array heap).  
Just a thought.

del.icio.us Tags: [eda](http://del.icio.us/sss8ue/eda) [personal](http://del.icio.us/sss8ue/personal) [software](http://del.icio.us/sss8ue/software)
