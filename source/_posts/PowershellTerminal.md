---
title: 告别 Windows 终端的难看难用，从改造 PowerShell 的外观开始
date: 2019-02-13 20:36:51
top_img: https://i.loli.net/2019/02/17/5c695c54511bc.png
categories: 教程向
tags:
  - tutorial
  - sspai
  - windows
  - powershell
---

**终端**，是用户与操作系统进行交互的最原始的输入输出环境，也是执行一些高级系统操作的必要工具。而 Windows 的终端「小黑框」，一直给大家一种「难看难用」的印象。接下来，我将介绍一些小方法，对 Windows 的终端环境改造，让其使用体验比肩 macOS 和 Linux 的终端。

## Console、Terminal 和 Shell 的区别

打住打住，在动手魔改 Windows 终端之前，由于我们接下来要分别从「终端」和「命令行解释器」的角度去改造 Windows 终端环境，所以先听我絮叨一些专有名词：控制台（Console）、**终端（Terminal）和命令行解释器（Shell）**。

**推荐阅读：**[What is the exact difference between a 'terminal', a 'shell', a 'tty' and a 'console'?](https://link.zhihu.com/?target=http%3A//unix.stackexchange.com/questions/4126/what-is-the-exact-difference-between-a-terminal-a-shell-a-tty-and-a-con)

对于现在来讲：

- 我们打开 Windows 的那个「小黑框」（Command Prompt），实际上就是打开了一个 **终端**（Terminal）
- 在终端里面「输入命令，得到结果」的交互程序，就是 **命令行解释器**（Shell）

也正因如此，Windows 最新的 Shell 叫 Power**Shell**。（控制台 Console 则是相对古老的概念，是大型机物理意义上面的独立终端，我们在这里先不探讨这个话题。）使用 macOS 和 Linux 的同学如果听说过 `bash` 和 `zsh` 的话，它们同样也是 Shell。

打个比方，Terminal 就像是一个人的衣服，可以有各种颜色、形状甚至功能；那么 Shell 则是这个人，你和他沟通来获得信息，并且他可以在与你沟通的过程中事先告诉你许多信息、提醒，甚至自动帮你补充你想说的话。

![Demo](https://i.loli.net/2019/02/17/5c695b7002661.gif)

就像我前面提到的：PowerShell 是 Windows 新一代 Shell。而大家可能更为了解的「小黑框 Command Prompt」则是 Windows 向前兼容的古老作品，bug 多不说，还有诸多不方便。**所以我们不用犹豫，直接使用 PowerShell 吧！**

接下来，我们来先改造 Windows PowerShell 的外在「默认终端」。

## 默认的 PowerShell 终端

Windows 为我们提供了一个默认的 PowerShell 终端，可以在 Windows 开始菜单上右键，点击「Windows PowerShell」打开。虽然默认终端有很多限制，但是其技术底层，响应就高效迅速，碾压其他所有第三方终端模拟器。我们从默认终端开始魔改。🍌

### 改进 PowerShell 的字体

不得不承认的是，在中文环境下，默认 PowerShell 的「新宋体」确实很（zhen）不（ta）耐（ma）看（chou）。然而由于默认 PowerShell 终端是一个非常底层的应用，其界面甚至没有利用 WinForm、WPF 等通用 UI 渲染框架来实现，而是直接调用底层 Windows API 来实现，因此其字体要求非常严格。（这也是我们不能随随便便下载一个我们喜欢的等宽字体给 PowerShell 默认终端使用的缘故。）

目前据我所知，唯一支持这一严格要求的字体（中文环境下）只有「Sarasa Gothic / 更纱黑体 / 更紗黑體 / 更紗ゴシック」（后面简称更纱黑体），可以从 [更纱黑体的 GitHub 页面下载](https://github.com/be5invis/Sarasa-Gothic/releases)。

![](https://i.loli.net/2019/02/17/5c695ba435056.png)

下载解压安装更纱黑体之后，我们重新启动一个 PowerShell 终端，就可以在菜单栏右键，选择「属性」→「字体」，并在字体中选择更纱黑体了。适合终端使用的等宽字体是「等距更纱黑体 T SC」或「Sarasa Mono T SC」。

![](https://i.loli.net/2019/02/17/5c695bbbf239c.png)

这样一来，我们就不必面对新宋体发愁了。

### 更换 PowerShell 的配色

微软官方提供了一个更换 PowerShell 配色的小工具：[ColorTool.exe](https://github.com/Microsoft/console/tree/master/tools/ColorTool)，我们可以利用它来更换 PowerShell 的主题颜色。ColorTool 支持 iTerm 主题（以 `.itermcolors` 结尾的主题文件）。

我们可以从 [ColorTool 的 GitHub 页面](https://github.com/Microsoft/console/releases) 下载这个小工具。当然，如果你使用 [Scoop](https://sspai.com/post/52496)，也可以这样安装：

```powershell
scoop install colortool
```

值得注意的是，如果你是直接从 GitHub 上面下载了 `colortool.zip` 并解压，`colortool.exe` 的路径就并没有自动加入环境变量，所以你没有办法全局调用这个工具。因此我更加推荐利用 Scoop 这个优质的包管理来安装 ColorTool。

**推荐阅读：**[「一行代码」搞定软件安装卸载，用 Scoop 管理你的 Windows 软件](https://sspai.com/post/52496)

ColorTool 使用非常简单。工具自带了几种主题，我们可以利用下面这个命令进行查看：

```powershell
colortool -s # -s 代表 schemes
```

![](https://i.loli.net/2019/02/17/5c695bcc44af3.png)

其中前面列出的几个 `.ini` 和 `.itermcolors` 就是主题配置文件，我们可以直接通过下面这个命令设置主题：

```powershell
# 临时查看
colortool <主题名称>
# 定义默认值
colortool -d <主题名称>
```

比如我们希望将主题配色更换为 `OneHalfDark.itermcolors`，只需要输入下面这个命令就可以更换并预览更新：

```powershell
colortool OneHalfDark
```

![](https://i.loli.net/2019/02/17/5c695bdff21f9.gif)

由于 ColorTool 直接支持 iTerm 主题配置文件，因此我们可以在 [iterm2colorschemes](https://iterm2colorschemes.com/) 这个网站找到我们想要的主题背景进行配置，方法和上面介绍的一样：在 PowerShell 中定位至你希望更换的主题文件，使用命令 `colortool <主题名称>.itermcolors` 进行配置即可。同时，如果你对上面的主题都不满意，你也可以直接在这个网站：[terminal.sexy](https://terminal.sexy/) 自行配置自己想要的主题，并通过同样的方式进行应用。

## 第三方终端

默认终端虽然响应迅速，但是其限制诸多，如果你对上面介绍的默认终端有所不满，也可以试一试下面这三个配置更方便，颜值更高的第三方终端模拟器。

### Fluent Terminal

Fluent Terminal 是现代的，也是我最推荐的终端。它是专属于 Windows 平台，利用 UWP 技术打造的颜值超高的终端模拟器。

![](https://i.loli.net/2019/02/17/5c695becd4110.png)

Fluent Terminal 在 GitHub 上面开源，项目地址在：[felixse/FluentTerminal](https://github.com/felixse/FluentTerminal)。由于一些原因，作者并没有成功地将软件直接提交给微软商店上架，因此我们需要从 [其 GitHub Release 页面](https://github.com/felixse/FluentTerminal/releases) 下载安装它。通常情况下，如果你的 Windows 版本较新，可以直接使用 `No Dependencies` 的那个版本，不过如果接下来你安装过程出现问题，那么就使用第一个安装包。

![](https://i.loli.net/2019/02/17/5c695bf170d8a.png)

解压之后，我们得到如下的文件目录：

![](https://i.loli.net/2019/02/17/5c695bfb5614b.png)

右键点击 `Install.ps1`，选择使用 PowerShell 运行，之后按照提示操作即可安装成功。

Fluent Terminal 设置字体和主题颜色则简单得多：

- 设置界面里，我们可以方便的选择合适的字体。

  ![](https://i.loli.net/2019/02/17/5c695c054aaff.png)

- 同时，我们也可以在 Profiles 里面将 PowerShell 设置为默认的 Shell。

  ![](https://i.loli.net/2019/02/17/5c695c0ccce56.png)

- 值得注意的是，Fluent Terminal 也支持 iTerm 主题配置文件，因此我们刚刚下载的主题同样可以在这里使用。

  ![](https://i.loli.net/2019/02/17/5c695c149acfd.png)

Fluent Terminal 是利用原生 Windows 10 最新的 UWP 技术打造而成，其响应速度仅稍逊于自带的默认 PowerShell 终端。值得推荐。👍

### Hyper

接下来介绍的 Hyper 以及下面的 Terminus，都是基于 Electron 的跨平台应用，配置方便、插件丰富、界面美丽。当然，避免不了的是 Electron 资源消耗大，打开和响应都没有前面介绍的快，但是它们的拓展性都非常强大，可以试一试。

Hyper 也在 GitHub 上面开源，项目地址在：[zeit/hyper](https://github.com/zeit/hyper)，我们可以在 [Hyper 的 GitHub Release 页面](https://github.com/zeit/hyper/releases) 下载安装，也可以利用 `scoop install hyper` 来安装。

![](https://i.loli.net/2019/02/17/5c695c22c4d72.png)

Hyper 的配置相对复杂，需要直接修改其设置文件 `.hyper.js`。这里我仅仅介绍如何配置 Hyper 的默认 Shell 和字体，以及如何安装主题、插件的内容。

Hyper 配置的一切都发生在配置文件中，你可以通过快捷键 `Ctrl + ,` 或者直接定位至 `C:\Users\<你的用户名>\.hyper.js` 来打开配置文件。可以看到已经有很多配置项留给我们修改，其中：

- 修改字体：

```javascript
// 以更纱黑体为例子
fontFamily: '"Sarasa Mono T SC", monospace'
```

- 修改默认 Shell 为 PowerShell：

```javascript
shell: 'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
shellArgs: [],
env: {}
```
- 安装主题或其他插件：

```javascript
// 比如安装这个叫做 hyperterm-cobalt2-theme 的主题
plugins: ["hyperterm-cobalt2-theme"]
```

很简单，之后我们保存配置文件，Hyper 会自动重新加载，并下载相应的主题或插件并实时更新，只需要等待片刻即可看到我们的配置生效。Hyper 的社区很完善，有大量精美的主题和插件，我们可以在 [Hyper 插件](https://hyper.is/plugins) 寻找有趣的插件，在 [Hyper 主题](https://hyper.is/themes) 挑选配色方案，同时这个 [bnb/awesome-hyper](https://github.com/bnb/awesome-hyper) 整合仓库也可以参考很多。

### Terminus

Terminus 同样也在 GitHub 上面开源，项目地址在：[Eugeny/terminus](https://github.com/Eugeny/terminus)。其实我更推荐 Terminus，因为它原生支持了 Windows Fluent 背景，同时它的设置是 GUI 方式的，更用户友好。

![](https://i.loli.net/2019/02/17/5c695c2ba04ad.png)

安装 Terminus 很方便，我们一样可以从 [Terminus 的 GitHub Release 页面]() 下载安装它，也可以利用 `scoop install terminus` 来安装。

Terminus 也是为数不多的几个有 Fluent Design 背景的 Electron 应用，我们可以在下面这里开启 Fluent 背景渲染，并把 Background type 改为 Fluent：

![](https://i.loli.net/2019/02/17/5c695c363db01.png)

配置 Terminus 的字体、配色和默认 Shell 都很简单：

- 在这里我们可以修改字体（Font）和配色主题（Color Scheme）：

  ![](https://i.loli.net/2019/02/17/5c695c3e3c528.png)

- 在这里我们可以选择使用 PowerShell 作为默认的 Shell：

  ![](https://i.loli.net/2019/02/17/5c695c489ae43.png)

Terminus 的可玩性也很足，同样有很多插件可以安装，由于设置界面很清晰，我就不在这里一一列举了。

💻 这篇文章到这里也就大概结束了，我们：

- 不仅介绍了如何修改默认终端，让我们不需要每天面对新宋体发愁
- 还推荐了三个更现代的终端，供大家选择

但是 Windows 终端美化之路还没有到尽头，接下来我还会继续介绍如何让 Power**Shell** 的 **Shell** 更炫酷，敬请期待。感谢阅读。
