---
title: C++函数
category : C/C++
tags: [C/C++]
published: true
layout: posts
---

## 1. 函数回顾与后置返回类型

```c++
void func(int,int); //函数声明是可以只有形参的类型，没有名

void func(int a, int) //函数定义中，形参如果在函数体内用不到的话，则可以不给形参变量名字，只给其类型。
{
  return;
}

int main()
{
	fun(10,11);
}
```

把函数返回类型写在函数名字之前，叫前置返回类型。

把函数返回类型写在函数参数列表之后，叫前置返回类型。

```c++
auto fun(int a,int b) -> void;

auto fun(int a,int b) -> void
{
	return;
}
```

## 2. 内联函数

适用于函数体很小，调用很频繁的函数。

```c++
inline int myfun(int a) //函数定义前加inline
{
	return a;
}
```

- inline影响比那一起，在编译阶段对inline这种函数进行处理，系统尝试调用该函数的动作替换为函数本体。通过这种方式，来提升性能。
- inline只是我们开发者对编译器的一个建议，最终取决于编译器的整个功能。

如果两个源文件都包含同一个函数定义的话，系统会报错。

```c++
//head.h
#pragma once
void fun()
{

}

//project2.cpp
#include "head.h"

//project3.cpp
#include "head.h"
```

- 内联函数的定义就要放在头文件中，这样需要用到这个内联函数的.cpp文件，都能通过#include把这个内联函数的源代码include进来，以便找到这个函数的本体源代码，并将函数的调用进行替换。

```c++
//head.h
#pragma once
inline void fun()
{

}

//project2.cpp
#include "head.h"

//project3.cpp
#include "head.h"
```

优缺点：

- 提升效率
- 代码膨胀，所以内联函数函数体尽量小。

注意：各种编译器对inline的处理各不相同。inline函数尽量简单，代码尽可能少。循环，分支，递归调用尽量不要出现在inline函数中。否则的话，编译器很可能因为你写这些代码的原因拒绝让这个函数成为一个inline函数。

constexpr函数，可以看成是更严格的内联函数

#define宏展开也类似于inline

## 3. 函数杂合用法总结

- 返回void，可以返回一个“返回值为void的函数”

```c++
void fun()
{
}

void fun1()
{
	return fun();
}
```

- 返回指针或引用

```c++
//int *myfun()
//{
//	int tmpvalue = 0;
//	return &tmpvalue;  //不可以，函数结束后，tmpvalue这段内存被系统回收
//}

int &myfun()
{
	int tmpvalue = 0;
	return tmpvalue;  //又是一个巨大隐患
}

int&k = myfun();
k = 20; //往一个不属于你的地址写了数字

int k = myfun();
k = 20; //安全

```

- 没有形参可以保持形参列表为空，或者int fun(void)

- 如果一个函数不被调用的，则该函数可以只有声明部分，没有定义部分。

- 引用作形参

## 4. const

```c++
//const int abc = 123;
//char *p;
char str[] = "Hello world";
const char *p;
p = str;
//*p = "Y"; //p指向的东西不能通过p来修改

//char const * <=> const char *
char * const p = str; //定义时必须初始化，p一旦指向一个东西后，就不可以再指向其他东西了
*p = "Y";
  
//const char * const 
char const* const p = str; //p的指向不能改变，而且其指向的内容也不能改变

int i = 100;
const int &a = i;
//a = 300; //fail

//int &b = 10; //fail
const int &b = 10; //succeed 分配了内存的
```

## 5. 函数形参中带const

```c++
void f1(const student &stu)
{
}


void f2(const int i)
{
  // i = 100;
}
```

- 可以防止你无意修改形参的值

- 实参类型可以更灵活

  ```c++
  //void fs(student &stu)
  void fs(const student &stu)
  {
  }
  void f2(const int i)
  {
    // i = 100;
  }
  student abc;
  const student &def = abc
  fs(def);
  f2(11);
  ```

  