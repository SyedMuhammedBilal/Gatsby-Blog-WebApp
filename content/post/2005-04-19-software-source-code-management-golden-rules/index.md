---
title: "[Software] Source code management - golden rules?"
date: "2005-04-19"
---

Frequently in any startup, there comes a time when the processes start mattering...or rather should matter more than the company. As Clayton Christensen says in his famous book

> ..at highly successful firms such as McKinsey and Company, the processes and values have become so powerful that it almost does'nt matter which people get assigned to which project teams.

I am at that career stage that I'm still not contaminated by manager-ese, which is to stay, vomit out improbable schedules. So here's my take on what should be followed during development.

- Have a good spec
The God of software development - Joel Spolsky - has a very good series on [writing specs](http://www.joelonsoftware.com/articles/fog0000000035.html). I feel the most important features of a spec is Non Goals - which tell the reader what your stuff wont do. In other words, you do know what your are not going to do. Always write plain english, or as near it as can be humanely possible.- Have a good test-plan
Testing is the most important part of software development. That's what we never learn in college. Have a good regression framework and a good test-plan. I have no idea how to do either one. Anybody have any ideas?- Have good coding guidelines
One of the cardinal rules of software development is [writing code is easier than reading it](http://www.joelonsoftware.com/articles/fog0000000069.html). Having a good coding guideline makes life easier for the other guy. May I suggest [GNU coding guidelines](http://www.joelonsoftware.com/articles/fog0000000069.html).- Use branching wisely
My preferred method of development is somewhat similar to [Eric Sink's model](http://software.ericsink.com/scm/scm_branches.html). The trunk or main-branch is essentially unstable, however should be always buildable. Just before release dates, main branch should be changed very carefully. Very near to release date, create a release branch. No New Functionality on the Release Branch. Main branch can continue development as before. In case there is another customer who wants experimental functionality (just before release) can have a different branch, which should be merged into trunk after release branch is created.- Start breathing your code-freeze deadline atleast a week before date
Designate bugs and/or features that are blocking a release. If these features dont have tracking numbers, make them now. All commits during these period should be associated with a bug-tracking number. This is a good time to create that release branch mentioned above.- On release branch all check-ins must be reviewed

- Release early and often
I have listened to two great writers about the same issue - [Ed Sim](http://www.beyondvc.com/2005/01/enterprise_smb_.html) and [Luca](http://luca9200.typepad.com/blog/2005/03/release_early_a.html). I still feel that for a small company, it is critical to release early and often, if a conscious effort is made to continually improve software quality. Let them laugh once, let them laugh twice, but you got them on the third try. I believe most customers are willing to give you more than one try if you give them the software free to play with it. I can tell my potential clients - hey this software is still buggy, but tell me what to do and I'll give you a nice discount.

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [cvs](http://del.icio.us/sss8ue/cvs) [source](http://del.icio.us/sss8ue/source)[](http://del.icio.us/sss8ue/)
