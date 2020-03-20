## OpenMP 入门1

最近跟着YouTube上的教学视频[Introduction to OpenMP ][https://www.youtube.com/playlist?list=PLLX-Q6B8xqZ8n8bwjGdzBJ25X2utwnoEG]学习了一下OpenMP，在这里记录一下学习笔记。教授课程的是Intel开发OpenMP的工程师Tim Mattson，每个视频十分钟左右，附带一些小练习，算是入门OpenMP很好的教程。

## 1. OpenMP简介

MPI和OpenMP经常一同出现在讨论并行计算的文章里，它俩有什么关系呢？

MPI (Message Passing Interface) 是个消息传递标准，也就是实现并行的接口，基于这个接口，有很多研究者开发了MPI库，比如mpich，msmpi等等。它主要用于多计算机系统/集群系统的信息传递。

很多并行计算机都是用SMP（Symmetrical Multi-Processor 对称多处理机）系统来构建，系统中的所有CPU共享全局内存，并通过共享的内存支持处理器之间的通信和同步。OpenMP是基于共享存储标准问世的，它可以解决单机多核系统多线程并行的问题，也就是单个电脑不同CPU之间的通信。所以，如果你只拥有一个多处理机的电脑，OpenMP是更好的选择。

如今单机多核系统越来越流行，硬件环境也决定了软件工程师的软件工程师需要重写代码来利用这种，提高程序的效率。为了方便大家编写多线程程序，Intel的工程师开发OpenMP这个API。有了它，你就只需要在需要并行的代码段前加上一些OpenMP的编译指令，编译器就会“自动”把代码转换成并行程序。当然，要用好OpenMP，我们还是需要知道什么样的代码才是适合并行的，以及如何管理内存。

## 2. OpenMP Hello World

首先，我们学习一下如何编写和运行hello_world文件。

```c++
#include <omp.h>
#include <stdio.h>
int main() {
#pragma omp parallel //用在一个代码段之前，指示这段代码将被多个线程并行执行。
  { // 被放到{}里的代码将被并行执行
     int ID = omp_get_thread_num(); //获取当前线程ID
     int num  = omp_get_num_threads(); //被启动的进程数
     printf("Hello from thread %d, nthreads %d\n", ID, num);
	}
  return 0;
}
```

在OS X系统上，使用gcc和openmp编译文件

```
gcc -fopenmp hello_world.c -o hello_world
```

如果写的是c++文件，可以用

```
g++ -fopenmp hello_world.cpp -o hello_world
```

或者

```
#gcc默认文件是c文件，在编译时不会链接c++标准库。加入-lstdc++可以指定引入c++标准库
gcc -fopenmp hello_world.cpp -o hello -lstdc++
```

运行./hello_world

```
(base) charlotte-chingdeMacBook-Pro:openmp charlotte_ching$ ./hello_world
Hello from thread 1, nthreads 4
Hello from thread 3, nthreads 4
Hello from thread 2, nthreads 4
Hello from thread 0, nthreads 4
```

