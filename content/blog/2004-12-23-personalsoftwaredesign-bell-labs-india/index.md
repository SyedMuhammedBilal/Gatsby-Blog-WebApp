---
title: "[Personal,Software,Design] Bell Labs India"
date: "2004-12-23"
---

Red Herring [reports](http://www.redherring.com/Article.aspx?a=11088&hed=Bell+Labs+looks+east) that Bell Labs has opened its latest research centre in [Bangalore.](http://www.bell-labs.com/org/bl-india/default.html) I have been a personal fan of Bell Lab projects, especially the work they do in topology. I know vaguely that a lot of the algorithms of discovering nodes in a network were developed at Bell.

One of their sample projects - **Mediation adaptor generation tools** - looks interesting. I wonder if they are using any shell-based interface; most projects which do automatic generation of code, rtl, specification, etc. fail in the hands of the user because they are too cryptic to use. Suppose, this input specification had to be given in UML format and then the software runs and spews out some cryptic output. Of what user is it to me as a user none.

The basic problem with most software is that it either gives too much information all at once and that user cannot do anything interactively. These are the two things that I learnt working with my present employer. Workarounds:

- Too much info: The tool must give messages in a kind of keyword-mapped message. For example , instead of saying "Node 123 mapping complete", it must say "\[NodeProtocol-23\] Node 123 mapping complete".This way, the user has to just remember that he saw a keyword : NodeProtocol-23: and can look it up, grep for it, save it in a named file.
- Too long info: The screen message should only be 2 lines long. The rest of it should be looked up in a long-help documentation. The user is smarter than you think
- Interactivity: suppose, I remove Node 123, what happens now.Do I have to restart the session, or can I do it without closing the session ? That becomes very important. Use a shell-based tool (like most CAD tools). I prefer Python, TCL is good as well.

Here's three cheers to brain-gain!!

del.icio.us Tags: [personal](http://del.icio.us/sss8ue/personal)
