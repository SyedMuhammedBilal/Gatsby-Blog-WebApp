---
title: "Cryptographic usage on Indian govt websites: why the java fetish?"
date: "2009-07-23"
---

I couldnt help but notice that the Indian Income Tax deptt's website for e-filing tax, asks for installation of a Java plugin for a simple _**upload**_ of a digital certificate file. It was puzzling for me, until I figured it out that they were using Java for decrypting the private key (using the user provided password).

They wanted to do this clientside, to avoid massive load on their servers. Fair enough, but why the java fetish.

This can just as easily be done using Javascript (no relation to Java), which is built in by default in every web browser. No need for heavy java plugins (Windows XP is notorious for locking up with java based plugins) and very fast and lightweight.

To make things much easier for people who want to do this - there are ready made libraries (like [Clipperz](http://www.clipperz.com/open_source/javascript_crypto_library) and [PIDCrypt](https://www.pidder.com/pidcrypt/?start)). In fact PIDCrypt has a nice [demo](https://www.pidder.com/pidcrypt/?page=demo_rsa-certificate#results) where it shows how fast it can decrypt RSA certificates.

Some people may argue that a java plugin is better, because you cant save the page and get access to the decryption code (which you can using javascript) and play havoc.

For these people, I suggest that they read up on the [Man-in-the-Middle](http://en.wikipedia.org/wiki/Man-in-the-middle_attack) type of an attack, which can effectively negate all the _**apparent**_ advantages of a Java plugin based approach. All it succeeds in doing is worsen the user experience (similar to the [pain](http://digitalsarkaar.wordpress.com/2009/05/09/digital-certificates-and-identity-management-in-the-indian-govt/) of signing up for a digital certificate)

Atleast they did not make the site Internet Explorer-only
