---
title: Dev on Windows with WSL 💡
date: 2018-10-01 16:16:22
subtitle: 在 Windows 上面用 WSL 优雅开发
top_img: "https://i.loli.net/2018/10/01/5bb1d3f780d16.jpg"
tags:
  - github
---

首先达成一个共识：Windows 给编程初学者带来了很大的困难。比如 **缺乏好用的包管理系统**、**终端环境难看难用** 和 **环境变量不易配置** 等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS（不包括一定需要 IDE 支持的语言，比如 Java 和 .NET 等等）。然而 Linux 桌面环境虽然在 2018 年的今天有很大的改善，但是相比 Windows 还是有很大的差距，程序假死、卡住、崩掉的情况依旧存在。（还有 Linux 每一个发行版几乎都没有能够像 Apple 和巨硬一样很好的支持 Emoji 啊！😥）

![](https://i.loli.net/2018/10/30/5bd85bae7bd17.jpg)

WSL 的出现似乎缓解了这些烦恼。WSL —— Windows Subsystem for Linux 即适用于 Linux 的 Windows 子系统，**是一个为在 Windows 10 上能够原生运行 Linux 二进制可执行文件的兼容层**。简单的来讲，WSL 让我们能够在 Windows 上面直接运行 Linux 可执行文件，**这意味着我们可以借助 Windows Subsystem for Linux 来给我们的 Windows 配置一个可用的开发环境**，包括：Linux 终端环境 zsh、Ubuntu 下的包管理器 apt、Visual Studio Code 开发环境等等。**这也就是我所维护与介绍的这支参考指南的由来。**

💎 参考文档发布于这里：https://spencerwoo.com/dowww

💎 其中的源代码托管于这里：https://github.com/spencerwooo/dowww

# 为什么要做这样一个参考文档？

这是我根据我自己这半年来在 Windows 上面利用 WSL 进行开发编码摸索出来的经验总结。

不得不承认，虽然 WSL 极大地方便、优化了我们在 Windows 上面的开发体验，但是很多东西都需要进行配置才可以丝滑流畅的运行。并且，除了能够做到「又不是不能用」，我们还要追求一下开发环境的美丽养眼。这支教程也就应运而生了。

![](https://i.loli.net/2018/10/30/5bd85bc347bf6.png)

# 我都介绍了什么？

我这支参考指南中重点介绍了这些内容：

- 💡 如何搭建一套比 Windows 原生开发工具体验更好的 **Unix 开发环境**
- 🎈 如何配置一个可能是 Windows 上可定制化程度最高的 **终端模拟器与终端环境**
- 🍗 一些利用 Visual Studio Code 在 Windows 上与 WSL 中的工具配合进行 **开发和调试** 的 Tips（包括 Python 和 C/C++ 的开发）
- 🍳 和利用 X-Server **直接打开 Linux 上的 GUI 窗口程序** 进行原生开发的操作指北

但是还有一些内容，比如：

- 如何配置 Visual Studio Code 更好看
- [如何配置 Windows 下（或是 macOS 下）的终端环境更好看](https://sspai.com/post/45332)
- [如何配置 Windows 更好看](https://sspai.com/post/45742)

这些问题太过主观，在这里我最想解决的是如何让 WSL 下的工具能够更加丝滑的与 Windows 开发工具配合，来提高我们的开发效率。如有需求，可以查看我的往期文章（上面链接）进行自行查看甄别与折腾。鞠躬。

![](https://i.loli.net/2018/10/30/5bd85be7f2221.png)

# 为什么我这样推荐 Visual Studio Code？

这个问题可以这样来理解：Visual Studio Code 与其他诸如 Atom, Sublime Text 3 和 Notepad++ 等等现代化代码编辑器相比，有哪里体验更加优质？

**简单的说，Visual Studio Code：**

开源、免费、生态庞大、支持完善、调试便捷、定制化程度高。

**具体讲，Visual Studio Code：**

- 开源，是目前微软开源项目中最受欢迎的一个。
- 社区支持，有着成千上万的插件、主题、拓展来把它定制成为我们想要的样子。
- 内置非常完善的机制与 Git 集成版本控制工具集成，开发体验极佳。
- 内置调试工具能够力压其他任何编辑器，在我使用过程中从未见过调试功能有 Visual Studio Code 强大的编辑器。

而与此同时，Atom 虽然也很好看，但是由于优化问题其性能远比不上 Visual Studio Code。同时 Sublime Text 3 是闭源软件，需要付费购买，就如曾经 Sublime Text 上面可能是最受欢迎的主题 Material Theme 的作者所说（[详见 Deprecation Note](https://github.com/equinusocio/material-theme#deprecation-note)）：

> 它是一个：80$ commercial software that is 80% cracked or used in free mode.

这样看来，我推荐使用 Visual Studio Code 就更加有理由了。

# 体验

不得不承认，WSL 还在开发完善，有许许多多的 bug 等待修复，同时 Visual Studio Code 各大插件组也在努力适配 WSL。但是我想说，单就目前 Windows 上面糟糕的包管理系统来说，进行轻量开发或是学习编程知识，WSL 这一条技术栈都是更用户友好的。

**对于 WSL 终端环境来说：**

终端环境下的所有组件都可以完美运行，包括版本控制工具 `git`、远程登录工具 `ssh` 和包管理工具 `apt`（针对 Ubuntu 来说）等等。

**对于具体的编程语言在 VSCode 里面的开发来讲：**

C/C++ 和 Node.js 由于插件开发组已经适配，因此可以完美的正常调试和开发，与原生的 Windows 工具别无两样。
Python 由于插件开发组正在进行适配，经过一些努力和配置也是可以运行，处于「又不是不能用」的状态。
其他语言还需要考证，本文档也只介绍了 C/C++/Python 的配置，因此还有很多需要补充的地方，希望有能力、有经验的同学前来帮我一起完善，感激不尽。
希望这支参考指南能够在帮助你在 Windows 上面利用 WSL 进行开发的时候少走一些弯路。Happy coding! 🎉🎉🎉


---

💡 **Dev on Windows with WSL** © Spencer Woo. Released under the CC BY-NC-ND 4.0 International License.

Authored and maintained by Spencer Woo.

[@Blog](https://spencerwoo.com/) · [ⒿJiKe](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwooo)
