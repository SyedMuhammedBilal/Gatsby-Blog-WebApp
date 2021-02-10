---
title: "Sundrop vs Android : what's that all about ?"
date: "2010-09-20"
categories: 
  - "compiler"
tags: 
  - "android"
  - "dalvik"
  - "java"
  - "oracle"
---

I'm kinda confused about [Sundrop](http://sundropdev.wordpress.com/) - from their description:

> Sundrop is a non-infringing, open source mobile OS based on Android. Sundrop is a “bring your own VM” OS allowing the flexibility to choose non-infringing JVMs, or license Java from Oracle directly or not use Java at all.  Sundrop has no certification requirements as Google does which can also delay product development and freeze out vendors.

The Android OS' [Dalvik VM](http://en.wikipedia.org/wiki/Dalvik_(software)) uses the Apache Harmony class library.  Replacing the JVM (as Sundrop claims) will only affect the class library. The problem is that there are other claims of patent infringement that are not related to the class library. For [example](http://blog.headius.com/2010/08/my-thoughts-on-oracle-v-google.html)

- Patents 6,125,447 and 6,192,476 are about reimplementations of Java security policy in Dalvik/Android
- Patent 5,966,702 has nothing to do with the JVM, it is the reimplementation of the Pack200 Java compression for DEX (the Dalvik format)

And so on....

So, I'm really confused about how Sundrop avoids infringing these patents ?
