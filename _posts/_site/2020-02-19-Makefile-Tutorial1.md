title: Makefile入门2
tags: [linux]
published: true
layout: posts

### 1. 什么是Makefile

大多数的Winodws的程序员不需要深入了解自动化编译流程，因为Windows的IDE(Integrated Development Environment)已经做了相关的工作,比如VC，VB等。而Linux下没有这样的IDE，通常需要程序员做用脚本自行书写。这个脚本就是Makefile，在其中可以指定需要编译哪些文件，哪些先编译，哪些后编译，哪些需要重新编译，最终需要生成怎么样的应用程序。make是一种命令，它用来解释Makefile脚本，并根据脚本中的指定内容，进行操作。当我们在终端输入`make`时，`make`指令会自动寻找当前文路径下叫做Makefile（或makefile）的文件，并按照里面所定义的编译规则来编译源代码。

### 2. Hello World, Makefile!

假设我们有一个`hello_world.cpp`的文件

```c++
#include <iostream>

int main()
{
	std::cout << "Hello world!\n" ;
	return 0;
}
```

如果直接通过`g++`编译，我们可以cd到当前文件路径，在终端输入

```
$ g++ hello_world.cpp -o hello_world
```

即可编译成`hello_world`可执行文件。

如果g++命令很长，为了避免每次都要敲那么多文字，我们可以把这些指令写进Makefile里

```makefile
# 我是注释
CC   = g++  # CC，SRCS,EXEC为变量，都是字符串，使用时会完全被替换
SRCS = hello_world.cpp
EXEC = hello_world

all:
	$(CC) $(SRCS) -o $(EXEC)  # makefile命令部份，变量在被引用时需要加上$()或者${}用以dereference
	
clean:
	rm -rf *.o
```

编写完后，保存，在当前目录下执行make命令，生成可执行程序hello_world。

### 3. Makefile的组成

Makefile由以下五个部分组成

- 显示规则
- 隐式规则
- 变量的定义
- 文件指示
- 注释

下面具体介绍一下显示规则

### 4. Makefile的显示规则

可以归纳为一下形式

```
<target>:<depend>
	command1
	command2
	……
```

- target是一个目标文件，可以是可执行文件或.o文件，也可以是执行动作（如上面的all和clean）。

- depend目标的依赖，目标若需要成立，必须有依赖。一个target可以拥有多个depend 。

- command是make执行动作，一个目标依赖关系中可以包含多个命令，每个command前必须有个Tab键。

- 注：若target缺少depend ，那么command会直接被执行。

### 5. Makefile的工作原理

以这个Makefile文件为例

```makefile
A:B	
	@echo "A"
B:C	
	@echo "B"
C:D
	@echo "C"
D:	
	@echo "D"
G:	
	@echo "G"
```

若执行`make A`，输出

```
D
C
B
A
```

原理：

```
1. 当执行make A的时候，make程序从当前目录读入makefile，找到A命令。
2. 发现A depends on B，先执行B指令，B depends on C....以此类推，最终定位到D
3. 执行D: @echo "D" -> 执行C -> ... -> 执行A
```

若执行`make D`，输出

```
D
```

原理：

```
1. 当执行make D的时候，make程序从当前目录读入makefile，找到D命令。
2. 发现D没有depend，直接执行@echo "D"
```



