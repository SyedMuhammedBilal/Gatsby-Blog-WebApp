---
title: "STL and its trees"
date: "2006-06-25"
categories: 
  - "c"
  - "software"
---

Very recently I had a problem with STL maps and the way it organizes data - come to think of it, it was an incorrect way of using it.

So the premise is simple - Have a composite class **pointer**  be the index into the map. The composite class can be constructed in very funky ways, so that simple pointer comparison to find the key in the map is not possible.

Now, maps usine Red-Black trees internally, with - the required [Strict Weak Ordering](http://www.sgi.com/tech/stl/StrictWeakOrdering.html) criteria (iff a<b and b<a, then a match is found).

Now it took some investigation into the _insert\_unique_ and _\_M\_insert_ functions of _stl\_tree.h_ to figure it out. 

When trying to find an element, the RB-tree algo starts comparing **tree-element to candidate**. If _less\_than_ is true, then go right and take new tree-element. If _less\_than_ is false, then go left and remember the tree-element is candidate. After all elements are done, then compare **candidate to tree-element** (notice the inversion). If that is ALSO false, then we have a match. In essence it is trying to find the deepest element in the tree that passes the strict weak ordering test with candidate. Now in case of insert, it again does a find in the other order - i.e. first **candidate to tree-element** (go left in case of success) and then at the end (with no more nodes), **tree-element to candidate.** Now here comes the interesting part, if the second check is also true then that is one condition of "strict weak ordering" - the subsequent  call to \_M\_insert checks for the other condition. Now it adds it to the left-child (if strict-weak-ordering passes, so that subsequent find works well) and right-child (if strict-weak-ordering fails). All well and good. Now comes my blunder - I created a _less\_than_ function that imposes a **_double check_**. i.e.

**condition X || conditon Y were true    return false else    return true;** Now the problem with this was very simple - the need for two conditions arose because I thought I could devise a method of ordering differently from finding. What that means is that I could use **condition X** for ordering and **condition Y** for finding. Why could'nt I have AND'ed them both then? That is because **condition X**  was not enforced on creation. Take for example **A + B** . It is equal to **B + A**. But how do I check for both of them - let me begin by giving them an id number, which is a simple counter. If id's match then it is trivial equality (**condition X)**. However both could have different id's based on time of creation. Then I have to check for all elements in the two tuples (**condition Y**) Now what happens in the condition I impose is that - Red-Black trees re-balance after a few steps. That means that the way I pushed them in will no longer be the way I can search for them (because of the **||**  condition) and therefore it fails. However there is another way to search for it - a little expensive but clean and predictable none-the-less. del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [c++](http://del.icio.us/sss8ue/c++)
