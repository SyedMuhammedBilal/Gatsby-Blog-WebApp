---
title: "[Python] Disassemble code, lambdas"
date: "2004-12-23"
---

Here's two nice python features:

- Lambda's are unnamed pseudo-functions, which are a functional programming tool

normal functions `def f (x): return x**2

Lambdas` `f = lambda x: x**2

Usage(for both)` `print g(8)

`

- To disassemble python code and see their bytecode (python can also precompile your code ...somewhat like java)

\>>import **dis** **\>>dis**.**dis**(f) 0 LOAD\_CONST 1 (1) 3 LOAD\_CONST 2 (2) 6 BINARY\_ADD 7 RETURN\_VALUE **\>>dis**.**dis**(g) 0 LOAD\_CONST 1 (1) 3 LOAD\_CONST 2 (2) 6 BINARY\_ADD 7 RETURN\_VALUE

del.icio.us Tags: [python](http://del.icio.us/sss8ue/python) [lambda](http://del.icio.us/sss8ue/lambda) [software](http://del.icio.us/sss8ue/software)
