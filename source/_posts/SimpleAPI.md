---
title: Simple Deskop API | 一喵一图
date: 2018-07-30 23:32:08
subtitle: An image API displaying random pictures curated by Simple Desktops.
top_img: "https://i.loli.net/2018/07/31/5b5f3cde5cc6a.jpg"
tags:
   - sexy moves
   - tutorial
   - code
   - github
   - sspai
---

[「一喵一图」](https://github.com/spencerwoo98/spencer-simple-desktop-api)：一个异常简单的随机图片 API，图源自极简主义桌面壁纸提供站点 → [Simple Desktops](http://simpledesktops.com) 🎉🎉🎉

<br>

## Simple Desktops? 这是什么？

在上一篇文章：[Mac To Win | 不完全迁移体验指北](https://sspai.com/post/45742) 中我提到了一个优质的图片社区：Simple Desktops。

Simple Desktops 提供了...

> A collection of wallpapers designed to make your computer beautiful without distraction.

一组特别设计的壁纸，让你电脑桌面美观的同时又不妖艳而令人分心。

但是很遗憾的是，Simple Desktops 的网站开发者们并没有给我们提供一个结实可用的 API，如果想要在网络上使用 Simple Desktops 提供的图片，我们只能将图片下载到本地，再上传到自己的图床上进行使用。

长期维护一个博客的我，经常因为文章首页题图而烦恼。曾经我使用的「Unsplash 无版权图片社区」提供了一个完美可用的 API，我能够直接将 Unsplash 给开发者提供的代码嵌入我的博客或者其他页面来引用它们的图片，这样的方便程度实在是令人印象深刻。

我个人十分喜欢 Simple Desktops 提供的壁纸，它们简单、清晰，又符合设计美学。因此我也很想通过类似 Unsplash 提供的方式将 Simple Desktops 上面的壁纸用作我博客题图、文章配图等等地方。我于是设计了这样一个 API，它能够十分方便的将 Simple Desktops 的图片直接嵌入任何地方。

我将它称作「一喵一图」。

<br>

## 使用方法

直接将下面代码嵌入到任何你想要放的地方。不必担心是否支持 `https`，因为不仅 `API` 的 `GET` 请求是通过 `https` 传输的，图片本身也是通过 `https` 传输的。( •̀ ω •́ )y

**1. API 地址**

```html
https://api.spencerwoo.com
```

**2. Markdown**

```html
![](https://api.spencerwoo.com)
```

**3. HTML**

```html
<img src="https://api.spencerwoo.com" alt="img.png" title="img.png" />
```

图片随机显示并且每次刷新都将更新新的图片。由于版权问题以及 Simple Desktops 本身并没有将图片进行分类，我自然无法将图片分类，同时由于 Simple Desktops 网站本身不支持 `https`，我无法也无益直接提供 Simple Desktops 的图片外链。

<br>

## 使用效果

![sshot-1.png](https://i.loli.net/2018/07/30/5b5ecdb7b783a.png)

目前在使用 **「一喵一图」** 的网站有这些:

- https://spencerwoo.com

如果你在使用我的 API 并且想将你的网站加到列表里面来，[请直接 fork 本项目](https://github.com/spencerwoo98/spencer-simple-desktop-api)，修改这里的列表，然后给我发一个 PR 就 ok 了。或者你也可以直接在项目的 Issue 区、本页面的评论区、少数派私信等等各种能够联系到我的方式告知我，干杯。🎉

欢迎 Star，欢迎 PR。

<br>

## 致谢与版权声明

**服务稳定全靠天，随时跑路不留名。**

- Images at Simple Desktops are for personal use and for personal use only. They shouldn't be sold or reposted without the expressed written consent of the desktop creator. See [Simple Desktops](http://simpledesktops.com/about/) for more details.
- A huge thank you to SM.MS for providing such a stable and awesome image hosting service. 
- Server provided by [VULTR - The Infrastructure Cloud™](https://www.vultr.com/).

项目经由 MIT License 发布。

<br>

[© Spencer Woo](https://spencerwoo.com)