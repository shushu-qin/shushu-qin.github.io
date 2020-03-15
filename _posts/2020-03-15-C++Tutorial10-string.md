---
title: C++ string类型
category : C/C++
tags: [C/C++]
published: true
layout: posts
---
string: 可变长字符串的处理。vector一种集合或者容器的概念。

## 1. string 类型简介

c++标准库中的类型，代表一个可变长字符串

```c++
#include <iostream>
#include <string>

using namespace string;

int main()
{
  char str[100] = "I love China"; //c语言中的用法
  //string类型可以看成一个类类型
  string s1; //默认初始化 s1="":空串，表示里面没有字符
  string s2 = "I love China"; //把"I love China"这个字符串内容拷贝到s2代表的一段内存中，拷贝时不包括末尾的\0
  string s3("I love China"); //跟s2写法效果一样
  string s4 = s2; //把s2中的内容拷贝到了s2代表的一段内存中
  
  int num = 6;
  string s5(num,'a'); //'aaaaaa' 不太推荐，因为在系统内部会创建临时对象
  
  
  
  return 0;
}


```

## 2. string对象上的操作

- 判断是否为空

```c++
string s1;
if(s1.empty())
{
	cout << "s1 is empty" << endl;
}
```

- 字符串长度 

size() length()代表字符串长度。 unsigned int

```c++
string s2 = "我爱中国"；
cout << s2.size() << endl;
cout << s2.length() << endl;
string s3 = "I LOVE CHINA";
cout << s3.size() << endl;
cout << s3.length() << endl;
```

- 返回s中的第n个字符

s[n]: n代表的是一个位置，0-.size()-1

如果不小心用小标n超过这个范围的内容，或者人家本来一个空字符串，你也用s[n]去访问，都会产生不可预测的结果。

```c++
string s3 = "I LOVE CHINA";
if(s3.size()>4)
{
  cout << s3[4] << endl; 'V'
  s3[4] = 'w';
}
```

- 字符串的连接

```c++
string s4 = "abcd";
string s5 = "hijk";
string s6 = s4 + s5;
std::cout << s6 << endl;
```

- 字符串赋值运算符

```c++
s6 = s4;
```

- 判断相等

s1==s2：大小写敏感

s1!=s2

- s.c_str()：返回字符串s中的内容指针，以\0结尾的。这个函数的引用是为了与C语言兼容。

```c++
string s9 = "231dfds";
string s10 = "adfdf";
const char *p = s10.c_str();

char str[100];
strcpy_s(str,sizeof(str), p);
cout << str << endl;

string s11(str); //用C语言的字符数组初始化string类型

```

- 读写string对象

```c++
string s1;
cin >> s1;
```

- 字面值和string相加

```c++
string s1 = "abd";
string s2 = "fdsf";
string s3 = s1 + " and " + s2 + 'e';

//string s4 = "sdfs" + "dfe"; //语法上不允许这么加
//中间夹杂一个string对象，语法上就允许
string s4 = "sdfs" + s1 + "dfe"; 
//string s5 = "sdf" + "sdf" + s1; //fail
```

- 范围for针对string的使用

```c++
string s1 = "I love China";
for (auto e:s1)
{
  cout << c << endl; 
}

for(auto &e:s1) //能修改其中的值
{
  e = toupper(e);
}
cout << s1 << endl;
```

