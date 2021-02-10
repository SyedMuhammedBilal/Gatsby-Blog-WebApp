---
title: "Function pointers: number of parameters mismatch"
date: "2005-06-20"
categories: 
  - "c"
  - "software"
---

Here is a strange quirk of gcc - It ignores number-of-parameter mismatch if we use function pointers, if and only if we pass more arguments than necessary.  
Consider the following piece of code

#include <stdio.h> 

typedef int (\*myFunc)(int a, int b);
int func1(int a){
        printf("In func1 n");
}

int func2(int a, int b){
        printf("In func2 n");
}

void executeFunc(myFunc someFunc ){
//void executeFunc(void\* someFunc ){
        myFunc actualFunc=someFunc;
        actualFunc(1,2);
        //actualFunc(1,2);

}

main(){
  executeFunc((myFunc)func1);

}

As you can see, I am actually calling "func1", which takes one argument. However,I am actually passing two arguments. The code works fine.  
Strangely enough, the other way does'nt work - i.e.

#include <stdio.h> 

typedef int (\*myFunc)(int a, int b);
int func1(int a){
        printf("In func1 n");
}

int func2(int a, int b){
        printf("In func2 n");
}

void executeFunc(myFunc someFunc ){
//void executeFunc(void\* someFunc ){
        myFunc actualFunc=someFunc;
        actualFunc(1,2);
        //actualFunc(1);

}

main(){
  executeFunc((myFunc)func2);

}

The above piece of code calls "func2", which actually takes two arguments with only one parameter. Compilation fails in this case.  
What is more puzzling is that, in case I had called "func1" directly (without going through all the function-pointers thing), it gives a compilation error of (too many arguments). I can deduce that gcc is doing checking w.r.t the "typedef" in the beginning, but given that ordinarily a function cannot be called with too many arguments, should'nt this be disallowed?  
6.3.2.2 of C89 (which correspondsto 6.5.2.2 of C99) states that:

> If the expression that denotes the called function has a type that includes a prototype, the number of arguments shall agree with the number of parameters

Which brings me to another "feature" of C vs C++. Consider the following function:

#include <stdio.h> 

int func3(int a){
return 1;

}

main(){
 func3(1,2,3);
}

This gives a compilation error with both "gcc" and "g++" about too many arguments.  
However, consider the following piece of code:

#include <stdio.h> 

int func3(){
return 1;

}

main(){
 func3(1,2,3);
}

This gives no error with "gcc", but an error with "g++". Apparently, in c++, a function declared with no arguments is taken as void, whereas in c, it is simply unknown.

Does gcc have a soft-spot for function parameters with too many arguments?

Only time or maybe [Raymond Chen](http://blogs.msdn.com/oldnewthing/) can tell.

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software)
