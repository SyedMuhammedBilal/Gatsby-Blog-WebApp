---
title: "\"Too many connection resets error\" with installing gems"
date: "2012-05-03"
---

This happens usually on hosted servers with firewalls, etc. As far as I can tell, this is happening because of some cachefly weirdness with its cache servers.

The way I fixed it was adding cachefly.mirrors.rubygems.org and rubygems.cachefly.net to 205.234.175.175 in my /etc/hosts and then installing gems. Problem solved
