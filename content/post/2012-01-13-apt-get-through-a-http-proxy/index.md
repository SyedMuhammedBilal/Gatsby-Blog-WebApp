---
title: "apt-get through a http proxy"
date: "2012-01-13"
---

God - this bugged me no end at my workplace. Especially the interplay of sudo, loading environment variables, etc. with http proxy.

Rule of thumb is - sudo (if present) should be the first command, http\_proxy (if present) should be the second and then the rest of the actual command

Effectively, it is something like

> sudo http\_proxy=http://1.1.1.1:80 apt-get update
