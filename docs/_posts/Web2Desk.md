---
title: 看不惯那糟糕的桌面客户端？试试直接让网页版的应用做你的桌面 App
date: 2018-11-22 19:45:39
top_img: 'https://i.loli.net/2018/11/22/5bf69f8fb908f.jpg'
categories: '教程向'
tags:
  - sspai
---

> 在少数派上阅读本文：[看不惯那糟糕、老旧的桌面客户端？试试直接让网页版的应用做你的桌面 App](https://sspai.com/post/50250)

💻 随着互联网前端的迅捷发展，越来越多产品网页端的使用体验愈加完善。用 Web 技术搭建的 **网页应用** 不仅有着现代化的 UI，甚至体验比原生桌面客户端都要好上不少。

而原生桌面客户端，由于要适配 Windows、macOS 甚至 Linux 等多个操作系统，或是为了适配老旧的系统 API（比如 Windows 7 及之前的 WinForm），很多界面、元素与使用体验可能都要做出很大的牺牲。这样子不仅会产生使用体验上的割裂感，由于有着不同的 UI 元素与字体渲染引擎方案，不同系统下的客户端甚至用户界面都长得大相径庭。

![Chrome App 版本的全功能 Notion 笔记](https://i.loli.net/2018/11/22/5bf69922d2197.png)

不妨试试下面这两种方法，直接使用我们常用应用的网页端服务，将其当作我们的「桌面应用」，这样：

- 不仅可以省去下载安装桌面客户端的繁琐步骤
- 还能够享受最新 Web 技术搭建的现代化 UI
- 对于 Windows，第一种方案可以解决 **基于 Chromium 的应用**（比如用 Electron 技术构建的 Notion、Slack 等客户端）糟糕的字体渲染引擎所带来的 衬线体中文界面
- 对于 Linux，第二种方案可以解决 **尚未支持 Linux 系统的应用**（比如未支持 Linux 系统的 Notion 笔记）「桌面客户端」的安装

# Chrome App

第一种完全不折腾的解决方案就是：直接使用 Chrome 浏览器来给我们的网页生成一个「桌面应用」。

首先，用 Chrome 浏览器打开想要转换为「桌面客户端」的网页（我以少数派的 Slack 群为例子，地址为：`https://sspai-club.slack.com/messages`），将登录后正常使用状态的网页 URL 收藏到书签栏：

![收藏至书签栏](https://i.loli.net/2018/11/22/5bf699496d91f.png)

然后，打开 Chrome App 页面：`chrome://app`，将刚刚收藏的标签页项目拖拽到下面的空白处，在应用图标上右键，勾选「在窗口中打开」，然后点击创建快捷方式，在弹出的菜单栏处选择勾选「桌面」或「开始菜单」：

![将网页添加至 Chrome App 页面，并制作快捷方式](https://i.loli.net/2018/11/22/5bf6996a242ff.gif)

这样一个单窗口的桌面应用快捷方式就出现在我们的开始菜单或桌面了：

![Slack Chrome App 的快捷方式](https://i.loli.net/2018/11/22/5bf699a147ba1.png)

不过，我们会发现这个快捷方式的名称和图标都有问题，我们「右键 > 更多 > 打开文件位置」，就来到了 Chrome 应用快捷方式的文件夹。在这里，我们可以直接修改其文件名，并通过「右键 > 属性 > 更改图标」来配置其图标：

![修改 Chrome App 的名称、图标](https://i.loli.net/2018/11/22/5bf69a8ea75ce.gif)

需要注意的是，针对 Windows 系统，其图标仅支持 ico 格式的文件，我们可以通过 [ConvertICO](https://convertico.com/) 方便的将 png 图片转化为 ico 文件，从而自定义图标。

这样配置之后，一个近乎完美的「桌面应用」就可以直接使用了。我经过一段时间的使用，跟来自微软商店的 Slack 版本进行对比：

- 功能上，据我的体验来说，没有任何功能上面的缺失
- UI 界面上，是高度一致的，并且 Chrome App 版本的字体渲染是正常的非衬线体 — 微软雅黑

![Slack Chrome App 和 Slack Desktop for Windows UI 字体对比](https://i.loli.net/2018/11/22/5bf69a1d939d9.jpg)

令人愉悦。😄

# [Nativefier](https://github.com/jiahaog/nativefier/)

> Make any web page a desktop application.

另一种解决办法就是利用开源的 Nativefier 将网页转制成为一个 **可安装的** 桌面应用，支持 macOS 10.9+ / Windows / Linux 系统。其原理就是将网页利用 Electron 技术将网页内容封装起来，成为一个可执行、可安装的应用程序。

![示例图来自 Nativefier 项目首页](https://i.loli.net/2018/11/22/5bf69a80bd69b.gif)

然而这样的方式需要一些比较复杂的安装配置。由于 Nativefier 是 `Node.js` 编写的，所以不仅需要安装 `Node.js` 环境，还要安装 `npm` 包管理器，才可以通过 `npm install nativefier -g` 安装 Nativefier。安装之后 Nativefier 也只有命令行的交互方式，没有图形化界面。幸而有高手帮我们简化了这一流程：[Web2Desk](https://desktop.appmaker.xyz/)。

> Your Favorite 🌎 websites to 🖥 desktop apps in 1️⃣ one click 🚀

![Web2Desk 的构建过程](https://i.loli.net/2018/11/22/5bf69ade95ab0.gif)

Web2Desk 让我们可以直接输入网页链接、应用名称和应用图标，然后经过其在服务器上面的构建，直接给我们提供 Windows、macOS 和 Linux 的原生安装程序的下载。

经过我自己的测试，我在本地、自己的电脑上面利用 Nativefier 构建安装一个桌面应用需要很长很长时间（由于国内的网络环境，下载一些依赖特别慢。），而利用 Web2Desk 服务，不到两分钟全平台的桌面程序就全部加载完成了，十分便捷。我自己在 Linux 下的 Notion 云笔记桌面客户端就是利用 Web2Desk 服务构建的。

![Notion Desktop on Manjaro Linux](https://i.loli.net/2018/11/22/5bf69b08d720a.png)

# 使用体验

说实话，我这样推崇将网页端直接用作桌面应用程序的使用方法，主要就是为了 **解决 Windows 上面 Chromium 应用糟糕的中文字体渲染**。比如 Notion 和 Slack，他们两个的 Windows 桌面客户端都将中文直接渲染成了宋体，在应用的 UI 中使用衬线体太影响使用体验了。

针对 Notion 和 Slack 两个应用来说，我自己使用下来自己确实没有任何的功能缺失，当然一方面是 Slack 本身就需要联网才可以使用，另一方面是我自己处于「不联网」的状态太少了。

![微博、少数派和即刻的「桌面客户端」](https://i.loli.net/2018/11/22/5bf69b41cbf4f.png)

与此同时，除了解决字体渲染的问题，那些只提供手机端 App 的应用（比如我派和即刻）、或是桌面版本的应用支持得很垃圾的应用（比如微博提供的那令人绝望的 UWP 版本客户端），我们都可以利用这样方便的办法来给我们自己做一个「客户端」。

网页端的程序越来越丰富，功能上越来越全面，我们直接使用它们的体验也越来越好。与此同时，我们省去了下载巨大安装包的繁琐步骤，开发者省去了适配全平台的繁重任务，这确实是应用程序未来的方向。Web first! 💪
