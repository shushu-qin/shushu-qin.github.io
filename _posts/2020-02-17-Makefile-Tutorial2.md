---
title: Makefile入门2
tags: [linux]
published: true
layout: posts
---

本文通过下面这个基本版Makefile来学习Makefile的书写规则。

```makefile
# makefile example
CC     = gcc
CFLAGS = -Wall -O2 
CFLAGS += -I./  -L./
LFLAGS = -lpthread -lm 

SRCS   = fun1.c \
	       fun2.c  \
	       main.c

OBJS   = $(SRCS:.c=.o)

EXEC   = test

all:$(OBJS)
        $(CC) $(CFLAGS) $(OBJS) -o $(EXEC) $(LFLAGS)

clean:
        rm -rf $(EXEC) $(OBJS)
```

**main.c:** 

```c
#include "fun1.h"
#include "fun2.h"
int main()
{
  fun1();
  fun2();
  return 0;
}
```

**fun1.c:**

```
#include <stdio.h>
void fun1()
{
	printf("This is fun1\n");
}
```

**fun2.c:**

```
#include <stdio.h>
void fun2()
{
	printf("This is fun2\n");
}
```



### 1. 预定义变量

```makefile
CC   = gcc
```

不管是显式规则还是隐式规则，makefile都有一些预定义的变量， 这些变量有些会在隐式规则中自动带入，有些则是约定俗成的具有特殊意义的变量。

```
CC			:	编译器类型
CFLAGS	:	编译选项， 通常为-O2 -Wall -I -L
LFLAGS	:	额外链接库
EXEC  	:  	应用程序名
SRCS		:	源代码
OBJS		:	目标文件
```

### 2. 变量追加

同c语言中的`+=`

```makefile
CFLAGS = -Wall -O2 
CFLAGS += -I./  -L./
```

### 3. 变量替换

其格式为：foo = $(var:a=b)，将var变量中的a替换成b，并返回给foo。

```makefile
OBJS=$(SRCS:.c=.o) #将SRCS中的".c"字符串替换成".o"，赋值OBJS变量。
```

### 4. Makefile的隐式规则

通过变量字符串展开，例子中的all指令

```makefile
all:$(OBJS)
        $(CC) $(CFLAGS) $(OBJS) -o $(EXEC) $(LFLAGS)
```

可以转换为

```
gcc -Wall -O2 fun1.o fun2.o main.o -o main -I./  -L./
```

make在解释Makefile时，若目标是.o文件，那么他会自动的去寻找相应的.c文件， 并隐式的进行编译。这个例子中，目标的依赖为三个.o文件，fun1.o, fun2.o,main.o， make自动推导，找到相应.c文件（ fun1.c fun2.c main.c）生成找到.o文件。