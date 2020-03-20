## 1. OpenMP概览

- OpenMP是个多线程共享内存的模型。不同线程之间通过共享变量来通信。
- 错误的共享内存的方式会导致竞态条件 (race condition)，表现就是每跑一次程序都给出不同的结果。
- 为了限制竞态条件，我们需要用线程之间的同步来保护数据。
- 同步是很昂贵的，所以我们需要改变获取数据的机制来降低同步的需要。

## 2. PI Exercise

下面我们做一个用数值积分计算PI的小练习来理解什么是race condition，以及如何解决它。

 $$\int_0^1 \frac{4}{1+x^2} = \pi$$  => $$\sum_{i = 0}{N} f(x_i)\triangle x$$

串行程序为：

```c++
static long num_steps = 100000;
double step;
int main()
{
	int i; double x, pi, sum = 0.0;
	step = 1.0/(double)num_steps;
	for(int i=0; i < num_steps; ++i)
  {
    x = (i+0.5)*step;
    sum = sum + 4.0/(1.0+x*x);
  }
  pi  = step * sum;
}
```

