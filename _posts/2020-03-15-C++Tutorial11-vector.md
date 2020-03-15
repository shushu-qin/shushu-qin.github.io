---
title: C++ vector类型
category : C/C++
tags: [C/C++]
published: true
layout: posts
---
## 1. vector类型简介

标准库：集合或者动态数组。我们可以把对象放在里面。

本身是个类模板

类模板的实例化

```c++
vector<int> v1;
```

不能往vector里装引用

## 2. 定义和初始化vector对象

- 空vector

```c++
vector<string> mystr;
mystr.push_back("ad");
mystr.push_back("aewew");
```

- 元素拷贝的初始化方式

```c++
vector<string> mystr2(mystr);
//vector<string> mystr2 = mystr;
```

- 列表初始化

```c++
vector<string> mystr3 = {"sd","asdf","dfe"};
```

- 指定数量。有元素数量概念的东西，一般会用圆括号

```c++
vector<int> v1(12,-20);
vector<string> mystr4(12,"sdfds");

vector<int> v2(12); //创建12个元素，每个都为0
vector<string> mystr4(12); //创建12个元素，每个都为""
```

- 多种初始化方式
	- ()一般表示对象中数量
	- {}一般表示元素内容。但不绝对

```c++
vector<int> i1(100);
vector<int> i2{10}; //表示是一个元素，该元素的值为10
vector<string> s1{10}; //表示10个元素，每个元素为""
vector<string> s2{10,"hello"}; //表示10个元素，每个元素为"hello"
vector<int> i2(10,1); //表示是10个元素，该元素的值为1
vector<int> i3{10,1}; //表示是2个元素，第一个元素为10，第二个元素为1
```

要想正常的通过{}进行初始化，{}里的值的类型，必须要根vector<>里的元素类型相同。

## 3. vector对象上的操作

最常用的是不知道vector里有多少元素，需要动态增加/减少。

所以一般来说，先创建空vector。

vector的很多操作和string类似。

- 判断是否为空 

```c++
vector<int> i1(100);
if(i1.empty())
{
cout << "i1为空" << endl;
}
```

- push_back()
- size()
- clear()
- v[n]: n = 1-size-1
- 赋值

```c++
vector<int> v1;
v1.push_back(23);
v1 = i1; //v1原来的元素被冲掉了
v2 = {12,30,22};
```

- == / !=
- 范围for的应用 同string

