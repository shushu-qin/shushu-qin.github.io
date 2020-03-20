---
title: Install lapack on Mac
tags: mac
published: false
layout: posts
---

## Mac上安装Lapack

1. 从[netlib官网](http://www.netlib.org/lapack/#_lapack_version_3_8_0_2)下载Lapack源码
2. 解压源码

```
tar -xzf lapack-3.9.0.tar.gz
```

3. 进入源码目录并进行编译

```
cd lapack-3.9.0
mkdir build           # 创建build文件夹
cd build
cmake -DCMAKE_INSTALL_PREFIX=/opt/lapack-3.8.0 -DCBLAS=ON -DLAPACKE=ON ..  
                      #指定编译CBLAS 和 LAPACKE
make -j 2             # 根据需求更改编译开的 threads 数
sudo make install
```

4. 安装完成后我们在安装目录 `/opt/lapack-3.8.0` 下会找到 `include` 和 `lib` 两个 目录，其中 `lib` 下有四个库文件 `libblas.a`, `libcblas.a`, `liblapack.a`, `liblapacke.a`，这四个库我们以后都需要用到。

BLAS 和 LAPACK 使用 FORTRAN 编写，而在 C 代码中调用 FORTRAN 程序需要进行一个转换。为了让我们编写程序更加舒服，这里也指定编译了这两个库对应的 C 接口。CBLAS 和 LAPACKE 只是 BLAS 和 LAPACK 的 C wrapper，本身并不包含任何实现，也就是说真正用到的函数还是 BLAS 和 LAPACK 里的。