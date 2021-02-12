---
title: "Mathematical differences between a database and a search system"
date: "2013-07-17"
---

I get asked this question often - on what is the **actual** difference between a search system (like Solr) and a traditional RDBMS... or even a NoSQL datastore like MongoDB. It almost seems like a rule of thumb that every webapp needs a database for its store and a search solution to do free text search. But **why** ?

What is the inherent differences between the two problems - retrieving data and retrieving search results - that require two different software systems. Can we not model a decent search stack using just the database ?

The answer is in the underlying mathematics. Databases work in terms of sets, where each element is a tuple consisting of various fields

![Suggestion for just the word "industry"](./images/set_theory.png)

The figure on the left illustrates a join between two tables - an _intersection_ of two sets.

_Theoretically_, you could progressively intersect sets to get a result set of the results you were looking for. So what really is Lucene good for ?

Lucene/Solr/Elasticsearch operate on ranked sets. Lets look at how that works:

The most fundamental data structure of Lucene is an inverted index - think of it as a list of terms mapped to the list of document ids (also known as _postings list_) which contains the terms - in reality, this is implemented as a [skip list](http://blog.mikemccandless.com/2010/07/lucenes-ram-usage-for-searching.html).

Basically, when you perform a search query, what you get as output is a [bitvector](http://academia.edu/1895864/Fast_Faceted_Search_in_XML) which tells you which documents matched the search (by toggling between 1 and 0). [Facets](http://lucene.apache.org/core/4_0_0/facet/org/apache/lucene/facet/doc-files/userguide.html) by themselves are also bitvectors. So, if you want to know _how many results fall in a certain facet_, all you need to do is a [bitwise AND operation](http://www.devatwork.nl/articles/lucenenet/faceted-search-and-drill-down-lucenenet/).

Now, there is a particular feature that many claim is extremely highly optimized in case of search technologies. I am not sure if this is the case, since RDBMS could be emulating a lot of these as well. However, there might be differences in caching behavior leading to massive performance differences.

The crux of the difference between relational mathematics and search based is this - _The real optimizations of Lucene come from the fact that you never really want **all** documents which match the query, but only the **top**_ **K**. And this is what affects the difference in [performance](http://philosophyforprogrammers.blogspot.in/2010/09/lucene-performance.html) as well.

### There is no boolean in search

One of the frequent misconceptions is to model a search query in terms of boolean logic - AND, OR & NOT. However, again the same concept comes into play - **top-K only**. Which is why, Lucene models it in terms of **[MUST, SHOULD, NOT](http://lucene.apache.org/core/3_0_3/api/core/org/apache/lucene/search/BooleanClause.Occur.html).**

Any clause you add with MUST signifies that, any documents returned MUST have that term. The SHOULD part of the query simply bumps the scores of documents with that clause. Remember that this gets more and more complex if you are using the [Dismax](http://docs.lucidworks.com/display/solr/The+DisMax+Query+Parser) or [Edismax](http://docs.lucidworks.com/display/solr/The+Extended+DisMax+Query+Parser) parser of Solr. Which means that when there is a complex query with multiple boolean subqueries, you need to start diving deeper (e.g. dont mix should and must in the same BooleanQuery if strict boolean matching is needed. It will match all docs, containing the MUST clause and "boost" all SHOULD term).

 

So now, you can point this article if management questions you on why you cant run search through database queries.
