---
title: "[Software, c++] Separate compilation of templates: Template separation and export"
date: "2005-05-08"
---

A recent cause of inexplicable flummoxing and gnashing of teeth was a piece of code like the one below. Look at 1.cpp - pretty straightforward. An instance 'i1' is instantiated. A function 'myfunc' is called, which returns a pointer to an object. 'SSS1' and 'dummy' are declared in 11.h. Now the templatized function is declared in '13.h' and defined in '13.cpp'. Pretty simple, huh? I agree, there is no problem when compiling this piece of code like this:

> g++ 1.cpp 13.cpp -I.

But now consider what would happen if I compile them as:

> g++ -c 1.cpp -I. g++ -c 13.cpp -I. g++ 1.o 13.o

In this case, the linker, cribs about not finding dummy\* myfunc(SSS1<dummy>& a); This happens because (as I found out recently) a [long standing argument](http://www.corfield.org/index.cfm?event=cplusplus.section&section=ptexp) in the c++ community on how to separate template definition and declaration. Currently, only one compiler - Comeau C++- provides some sort of proprietary support for separation (via the 'export' keyword). As of GCC-3.4.2, this is not implemented. The problem occurs because, the compiler/linker uses some sort of optimisation techniques to remove multiple includes of templates and template definition code. when 13.cpp was compiled separately, it threw out basically the whole code, because those templates were not being used. Therefore, at link time, the linker is unable to instantiate the templates used in the function "myfunc" . The hack (sic) that is appearing to be working is to define the usage in 13.cpp itself.

> //dummy\* myfunc(SSS1<dummy>& a);
> //template <> dummy\* myfunc(SSS1<dummy>& a);
> template dummy\* myfunc(SSS1<dummy>& a);

Notice the addition of the "template" keyword before the definition (the commented line is what did'nt work). Somehow it is important to provide that keyword. Even "template <> " doesn't work. 1.cpp

#include <iostream> 
#include "11.h" 
#include "13.h" 

main(){
  SSS1<dummy> i1;
  dummy\* d=myfunc(i1);
}

11.h

template <class T>
class SSS1{
 private:
 public:
   T\* member;
     SSS1(){
     member \= new T;
     };
};

class dummy{          
};

13.h

template<class T>
T\* myfunc(SSS1<T>& obj);
/\*{
  return obj.member;
}\*/

13.cpp

#include "11.h" 
#include "12.h" 
#include "13.h" 
template<class T>
T\* myfunc(SSS1<T>& obj)
{
  return obj.member;
}

del.icio.us Tags: [c++](http://del.icio.us/sss8ue/c++) [g++](http://del.icio.us/sss8ue/g++) [compiler](http://del.icio.us/sss8ue/compiler)
