---
title: "iPhone OS 4.0: is it low-power, multitasking heaven?"
date: "2009-07-15"
categories: 
  - "software"
  - "technology"
tags: 
  - "android"
  - "iphone"
  - "os"
  - "power"
---

**Q. What is the difference between iPhone OS and Android?**

**A.** Android (or even Pre's WebOS) is a multi-tasking operating system - which means you can check your email while Pandora's music is playing in the background.

You cannot do this with the iPhone .

**Q. Err.. why?**

**A.** Because Apple _claims_ to have tested and [found](http://www.theiphoneblog.com/2009/03/17/apple-announces-push-notification-services-iphone-30/http://www.theiphoneblog.com/2009/03/17/apple-announces-push-notification-services-iphone-30/) that background tasks consume upto 80% more power.

**Q. So what now?**

Here's an idea I have been having for a while now. It started when I started thinking about why are cloned Chinese phones not carrying Android. I mean you have phones with [mock](http://www.clonedinchina.com/2009/05/htom88-a-phone-with-both-android-and-windows-mobile.html) Android UI, so why would'nt a clonephone manufacturer simply get Android on.

I believe it is the power consumption.

You see cloned phones suck in battery life anyway... atleast after the first few weeks anyway. But that's OK - what else can you expect from a $100 phone. Now background apps should make that suck, so **much much more.**

Which is when I started thinking about even based multi-tasking. I had worked once on a sort of event based P2P in Java.

So, let's see.

There are four basic types of background activities that a person might want :

1\. Sensor based: for example apps tracking changes in your GPS co-ordinates, orientation, etc.

2\. Communication based: for example, your bittorrent going on in the background, or a transfer via bluetooth.

3\. Media based: for example, your music playing in the background while you do something.

4\. Time based: for example, your insulin medication alarm kicking in every 3 hours.

Things like, you having your word processor running in the background is actually useless - because you can save the current document state and reload it everytime you click on it.

**Why not make three schedulers, where apps can register themselves and have pseudo multitasking.**

For example, Pandora could simply register itself with the media-scheduler and it just provides the URI (full path, either remote or local, along with authentication information) along with the interval during which the scheduler has to invoke a callback (maybe one playlist has finished, should I loop back?). The actual playing is done by the OS and its codecs.

Similarly, you could have a Lonely Planet app running in the background, which registers itself with the location-scheduler, so that a callback gets invoked at every 1-degree change in location.

What this could potentially provide is a way for people to enjoy multi-tasking without paying the battery penalty.

Of course, Apple and its [RDF](http://en.wikipedia.org/wiki/Reality_distortion_field) have painted a very different picture in their [patent application](http://www.unwiredview.com/2009/07/02/iphone-4-0-os-event-based-modes-intellingent-and-scheduled-communications/) where all they have claimed is changes in response to "_life events"_ .. whatever they are.

I believe that they have actually not patented a media-based event, like background playlists. Probably we should be looking at incorporating that into Android, as a fork - say AndroidLite. What could emerge is a low-powered, restricted multi-tasking OS which satisfies 90% of all consumer requirements.
