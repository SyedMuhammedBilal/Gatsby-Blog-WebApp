---
title: "Effective way to build production quality hadoop jobs (with mahout)"
date: "2013-06-17"
tags: 
  - "bigdata"
  - "hadoop"
  - "java"
  - "mahout"
  - "scala"
---

As I  started working on building usable data analytics with hadoop, I saw that there were several query languages out there - Pig and Hive being the primary ones. My primary goal is to define a reasonable framework for experimentation on Hadoop. My primary goal - deriving insights from data. Least important metric - cool new languages. (Which incidentally seems to fit the end conclusion).

Hive seemed to be the closest fit to the relational model and so serves as a good starting point. A very [interesting post](http://developer.yahoo.com/blogs/hadoop/comparing-pig-latin-sql-constructing-data-processing-pipelines-444.html) by Alan Gates @Yahoo made me realize that for most of the tasks out there, the big challenge is to take data and massage it to be usable for big data analysis (for example creating Vectors for Mahout's recommenders).

Pig was the next point of experimentation - especially with its ability to work with Jruby UDFs. 

`gist:sandys/5795938#1.pig`
`gist:sandys/5795938#udf.rb`

This runs fine... on your laptop. However, the pig problem happens when you are actually preparing to run this job on a cluster. At that time all the hidden things start to hit you - JARs not being in classpath, JARs not being in the [distributed cache](http://hadoop.apache.org/docs/r1.0.4/api/org/apache/hadoop/filecache/DistributedCache.html) and things start to add up to be a pain. These start impacting you more and more if you are combining more than one toolkit - for example Hadoop + HBase + Mahout.

That said, one of the very interesting points of integration that I stumbled upon was embedding Pig _**inside**_ Python (using Java) or Javascript. (BTW, a lot of this comes via [Hortonworks](http://hortonworks.com/blog/new-apache-pig-features-part-2-embedding/), which is doing interesting things around Hadoop and Pig). That seemed to me as very interesting, however if you notice there is a very quirky piece of code in there :

> P = Pig.compile("""register udf.jar
> DEFINE find\_centroid FindCentroid('$centroids');

Essentially, you could write a UDF in Python, then call Pig through Python. The Pig script then calls the UDF. All of this finally gets compiled on-the-fly into a Jar (cos, that's what Pig does) and sent to Hadoop. **This** was essentially the step that convinced me that this tooling was unnecessary complex and there ought to be a simpler way.

I realized that Pig and Hive are actually step two in the whole implementation process of mapreduce and Hadoop.

Step one has got to be writing your own custom jobs in Java or Scala and creating _standalone_ job JARs.

Yes, this is suboptimal since you end up with large sized jars (a simple job JAR with hadoop and mahout ended up being 32MB). Remember that these JARs will be populated to your cluster (and hopefully persisted in the distributed cache for subsequent runs), but when beginning you dont really need to worry about optimization. Secondly, at a later stage you could still this very workflow to create a non-standalone JAR and instead push the dependent libs out by using either

- the **_\-Dmapred.cache.files_** variable to force distributed caching of libraries
-  use the handy _**\-libjars**_ variable.
- or use **HADOOP\_CLASSPATH** environment variable.

My Scala code [here](https://github.com/sandys/distributed-scala-mahout) is a simple Mahout vector creation algorithm (based on sample data from [here](http://www.cs.toronto.edu/~tsap/experiments/datasets/index.html) ) and creates a standalone JAR (using **_sbt_ assembly**)
