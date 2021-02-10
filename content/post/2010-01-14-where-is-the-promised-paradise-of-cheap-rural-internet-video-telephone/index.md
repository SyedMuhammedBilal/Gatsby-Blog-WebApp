---
title: "Where is the promised paradise of cheap rural internet video-telephone?"
date: "2010-01-14"
---

For a very long time now, and in a lot of TV commercials, we have witnessed the promise of far-flung villages getting cheap and reliable video and voice communication using the Internet. In an age, when Skype is commonplace and VOIP is so cheap that every Indian abroad uses it to call home, it is still surprising that we cannot leverage this technology to connect villages and far off places like our North-East. Can we not create a government-funded pan-Indian Video+VOIP network ?

No. We cannot.

Let us consider Skype for a minute - why is it that Skype is the defacto standard for video/voice calls on the internet and many other competing products (even Gizmo5 acquired by Google) have been unable to match.

The answer is the same - IPV4 and the NAT problem.

I have written about this issue [before](http://digitalsarkaar.wordpress.com/2009/05/29/safeguarding-indias-internet-security/) - rapidly growing but heavily-populated countries like India and China are held hostage to the problem that IPV4 (the current technology of the Internet) has very, very limited _addresses_ for us. But a large part of it is reserved for Europe, USA and Japan.

Any reasonable voice/video Internet system must operate on the [peer-to-peer](http://en.wikipedia.org/wiki/Peer-to-peer) system, otherwise the system will collapse under the sheer weight of its numbers (for e.g. at the time of writing, Skype had 11 million users online **at the same time**). However, a peer-to-peer system does not play very nice with the current IPV4+NAT technology. Skype took more than 10 years to [tune its system](http://p2pfoundation.net/Skype) to perform reasonably under such conditions - a feat that has [not been](http://telephonation.com/articles/voip/39029.php) duplicated ever since.

However, IPV6 eliminates the need to have NAT which means one can completely bypass proprietary, patent-protected technology and build open freely available, standards-compliant protocols to have a robust and cheap VOIP system.

So next time you think about why India's villages dont have voip - put the blame where it is due : our procrastination towards IPV6.
