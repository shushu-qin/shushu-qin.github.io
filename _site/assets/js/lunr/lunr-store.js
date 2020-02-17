var store = [{
        "title": "History of Finite Element Methods",
        "excerpt":"了解一个方法是怎么产生的可能比学会这个方法更重要，所以闲来无事，总结一下有限元的发展史。 有限元的发明者 并不是只有一个人。但是如果说是通用有限元方法的创始人，我们可以说是Boeing公司的一个结构工程师Jon Turner。他总结并且完善了直接刚度法Direct Stiffness Method， 我们接下来也会讲到这个方法，它是有限元的雏形。当时其他航空公司都是用Force Method，他说服了波音投入资源来开发直接刚度法。1952-1953年期间，他监督了第一个基于连续介质的有限元的开发。当然，这期间还有其他工程师投入到有限元法的发展，但是所有这些人都来自于航空领域。为什么呢？这不是巧合。我们先前提到了，有限元的产生取决于三个关键因素，其中之一就是计算机。而当时（1950s）只有大的航空公司才有能力支付大型计算主机。 有限元的推广者 主要是四位学者： J.H. Argyris（Imperial College）: 当时是波音的顾问 R.W. Clough（U.C. Berkeley） H.C. Martin（U. Washington）：在Turner的团队中进行暑期实习 O.C. Zienkiewicz 他们这四个人将有限元从航空领域带入到了其他工业领域，在1950s到1960s。前三个都是直接或者间接从Turner那里学到有限元的。 1956年，M. J. Turner （波音公司工程师），R. W. Clough （土木工程教授），H. C. Martin（航空工程教授）及L. J. Topp （波音公司工程师）等四位共同在航空科技期刊上发表一篇采用有限元技术计算飞机机翼强度的论文，名为《Stiffness and Deflection Analysis of Complex Structures》，系统研究了离散杆、梁、三角形的单元刚度表达式，文中把这种解法称为刚性法（Stiffness），一般认为这是工程学界上有限元法的开端。 Clough在合作结束后，回到伯克利创建了一个研究小组，把有限元应用于土木工程。 1960年，美国克拉夫Ray W.Clough教授在美国土木工程学会（ASCE）之计算机会议上，发表了一篇处理平面弹性问题论文，名为《The Finite Element in Plane Stress Analysis》的论文，将应用范围扩展到飞机以外之土木工程上，同时有限元法（Finite...","categories": [],
        "tags": ["fem"],
        "url": "http://localhost:4000/history-of-finite-element-methods/",
        "teaser":null},{
        "title": "Mac 终端常用指令",
        "excerpt":"1. 关于.bash_profile   打开bash_profile，修改全局变量      open -e ~/.bash_profile    .bash_profile 是一个隐藏文件，主要是用来配置bash shell的。   ~代表home目录，即每个用户登录系统后所在的目录，通常名称为自己的用户名。   vim中修改bash_profile      vi ~/.bash_profile    让配置文件在修改后立即生效   source ~/.bash_profile   2. Mac系统如何显示隐藏文件？   Command+Shift+. 可以显示隐藏文件、文件夹，再按一次，恢复隐藏； finder下使用Command+Shift+G 可以前往任何文件夹，包括隐藏文件夹。(摘自知乎)   ","categories": [],
        "tags": ["mac","linux"],
        "url": "http://localhost:4000/mac-tips/",
        "teaser":null},{
        "title": "Open source libraries of Linear system solvers",
        "excerpt":"在有限元程序计算中，最终我们会得到Ax=b这样一个线性方程组，在MATLAB里，一个最简单的求解线性方程组问题的方法就是x=A\\b。最近在做有限元软件开源矩阵求解器的集成。 说到矩阵运算，最简单的方法就是打开MATLAB，输入 x=A\\b，然后就是等结果了，而其他迭代法求解也有很多易用的接口。被MATLAB宠坏的我，在转到其他开源的矩阵求解库的过程中也是经历了各种曲折，在此写个总结，分享一下我对数值计算中线性方程组求解的理解。 一开始接到有限元稀疏矩阵求解的项目时，我无数遍问自己为什么不用MATLAB？但是企业不是学校，开发软件是要盈利的，MATLAB的license太贵了，而且并不开源，想要开发一个全自主产权的软件，这条路显然是走不通的。在这种情况下，我尝试寻找可用的开源软件，遇到了一堆名词，LAPACK，BLAS，MKL，Eigen，Pardiso，Armadillo，SuperLU，MUMPS，etc。在这个网址总结了各个线性代数求解库的特性和适用范围，大家可以参考一下。 我又无数遍问自己。。。。 1.解线性方程组不就是LU分解或者是迭代法吗，为什么要用这些软件，不直接自己写一个？ 看了Davis讲稀疏矩阵直接求解法的第一课之后（看第二课时我就开始怀疑自己的智商了），我开始明白从书上写的pseudocode到真正的代码实现之间，有很长的路要走。虽然LU分解基于Gaussian Elimination， 但要做到内存占用小，代码效率高，甚至并行化，将书上的算法照搬写成代码肯定会在大型矩阵运算（一百万以上自由度）时捉襟见肘。所以，不能重复造轮子，尤其是劣质的轮子。 2. Eigen，MKL，Armadillo的说明文档中都讲了包含LAPACK和BLAS这回事？ 矩阵运算都涉及三种最基本的操作 Level 1 : 处理单一向量的线性运算以及两个向量的二元运算。 Level 2: 处理矩阵与向量的运算，同时也包含线性方程求解计算。 Level 3: 矩阵与矩阵运算。 BLAS英文全称为Basic Linear Algebra Subprograms，是低级矩阵和矢量算术运算集合。LAPACK(Linear Algebra PACKage)即线性代数包，底层是BLAS，在此基础上定义了很多矩阵和向量高级运算的函数，比如矩阵分解（LU, QR, SVD），特征值求解等。所以BLAS和LAPACK看做是接口规范，其他的组织、个人和公司，就可以根据此规范，实现自己的科学计算库（见下图）。 Eigen、Armadillo自身实现了各种线性代数运算库外，同时还支持上述各种BLAS/LAPACK为基础的底层以加速运算。换句话说，搭了个算法的 架子，但是不管什么算法，它的内部可能涉及刚刚提到的矩阵x矩阵、矩阵x向量之类的运算，这些可以用BLAS/LAPACK算。他们除了自己写了线性运算库，还提供了其他矩阵运算库的接口（Pardiso，PaStiX，SuperLU，etc），所以只要编出这些lib，加进编译路径里，就能通过Eigen的接口调用他们内部的函数了。 3. 既然有Pardiso，SuperLU的库，为什么要从Eigen，MKL用它？ 以SuperLU为例，pdgssvx（用 parellel LU decomposition解double类型的Ax=b ）的函数有十几个参数要设置，而且传入的矩阵参数是以指针数组。在看Eigen的SuperLU接口，由于Eigen将各种矩阵运算库封装成统一格式， 我们可以直接用Eigen的稀疏矩阵作为参数，然后solver(b)就OK了。MKL，Armadillo也是类似，将这些接口进行了封装，我们不需要考虑矩阵的存储格式和各种难调的参数，这样大大减少了各个求解器接口调用的学习成本。MKL是Intel针对它的CPU系列开发的核心数学运算库，它提供了完整的BLAS和LAPACK实现，高度优化和线程，且内置并行处理机制。Eigen的很多矩阵运算可以用MKL加速（http://eigen.tuxfamily.org/dox-3.2/TopicUsingIntelMKL.html）。 用法如下： · 在include Eigen头文件前，定义EIGEN_USE_MKL_ALL的宏 · 在编译程序时link MKL的库 · Eigen自动将它的一些算法用MKL的routine实现 4....","categories": [],
        "tags": ["fem","numerical methods","HPC"],
        "url": "http://localhost:4000/open-source-libraries-of-linear-system-solvers/",
        "teaser":null},{
        "title": "How to install gcc on mac",
        "excerpt":"1. 查看有没有安装gcc gcc -v 2. 用homebrew下载gcc brew search gcc # 搜索可供下载的gcc版本 brew install gcc # 默认下载最新版 目前最新版是 gcc-9 (Homebrew GCC 9.2.0_3) 9.2.0。 3. 添加路径至bash_profile 查看当前使用的gcc的路径 whereis gcc 一般为/user/local/bin vim中打开bash_profile vi ~/.bash_profile 添加路径 export PATH=\"/usr/local/bin:$PATH\" 查看是否生效 echo $PATH 如果能够在输出中看到刚刚添加的路径就说明添加成功了。 4. 添加别名 alias gcc=\"gcc-9\" alias cc=\"gcc-9\" alias g++=\"g++-9\" alias c++=\"c++-9\" 否则系统使用的是clang而不是gcc。 5....","categories": [],
        "tags": ["mac"],
        "url": "http://localhost:4000/how-to-install-gcc-on-mac/",
        "teaser":null},{
        "title": "Basic Steps of Using Eigen to Solve Sparse System",
        "excerpt":"计算Ax=b，A为稀疏矩阵。 Create left and right hand side Solve linear system factorize solve Write data to mtx file 1. Create left and right hand side 为了测试Eigen性能，可以利用C++内建的随机数生成器来创建稀疏矩阵 #include &lt;random&gt; #include &lt;vector&gt; #include \"Eigen/Eigen\" std::default_random_engine gen; // random number generator std::uniform_real_distribution&lt;double&gt; dist(0.0,1.0); // type of distribution int rows=100; int cols=100; std::vector&lt;Eigen::Triplet&lt;double&gt; &gt; tripletList;...","categories": [],
        "tags": ["C/C++","HPC","Matrix Computations"],
        "url": "http://localhost:4000/eigen-sparse-solver/",
        "teaser":null},{
        "title": "GCC教程1",
        "excerpt":"1. 简单编译 示例程序 //test.c #include &lt;stdio.h&gt; int main(void) { printf(\"Hello World!\\n\"); return 0; } cd到当前目录，执行 $ gcc test.c 会在当前文件夹中生成a.out文件，这就是最终生成的可执行文件。 如果不想使用默认的文件名，那么可以通过-o选项来自定义文件名，例如 $ gcc test.c -o test.out 运行可执行文件 $ ./test.out 2. 更多设置 gcc -Wall -g test.c -o test.out -Wall 代表编译器在编译过程中会输出警告信息（Warning），这类信息虽然不是错误，不影响编译，但是很可能是程序 bug 的源头，也有助于你寻找代码中的错误，规范代码格式。建议每次编译时都加上 -Wall 参数。 -g 代表编译器会收集调试（debug）信息，这样如果你的程序运行出错，就可以通过 gdb 或者 lldb 等工具进行逐行调试，方便找出错误原因。如果你不是百分之百确定你的程序毫无问题，建议加上 -g 参数。这样...","categories": [],
        "tags": ["linux"],
        "url": "http://localhost:4000/gcc-tutorial1/",
        "teaser":null},{
        "title": "MPI安装及编译",
        "excerpt":"Install MPI 这里我们采用MPICH的MPI实现，下载官网http://www.mpich.org/downloads/。Mac系统可以直接通过homebrew安装MPI $ brew install mpich 程序基本结构 进入并行环境MPI_Init：让系统知道此程序是并行程序，启动并行计算环境。 主体并行程序：实现并行的代码。 退出并行环境MPI_Finalize：通知系统，从这里开始，不再使用并行环境。 编译MPI Hello world小程序 所有的MPI函数都是以MPI_前缀开头，接 MPI_ 之后的第一个字母大写, 其余全部为小写字母。函数调用结束后会返回int 类型的错误信息码，当 MPI 程序不出错的时候返回MPI_SUCCESS。 /* MPI_HelloWorld.c */ #include &lt;stdio.h&gt; #include &lt;mpi.h&gt; // 引入MPI头文件 int main(int argc, char * argv[]) { int info, flag; info = MPI_Init(&amp;argc, &amp;argv); // 初始化MPI // 得到进程数量 int world_size;...","categories": [],
        "tags": ["HPC","MPI"],
        "url": "http://localhost:4000/MPI-Hello-World/",
        "teaser":null},{
        "title": "Makefile入门1",
        "excerpt":"1. 什么是Makefile 大多数的Winodws的程序员不需要深入了解自动化编译流程，因为Windows的IDE(Integrated Development Environment)已经做了相关的工作,比如VC，VB等。而Linux下没有这样的IDE，通常需要程序员做用脚本自行书写。这个脚本就是Makefile，在其中可以指定需要编译哪些文件，哪些先编译，哪些后编译，哪些需要重新编译，最终需要生成怎么样的应用程序。make是一种命令，它用来解释Makefile脚本，并根据脚本中的指定内容，进行操作。当我们在终端输入make时，make指令会自动寻找当前文路径下叫做Makefile（或makefile）的文件，并按照里面所定义的编译规则来编译源代码。 2. Hello World, Makefile! 假设我们有一个hello_world.cpp的文件 #include &lt;iostream&gt; int main() { std::cout &lt;&lt; \"Hello world!\\n\" ; return 0; } 如果直接通过g++编译，我们可以cd到当前文件路径，在终端输入 $ g++ hello_world.cpp -o hello_world 即可编译成hello_world可执行文件。 如果g++命令很长，为了避免每次都要敲那么多文字，我们可以把这些指令写进Makefile里 # 我是注释 CC = g++ # CC，SRCS,EXEC为变量，都是字符串，使用时会完全被替换 SRCS = hello_world.cpp EXEC = hello_world all: $(CC) $(SRCS) -o $(EXEC) #...","categories": [],
        "tags": ["linux"],
        "url": "http://localhost:4000/Makefile-Tutorial1/",
        "teaser":null}]
