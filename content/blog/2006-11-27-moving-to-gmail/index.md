---
title: "Moving! To! Gmail!"
date: "2006-11-27"
Head: "2006"
categories: 
  - "personal"
  - "software"
---

After 6 years on yahoo - I have decided to move on. I think the clean simplicity (with its text based ads) are much better than jumping animations and the like. Not to mention Yahoo's sucky search. And its unbearable slowness of being. Did I mention free POP, and smtp access?

But the best part happened **after** I moved to gmail. All my email threads, which were different/disjoint mails on yahoo, became cohesively grouped as "conversations" on gmail.

How did I do it?

You cant simply forward all your mails from yahoo to google - they wont come marked with that nice "from" and "to" addresses. Fortunately the answer is SMTP relay.

This is done in 3 simple steps:

1\. Install thunderbird, [yahoopops](http://yahoopops.sourceforge.net/) and download [gexodus](http://blog.codefront.net/2004/06/21/gexodus-a-graphical-gmail-import-tool/) (this one a great creation by Singaporean Cheah Chu Yeow)

2\. run yahoopops - give ur yahoo user name and password as well as folders (on your yahoo account) to download mail from. Run thunderbird and give POP3 server as "127.0.0.1" (this is where ur yahoopops will be running)

**note:** for hotmail accounts, just change yahoopops to hotmailpopper or some like that

3\. after all your mail is downloaded (by default all your folders on yahoo will be downloaded to the same inbox in thunderbird. if u dont want this, download each folder in the inbox one-by-one and move it to a different folder. I did it this way)

4\. run gexodus - it asks for the following things

- gmail email address (no password required)
- SMTP server - a default one is provided, but I strongly suggest u use the ones from [this list](http://www.dnsstuff.com/tools/lookup.ch?name=gmail.com&type=MX)
- mailbox file - the important one . if you type "%appdata%" on ur windows command prompt, u will go to a folder which contains the Thunderbord folder. Navigate till u see files like "inbox", " inbox.msf", "personal", "personal.msf" . These correspond to ur thunderbird folders. Choose the file (**without** the msf) that corresponds to the folder u want to upload
- tag - very nifty feature. appends a string (for e.g. I used "yahoo-inbox" ) in the subject line of every email u upload. Useful to sort ur mails later.

Press "import"

Voila.

On a closing note - let me share what I think about Yahoo's new Outlook-like interface

> "Honey I got a boob job"
> 
> "Darling, that was not what was wrong in the first place"

[del.icio.us](http://del.icio.us) Tags: [personal](http://del.icio.us/sss8ue/personal) [software](http://del.icio.us/sss8ue/software)
