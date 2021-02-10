---
title: "Please sir, CUDA have some more??"
date: "2008-02-18"
categories: 
  - "c"
  - "technology"
---

The first I read about PhysX was because of dear ole' [Gordon Freeman](http://en.wikipedia.org/wiki/Gordon_Freeman)'s crowbar - which captivated me for weeks. Then I read about it getting acquired by nVidia ...

yawn.

And then I discover its physics platform was going to be _patched_ in Geforce 8xxx series using CUDA.

Huh?

What platform allows you to add physx capabilities to a graphics card, **after** it is manufactured. That's when I read about [CUDA](http://en.wikipedia.org/wiki/CUDA)\- nVidia's GPGPU (General Purpose GPU) intitiative. By architecting the chip to have elements that can be addressed individually (by reading [this](http://www.behardware.com/articles/678-1/nvidia-cuda-practical-uses.html), I would say those are the stream processors) and providing a C-level API for it, it throws the field wide open to morph the GPU into something absolutely customized for myriad applications.

AMD/ATI does have its initiative - If I'm not wrong, it is called [**Close to Metal**](http://en.wikipedia.org/wiki/Close_to_Metal) **,** however I am not sure about the maturity ofits compilers vs Nvidias.
