---
title: "Machine readable access to Indian government reports and proposals"
date: "2009-06-20"
tags: 
  - "archives"
  - "metadata"
  - "schema"
---

What I put forward is a proposal to use the technology format already being developed to make the Indian Government's information distribution system, much more effective.

The [FDSys](http://www.gpo.gov/searchwebapp/search/home.action) program of the US General Printing Office is now in the beta of its push for a single source, searchable repository of all information related to **published** , US Govt information and proposals. The [capabilities](http://www.gpo.gov/fdsysinfo/capabilities.htm) [document](http://www.gpo.gov/pdfs/fdsys-info/releasesandcapabilities_v5_121907.pdf) is mighty impressive.

If we get down to the nitty gritties of such a system, FDSys is architected on the basis of the [OAIS Reference Model](http://en.wikipedia.org/wiki/Open_Archival_Information_System). We see that all the information is encapsulated with [metadata](http://www2.nen.nl/cmsprod/groups/public/documents/bestand/261454.pdf "MetaData - what is it and how to start building one?"), that describes the document itself. This metadata is very important to make the system searchable, machine-readable, etc.

What needs to be understood is that technology changes, and along with it come possibilities of richer interaction with the underlying data and metadata. What this means is to have the ability to adapt to a changing metadata itself! This is possible using a standard framework for holding and using metadata. The FDSys operates on the [Metadata Object Description Schema](http://www.loc.gov/standards/mods/mods-overview.html), an XML [schema](http://www.loc.gov/standards/mods/mods-schemas.html) developed by the Library of Congress. This itself is an extension of the [MetaData Encoding and Transmission Standard](http://www.loc.gov/standards/mets/METSOverview.v2.html), which incidentally has been adopted by several countries worldwide.

This is as good a start as any, if India's National Archives started tagging its data using these technologies. E-government is not possible till data is accessible.

http://www.gpo.gov/fdsysinfo/capabilities.htm
