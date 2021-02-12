---
title: "Sending email using Amazon SES with attachments from php"
date: "2013-01-23"
---

This script is crazy - there is no known sane example on how to do this, so I had spend an inordinate amount of time hacking together this script. Basically, you need to replay the SMTP email composition to Amazon SES.

This code snippet should help everyone who is trying to put together a way to send email with attachments using SES from PHP.

`gist:sandys/4604187#email_attachments_ses_simple.php`
