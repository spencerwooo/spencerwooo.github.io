---
title: HOW TO | 让自己的终端漂亮得不像实力派
subtitle: 万人瞩目的终端美化教程
date: 2018-06-16 22:40:40
top_img: "https://i.loli.net/2018/06/17/5b25e3d258313.jpg"
tags:
	- tutorial
	- sexy moves
---

> 本篇文章在 macOS 下编写， 在 Windows 下的情况可能不尽相同，请根据自己系统情况进行自行改善。

不论是在高中、大学时候学习基础编程课程，用 Dev C++ 或是别的软件学习 C 语言等等知识，还是在一些简陋的 Windows 系统纯命令行形式的软件运行时候，我们都遇到过所谓的小黑框「Command Prompt」，也就是「命令提示符」。

> 如果不知道这个是什么的同学请：
>
> - Windows 下：通过 `Win + R` 快捷键调出「运行」然后输入 `CMD` 并回车就可以看到下图所示的样子。
> - macOS 下：通过 `⌘ + Space` 快捷键调出「聚焦搜索」然后输入 `Terminal` 并回车就可以打开 macOS 下系统默认终端。
> - Linux 下：我不相信你不知道终端是什么 :beers:

![img](https://i.loli.net/2018/06/16/5b2523671606e.png)

对如上图样子的小黑框的无奈与抵触，可能成为了很多同学入门编程的障碍。可是大多数人们并不知道这就是所谓的终端，以及它在包括 Windows，macOS 和 Linux 下面的重要性。

今天这篇文章我们就来对 macOS 和其他类 Unix 操作系统下的「终端」进行美化，就像项目 `Oh My Zsh` 说的一样：

> **Oh My Zsh will not make you a 10x developer...but you might feel like one.**

**我们把终端变漂亮可能不会让你效率提升、码题牛逼，但是我们可以让你感觉自己特别厉害。:wink:**

<br>

# 0x01 抛弃系统自带终端

不论是 macOS 还是 Windows 下，我都不推荐使用系统自带终端。无论是可拓展性还是可编程性都被「系统自带」这样的特点限制。特别是 Windows 下的万恶之源「小黑框」，在 8012 年真的是一无是处。它所用的等宽字体 (Monospace) 甚至是宋体 :poop:. 

今天的主角是一款基于 `Electron` 的跨平台终端 Terminal Emulator: **Hyper**.

下载地址在官网：https://hyper.is

> [`Electron`](https://github.com/electron/electron) 是一个利用最新 Web 技术栈搭建跨平台应用的项目，比如 GitHub 出品的代码编辑器 Atom 和微软出品的 VSCode.

Hyper 是一个开源的、全平台适用的、有着丰富主题和插件的现代化终端。又由于 Hyper 是基于 `Electron` 的，所以它的插件、主题等等可拓展性都非常强大。几行简单的 Javascript, HTML, CSS 代码，你就甚至可以定制自己的插件。

<br>

# 0x02 善用 Hyper 插件

安装 Hyper 终端插件十分简单，打开 Hyper 之后一行代码搞定：

```shell
hyper i verminal
```

 这样就安装了 `verminal` 这个插件。

Hyper 的官方推荐全部插件在这里可以找到 --> https://hyper.is/plugins

Hyper 的官方推荐全部主题在这里可以找到 --> https://hyper.is/themes

当然也有一个社区驱动的 awesome-hyper 项目，里面有着更多开源的 hyper 终端插件、主题等等，在这里 --> https://github.com/bnb/awesome-hyper

这里我推荐一个十分有趣的插件：`hyperpower`

这个类似于 Atom 里面的一个叫做 `activate-power-mode` 的插件，能够实现下面十分皮的效果：

![img](https://i.loli.net/2018/06/16/5b2529acc4788.gif)

Hyper 的设置选项是一个 `.hyper.js` 文件，可以进行具体的样式修改。比如我们可以通过修改 `fontFamily` 这一项来改变终端字体，`cursorColor` 来改变光标颜色等等。

![img](https://i.loli.net/2018/06/16/5b252bc8bc9b3.png)

当然，在你完成了以上全部内容之后，我们也仅仅是将我们终端的外观进行了改善，这一套壳子仅仅是负责呈现外观，内部的 `shell` 仍然和系统相关，所以我们这里只能抛弃只能用 `Command Prompt` 和 `Windows Powershell`  的 Windows 同学了。:wave:

<br>

# 0x03 macOS 下，抛弃 `bash`

所谓的 `bash` 就是终端内在，即 `shell`。现在人们常在用的 `shell` 除了 `bash` 还有 `zsh`（当然还有 `csh`、`fish` 等等）。这里我介绍的 `zsh` 是我认为在类 Unix 系统下最优雅的 `shell` 。但是由于 `zsh` 设置复杂，从前总没有太多人在用，但是得益于开源社区，我们有了 [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) 这个项目。

> Oh My Zsh is an open source, community-driven framework for managing your [zsh](https://www.zsh.org/) configuration.

借助 Oh My Zsh 我们可以直接得到开箱即用的 `zsh` 体验。

## 安装

首先你的系统上需要有 `curl` 或 `wget` 与 `git`. 

之后，通过运行：

- `curl` 下：

  ```shell
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
  ```

- `wget` 下：

  ```shell
  sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
  ```

稍等片刻，你就会发现你的终端变成了 `zsh` . 庆祝 :fist:

## 配置（插件）

Oh My Zsh 同样也支持诸多插件，比如默认开启的 Git 插件就可以十分清晰的显示出当前代码仓库里与远程仓库是否同步，以及最新同步日期等等信息。

这里我推荐一个叫做 [`zsh-autosuggestions`](https://github.com/zsh-users/zsh-autosuggestions) 的插件，利用之我们可以实现命令自动补全：

![img](https://i.loli.net/2018/06/17/5b25d7c865004.gif)

安装方法也很简单，在 macOS 下利用 Homebrew：

```shell
brew install zsh-autosuggestions
```

然后将下面加入 `.zshrc`:

```shell
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

（就是用你的文本编辑器，比如 Sublime Text、VSCode、Vim 等等，打开位于根目录的 `.zshrc` 文件然后将上面那行放到文件最后面就好。）

重启终端，就能看到如图效果啦！:call_me_hand:

## 配置（美化）

下面就是 Oh My Zsh 的主题配置，这里也需要对 `.zshrc` 进行修改。

Oh My Zsh 有着大量的主题，你可以在这里 -->https://github.com/robbyrussell/oh-my-zsh/wiki/themes 找到所有支持的主题和他们的截屏。

这里我以 avit 主题为例，介绍如何修改 `.zshrc` 文件来配置我们的主题：

- 选择你最喜欢的文本编辑器打开位于根目录的 `.zshrc` 文件，如果你没想法也可以无脑执行下面的命令：

  ```shell
  nano ~/.zshrc
  ```

- 在里面找到叫做 `ZSH_THEME` 的一行，将后面「“ ... ”」里面的内容换成 avit，之后重启终端即可。

  ![img](https://i.loli.net/2018/06/17/5b25db65974c1.png)

## 进阶：安装 Spaceship Prompt

提供了更加丰富的 ZSH 展现形式的 Spaceship Prompt 是 ZSH 的另一个拓展，并且它可以与 Oh My Zsh 兼容。项目地址位于 --> https://github.com/denysdovhan/spaceship-prompt

> Spaceship is a minimalistic, powerful and extremely customizable [Zsh](http://zsh.org/) prompt. It combines everything you may need for convenient work, without unnecessary complications, like a real spaceship.

比如我的 hexo 文件仓库里，利用强大的 Spaceship Prompt 可以直接显示出我的环境（node）版本，Git 版本等等，十分健壮 :artificial_satellite:

![img](https://i.loli.net/2018/06/17/5b25dd24e19d3.png)

安装了 Oh My Zsh 的你，安装这个拓展也是十分容易：

在安装之前，由于 Spaceship Prompt 需要特殊的符号来显示开发环境版本信息（比如 `node`, `go` 等）所以需要安装特殊字体：[Powerline Fonts](https://github.com/powerline/fonts)，详细的安装文档在[这里](https://powerline.readthedocs.io/en/latest/installation/linux.html#fonts-installation)。简单来说，如果你是 macOS 用户，可以直接通过这样的方式来安装：

- 首先安装最新版本的 Python：`brew install python`

- 然后安装 Powerline Fonts：`pip install --user powerline-status`
- 最后在 Hyper 终端的配置文件 `.hyper.js` 中修改字体，将 `fontFamily = '...'` 一项引号内添加「Meslo LG M for Powerline」或者其他 Powerline 字体，重启终端便可生效。

![img](https://i.loli.net/2018/06/17/5b262d854e8a8.png)

**下面安装 Spaceship Prompt：**

首先执行命令将源码克隆至本地：

```shell
git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
```

然后将 `spaceship.zsh-theme` 链接到 Oh My Zsh 的主题文件夹下：

```shel
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

最后像换主题一样，在 `.zshrc` 中修改 `ZSH_THEME="spaceship"` 就大功告成！

<br>

# 0x04 最后

![img](https://i.loli.net/2018/03/11/5aa5377418b17.jpg)

好看是第一生产力。

折腾不息，奋斗不止。

全文完。

<br>

[© Spencer Woo](https://spencerwoo.com)