---
title: C语言 字符串与字符数组
category : C/C++
tags: [C/C++]
published: true
layout: posts
---

## 1. 字符串和字符串结束标记

```c
// 如果提供的初值个数和预订的数组长度相同，定义时可以省略数组长度，系统会自动根据初值个数确定数组长度
char c[] = {'I',' ', 'a', 'm',' ', 'h', 'a','p','p','y'};
printf("%s\n",c);   // 有乱码，一直输出到遇到00为止 
char c[] = {'I',' ', 'a', 'm',' ', 'h', 'a','p','p','y','\0'}; // 等价于 d
// 单引号代表字符，双引号代表字符串

char d[] = {"I am happy"}; // 系统会自动在字符串末尾加一个\0
printf("%s\n",d);   // 无乱码 
// \0： 字符串结束标记
// 为了测定一个字符串的实际长度，c语言规定了一个字符串结束标记
// 如果一个字符串，他的第10个字符为\0，则此字符串的有效字符为9

//char *p = "I am happy";

//char d[100] = {"I am happy"};

// char c[11] = {"I am happy"}; //至少要11个长度

```

## 2. 字符数组的输入输出

```c
char c[] = "china";
printf("%s\n",c);
// a) printf输出的字符不包括\0
// b) %s对应的是字符数组名c
// c) 即便数组长度>字符串实际长度，也只输出到\0
      // char c[20] = "china";
```

从键盘输入一个字符串，用scanf来完成

```c
char c[100];
scanf("%s",c);
printf("%s\n",c);

char str1[10],str2[10],str2[10];
scanf("%s%s%s",str1,str2,str3);  // how are you

char str[100];
scanf("%s",str1);  // how are you 只接收how 输入一个字符串的时候不能加空格，否则空格后面的内容会被丢弃

scanf("%s",&str1); // str和&str被等同看待，都被认为是数组的起始地址
printf("%s\n",str1); //用10进制的形式打印数组的起始地址
```

## 3. 字符串处理函数

- puts(字符串数组)：将一个字符串输出到屏幕

  ```c
  char str[100] = "I am happy";
  puts(str);
  printf("%s\n",str);
  ```

- gets(字符数组名)：只能输入一个字符串

  ```c
  char str[100];
  gets(str); //最多输入99个字符
  printf("%s\n",str);
  ```

- strcat(字符数组1，字符数组2) 比较常用，要掌握

  ```c
  #include <string.h>
  //链接两个字符数组中的字符串，把字符串2连接到1后
  char str1[10] = "one"; //这里不得少于7个字符的长度
  char str2[10] = "two";
  strcat(str1,str2);
  // 字符数组1长度必须足够大，能容纳后面的字符数组
  // 先去掉str1的\0，连接，保留\0
  ```

- strcpy(字符数组1，字符串2) 比较常用，要掌握

  ``` c 
  #include <string.h>
  char str1[10] = "one1234"; 
  char str2[10] = "two";
  strcpy(str1,str2); //str1的大小一定不要小于str2
  // str1 = two\0234\0
  
  // 字符串1必须是个数组名
  // 字符串2可以是个数组名也可以是个字符串常量
  // 上面的叫定义时初始化，是允许的；但下面这种赋值方式是不被允许的
  //str1 = "China"; // fail
  //str1 = str2;  //fail
  
  // 赋值语句只能将一个字符赋值给字符型变量或者数组元素
  char a[5];
  a[0] = 'A';
  
  ```
  
- strcmp(字符数组1，字符串2) 比较常用，要掌握

  根据ASCII码比较，从左到右。常用于比较相等或者不相等。

  - ==  0
  - < -1
  - \> 1

  ```c
  char str1 = "one123";
  char str2 = "ope1";
  str1==str2; //比较地址
  strcmp(str1,str2);
  ```

- strlen(字符数组)  *** 重点，经常用，经常考

  字符串的实际长度，不包括\0

  ```c
  char str1[100] = "one";
  char str2[100] = "断点abc";
  int len1 = strlen(str1);
  int len2 = strlen(str2);
  int len1 = strlen("我爱China");  //中文占两个字节
  
  int a;
  int soa = sizeof(a); // a所占的字节数，和a保存的内容无关  4
  										 // sizeof 不是函数，是操作符
  int s = sizeof(str1); // 120
  ```

  

