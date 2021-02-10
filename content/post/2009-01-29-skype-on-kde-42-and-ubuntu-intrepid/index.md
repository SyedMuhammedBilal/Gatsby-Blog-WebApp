---
title: "Skype on KDE 4.2 and Ubuntu Intrepid"
date: "2009-01-29"
tags: 
  - "intrepid"
  - "kde4"
  - "mic"
  - "skype"
  - "ubuntu"
---

Well, now that KDE 4.2 has been [released](http://www.internetnews.com/software/article.php/3799116/Is+KDE+42+the+Answer+to+the+Linux+Desktop.htm),  I **had** to try it out, being on a strict Gnome diet for 2 years now. So I jumped on the bandwagon - and furiously typed "sudo apt-get install kubuntu-desktop".

Now that I had all the bling I could ever want on my desktop, it was to time to ... work.

Skype, was needed - and so I installed skype from the medibuntu repository. As always, I could hear but could not use the mic.

The solution was almost the same as my previous post:

1. In skype options, select "Sound In" as your first hardware device. In my case it was "_HDA Intel (hw:intel:0)_" (for others, this could vary)
2. Then open kmix, by double clicking the volume icon and then selecting "_mixer"_.
3. In "Configure channels", select "_Mic as output", "Capture 1", "Capture 2"_
4. **Mute** "Mic as output"
5. Tick "_Capture 1"_. (for others, this could vary)
6. make your test call to "_echo123"_ and enjoy!
7. remember to run **kbuildsycoca4** to register the application in Kicker/Start Menu
