---
title: How to install gcc on mac
tags: mac
published: true
layout: posts
---

### 1. 查看有没有安装gcc

```
gcc -v
```

### 2. 用homebrew下载gcc

> brew search gcc     # 搜索可供下载的gcc版本
>
> brew install gcc      # 默认下载最新版

目前最新版是 gcc-9 (Homebrew GCC 9.2.0_3) 9.2.0。

### 3. 添加路径至bash_profile

##### 查看当前使用的gcc的路径

```
whereis gcc
```

一般为/user/local/bin

#### vim中打开bash_profile

```
vi ~/.bash_profile
```

#### 添加路径

```
export PATH="/usr/local/bin:$PATH"
```

#### 查看是否生效

```
echo $PATH
```

如果能够在输出中看到刚刚添加的路径就说明添加成功了。

### 4. 添加别名

```
alias gcc="gcc-9"
alias cc="gcc-9"
alias g++="g++-9"
alias c++="c++-9"
```

否则系统使用的是clang而不是gcc。

### 5. 查看gcc是否生效

```
gcc --version
输出。。。。。
gcc-9 (Homebrew GCC 9.2.0_3) 9.2.0
Copyright (C) 2019 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

```
gcc
输出。。。。。
gcc-9: fatal error: no input files
compilation terminated.
```

