---
title: HOW TO | 如何整治百度网盘
subtitle: 是时候进行技术打击了。
date: 2017-11-06 19:53:40
categories: "教程向"
top_img: "http://owkccdyrm.bkt.clouddn.com/aria2c_header_img_mask.jpg"
tags:
	- code
	- sexy moves
---

目标：榨干百度网盘的下载速度

工具：[Aria2](http://aria2.github.io)

开发环境：macOS High Sierra 10.13

依托：[Homebrew](http://brew.sh)

<br>

# 为什么要整治百度网盘

**慢。**

慢的一匹。

非「超级会员」在百度网盘限速下，下载速度能达到 100 KB/S。（同样网络环境 Steam 客户端下载速度能达到 1.5~2 MB/S）

呵呵😑

<br>

# 如何整治百度网盘

---

## 安装依托：Homebrew

> Homebrew — The missing package manager for macOS

利用 Homebrew 我们可以干净利落的下载、配置、安装我们所需要的下载利器：Aria2。

首先，打开终端 (Terminal)，运行命令：

```shell
/usr/bin/ruby -e "$(curl -fsSL http://raw.githubusercontent.com/Homebrew/install/master/install)"
```

代码会在执行任务前告诉你他要干什么，看清就可以一路进行下去。（该输密码输密码，该回车回车。）

这样就安装好了 Homebrew，此时请不要关掉终端。

<br>

## 利用  Homebrew 安装 Aria2

1. 在刚刚的终端窗口继续输入代码、运行命令：

   ```shell
   brew install aria2c
   ```

2. 继续输入代码：

   ```shell
    aria2c -v
   ```

  并运行，以测试是否安装成功，如果出现类似下图：

  ![img](http://owkccdyrm.bkt.clouddn.com/aria2c-v.jpg)

  则证明安装 Aria2 成功。

3. 安装完毕，搞定。

<br>

## 安装 Chrome/Safari/Firefox 插件：BaiduExporter

> BaiduExporter — 可以方便的把百度网盘的下载地址导出到 aria2/aria2-rpc，支持 YAAW。

#### 以 Chrome 浏览器为例，两个安装方式：

1. 利用 `git`：
   - 打开终端，运行命令：

    ```shell
    git clone http://github.com/acgotaku/BaiduExporter.git
    ```

  效果如下图：

  ![img](http://owkccdyrm.bkt.clouddn.com/git_baidu_exporter.jpg)

   - 在终端继续输入 `open BaiduExporter`，看到文件夹打开。

2. 直接访问这里：[BaiduExporter on GitHub](http://github.com/acgotaku/BaiduExporter)，并点击绿色按钮 `Clone or download`，在弹出列表中点击 `Download ZIP`，这样将会下载源代码库文件压缩包 (.zip 文件) 至桌面，下载完成后解压打开。

#### 在文件夹中找到 Chrome.crx，直接拖入 Chrome 浏览器中，点击安装扩展程序。

![img](http://owkccdyrm.bkt.clouddn.com/git_exporter_finder.jpg)

<br>

## 配置 Aria2 的 conf 文件

1. 打开终端，执行如下代码：

   ```shell
   mkdir ~/.aria2 && cd ~/.aria2 && touch aria2.conf && touch aria2.session && open aria2.conf
   ```

2. 参考[配置文件](http://raw.githubusercontent.com/acgotaku/BaiduExporter/master/aria2c/aria2.conf)，将内容全部复制即可。

<br>

## 成功啦 | 使用方法

两种方法：首先，再次打开**终端**

1. 输入命令：

   ```shell
   aria2c
   ```

   在前端运行 Aria2，关闭终端命令窗口即关闭 Aria2。

2. 或者，输入命令：

   ```shell
   aria2c -D
   ```

   在后台运行，关闭可以通过 `kill` 命令来关闭。

现在用 Chrome 打开你的百度网盘，不出意外，就会出现「导出下载」。

直接勾选要下载的文件，点击下面的 ARIA2 RPC。

![img](http://owkccdyrm.bkt.clouddn.com/baidu_works.jpg)

成功。

搞定。

<br>

---

### 鸣谢 | Reference

- [通过 Aria2 榨干百度网盘](http://blog.sunnyyoung.net/tong-guo-aria2-zha-gan-bai-du-wang-pan/)
- [BaiduExporter on GitHub](http://github.com/acgotaku/BaiduExporter)
- [Guide on Packaging and Import Baidu Exporter to Chrome](http://hencolle.com/2016/10/16/baidu_exporter/#last)

### 另外 | 一种不需要命令行的带有 GUI 界面的 Aria2

- [Aria2GUI for MAC OS X](http://github.com/yangshun1029/aria2gui)
- [简单说一下Aria2GUI的配置方法](http://www.jianshu.com/p/b58fff3fb946)

<br>

**鞠躬。**

**告辞。**

**百度，望安好。**

🙂

<br>

<br>

© Spencer Woo
