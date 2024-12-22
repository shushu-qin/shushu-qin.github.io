---
title: Basic Steps of Using Eigen to Solve Sparse System
category : Computational Mechanics
tags: [C/C++, HPC, Matrix Computations]
published: true
---

计算**Ax=b**，**A**为稀疏矩阵。

* Create left and right hand side 
* Solve linear system
* factorize
* solve
* Write data to mtx file

## 1. Create left and right hand side 

为了测试Eigen性能，可以利用C++内建的随机数生成器来创建稀疏矩阵

``` c++
#include <random>
#include <vector>
#include "Eigen/Eigen"

std::default_random_engine gen;     // random number generator
std::uniform_real_distribution<double> dist(0.0,1.0);  // type of distribution

int rows=100;
int cols=100;

std::vector<Eigen::Triplet<double> > tripletList;
for(int i=0;i<rows;++i)
    for(int j=0;j<cols;++j)
    {
       auto v_ij=dist(gen);                         //generate random number
       if(v_ij < 0.1)
       {
           tripletList.push_back(T(i,j,v_ij));      //if larger than treshold, insert it
       }
    }
SparseMatrixType mat(rows,cols);
mat.setFromTriplets(tripletList.begin(), tripletList.end());   //create the matrix
```

这段代码人为构造了一个稀疏矩阵，我们还可以在[matrix market](https://math.nist.gov/MatrixMarket/)下载工程计算里真正制造的矩阵，Eigen里也提供了接口来读取它的数据文件（[MatrixMarket Coordinate format](http://math.nist.gov/MatrixMarket/formats.html)）。

```c++
using namespace Eigen

int n;
SparseMatrix<double>  A;
string filename = "your_file_name.mtk";
loadMarket(A, filename);       // read mtk file and save data to A
Eigen::Index nnz = A.nonZeros();   // number of nonzeros
double *a = A.valuePtr();
int *asub = A.innerIndexPtr();
int *xa = A.outerIndexPtr();

VectorXd X(A.rows());
X.setOnes();   // create one vector as exact solution
VectorXd B(A.rows()); 
B = A * X;    // calculate right hand side

```

A = 

| 0    | 3    | 0    | 0    | 0    |
| ---- | ---- | ---- | ---- | ---- |
| 22   | 0    | 0    | 0    | 17   |
| 7    | 5    | 0    | 1    | 0    |
| 0    | 0    | 0    | 0    | 0    |
| 0    | 0    | 14   | 0    | 8    |

| Values:       | 22   | 7    | 3    | 5    | 14   |      | nnz  |
| ------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| InnerIndices: | 1    | 2    | 0    | 2    | 4    |      | nnz  |
| OuterStarts   | 0    | 2    | 4    | 5    | 6    | 8    | n+1  |

## 2. Solve linear system

* 矩阵重排序：Eigen内部提供了COLAMD, AMD，也可以Metis接口。
* Preconditioner 设置：[IdentityPreconditioner](https://eigen.tuxfamily.org/dox/classEigen_1_1IdentityPreconditioner.html), [DiagonalPreconditioner](https://eigen.tuxfamily.org/dox/classEigen_1_1DiagonalPreconditioner.html), [IncompleteLUT](https://eigen.tuxfamily.org/dox/classEigen_1_1IncompleteLUT.html)。默认Diagonal Preconditioner。

```c++
BiCGSTAB<SparseMatrix<double>, IncompleteLUT<double>> solver;
solver.compute(A);  // Iterative solver: setup a preconditioner. Direct solver: (1) reorder the nonzero elements of the matrix, (2) generally factorize it
solver.solve(B);
```

## 3. Write data to mtx file

```c++
#include <unsupported/Eigen/SparseExtra>
...
Eigen::saveMarket(A, "filename.mtx");
Eigen::saveMarket(A, "filename_SPD.mtx", Eigen::Symmetric); // if A is symmetric-positive-definite
Eigen::saveMarketVector(B, "filename_b.mtx");
```

