---
title: MPICH安装及编译
tags: [HPC, MPI]
published: true
layout: posts
---

## 1. Install MPICH

这里我们采用MPICH的MPI实现，下载官网http://www.mpich.org/downloads/。Mac系统可以直接通过homebrew安装MPI

```
$ brew install mpich
```

## 2. 程序基本结构

- 进入并行环境`MPI_Init`：让系统知道此程序是并行程序，启动并行计算环境。
- 主体并行程序：实现并行的代码。
- 退出并行环境`MPI_Finalize`：通知系统，从这里开始，不再使用并行环境。

## 3. 编译MPI Hello world小程序

所有的MPI函数都是以`MPI_`前缀开头，接 MPI_ 之后的第一个字母大写, 其余全部为小写字母。函数调用结束后会返回int 类型的错误信息码，当 MPI 程序不出错的时候返回`MPI_SUCCESS`。

```c
/* MPI_HelloWorld.c */
#include <stdio.h>
#include <mpi.h>  // 引入MPI头文件

int main(int argc, char * argv[])
{    
    int info, flag;
    info = MPI_Init(&argc, &argv); // 初始化MPI
  
    // 得到进程数量
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);
  
	  // 得到当前进程的秩
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);
  
    printf("Hello world!\n");
    
    info = MPI_Initialized(&flag); // 查看MPI是否被初始化
    
    info = MPI_Finalize();  //
  
    return 0;
}
```

使用`mpicc`命令编译c代码

```
$ mpicc -g -o MPI_HelloWorld MPI_HelloWorld.c
```

运行需要使用 `mpiexec` 命令

```
$ mpiexec -np 2 MPI_HelloWorld
Hello world!
Hello world!
```

