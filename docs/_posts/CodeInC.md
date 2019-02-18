---
title: 如何优雅的在 Windows 上食用 C 语言
subtitle: 蒻。
categories: "教程向"
date: 2017-09-21 19:47:14
tags:
   - tutorial
   - code
   - sublime text
   - sexy-moves
---

### 写在前面的话

才疏学浅，不知所云。

学弟问我，大一开始学 C 语言，很难的样子。

第一堂课不知道老师说了些什么。不知道写什么，也不知道用什么写。
  
是啊，为什么要用 C 语言，作为一门入门编程语言呢。日常唉声叹气。

## The C Programming Language

C 语言是一门悠久的语言，悠久到1972年。

然而过了40年，现在教我们入门 C 语言的老师们，仍在叫我们用 [VC++ 6.0](http://baike.baidu.com/item/Microsoft%20Visual%20C++%206.0/8120077?fr=aladdin&fromid=2703807&fromtitle=vc%2B%2B6.0)，这个来自上个世纪，和我一般大小的，1998年的 IDE。
  
心疼。

## HOW TO
最简单的 C 语言代码。

最经典的 C 语言代码。

嗯。

```c
/*
* @Author: spencerwoo
* @Date:   2017-09-21 20:48:06
* @Last Modified by:   spencerwoo
* @Last Modified time: 2017-09-21 20:48:20
*/

#include <stdio.h>

int main(int argc, char const *argv[]){
	printf("Hello world.\n");
	return 0;
}
```

好了。我们实现了利用 C 语言输出一段文字「Hello world.」到控制台「Console」。

**鼓掌。**

所以呢，我们在哪里写这段代码，怎么编译再运行这段代码呢？

新手的你我，先用 IDE 吧。

## IDE——集成开发环境

Integrated Development Environment

集成开发环境

市面上有哪些比较适合新人的能编写 C 语言 IDE？

按照我对它们的好感度，我排了个序。

### C语言最好最可爱的 IDE 有什么!

1. [Codeblock](http://www.codeblocks.org)
	轻便，实用，编译快，体积小，没广告，还跨平台(Windows, Linux, macOS)。
2. [Visual Studio 2017 Community](http://www.visualstudio.com/zh-hans/?rr=http%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DBnjZjnni1FE4vM64sPEdPFTsmxa1lrrP3IjDV-f2iuKYKGDOOBRdeCguoZh1kgkr%26wd%3D%26eqid%3Db8fe73c20006b3fb0000000359c3af73)
	地表最强 IDE，巨硬开发。大、全、不仅能开发 C语言程序，还能开发其他各种应用。臃肿，容易把电脑弄坏。谨慎食用，但上手体验极佳。
3. [CLion](http://www.jetbrains.com/clion/)
	逼格最高 IDE，JetBrain家的。极为强大。极为高贵。极贵。
4. [Dev C++](http://www.bloodshed.net/devcpp.html)
	最受欢迎，最丑，最容易上手。emmm，其实还是可用的。(ACM-ICPC集训队推荐)
5. 记事本
	不解释。甩链接 ->
	- [Why you should use Sublime Text 3 as your text editor.](http://spencerwoo98.github.io/2017/09/20/3/)
	- [如何优雅的在 macOS 上编译调试 C++ 程序？](http://zhuanlan.zhihu.com/p/28045283)
	希望进阶的同学，敬请等待更新。
  
## 编译运行？喵喵喵？？

**C语言源代码**

- 编译---->形成目标代码，目标代码是在目标机器上运行的代码。
- 连接---->将目标代码与C函数库相连接，并将源程序所用的库代码与目标代码合并，并形成最终可执行的二进制机器代码（程序）。
- 执行---->在特定的机器环境下运行C程序。

这三个步骤，由操作系统以及 IDE 帮助我们进行。

请看具体操作。

#### 具体操作(Code::Blocks 示例)

1. 创建新文件
	- 主菜单中选择「File -> New -> Project...」
	- 在弹出的菜单中选择「Console application」（这是控制台程序的意思）
	- 下面界面，选择开发语言，我们选 C
	- 然后弹出界面，这里「Project title」填你要创建的工程名，「Folder to create project in」选择你要保存工程文件的目录。后面两个是自动生成的工程文件，和工程文件的位置。每个工程都对应一个工程文件
	- 后面全部选择默认选项，直接 Next
	- 向导结束后，工程创建完成。在左边 Projects 窗口中，我们能够看到创建好的工程里默认有一个名为「main.c」的文件
2. 编写代码
3. 编译：`Ctrl` + `F9`
4. 运行：`F9`

最后我们的成功标志，就是在黑框框里面（终端/Console/CMD）出现 Hello World. 的字样。
  
FYI，如果你在 Mac 上面在终端里面用 gcc 编译运行，出现的效果大概是这个样子。

![](http://owkccdyrm.bkt.clouddn.com/Jietu20170921-204928@2x.jpg)

这代表我们的代码执行成功。
  

#### 下面这个视频是我在自己的 MacBook 上面用 Sublime Text 3 创建文件 helloworld.c，在终端用 gcc 命令编译运行的过程。

> Removed.

## 最后最后

学习新的语言都是艰难的过程.
Learning curve 很陡峭。
共勉。
  
毕竟，3年前的我，还不知道什么是 gcc 呢。
  
鞠躬。
  
©2017 Spencer Woo
