---
title: History of Finite Element Methods
tags: fem
published: true
layout: posts
---

了解一个方法是怎么产生的可能比学会这个方法更重要，所以闲来无事，总结一下有限元的发展史。

### 有限元的发明者

并不是只有一个人。但是如果说是通用有限元方法的创始人，我们可以说是Boeing公司的一个结构工程师Jon Turner。他总结并且完善了直接刚度法Direct Stiffness Method，
我们接下来也会讲到这个方法，它是有限元的雏形。当时其他航空公司都是用Force Method，他说服了波音投入资源来开发直接刚度法。1952-1953年期间，他监督了第一个基于连续介质的有限元的开发。当然，这期间还有其他工程师投入到有限元法的发展，但是所有这些人都来自于航空领域。为什么呢？这不是巧合。我们先前提到了，有限元的产生取决于三个关键因素，其中之一就是计算机。而当时（1950s）只有大的航空公司才有能力支付大型计算主机。

### 有限元的推广者

主要是四位学者：

- J.H. Argyris（Imperial College）: 当时是波音的顾问
- R.W. Clough（U.C. Berkeley）
- H.C. Martin（U. Washington）：在Turner的团队中进行暑期实习
- O.C. Zienkiewicz    

他们这四个人将有限元从航空领域带入到了其他工业领域，在1950s到1960s。前三个都是直接或者间接从Turner那里学到有限元的。

1956年，M. J. Turner （波音公司工程师），R. W. Clough （土木工程教授），H. C. Martin（航空工程教授）及L. J. Topp （波音公司工程师）等四位共同在航空科技期刊上发表一篇采用有限元技术计算飞机机翼强度的论文，名为《Stiffness and Deflection Analysis of Complex Structures》，系统研究了离散杆、梁、三角形的单元刚度表达式，文中把这种解法称为刚性法（Stiffness），一般认为这是工程学界上有限元法的开端。

Clough在合作结束后，回到伯克利创建了一个研究小组，把有限元应用于土木工程。

1960年，美国克拉夫Ray W.Clough教授在美国土木工程学会（ASCE）之计算机会议上，发表了一篇处理平面弹性问题论文，名为《The Finite Element in Plane Stress Analysis》的论文，将应用范围扩展到飞机以外之土木工程上，同时有限元法（Finite Element Method，简称FEM）的名称也第一次被正式提出。

Zienkiewicz当时是研究有限差分法的，1964年的时候Clough说服了他来尝试FEM，1967年，他写了第一本关于有限元的教科书，并在Swansea大学创建了另外一个研究小组，Swansea大学也把他的计算力学研究所命名为Zienkenwizc研究所。

### 黄金时代

接下来就是有限元发展的黄金时代：1962-1972。一方面，有限元被广泛用于工程实践中，被验证是有效的。另一方面，有限元的数学理论被不断完善。1973年，Strang and Fix出版了有限元数学基础的第一本专著[^3]。自此之后，FEM被推广到解决各种物理问题，包裹电磁、热、流体等等，而不仅仅局限于结构，因为它们的数学本质是一样的。 如今有限元已经被广泛应用于各大CAE软件中，如Ansys、Natran、Abaqus、LS-Dyna等。从数学的角度来看，物理问题都可以被抽象成数学模型（偏微分方程PDE+Boundary Conditions），有限元只是偏微分方程的数值解法之一。除此之外，Finite Volume Method、Finite Difference Method、Discontinuous Galerkin、Meshless Method、Discrete Element Method也是求解这些物理问题常用方法。

### Referencs
> [1] Carlos A. Felippa(2004), "Introduction to Finite Element Methods"     
> [2] MJ Turner. "Stiffness and deflection analysis of complex structures." *journal of the Aeronautical Sciences* 23.9 (1956): 805-823      
> [3] Strang, Gilbert, and George J. Fix. *An analysis of the finite element method*. Vol. 212. Englewood Cliffs, NJ: Prentice-hall, 1973.