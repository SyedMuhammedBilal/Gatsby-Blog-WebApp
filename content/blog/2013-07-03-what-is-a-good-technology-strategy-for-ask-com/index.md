---
title: "What is a good technology strategy for Ask.com ?"
date: "2013-07-03"
---

**EDIT:** The moment this blog post was published, my entire blog account was suspended for suspected spam. I suspect it is because of the references to Ask.com in the post.  _**That's how bad it**_ **is**.

I have been thinking about the recent spate of acquisitions by Yahoo.com and was intrigued by what the other old search portals were doing.

One of the most interesting is Ask.com - it started as a semantic search engine (where you could ask your questions in plain english). As the world soon found out, people hate typing - so when Google innovated with search suggestions (technically known as _typeahead_), it pretty much killed the market for semantic search since - guess what - google suggested reasonably well. Plus it implemented typeahead on a per-word basis.![Suggestion for just the word "industry"](./images/screenshot-from-2013-07-03-225005.png)

However, for Ask.com that strategy changed a long time ago, when they (rightfully) understood that they could not compete with Google. They then closed down the entire search technology teams and pivoted to a question and answer portal - similar to Quora but without the cultivated community. There is a claim that they use their search technology to power answer to questions - however they have two problems with that:

1. their backend defaults to Google in case of missing queries
2. they have awful SEO - as compared to newer upstarts like Quora. I will investigate this in a little more detail below.

At this moment, their relevance to the larger internet landscape is similar to Yahoo - distinguished pedigree, but doubtful importance.

### If I were the CTO

Ask.com still has impressive IP around. A brief search reveals 60 patents for user-specific  search results, advertising and query interpretation. The problem is that this cannot be an effective weapon against Google or Bing - their golden weapon is not the algorithm but the massive technology infrastructure around search.

The big problem with their Q&A business : **SEO.** Quora incentivizes users to write, share and blog about a question and answer interaction. However, this incentivization works because Quora has seeded a superlative community (hey - Werner Vogels, CTO-Amazon, [posts](http://www.quora.com/Amazon/How-and-why-did-Amazon-get-into-the-cloud-computing-business) there). This results in abysmal SEO for Ask.com for the long tail - which is where most of the traffic for a Q&A site rests.

However, it can still use this technology to build products for several different verticals. Let us look at some of these verticals.

#### File sharing

There are many of them out there including Dropbox, but none of them incorporate a truly powerful semantic search technology incorporated into them. Semantic search truly shines when you are trying to make sense from text inside documents. The best way to understand this is to see how the [Nepomuk project thinks about](http://userbase.kde.org/Nepomuk) the semantic desktop (which is all about files and documents) and ontologies.

Plus, recent entrants like [Mega](https://mega.co.nz/) clearly show that there is a lot of innovation still left on the table for personal document sharing. Hell, I would say Ask.com build a Flickr (with 1TB) for your personal documents and layer on semantic search.

#### News Reader + Bookmarks + Web CLIPS + passwords

_The Opportunity:_ Google Reader is dead. People love Lastpass and Xmarks. Evernote is indispensable. Yahoo is going crazy with article summarizing apps like Summly.

Ask.com could think about a Lastpass+Xmarks acquisition which gives them a fanatical community. Unify them and build out a Evernote on top of that which allows you to clip stories as well as subscribe to blogs in a single click effectively supplanting Google Reader (possibly acquire one of the upstarts - but none of them have the leverage to be [able to work with data](http://techcrunch.com/2013/06/24/there-is-no-google-reader-replacement-only-alternatives/) like Google could - or maybe Ask.com can). Leverage Ask.com's semantic search technology to kick the shit of summarizing - _my opinion: relevant search kicks the butt of interesting recommendations._

#### The Big One - compete with SIRI/Google NOW

Yes. It can still be done.  The problem is the dataset. However if the above two projects fall in place, one can use the Xmarks data + Q&A data + web clips data + personal document store + Semantic search technology to power a more effective personal assistant. The difference is the human/self generated content.

### Technology Reorg

To achieve this, I would reorganize the tech organization into something similar to Amazon - a core semantic search + big data team. Individual product + tech teams that roll up to tech+product twin heads.

I see a 18 month time-to-pivot given the above.
