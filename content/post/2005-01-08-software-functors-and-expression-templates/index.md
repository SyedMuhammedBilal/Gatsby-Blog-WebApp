---
title: "[Software] Functors and expression templates"
date: "2005-01-08"
---

Consider a scenario in which, given a graph, you have to traverse it. How do you do it - write a function. Now consider a situation, in which only those nodes of a graph have to be touched which have a weight of say 8. Again, very simple - just pass an argument to the function (of value 8). But what if, the function is actually a callback. That is, the function is passed to another function. In such cases, it becomes difficult in terms of maintainability and performance (more on that later). Now, if you could somehow create a function with state, the above becomes so much easier. Enter functors.... Functors are also frequently better performing than functions.

> Stroustrup says: "A suitably-defined object serves as well as - and often better than - a function. For example, it is easier to inline the application operator of a class than to inline a function passed as a pointer to a function. Consequently, function objects often execute faster than do ordinary functions." Stroustrup, TC++PL (3d. ed.), Sec. 18.4, p. 515.

Functors can also be used in recursion. It took me a while to figure out the correct syntax to do this:

class sssFactorial{
    int operator() (int val){
         if(val==1) return val;
          else return (val\*this->operator()(val-1));
     }
};

This is well and good, but as we can see it is not exactly very trivial to construct functors as compared to plain vanilla functions (writing those extra lines will put a strain on your poor fingers). There are two ways of handling this - generating functors by using:

1. Functor binding
2. Expression templates

Functor binding essentially binds a binary functor (which takes 2 arguments) into a unary functor (which takes one argument). How is this good you ask - how can reducing the degrees of freedom be any good, right? Wrong. Binding may reduce degrees of freedom, but it makes a new functor from an old one. Suppose you were given two functors prod (to find the product of two parameters), div (to find quotient of two parameters)- how would you make a functor that creates (x\*b)/c f=bind1st(bind1st(div(),b),c) ; Now, f(x)=(x\*b)/c

(The C++ Standard Library also has the compose functor which is powerful still) Expression templates is a C++ technique for passing expressions as function arguments. A compliant compiler would be able to inline all the expressions (without the need for temporary variables), thereby speeding up code.

Expression templates are one of the most powerful features available in C++. Consider a matrix or vector operation of the form

> X=Z\*Y + Y, Where X,Y ans Z are matrices.

In this case, at each step of the computation of the mathematical expression, temporaries are created, each of which is of matrix size, which hogs the available memory. However, it is possible to decompose this complex operation into mathematical expression involving primitive ints/floats (i.e. actually determining the matrix formula for calculating each element of the resultant matrix). This is good, very good...but..not very maintainable (the horror..the horror) Enter expression templates. Expression templates allows the compiler to generate a compile time tree of expressions. No more trying to write large expressions, the compiler does it for you. Along with inlining most of the functions/functors used - producing faster code. For a valid, compilable code - see below...way below. For example several high performance libraries for matrix operations use expression templates (for example, [MET](http://met.sourceforge.net/) ). Expression Templates are a great way to calculate matrices, with great performance.

In EDA, matrixes are used for simulation, for functional verification, petri nets and hundreds of other applications. Cool..or what!!

Code for a sample expression template - just gives value of x\*4

#include <iostream> 

#include <stdio.h> 
using namespace std;

     
template<class A>
class Expr{

public:
     Expr(const A& a):\_a(a){}     
     //needed for variable
     Expr(){}       
     int operator() (int x){
           return \_a(x);
      }    
    int getVal(){return \_a;}

private :
      A \_a;
};
     
class Variable{
     //no constructor needed, since this is a variable
      public: int operator() (int x){ return x;}
};

     

class Constant{
public:
      Constant(int a):\_con(a){}
      int operator() (int a){return \_con;}

private:
      int \_con;
};
     
template <class A, class B, class Oper>

class BinaryExpression{
public:
      BinaryExpression(const A& a, const B&b): \_a(a),\_b(b){}
      // The functor calls a static inline function

      int operator() (int x) {
           return Oper::apply(\_a(x), \_b(x)) ;
      //remember \_a and \_b need not be constants, they may be expressions.
      }
private:

      A \_a;
      B \_b;
};

class Multiplier{
      public:Multiplier(){}
      static inline int apply(int a, int b){ 
       return a\*b;
      }
};
     

template <class A>
Expr <BinaryExpression<Expr<A>, Constant, Multiplier> >
operator\* (const Expr <A> & e, int val){
      //The most important line. This creates BinaryExpression object, 

      //wraps it in a Expr and returns it.
      //While doing so, it wraps the constant operand in a "Constant" object.
      //The Multiplier functor is passed to BinaryExpression for evaluation.
      return Expr <BinaryExpression< Expr<A>, Constant, Multiplier> > 
           ( BinaryExpression<Expr<A>, Constant, Multiplier > (e,Constant(val)) );
}

//the evaluation function.
template <class anything>
int evaluate(Expr<anything> e, int val){
        cout<<e(val)<<endl;
}

int main(){
     //We create a variable and use it.
      Expr <Variable> x;
      evaluate(x\*4, 5);
}
     

del.icio.us Tags: [software](http://del.icio.us/sss8ue/software) [c++](http://del.icio.us/sss8ue/c++) [g++](http://del.icio.us/sss8ue/g++) [compiler](http://del.icio.us/sss8ue/compiler) [functor](http://del.icio.us/sss8ue/functor)
