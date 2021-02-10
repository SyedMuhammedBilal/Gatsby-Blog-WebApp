---
title: "Constructors vs function declarations...and Koenig lookups"
date: "2005-06-12"
categories: 
  - "c"
  - "compiler"
  - "software"
---

A very curious incident happened with compilation today.  
"but nothing happened...."

That was the curious incident.

Consider the piece of code below:

#include <iostream>
using namespace std;
class A{
  public:
         A() {\_i\=5;}
          ~A(){cout<<"Destroying A"<<endl;}
       int \_i;
};
class B: public  A{
 public:
   B() {}
   ~B(){cout<<"Destroying B"<<endl;}

};

main(){
  A a( B() );
  cout<<a.\_i;
}

Now normally, I would think that everything is all right. My expected screen output is:

"Destroying A"  
"Destroying B"  
"Destroying A" (its inherited)

However, there is no screen output.  
To further investigate, let us try to access a member variable "\_i" of A.  
The compiler squeals:  
\>>constructor.cpp: In function 'int main()'  
\>>constructor.cpp: error: request for member '\_i' in 'a', which is of non-class type 'A()(B(\*)())

"non-class"?? Very strange. What's even more strange is the way that the constructor parameters to A are interpreted - as pointer to functions.

Now, we know for a fact that STL uses functors, so let's try something like this with them.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
class Functor1{
public:
   void  operator ()(int i){ }
};
main(){
vector<int\> vv;

for\_each(vv.begin(), vv.end(), Functor1());

}

STL has no problem.

Actually, in the first case, C++ interprets A a() as local declaration of a function 'a' with return type A. One of a long [threads](http://groups-beta.google.com/group/comp.lang.c++.moderated/browse_thread/thread/dd860b18e5c6cd23/493ade0efede15ca?q=c%2B%2B+constructor+%22function+declaration%22&rnum=2#493ade0efede15ca) in the "comp.lang.c++.moderated" newsgroups speaks about this dichotomy.

among one of the workarounds posted is this :

  //A a=A( B() );

Which brings us to the motivations behind programmers declaring functions in local scope. One of the possible reason is to hide an overloaded function declaration. For example, in the following example, the local function declaration overrides the global function declaration:

#include <iostream> 

void f(int i) { std::cout << "int=" << i << 'n'; }
void f(short s) { std::cout << "short=" << s << 'n';}

int main()
{
    f(1); // calls f(int)
    void f(short);
    f(1); // fooled you!

}

However this can be taken care of, by using Koenig lookup - which works only if there are namespaces or classes to be resolved (I dont think it works for primitive types).

#include <iostream> 

class X{};
void f(X x, int i) { std::cout << "int=" << i << 'n'; }
void f(X x, short s) { std::cout << "short=" << s << 'n';}
int main()
{
    X x1;

    f(x1,1); // calls f(int)
    void f(X x, short);
    f(x1,1); // fooled you!

}

Thaks to PK for this !!!

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [c++](http://del.icio.us/sss8ue/c++) [g++](http://del.icio.us/sss8ue/g++) [compiler](http://del.icio.us/sss8ue/compiler)
