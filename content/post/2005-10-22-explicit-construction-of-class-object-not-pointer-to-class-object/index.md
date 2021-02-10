---
title: "Explicit construction of class object (not pointer to class object)"
date: "2005-10-22"
categories: 
  - "c"
  - "software"
---

Consider the following piece of code:

#include <stdio.h> 

#include <stdlib.h>
using namespace std;

class SSS{
   public:
       SSS(){
        printf("Calling constructorn");
       }
};

typedef struct test{
SSS s1;
}test;

int main(){
    test \*t1;
    t1\=(test\*)malloc( sizeof(test)\*1);
    return 0;
}

Does the constructor of the class get called? Nope.

Then how do you do it. The problem is, how do you explicitly call the constructor of a class object that is defined but not constructed. Usually, class objects are constructed as soon as they are declared. For e.g.

> SSS s1;

The above will immediately call the constructor of SSS. However, this is a case where objects are declared, but not constructed. And there is no easy way to construct it now.

First of all, this is bad design. If there is ever a necessity to explicitly declare a class object but construct it only later, then a pointer to a class should be used. However, this is comes from another problem that I encountered. Legacy code. Ah yes. the bane of any code writers existence. While code can almost be thought of a s poetry, this, ladies and gentlemen, is nothing short of blasphemy.

In any case, the solution is not very difficult - placement new operator. Take a look at the modified code:

#include <stdio.h> 

#include <stdlib.h>
using namespace std;

class SSS{
   public:
       SSS(){
        printf("Calling constructorn");
       }
       void\* operator new(size\_t size, SSS\* s2){ //<-- need to overload

printf("Calling operator newn");
        return (malloc(sizeof(SSS)\*1));
       }
      private:
        int n;
};

typedef struct test{
SSS s1;
}test;

int main(){
    test \*t1;
    t1\=(test\*)malloc( sizeof(test)\*1);
    new(&t1\-\>s1)SSS;  //<---- how cool is that

return 0;
}

The key is overloading the new operator and calling the placement new operator in a weird way:

> new(&t1->s1)SSS

Again... bad design.

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software)
