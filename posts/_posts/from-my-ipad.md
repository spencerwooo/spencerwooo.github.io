---
title: 使用 Working Copy 在 iPad 上面更新博客 | 一次随缘的更新
date: 2019-6-9
tags:
    - fragments
---

大家好，我胡汉三又随缘更新了。

前些日子我购入了 2019 年 3 月更新的 iPad Air (3rd Gen)。讲道理，现在 iPad 和 Apple Pencil 的组合要比我想象中的好用不少。不仅在于 iPad OS 的更新，更在于 iOS 本身软件生态的优秀。包括 Notability、GoodNotes 5、Paper 3、Working Copy、Bear 等等一系列软件的加持，才让 iPad 能在生产力方面与传统笔记本一战。

今天我想说的就是 Working Copy 这个 Git 客户端。

![](https://i.loli.net/2019/06/09/5cfcc5a40a13542702.jpeg)

## 工作原理

虽然 Working Copy 本质上是为了方便 iOS 用户使用 Git，但是我发现如果你有部署在 GitHub 上面的博客，或者你的文档库是基于 GitHub 私有仓库的话，利用 Working Copy 本身进行文件的更新还是一件很享受的事情。

目前的原理就是：

- 利用 GitHub 创建一个私有仓库
- 利用 Working Copy 将这个文档库克隆（Clone）至 iPad 上面
- 在 Working Copy 中更新你的 Markdown 文档
- 写好之后直接利用 Working Copy 的内置 Git 将更新推送至 GitHub 即可
- 同时由于我的博客利用 Travis CI 自动构建，所以实际上不需要任何多余配置即可将网页端的内容更新

![](https://i.loli.net/2019/06/09/5cfcc9791220d33838.jpeg)

非常快捷方便了。

## 图片问题

之前由于我的博客以及少数派文章，包括他们的配图，都是通过 OneDrive 进行同步的（因为我是 Office 365 会员，有 1T 的 OneDrive 空间不用白不用嘛）。

- 利用「捷径」或者 JSBox 将图片批量上传至图床，并通过图片外链的方式引用。
- 利用相对路径进行引用

## 自动构建

如果是博客，可以使用 Travis CI 在每次 GitHub commit 之后自动进行构建，比如在 Travis 那里利用 Linux 服务器自动执行脚本将博客内容编译为静态文章，之后自动推送至 GitHub Pages 分支即可。

## Markdown 文章写作

Working Copy 内部的 Markdown 写作体验并不是那么好。没有实时预览也没有很多的编辑、预览主题。但是由于 Working Copy 可以将 Markdown 文件导入 MWeb，在 MWeb 中编写好文章之后再回到 Working Copy，文章是同步更新的。MWeb 这种工作方式下，其高级版本都并不是很需要订阅，可行。👍

## 小结

iPad 还是可以一战的。溜辽溜辽。



