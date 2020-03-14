---
title: GCC教程1
category : Linux
tags: [Mac,Linux]
published: true
layout: posts
---

## 1. 简单编译

示例程序

```
//test.c
#include <stdio.h>
int main(void)
{
    printf("Hello World!\n");
    return 0;
}
```

cd到当前目录，执行

```
$ gcc test.c
```

会在当前文件夹中生成a.out文件，这就是最终生成的可执行文件。

如果不想使用默认的文件名，那么可以通过`-o`选项来自定义文件名，例如

```
$ gcc test.c -o test.out
```

运行可执行文件

```
$ ./test.out 
```

## 2. 更多设置

```
gcc -Wall -g test.c -o test.out
```

`-Wall` 代表编译器在编译过程中会输出警告信息（Warning），这类信息虽然不是错误，不影响编译，但是很可能是程序 bug 的源头，也有助于你寻找代码中的错误，规范代码格式。建议每次编译时都加上 -Wall 参数。

`-g` 代表编译器会收集调试（debug）信息，这样如果你的程序运行出错，就可以通过 gdb 或者 lldb 等工具进行逐行调试，方便找出错误原因。如果你不是百分之百确定你的程序毫无问题，建议加上 `-g` 参数。这样 debug 的时候会方便很多。

