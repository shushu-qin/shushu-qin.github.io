## Ritz-Galerkin Method历史

为什么有限元又称作Galerkin法？为什么可以将偏微分方程（PDE）乘上一个trial solution，然后通过其弱解形式求解PDE？为了了解有限元的数学本质，我们不得不提到泛函、Galerkin法、Ritz法。在这篇文章中，我们一起来看一下Ritz-Galerkin法的历史，从而更深入地理解有限元。

Ritz-Galerkin法是现代计算力学最重要的数学工具之一。1902年，Ritz在他的论文中试图用偏微分方程特征值问题解释光谱学的一个现象。虽然论文中的物理模型已经过时，但Ritz所使用的解决偏微分方程的方法颠覆了变分法领域，成为了计算数学之父之一。

### Euler-Lagrange变分法

Ritz最著名的贡献就是提出了系统地解决变分问题的方法，从此变分法不再限于理论层面，而被广分用于解决实际问题，促进了计算科学的发展。

变分法起源于1696年Bernoulli兄弟提出的最速线问题。在1638年的时候，Galileo就提出直线不是最优解，但是他错误地认为解是圆弧。Euler于1744年给出了此泛函极值问题等效的微分方程形式，并算出了这个偏微分方程的通解。11年之后，19岁的Lagrange论证了这个方程的正确性。

#### Euler的解法

除了给出解析解，Euler还提出了数值解法，算是第一个有限差分法（Finite difference method）。

#### Joseph Louis de Lagrange

Lagrange在给Euler的信中提出了以下几个概念（当时并没有出现这些专有名词）：

- test function  $\delta y$ 
- directional derivative: $\varepsilon$ 
- weak solution：Galerkin法的起源
- strong solution

