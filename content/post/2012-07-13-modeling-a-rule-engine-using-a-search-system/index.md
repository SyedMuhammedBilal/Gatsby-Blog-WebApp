---
title: "Modeling a rule engine using a search system"
date: "2012-07-13"
---

I figured that any set of **hierarchical if-then-else rules, given to frequent change** can be better maintained as a search engine with boosts. The trick is to figure out the boosts.

Indeed the problem is to figure out the weights. From an architectural standpoint, you do need to have a validation layer in your code, but no rule search layer. All that your search engine solution is doing is basically pruning the match space (which your if- then- else would have done).

You could build interesting solutions in logistics, shipping, marketing using this.
