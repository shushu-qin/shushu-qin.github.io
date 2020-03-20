---
title: Beam Element in FEM (Euler Bernoulli)
tags: [FEM, Mechanics]
published: false
layout: posts
---

## 什么是梁

结构工程里，我们把能承受transverse load（横向荷载，即垂直于纵轴的荷载）的结构单元称作梁，与axial load相对应。![beam](https://i.ytimg.com/vi/jURuwHdliYs/maxresdefault.jpg)



梁主要承受弯矩，弯矩在横断面的体现为一半受压。



## 梁的种类 By Shape

![](https://theconstructor.org/wp-content/uploads/2018/09/Rectangular-Rinforced-concrete-beam.jpg)

![](https://www.petervaldivia.com/eso/structures/imagen/beam-sections.jpg)

## Beam Theories





## Euler-Bernoulli 梁

假设前提：

- 平面对称：过纵轴的平面 加图
- 横截面：
- 垂直性
- 只考虑弯矩，不考虑transverse shear（横向切应力）和axial force（轴向力）
- Elastic + isotropic

适用范围：

由于它忽略了切应变的效果，计算出的梁的变形量低于现实梁的变形量，因此适用于：很长的梁 + 薄板

