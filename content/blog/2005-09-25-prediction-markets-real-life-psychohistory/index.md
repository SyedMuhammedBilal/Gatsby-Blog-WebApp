---
title: "Prediction markets: real life psychohistory?"
date: "2005-09-25"
---

This summer, while I was in [Tunis](http://loxos.blogspot.com/2005/03/personal-tale-in-desert.html), I read a story by [Robert Reed](http://en.wikipedia.org/wiki/Robert_Reed_%28author%29) called the Opal Ball. It tells of a time with a sort of Ebay-like marketplace, where instead of goods, predictions about the future are traded. It is the norm to put details on potential dates, career strategies, etc. on the market where they are traded like any other futures and it is only quite infrequently that the Market is wrong. The couple in the story tries to go against the market and get married, however it ends up in a bitter divorce. The infant daughter however is kept away from the Market by the father, perhaps in an effort to let chaos run its course. Perhaps it is because of Heisenberg. A precept of quantum theory says

> that which is directly observed as the act of observation changes the nature of that which is observed

This is not a work of fiction.

[Friedrich Hayek](http://en.wikipedia.org/wiki/Friedrich_Hayek) is considered the father of predictive market theories. He had a strong belief in the fact that price mechanisms carried more information than just its inherent content - which is to say, price. He always maintained this about price mechanisms

> that which is the result of human action but not of human design

Language, for instance, carries more information than its content. The pretty little thing at the bard could have said, "I'll call you tomorrow", but its the eyes which tell you if she really will. This is the basis of the [Iowa Electronic Markets](http://www.biz.uiowa.edu/iem/). It gained notoriety in accurately [predicting](http://www.salon.com/tech/feature/2004/09/29/market_kerry_two/index_np.html) the results of the US presidential elections. How is it different from a poll? A poll is a snapshot of the current distribution of "consumer" preferences. However, in prediction markets, you introduce competition. Therefore, now you analyze the problem with an intent to win. However, you are also part of the problem that needs to be solved. When designing prediction markets, the [risk free rate](http://www.investopedia.com/terms/r/risk-freerate.asp) and [required expected return rate](http://www.investopedia.com/terms/r/requiredrateofreturn.asp) is constrained to be zero. The IEM operates two kind of futures (if we consider election outcomes as the market):

- Winner-takes-all: contracts pay 0 or 1 dollars depending on whether the candidate won or lost the election
- vote-share futures: contracts pay an amount equal to the fraction of vote-share received by the candidate times $1

Intuitively, the vote-share futures can be seen as a distribution of probability of vote-share (think of it this way,for a given contract price - the vote share - the volume indicates his perceived probability of winning). The winner-takes-all futures are actually a subset of the vote-share futures - you are actually pricing the candidate when his vote share is the highest vote-share. The interesting thing in all this is, you actually factor in other people's expectation of votes, while constructing your own. For me, that seems to be an incremental refinement of knowledge.

What makes this abstruse topic interesting now is the fact that Google is [building](http://googleblog.blogspot.com/2005/09/putting-crowd-wisdom-to-work.html) one. Consider what happens: there are certain coefficients in probability theory that needs to factored in when arriving at a probability decision. These factors are usually computed (and fine-tuned) using past history. Google has the resources to implement a large-scale prediction market. Therefore, it will possess these magic coefficients. In addition to knowing what is happening (aka Google News), it will finally know what is going to happen. ["42"](http://en.wikipedia.org/wiki/The_Answer_to_Life%2C_the_Universe%2C_and_Everything) does not seem to be so funny after all.

del.icio.us Tags: [technology](http://del.icio.us/sss8ue/technology) [personal](http://del.icio.us/sss8ue/personal)
