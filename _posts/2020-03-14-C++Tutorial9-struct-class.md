---
title: C++ 结构和类
category : C/C++
tags: [C/C++]
published: true
layout: posts
---

## 1. 结构

结构回顾

```c++
struct student
{
	int number;
	char name[100];
}

void func1(student tmpstu) //形参用结构变量
{
  tmpstu.number = 2000;
  strcp_s(tmpstu.name,sizeof(student.name),"who");
  return;
}

void func2(student &tmpstu) //形参用引用
{
  tmpstu.number = 2000;
  strcp_s(tmpstu.name,sizeof(student.name),"who");
  return;
}

void func3(student *ptmpstu) //形参用指向结构体的指针
{
  ptmpstu->number = 2000;
  strcp_s(ptmpstu->name,sizeof(student.name),"who");
  return;
}

int main()
{
  student student1; // 可以省略struct，直接用结构名
  student1.number = 1001;
  strcp_s(student1.name,sizeof(student.name),"zhangsan");
  cout << student1.number << endl;
  cout << student1.name << endl;
  
  func1(student1); //student1值没有被改变
  
  
  return 0;
}
```

c++中的结构和c的结构有什么区别？

- c++中的结构不仅仅用成员变量，还可以在其中定义成员函数（方法）

  ```c++
  struct student
  {
  	int number;
  	char name[100];
  	void func1()
    {
      number--;
      return;
    }
  }
  ```

## 2. 权限修饰符

```c++
struct student  //结构成员默认public
{
private:
	int number;
	char name[100];
  
public:
	void func1()
  {
    number--;
    return;
  }
}
```

## 3. 类

在c中，我们定义一个属于该结构的变量，我们叫结构变量。

在c中，我们定义一个属于该结构的变量，我们叫对象。

他们都是一块能够存储数据并且具有某种类型的内存空间。

区别：

- c++结构体中的成员变量和成员函数缺省是public，类是private
- 结构体中继承缺省是public，类是private

额外说明：

- 标准c++库里包含大量丰富的类和函数。
- c++中一般以类为单位写代码

## 4. 类的组织（书写规范）

类的定义代码写在.h里，头文件名可以和类名相同。类的实现写在.cpp里。