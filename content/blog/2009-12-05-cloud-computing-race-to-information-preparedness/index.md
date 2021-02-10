---
title: "Cloud Computing : RACE to information preparedness"
date: "2009-12-05"
tags: 
  - "cloud-computing"
---

RACE stands for [Rapid Access Computing Environment](http://www.disa.mil/race/) - is an [initiative](http://www.datacenterknowledge.com/archives/2009/12/04/dod-cloud-will-save-us-hundreds-of-millions/) by the US Military's information systems department. It is a very interesting architecture (not unlike on-demand cloud computing technology put in place by [Amazon's EC2](http://en.wikipedia.org/wiki/EC2) ).

It primarily allows any user to provision (which means request and reserve) a remote computing resource, configured as per his/her choice. For the layman, it sounds pointless.. but consider an example.

You want to run a search for criminals that takes 2-3 hours to run - how do you do it? Now imagine, there are thousands of other similar users, all wanting to do something equally resource-consuming (not necessarily search). One way is the unsophisticated way of running it anyways and completely bogging down the system.

The second way is putting in a manual request for computer time - this of course is subject to the administrator's availability

Also consider the situation where everyone is on holiday - or some people are on holiday. How do you manage computing resources, so that they do not sit idle and drink useless electricity?

The answer is an automatic provisioning system, where you can request for .. say a computing resource with Microsoft Word. Once your request is granted, you can connect to this computing resource (using technologies like RemoteDesktop, VNC, ssh , etc.) and can remotely work on it. After you are done, you _release_ the resource, so it can potentially be used for someone else.

This architecture has the following advantages:

- you dont need expensive and powerful computers everywhere - just need a simple computer and a decent network connection.
- you dont need expensive software everywhere - most software companies have special licenses to allow a lot of users connect to these on-demand resources (e.g. Microsoft's [VECD](http://download.microsoft.com/download/D/3/B/D3BDC684-7A7A-4847-9A8C-4A4C8907C38E/VECD_Licensing_Guide_English_090208.pdf))
- you dont need to bother hiring, training and managing IT administrators everywhere.
- employees cannot make excuses about software/hardware being unavailable. At the very least, they can work out of a cyber-cafe.

If you consider the Indian context, you can see how each state could deploy it's own _cloud_ and simplify its own IT architecture.
