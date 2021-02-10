---
title: "Why are Java frameworks so convoluted and complex."
date: "2012-09-21"
---

Take a look at Java's Spring - it has layers upon layers of proxys, abstractions, factories, etc. For example, there is a class in Spring that is described as "Convenient proxy factory bean superclass for proxy factory beans that create only singletons."

I have a simple question: is the root to all of this infrastructure problems (proxys, abstractions, etc.), the fact that Java introduces a fear of changing state (i.e. the existence of the "private" keyword) ? Since Java guards private variables so effectively and proselytizes a fear of state, the natural evolution of the community to build these layers.

Clojure is not a good comparison, since it avoids fear using immutable state. Ruby/Python is also not a good comparison since, well, it does not respect the privacy of state in any manner. The frameworks that have naturally evolved there, reflect the philosophy of need-to-keep-things-simple (which is the only way to work in a world where state cant be abstracted out).

Perhaps if you ask someone to build a Java framework WITHOUT using the "private" keyword, maybe it will lead to a whole different revolution ;)
