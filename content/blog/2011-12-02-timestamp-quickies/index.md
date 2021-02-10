---
title: "Timestamp quickies"
date: "2011-12-02"
---

To get the current timestamp on your linux machine  (oddly has some problem on my customized zsh shell. works fine on bash)

> date +%s

To convert timestamp to date format on your linux machine

> date -d @<timestamp>

Date to timestamp is

> date -d "Dec 21, 2011 22:00:01" +%s

and for heaven's sake when you are using UNIX\_TIMESTAMP() function in mysql, please take care about your TZ difference between your OS and mysql.
