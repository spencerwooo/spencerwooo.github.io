---
title: Windows One On One
date: 2018-07-19 15:19:16
subtitle: 从 macOS 转换到 Windows 生态圈的自我修养
header-img: "https://i.loli.net/2018/07/18/5b4e145827a18.png"
tags:
   - sexy moves
   - tutorial
   - sspai
---

## Mac To Win | 不完全迁移体验指北

> [迁移到 Windows 后，我如何找回熟悉的 macOS 体验](https://sspai.com/post/45742) 首发，本文为 Hum 老师修改前的样子。

最近，我将自己的全部家当从 macOS 迁移到了 Windows，我相信这样的变迁很多人都会遇到。无论是开学之初被 Mac 的精美设计吸引但是经过一段时间的使用发现专业软件在 macOS 上没有适配、还是工作之后业务需求让自己必须从使用多年的 macOS 切换到 Windows，从一个系统切换到另一个系统都伴随着无比的「折腾」。

我必须承认，macOS 是优秀的、有设计感的系统。我在它上面用 Final Cut Pro X 剪出了我的第一个视频，用 Android Studio 编译了我的第一个安卓项目，用 iTerm2 + `oh-my-zsh` 的环境与 `Git` 项目管理工具在 GitHub 上发布了我的第一个项目，也用 Typora 写出并用 `hexo` 搭建了我的第一篇博客。 两年来，我真切的体验了 macOS 的生产力。

但与此同时，macOS 上与之 **利益无关** 的软件所作的适配也总是不尽人意。就像 [Anyway.FM 设计杂谈](https://radiopublic.com/anywayfm-GbPYER) 在「№39: 设计师的调校」一期节目中说到：

> 没忍住，容我喷一下：**Mac 版的 Office 套件就是辣鸡**。

于是，为了数据分析、性能提升和接口兼容，我无奈将服役两年有余的 12" MacBook 淘汰，迁移到了 Windows 平台，开始拥抱 Windows 与开源的生态圈。🐾

<br>

## What did I miss?

从 macOS 迁移到 Windows 的过程中，必然有体验上的差别。在使用 iPhone 的同时，下面这些在 Apple 生态系统中使用 Mac 的体验让我尤其想念：

- **桌面美学：**macOS 具有设计感的桌面和 Dock
- **macOS 系统原生的工具：**
  - 空格键预览
  - Handoff、Airdrop 等与其他苹果设备的无缝联动
  - 方便的原生截图、窗口检测与背景阴影
- **专为 macOS 开发的效率工具：**
  - 全局启动器 Alfred（或者原生的 Spotlight）
  - 类似 iPic 的图床工具
  - MWeb 等优秀的 Markdown 写作工具

- **开发环境：**得益于 macOS 类 Unix 系统的属性而有的一套可以媲美 Linux 的开发环境（比如 `Homebrew` 与原生的 `git` 和 `ssh`）


那么在使用 Windows 与 iPhone 的时候，我能不能找回一些如此顺滑的体验呢？我在 Windows 上做了这样的折腾。 🐟

<br>

## 在 Windows 上的折腾

### 设计桌面

Apple 是一家标榜设计的公司，macOS 的桌面美学确实让包括我在内的很多人赞叹。当然我在使用 Windows 的这一周以来，经过 Fluent Design 重新设计的 Windows 10 也相比之前的老一代 Windows 有着巨大的美学改善。下面这些小工具、壁纸和使用设计理念可能会让你的 Windows 美的不可方物。

![01_我的桌面.png](https://i.loli.net/2018/07/28/5b5b63509ff85.png)

#### ① [TranslucentTB](https://github.com/TranslucentTB/TranslucentTB/) - 开源的任务栏透明小工具 ⭐⭐⭐⭐⭐

美化桌面必不可少的需要对 Windows 那不透明影响体验的任务栏进行修改。修改注册表不仅很是危险，还只能将任务栏半透明化，而另外一些如 StarDock 之流的美化软件又很占内存。这个开源的 TranslucentTB 则不然，既小巧、不占内存、还可以将任务栏透明、半透明、模糊、或是直接显示纯色，可以说是功能全面了。显示效果就像上图那样，能够完整的呈现我们的壁纸而不必担心任务栏挡掉一部分。

#### ② Rainmeter - 大名鼎鼎的 Windows 桌面专业美化插件 ⭐⭐⭐⭐

对于深度美化 Windows 桌面的同学来说，Rainmeter 的重要性可想而知。在 Rainmeter 的 [官网](https://www.rainmeter.net/)、[官方用户社区](https://forum.rainmeter.net/)、和 [DeviantArt 设计站点](https://www.deviantart.com/rainmeter)，都有大量设计精美的 Rainmeter 插件，但是我也并不推荐将插件直接堆砌在桌面上，一团糟的样子不仅不美观，还占用了大量的系统资源。我只小小利用了其桌面时钟、日期的显示。

![02_Rainmeter.png](https://i.loli.net/2018/07/28/5b5b638246400.png)

FYI，我目前使用的 Rainmeter 主题在这里可以下载到 → [Rainmeter Elegance 2.0](https://www.deviantart.com/lilshizzy/art/Rainmeter-Elegance-2-244373054)

#### ③ [Simple Desktops](http://simpledesktops.com/browse/) - 极简风格壁纸提供站点 ⭐⭐⭐⭐⭐

美化桌面方面，壁纸可以说是重中之重。一张简单可爱的壁纸可以奠定整个工作的态度。在 Simple Desktops 里我总能找到可爱的壁纸。

![03_Simple Desktop.png](https://i.loli.net/2018/07/28/5b5b639d1e926.png)

除此之外，大名鼎鼎的无版权图片社区 [Unsplash](https://unsplash.com)、免费图片社区 [Pixabay](https://pixabay.com/zh/)、甚至是必应每日壁纸等等都是优秀的壁纸来源。

#### ④ 极简风格的审美要求和苛刻到极致的完美追求 - 玄学！

这一方面就是仁者见仁智者见智了。简洁的文件管理、不复杂凌乱的桌面和常清理的使用习惯自然会让你的 Windows 使用体验蒸蒸日上。💗

### 系统工具

> Reference: [Awesome Windows on GitHub](https://github.com/Awesome-Windows/Awesome)

#### ① [WoX -  An effective launcher for windows](https://github.com/Wox-launcher/Wox) 和 [Everything - The fastest file/folder search tool by name](https://www.voidtools.com/) ⭐⭐⭐⭐⭐

![04_WoX 全局搜索.png](https://i.loli.net/2018/07/28/5b5b63b935a7b.png)

WoX 是 Windows 上大名鼎鼎的开源启动器，我派对它有详尽的介绍 → 在[这里](https://sspai.com/post/33460)。

WoX 的看家功夫是基于 Everything 的基本文件搜索功能，它能在不到一秒钟的时间内将你想要的文件进行搜索并展现出来，快如闪电，当然这也包括将你要打开的应用快捷方式搜索出来，因而 WoX 可以充当应用程序的快捷启动器。除此之外，WoX 还可以调用计算器、预览颜色、打开控制面板的某项选项、直接调用搜索引擎搜索内容和直接运行 Shell 命令等等，而这些功能都归功于其强大的 Plugin 插件功能。当然 WoX 也提供了外观主题的定制功能。

WoX 和 Everything 两工具的完美结合，在使用体验上可以媲美 macOS 上的 Spotlight、Alfred 之流。

#### ② QuickLook - 一个空格键预览工具 ⭐⭐⭐⭐⭐

![05_QuickLook.png](https://i.loli.net/2018/07/28/5b5b63d23e934.png)

macOS 上的「一指禅」—— 空格预览文件内容，绝对是一个经典、令人印象深刻的功能。在 Windows 上，QuickLook 可以完美实现空格预览的功能，能够预览图片、文本、docx 文档、甚至是各种源码等等一系列文件。macOS 一指禅在 Windows 上也能完美践行了。🦄

![06_空格预览图片、文本和 Markdown.png](https://i.loli.net/2018/07/28/5b5b63ee8646d.png)

QuickLook 可以直接在 Windows 应用商店免费下载得到。

#### ③ [快贴 - 真正的云剪贴板](http://clipber.com/clipber/?rnd=7.387842810337832&source=www) ⭐⭐⭐⭐

> Reference: [少数派 - 好用的全平台剪切板工具，我们为你找到了这 3 款](https://sspai.com/post/43775)

快贴是一个免费的跨平台的剪贴板同步工具，能够在多端设备同步剪贴板，并对剪贴板涉密内容进行自动识别、加密传输。

![07_快贴全局快捷键.jpg](https://i.loli.net/2018/07/28/5b5b64126cc58.jpg)

我在 iOS 和 Windows 端同时下载了快贴，在 iOS 保持后台运行的情况下，我在手机上复制的内容，能够很快的同步到云端，进而在 Windows 端能够粘贴。但是这个过程比 macOS 繁琐的地方在于，我需要通过全局快捷键来手动触发粘贴端的同步，这样的多一步操作虽说影响体验，也肯定不如 macOS 闭源的生态系统好，但是至少我不必用微信、QQ 之流当作我电脑与手机沟通的渠道了。

#### ④ [Send Anywhere](https://send-anywhere.com/file-transfer) ⭐⭐⭐⭐⭐

> Reference: [少数派 - 免费全平台的文件分享利器：SendAnywhere](https://sspai.com/post/40047)

Send Anywhere 将文件上传到一个 p2p 网络上面，并非其服务器上，接受端通过随机六位接收码进行文件接受。这样的传输方式保证了文件的安全性和完整性，又能有相当的上传、下载和传输速度。Send Anywhere 可以说是全平台 Airdrop 了。

![08_Send Anywhere.jpg](https://i.loli.net/2018/07/28/5b5b642dd63cd.jpg)

同时 Send Anywhere 有设备记忆功能，在曾经传输过文件的设备上，下一次传输的时候，六位接收码都不必输入。这样的分享文件的特性可以说是跨平台的救命稻草了。我在使用过程中除了在 Windows 平台传输结束之后 Send Anywhere 本身有几次会卡死，其他体验都极佳。

### 效率工具

#### ① smpic - 开源的 sm.ms 图床上传软件

我的博客图片全部都放到了第三方的图床上面，这让我需要有一个便捷的图片上传途径。

在 macOS 上面，这篇文章里面：[SM.MS - 一名优秀的图床的艺术之旅](https://spencerwoo.com/2018/01/28/SM-MS/) 我介绍了利用 Automator 实现一个全局上传并自动转换为 Markdown 格式的图片路径的解决方案。在 Windows 上也有同样的便捷手段。

smpic 通过 SM.MS 图床的 API 与大名鼎鼎的 AutoHotKey 脚本实现了这样的图片上传利器，我将快捷键绑定为 `Ctrl` + `Alt` + `U`，这样点击图片按下快捷键直接就可以将图片上传至图床，并同时返回相应的图片引用链接，一气呵成。smpic 同样，是一款开源、免费的软件，可以在这里 → [smpic - 开源的 sm.ms 图床上传软件](https://github.com/kookob/smpic) 进行下载

#### ② Typora - 可能是 Windows 上最好的 Markdown 编辑器

![09_Typora.png](https://i.loli.net/2018/07/28/5b5b6447c9297.png)

Typora 不必多说了，基本上是 Windows 上写 Markdown 的必备利器了。我的这篇文章就是在 Windows 的 Typora 上面编写完成的。我派对 Typora 也有详尽的介绍，在这里 –> [让 Markdown 写作更简单，免费极简编辑器：Typora](https://sspai.com/post/30292)

#### ③ Snipaste - 可能是 Windows 上最好的截图工具

![10_Snipaste.png](https://i.loli.net/2018/07/28/5b5b646422f4c.png)

Snipaste 着实是 Windows 上最好的截图工具。但 Snipaste 除了我们常见的截图标注、窗口检测、全局快捷键等等简朴必备技能，还有贴图、取色等等高阶可玩性。目前 Snipaste 在 Windows 商店就可以下载得到，并且就在最近几天 Snipaste 也发布了 Pro 版本，增加了更多的玩法。

![11_Snipaste In Action.gif](https://i.loli.net/2018/07/28/5b5b6480499fa.gif)

Snipaste 的开发者对 Snipaste 很是上心，我派单独采访了这位同学，在这里有更加具体的介绍 –> [幕后丨他做了最强免费「截图」工具 Snipaste 后，还有上万字的话想说](https://sspai.com/post/35097)

上面介绍的工具中，除了 Typora 和图床上传工具 smpic 以外（smpic 因为免安装，所以不支持开机自启动），剩下的都有幸被我加入开机自启动名单。🎉

### 开发环境

> Reference: [My WSL Setup by lloydstubber](https://github.com/lloydstubber/my-wsl-setup)

经过近两年的开发，目前 Windows Subsystem For Linux（以下简称 WSL）已经十分完善。我从微软商店下载安装了 Ubuntu 18.04 作为 WSL 的系统，并使用 Ubuntu 下的 `aptitude` 包管理工具链配置了我的开发环境。安装 WSL 的详细步骤在 –> [这里](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)。

![12_Ubuntu WSL.png](https://i.loli.net/2018/07/28/5b5b6498e87db.png)

在 WSL 中我安装了我的必备开发工具：

- `git` 代码版本控制
- `ssh` 远程服务器连接 🔗
- `zsh` 与 `oh-my-zsh` Shell 环境

在 Windows 中我通过 Hyper 终端环境进行实战。

Hyper 是一个基于 Election 的终端 Terminal Emulator，是一个插件丰富的、跨平台的终端。我写过一个有关它的详细介绍，在这里 –> [HOW TO | 让自己的终端漂亮得不像实力派](https://spencerwoo.com/2018/06/16/Terminal/)。在 Windows 下，可以通过 Hyper 调用 WSL 中的 `bash.exe`，这样就不用面对万恶的小黑框了。😈

![13_我的当前开发环境.png](https://i.loli.net/2018/07/28/5b5b64b2096d5.png)

这样折腾之后，一套可用的基于命令行的开发环境也处于可用状态了。目前存在的问题是从 Windows 端调用 Linux 内部的指令还是有些问题，比如我在 Visual Studio Code 中试图调用 Linux 环境下的 Python 解释器进行调试就异常麻烦，目前 Visual Studio Code 团队对 C/C++ 和 Node.js 的调试都已经适配完成，至于 Python、Go 等语言，我相信未来的适配也会越来越完善。

<br>

## 最后的体验

经过这样的折腾，我也基本上实现了 iPhone 和 Windows 的无缝联动，在 Windows 上面，效率工具和开发环境的体验也和 macOS 上的体验相差无几了。

当然，为了习惯去让一个系统无谓的模拟另一个系统的体验是毫无意义的，我在 Windows 上可以使用 OneDrive 方便的同步我的文件，可以利用手写笔方便的对 PDF 进行标注，在 OneNote 上进行笔记书写，甚至可以用 Autodesk SketchBook 进行绘画。这些都是 macOS 上无法完成的功能。同时，Windows 上 Office 套件的体验，我不得不承认要比在 macOS 上好 100 倍。

现在对我而言，Windows 最不方便的地方还是在于，在做软件与计算机方面学习，下载依赖有着诸多不便，毕竟不是原生的 Unix，但综合体验上，无论是美学、还是效率，我给我目前的 Windows 打五星。⭐⭐⭐⭐⭐

![14_My ThinkPad.jpg](https://i.loli.net/2018/07/28/5b5b64c596554.jpg)

虽然服役两年的 MacBook 因为被动散热和 m5 处理器让我无奈使其退役，但是这款 MacBook 依旧是我使用过最为美丽的电脑之一。

> 我看过太多人被习惯绑架。比如，用 IE 浏览器习惯了，不习惯用 Chrome；用 Windows 习惯了，觉得 macOS  用起来别扭。哪怕是买了 Mac 笔记本也要去安装一个盗版 Windows；用 iPhone 习惯了，用不了  Android；用一门编程语言用习惯了，不想学第二门编程语言。

人不能被工具禁锢啊。

就这样，撒花。🎉

<br>

[© Spencer Woo](https://spencerwoo.com)