---
title: "Comments on the UIDAI technology proposals (possible missteps)"
date: "2010-04-26"
---

I have been closely following the work of the UIDAI project - I am particularly impressed by the counter questions in the **[**Responses to Clarifications on EOI for Implementation of Biometric Solution- Release 2**](http://uidai.gov.in/tenders/Responses%20to%20Clarifications%20on%20EOI%20-%20Release%201.pdf)** document.

Note: I am extremely impressed with the fact that all documents are available in the non-proprietary PDF format. I urge the UIDAI to publish spreadsheets and other documents in the open format (ODF) usable at **no cost** by using the OpenOffice software, rather than proprietary formats.

The agenda of this mail is to focus on two particular questions (as referenced in the document). Both these questions refer to the underlying database system, which in my opinion, is the key to the whole system.

> Clause 3.3 Query 1 - Please confirm that for the deduplication part this means standard server components like blade systems with Intel processors.
> 
> Ans - Blade systems with X86 architecture.

This is a **gross** mistake. To illustrate this point, I have included various links which are whitepapers from various industry leaders comparing the performance of 32-bit vs 64-bit databases. To make the terminology clear, let me put forward two points : X86 is 32 bit architecture (available from **both** Intel and AMD) . EM64 or AMD64 is 64-bit architecture (also available from **both** Intel and AMD). An operating system (like Windows, Linux, Solaris, AIX) can be installed in either 32-bit form or 64-bit form on the underlying architecture. Best performance is delivered when operating system architecture **matches** underlying processor architecture.

1\. Dell: [comparison of 32-bit vs 64-bit Oracle database](http://www.dell.com/downloads/global/solutions/oracle_performance_em64t_6850.pdf) (as well as SQL Server). **Conclusion:** 64 bit database is future proof and more performance oriented.

2\. Ubuntu Linux: [various benchmarks of 64-bit vs 32-bit applications](http://www.phoronix.com/scan.php?page=article&item=ubuntu_32_pae&num=1).

A popular counterpoint to using 64-bit systems is that it consumes double the RAM memory. This is **false**. At max, the increase in RAM usage while going from 32- to 64-bit is 10% (reference: swollen pointers). 32-bit PAE, which emulates the high scalability of 64-bit systems is not recommended and adds undue complexity.

> Clause 2.3
> 
> Query 2 - Who will maintain the local data repository? Do we recommend the type and technology used?
> 
> Ans 2 - Question is unclear. COTS RDBMS is not part of the scope.

This is the most interesting question. There is a very popular tendency to build the entire system on proprietary databases like Oracle or SQL Server. However, I strongly urge you to consider equally good and field tested databases like PostGreSQL and MySQL. These are already in use at various banks and financial institutions to process payments. These are open-source - which means that you are protected forever from trade embargoes and technology transfer restrictions, have official paid support available and have a huge community support.

In addition, I urge you to also evaluate technology solutions like [Cassandra](http://blogs.apache.org/foundation/entry/the_apache_software_foundation_announces3) database and HBase - bleeding edge technologies which are currently deployed at Facebook, Yahoo, Google because of their ability to scale to billion plus records and failure tolerance. They are open source as well.

> Powering more than **10 billion** pages, Twitter switched to Apache Cassandra because it can run on large server clusters and is capable of taking in very large amounts of data at a time. Storage Team Technical Lead Ryan King explained, "At Twitter, we're deploying Cassandra to tackle scalability, flexibility and operability issues in a way that's more highly available and cost effective than our current systems."

Technology decision for such a critical piece of technology should be evaluated in the open and I truly commend the process that UIDAI is following right now.
