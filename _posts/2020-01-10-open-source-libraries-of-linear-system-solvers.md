---
title: Open source libraries of Linear system solvers
tags: fem
published: true
layout: posts
---

在有限元程序计算中，最终我们会得到Ax=b这样一个线性方程组，在MATLAB里，一个最简单的求解线性方程组问题的方法就是x=A\b。最近在做有限元软件开源矩阵求解器的集成。
<!–-break-–> 
说到矩阵运算，最简单的方法就是打开MATLAB，输入 x=A\b，然后就是等结果了，而其他迭代法求解也有很多易用的接口。被MATLAB宠坏的我，在转到其他开源的矩阵求解库的过程中也是经历了各种曲折，在此写个总结，分享一下我对数值计算中线性方程组求解的理解。 


一开始接到有限元稀疏矩阵求解的项目时，我无数遍问自己为什么不用MATLAB？但是企业不是学校，开发软件是要盈利的，MATLAB的license太贵了，而且并不开源，想要开发一个全自主产权的软件，这条路显然是走不通的。在这种情况下，我尝试寻找可用的开源软件，遇到了一堆名词，LAPACK，BLAS，MKL，Eigen，Pardiso，Armadillo，SuperLU，MUMPS，etc。在[这个网址](http://www.netlib.org/utk/people/JackDongarra/la-sw.html)总结了各个线性代数求解库的特性和适用范围，大家可以参考一下。

我又无数遍问自己。。。。 

## 1.解线性方程组不就是LU分解或者是迭代法吗，为什么要用这些软件，不直接自己写一个？

看了Davis讲稀疏矩阵直接求解法的第一课之后（看第二课时我就开始怀疑自己的智商了），我开始明白从书上写的pseudocode到真正的代码实现之间，有很长的路要走。虽然LU分解基于Gaussian Elimination， 但要做到内存占用小，代码效率高，甚至并行化，将书上的算法照搬写成代码肯定会在大型矩阵运算（一百万以上自由度）时捉襟见肘。所以，不能重复造轮子，尤其是劣质的轮子。 

## 2.   Eigen，MKL，Armadillo的说明文档中都讲了包含LAPACK和BLAS这回事？

矩阵运算都涉及三种最基本的操作

* Level 1 : 处理单一向量的线性运算以及两个向量的二元运算。

* Level 2: 处理矩阵与向量的运算，同时也包含线性方程求解计算。

* Level 3: 矩阵与矩阵运算。

BLAS英文全称为Basic Linear Algebra Subprograms，是低级矩阵和矢量算术运算集合。LAPACK(Linear Algebra PACKage)即线性代数包，底层是BLAS，在此基础上定义了很多矩阵和向量高级运算的函数，比如矩阵分解（LU, QR, SVD），特征值求解等。所以BLAS和LAPACK看做是接口规范，其他的组织、个人和公司，就可以根据此规范，实现自己的科学计算库（见下图）。

![lapack](https://img-blog.csdn.net/20170906135422358)

Eigen、Armadillo自身实现了各种线性代数运算库外，同时还支持上述各种BLAS/LAPACK为基础的底层以加速运算。换句话说，搭了个算法的 架子，但是不管什么算法，它的内部可能涉及刚刚提到的矩阵x矩阵、矩阵x向量之类的运算，这些可以用BLAS/LAPACK算。他们除了自己写了线性运算库，还提供了其他矩阵运算库的接口（Pardiso，PaStiX，SuperLU，etc），所以只要编出这些lib，加进编译路径里，就能通过Eigen的接口调用他们内部的函数了。

 

## 3.   既然有Pardiso，SuperLU的库，为什么要从Eigen，MKL用它？

以SuperLU为例，pdgssvx（用 parellel LU decomposition解double类型的Ax=b ）的函数有十几个参数要设置，而且传入的矩阵参数是以指针数组。在看Eigen的SuperLU接口，由于Eigen将各种矩阵运算库封装成统一格式， 我们可以直接用Eigen的稀疏矩阵作为参数，然后solver(b)就OK了。MKL，Armadillo也是类似，将这些接口进行了封装，我们不需要考虑矩阵的存储格式和各种难调的参数，这样大大减少了各个求解器接口调用的学习成本。MKL是Intel针对它的CPU系列开发的核心数学运算库，它提供了完整的BLAS和LAPACK实现，高度优化和线程，且内置并行处理机制。Eigen的很多矩阵运算可以用MKL加速（http://eigen.tuxfamily.org/dox-3.2/TopicUsingIntelMKL.html）。 用法如下：

·   在include Eigen头文件前，定义EIGEN_USE_MKL_ALL的宏

·   在编译程序时link MKL的库

·   Eigen自动将它的一些算法用MKL的routine实现

## 4. 哪个库最好？

世上不存在万能药。有的库是个超级大礼包，同事包含直接法和迭代法，有的只提供直接法或者迭代法。参考了各个商业软件和开源有限元软件的线性求解库后，我的总结是直接法一般用MUMPS、SuperLU，PaStix，Trillinos可以利用Metis的矩阵重排序功能加速运算。迭代法用PETCs、Trillinos。如果习惯了Matlab，只考虑接口易用性的话，那么可以选择Eigen和Armadillo。

## 5. 迭代法那么多用哪个？

不知道，大家可以参考这篇论文[A Comparison of Preconditioned Krylov Subspace Methods for Nonsymmetric Linear Systems](https://www.researchgate.net/publication/304771911_A_Comparison_of_Preconditioned_Krylov_Subspace_Methods_for_Nonsymmetric_Linear_Systems)。总结下来就是

> For large, moderately conditioned, non-saddle-point problems, use GMRES with Boomer- AMG as right preconditioner, with HMIS (or PMIS) coarsening and FF1 interpolation.
>
> The easiest way to leverage the above recommendation is to use existing software packages. PETSc [5] is an excellent choice, since it supports both left and right preconditioning for GMRES and BiCGSTAB, and it supports BoomerAMG with various options.
>
> Note that with an effective multigrid preconditioner, BiCGSTAB often converges almost as smoothly as GMRES. Therefore, assuming a multigrid precondition is available, BiCGSTAB can be used in place of GMRES, especially if right-preconditioned GMRES is unavailable but right-preconditioned BiCGSTAB is (such as in MATLAB).

GMRES+右预算子，BiCGSTAB也行，具体问题具体调参数。

**待完成：线性方程组求解算法的介绍**.....