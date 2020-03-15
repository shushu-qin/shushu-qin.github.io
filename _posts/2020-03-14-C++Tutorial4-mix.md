---
title: C++ 零碎知识点
category : C/C++
tags: [C/C++]
published: true
layout: posts
---

## 1. 局部变量及初始化

随时用到随时定义，初始化不仅可以用 = ，也可以用 {}。

```c++
int main()
{
  // 在定义的时候初始化
  // int abc{5};  // abc = {5} 等号可有可无
 
  for(int i {0}; i < 10; i++)
  {
    cout << i << endl;
  }
  
  int a[]{1,2,3};
  
  int abc = 3.5f; //丢了.5，被系统截断
  int abc{3.5f}; // fail 系统执行了从浮点数到整数的转换
  
  
	return 0;
}
```

## 2. auto：变量的自动类型判断

auto可以在声明变量的时候根据变量初始的类型自动为变为与此变量匹配的类型，声明是要初始化。

auto自动类型推断发生在编译时期，所以不会是程序效率降低。

```c++
auto bvalue = true; // bool
auto ch = 'a'  //char
```

## 3. 头文件的防卫声明

```c++
// head1.h

//#ifdef, ifndef 条件编译
//#ifdef:
	//some codes
//#endif

#ifndef __HEAD1__
#define __HEAD1__

int glbvalue1 = 1;
  
#endif
 
```

## 4. 引用

引用理解成：为变量起了另外一个名字，一般用&符号表示。

定义引用，并不额外占用内存，或者理解成，引用和原变量占用同一内存（实际上并不是）。

定义引用必须初始化。

```c++
int value1 = 1;
int &value2 = value1;
value2 = 2; 
cout << value1; //2

// int &refval3 = 10; //引用必须绑定到变量上去，绑定到对象也可以，不能绑定常量。
// float &refval4 = value1;  // 不可以。必须类型相同
int *p = &value1;

```

## 5. 常量

别名看起来和原变量是同一个东西，其实在c++中它们占不同内存。

不要尝试改变常量的值。

```c++
// const
const int var = 7;
// var = 10; //fail
// int &var2 = var;  //fail
int &var2 = (int &)var;
var2 = 18;
cout << var;  //7  加断点调试时是18
cout << var2; //18

//-----------------------------------------
constexpr int fun(int abc)
{
  return 5;
}
int main()
{
  // constexpr 在编译的时候求值，能提升性能。
  constexpr int var = 1;
  int b = 5;
  // constexpr int var2 = b; // fail
}
```

