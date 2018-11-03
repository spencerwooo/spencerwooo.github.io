---
title: HOW TO | 魔改 macOS 状态栏
date: 2018-05-29 15:42:50
subtitle: 一点微小的工作
top_img: https://source.unsplash.com/1NTFSnV-KLs/1600x900
tags:
    - sexy-moves
    - github
    - sspai
---

开源的 FreeBSD 成就了今天的 macOS，但是今天的 macOS 却因为闭源而失去了很多可定制化的地方。在 Linux 下动动编辑器改改代码就可以实现所谓的 UI 魔改，在如今的 macOS 下确实难上加难。当然为了统一设计风格而这一做的苹果公司我们还是可以理解。不过通过一些曲线救国的方式，我们的确能在某种程度上对 macOS 进行个性化的自定义。今天的菜单栏定制就是我们个性化 macOS 的第一步。

Reddit 是一个神奇的地方，是一个比百度贴吧里面讨论得更激烈，还比百度贴吧的广告少的地方。在 Reddit 里面有一个主题最近引起了我的注意：`r/unixporn`

![](https://i.loli.net/2018/05/29/5b0d08c21ffbb.jpg)

里面的同学将自己魔改的类 Unix 系统的桌面主题、通知主题、终端配色和壁纸发出来进行分享。甚至有这个社区主题板块的人举办 Unix 系统魔改大赛。

不过这里面同学们魔改的类 Unix 系统 UI，其实大多数都是 Ubuntu 和 Arch Linux 的 Gnome 桌面、图标和状态栏。但是对美丽的向往阻止不了我们们将魔爪伸向 macOS ~

> 这篇文章灵感来自于 `r/unixporn` 里面的这一篇帖子：[[OSX] Minimal Oceanic](https://www.reddit.com/r/unixporn/comments/8mbn7g/osx_minimal_oceanic/)

<br>

# What is this?

今天我们将通过：

① 这个基于 HTML5 和 CSS 在 macOS 桌面加载小部件的工具 :arrow_right: [Übersicht](http://tracesof.net/uebersicht/)

② 这个用 Coffeescript 写的假装自己是 macOS 状态栏的桌面小部件，or `Widget` :arrow_right: [Pecan](https://github.com/zzzeyez/Pecan)

来实现这样的效果：

![](https://i.loli.net/2018/06/04/5b15089cdae60.jpg)

<br>

# Tell me how!

## 1. 首先要安装他：Übersicht

 它是一个专门用于 macOS 来做桌面小工具的插件，很轻量，几乎不耗内存。同时又因为它的小部件可以通过 Coffeescript 来自己实现，并且可以直接用 CSS 来编辑样式，让这个插件做出来的 Widget 几乎有无限可能。

安装方法有两种：

**【一个平常的安装方法】**

访问官网：[Übersicht](http://tracesof.net/uebersicht/) 点击下载安装。

**【一个牛逼的安装方法】**

① 下载安装使用依赖：[**Homebrew**](https://brew.sh/) :beer:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

将上面的命令复制粘贴到终端中执行；

② 加入 Caskroom 拓展，这样直接可以安装 GUI 软件：

```shell
brew tap homebrew/cask
```

③ 执行命令安装 Übersicht：

```shell
brew cask install ubersicht
```

欧耶 \(^o^)/ 搞定！

<br>

## 2. 安装 macOS 状态栏拓展包（Pecan）

Pecan 是一位同学开发的 Übersicht 的 Widget，并且开源在了 GitHub 上，项目地址[在这里](https://github.com/zzzeyez/Pecan)，这个项目的原理其实就是在桌面上显示一条状态栏，这样一来就能够直接覆盖掉系统原生状态栏，并且实现原生状态栏包括看时间、看连接 WiFi 名称、网络速率等等在内的一系列功能。

安装方法，执行命令：

```shell
git clone https://github.com/zzzeyez/Pecan.git $HOME/Library/Application\ Support/Übersicht/widgets/Pecan
```

上面命令就是将这个 Pecan 拓展包的源码放到 Übersicht 的 Widget 文件夹下，这样 Übersicht 就可以读取到这个文件夹下的东西来展示 Widget.

Pecan 内置了五个主题，分别叫这些：bliss, fillmore, hasel, nurse, santafe.

<div style="width:360px; display:block; margin:0 auto;">![](https://i.loli.net/2018/05/29/5b0d1c325a302.png)</div>

我们先开启启用主题脚本：

① 首先终端执行：

```shell
sed -i -e "s~/Users/zzzeyez/scripts/uber~HOME/Library/Application\ Support/Übersicht/widgets~g" "$HOME/Library/Application\ Support/Übersicht/widgets/Pecan/pecan-style"
```

这样就通过调用 `sed` 流编辑器将脚本中的 `Widget` 路径修改为本机的路径。

② 然后将脚本放入 `/usr/local/bin` 可执行文件中，来全局调用：

```shell
mv "$HOME/Library/Application\ Support/Übersicht/widgets/Pecan/pecan-style" "/usr/local/bin"
```

③ 最后，我们可以通过直接输入命令 `pecan-style` 来查看、更换主题：

- 通过 `pecan-style --list` 来查看可用主题；
- 通过 `pecan-style --load fillmore` 来加载 `fillmore` 主题。

<div align="center">![](https://i.loli.net/2018/05/29/5b0d17cec9cb0.jpg)</div>

<br>

## 3. 将系统原生状态栏设置自动隐藏

<div align="center">![](https://i.loli.net/2018/05/29/5b0d18b87fb81.jpg)</div>

就这样，我们的高度可定制状态栏就实现了。

有一些兼容性的问题在于：

- 由于这个所谓的状态栏实际上只是桌面 Widget，因此它只能在桌面上进行显示，其他的应用的窗口能够将这个状态栏覆盖；
- 如果原生状态栏不开启自动隐藏的话，两层状态栏也会同时存在，比较尴尬。

感谢 Reddit 的同学给我提供灵感，同时推荐这个 Reddit 主题：`r/unixporn`，里面一些同学做的 Linux 桌面也实在是迷人。

<br>

<br>

[© Spencer Woo](https://spencerwoo.com)