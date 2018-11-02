---
title: Atom 入坑指南
subtitle: 用最酷的编辑器 写最美的代码
top_img: "https://i.loli.net/2018/03/11/5aa51641a7154.jpg"
date: 2018-03-11 19:18:57
categories: "教程向"
tags:
   - tutorial
   - code
   - atom
   - sexy moves
   - sspai
---

> 本文首发于我的博客 - https://spencerwoo.com

---

代码如诗。

> Code is poetry.

![](https://i.loli.net/2018/03/11/5aa5201dd7f2e.jpg)

*▲ Vim - the ubiquitous text editor.*

写代码本应该是很享受的事情，我们有极客高效的 Vim，简约美丽的 Sublime Text，从小至最为纯粹的编辑器，到大至包罗万物的 IDE。一个好的、美观的、高效的代码编写环境着实能够提高一个人的写作、创作欲望。试想一个人把 VC 6.0 放在你的面前，黑底白字、没有高亮、没有颜色，有谁会爱上 C / C++？如果有人在 2018 年向你推荐 1998 年的 IDE，那么你觉得这个人的脑子该如何拯救？

![](https://i.loli.net/2018/03/11/5aa51aeacc4b0.jpg)

**生命不息，折腾不止。**

经过近 2 年的摸索，从高中的 Dev C++ 到大一开学时的 Codeblock 与 Sublime Text，到现如今的 Atom，我想总结一下：**一个高效美观、能激发一个人创作欲望的代码编写环境到底是怎样配置出来的。**以拯救那些大一刚刚开学，即将或是已经被 C 语言 / Dev C++ / VC 6.0 荼毒半年有余的同学们。

<br>

# 壹 → Atom

**Atom：A hackable text editor for the 21st Century**

![](https://i.loli.net/2018/03/11/5aa51fd0641a8.jpg)

首先，介绍工具：**Atom 文本编辑器**，由 Github 出品的基于 Electron / Node.js 的半开源文本编辑器。官网位于 -> https://atom.io/

为什么我从一众优秀的文本编辑器中选择了 Atom，而不是 Vim，又放弃了我用了一年多的 Sublime Text？

- **开源。**GitHub 上的大佬叫他是 Hackable 就不是吹的，配置文件是 `cson`，样式文件是 `CSS` 和 `Less`，所以理论上你可以把 Atom 配置成任何你想要的样子。
- **开箱即用。**所谓的 Out-Of-The-Box Experience 说的就是 Atom。自带 4 组 UI 主题、4 组 Syntax 主题，自带 Markdown 渲染器、代码美化插件等等。
- **简单设置自带图形界面。**无疑对我们这些 `Spicy Chicken` 很用户友好了，一些简单的设置是直接用下拉菜单的形式配置的，不需要打开诸如 `vimrc` 和 `User.sublime-settings` 然后费尽心思的直接改代码。


又为什么我选择了 Atom 而不是 IDE？

我只能说，就我们这些 `Spicy Chicken` 来说，写的代码还轮不到 IDE 的事情，毕竟刚开始的我们，C / C++ 一个项目不超过两个文件，一个文件不超过 500 行代码，用 IDE 来 `cmake` 一波岂不是很亏。因此我在 IDE 和轻量级可拓展的文本编辑器中选择了后者，又在文本编辑器中选择了半开源、可 Hack 的 Atom。**以上。**

<br>

# 贰 → 配置 Atom 成为写 C/C++ 的「IDE」

文本编辑器的最大的优势在于你可以通过开源社区下载，甚至自己编译开发「插件 - Plugin」来完善它，实现「开箱即用」中所没有提供的功能。

## 1. 写代码的时候

一个有情怀的 IDE 基本都会实现**代码自动补全**，**代码实时编译纠错**，以及**代码高亮**（为了美丽）和**代码自动整理。**很可惜，Dev C++ 没有，Codeblock 也没有。因此，我们要完善我们崭新的 Atom 来实现以上功能。

### 代码自动补全

**Plugin:** autocomplete-clang

![](https://i.loli.net/2018/03/11/5aa52f724ffec.jpg)

### 代码实时编译

**Plugins:** linter, linter-clang, linter-ui-default

![](https://i.loli.net/2018/03/11/5aa52fa12a4ec.jpg)

### 代码高亮

**Themes**，这里的问题主要在于个人审美，我相信一定有一个美丽的 UI 和配套的 Syntax 主题打动你。

![](https://i.loli.net/2018/03/11/5aa52fc316d12.jpg)

### 代码自动整理

**Plugin:** Atom-beautify

![](https://i.loli.net/2018/03/11/5aa52ff2cb70f.jpg)

<br>

## 2. 写完代码之后

一个能正常操作的 IDE 都能通过，或是绿色箭头，或是组合键 `Fn + F5` 之类的方式编译运行。

在 Atom 里我们也可以实现：

### 编译运行 C/C++

#### 一键编译：script

![](https://i.loli.net/2018/03/11/5aa53170e2991.jpg)

插件 script 实际上是通过识别文件类型来执行对应的命令编译源代码。比如 C++ 的编译命令实际上是 `[Command: bash -c 'xcrun clang++ -std=c++14 -Wall -include stdio.h -fcolor-diagnostics -include iostream '$Path_To_CPP_File$/Test.cpp' -o /tmp/cpp.out && /tmp/cpp.out']`，通过快捷键 `⌘ + I` 直接运行指令来编译。

![](https://i.loli.net/2018/03/11/5aa533942bab0.jpg)

#### 调出终端：platform-ide-terminal

![](https://i.loli.net/2018/03/11/5aa531cb9e7b8.jpg)

如果不满意 script 一键编译运行的话，可以通过这个插件唤出终端，这样直接了当用 `g++ -o $File_Name$ $File_Name.cpp$` 这一命令来运行，这时候程序也支持输入，与 Windows 下 Dev C++ 中默认运行调出 Command Prompt 小黑框一般道理。同时这样也方便用 `gdb` 来进行调试。

<br>


## 3. 一个有情怀的工作流开发者的加成

在 ACM 中，每段代码都是有标准输入和标准输出的。在 C / C++ 中我们可以通过这样的代码片段来读取输入：`in.txt ` 并将程序输出、程序运行时间写入文件：`out.txt`。在保证 C / C++ 源代码和两个 TXT 文件再同一个文件目录下，这段代码是这样的：

```C++
#ifdef SUBMIT
freopen("in.txt", "r", stdin);
freopen("out.txt", "w", stdout);
long _begin_time = clock();
#endif

/* your code here */

#ifdef SUBMIT
long _end_time = clock();
printf("time = %ld ms", _end_time - _begin_time);
#endif
```

同时要在头文件定义时加入：

```C++
#define SUBMIT //本地运行这行留下，提交代码直接注释掉
```

这样在 Atom 中就可以形成工作流：代码区域 - 编写 → 输入内容 `in.txt` → 编译代码 → 查看输出文件内容、运行时间 `out.txt`

![](https://i.loli.net/2018/03/11/5aa5377418b17.jpg)

**直观纯粹，效率优先。**

![](https://i.loli.net/2018/03/11/5aa53879150d8.jpg)

最后，上成果。这样的 Atom 配置在写 C / C++ 基础程序的时候，基本实现了：

- Linter: 基于 clang 的实时编译
- 代码高亮与自动补全
- 代码自动优化美化
- 一键编译运行
- 终端调试

我相信，这样的配置不仅完美的适合小型项目的编写，还能极大的提升对代码的敏感和热爱。至少，这种解决方式，比 Dev C++ 和 VC 6.0 体面，也比 Visual Studio 和 CLion 纯粹、轻量。

感谢阅读。

鞠躬。

<br>

<br>

[©Spencer Woo](https://spencerwoo.com)
