OSR (*On Stack Replacement*) is used to convert a running function’s interpreter frame into a JIT’d frame – in the middle of that method.

#### Resources: 
  
- [Efficient and General On-Stack Replacement for Aggressive Program Specialization](http://www.cs.ucsb.edu/~ckrintz/papers/osr.pdf)
- [What the heck is OSR](http://www.azulsystems.com/blog/cliff/2011-11-22-what-the-heck-is-osr-and-why-is-it-bad-or-good)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/runtime-profiler.cc#L178-L185)


**Note**: available starting with **node:** `0.10` - **v8:** `3.14` 
