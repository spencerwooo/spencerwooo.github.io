---
title: SM.MS
subtitle: 一名优秀的图床的艺术之旅。
date: 2018-01-28 16:25:32
header-img: "https://i.loli.net/2018/01/28/5a6dbdff9ad3f.jpg"
tags:
	- code
	- mac
	- sexy moves
---

> 曾踏月而来
>
> 只因你在山中
>
> 山风拂发、拂颈、拂裸露的肩膀
>
> 而月光衣我以华裳

---

![img](https://i.loli.net/2018/01/28/5a6d937413bbd.jpg)

托 V 站大佬的福，我用上了极为可靠的、支持 HTTPS 的、GeoTrust EV SSL CA - G4 签发证书的、**证书名字叫：Cat Networks, Inc 的图床！**—— [SM.MS](https://sm.ms/)

就冲这名字，我就得用这个啊。

最近的半年里，当我还在用七牛云做我的图床，以及我的网站并不支持 HTTPS 的时候，我的图片都是通过在 macOS 平台上或许是最为知名的图床工具—— [iPic](https://www.toolinbox.net/iPic/) 进行方便快捷的上传。当然 iPic 也确实，在大部分时间里，满足了我的需求。然而，iPic 免费版的微博图床存在压缩图片、图片可能被添加水印或删除等诸多不足，而高级版采用的订阅制也让不少人心生不快。不过为了便捷的操作我还是在去年的双十一购置了一年的 iPic 高级版账户，花费了我 30 大洋。这样我的图片也就能通过 iPic 无缝衔接式的上传至七牛云。

事到如今，我换掉了不支持未备案域名 HTTPS 的七牛云，换成了 SM.MS 图床。如何方便、快捷、简单、无脑地把我想要上传至图床的内容成功上传，并且还能将图片外链直接复制到剪切板呢？经过一下午的探索，我发现了：基础、强、极其强三种方法。

<br>

# 基础 - 网页版点击文件直接上传

![img](https://i.loli.net/2018/01/28/5a6d9ee69a62a.jpg)



# 强 - Chrome 插件

在 GitHub 上逛呀又逛，发现了一个支持 SM.MS 图床的插件：[SM.MS 图床](https://github.com/sinchang/smms)

大概功能是拖拽上传，自动提取图片外链。配置十分简单，并且已经上架 Chrome Web Store。

<br>

# 极其强 - Automator

> iOS 上大名鼎鼎的 [Workflow](https://sspai.com/post/tag/workflow) 在[我派](https://sspai.com)是深入人心，许多大神研究了很多高阶的玩法，利用 Workflow 提高了不少的效率。不得不承认，自从我开始用 Workflow 之后，也是越来越离不开他。iOS 端有 Workflow 这样的神器，那么 Mac 端呢？当然有，而且还是 macOS 系统自带的，叫 Automator ，俗称「扛炮」。他在一个很不起眼的地方，你可以通过 Spotlight 搜索来启动它。

![img](https://i.loli.net/2018/01/28/5a6da18d521a0.png)

讲道理，第一次知道 Automator 叫扛炮，我笑的停不下来。

其实，利用 macOS 自带的 Automator 程序，我们可以自己 DIY 一个简单、免费的图床上传工具，来满足我日常写字传图的需求。

## 1. Dependency

[SM.MS](https://sm.ms/) 提供了一个非常简单的上传 API，我们可以利用 macOS 自带的 curl 命令行工具通过 POST 方法直接上传本地图片。API 的返回参数是以 json 的形式返回数据的，我们可以利用命令行工具 jq 来解析 json 数据。

依托：

- [curl](https://github.com/curl/curl) —— A command line tool and library for transferring data with URL syntax
- [Homebrew](https://brew.sh/) —— The missing package manager for macOS（可有可无）
- [jq](https://github.com/stedolan/jq) —— Command-line JSON processor

## 2. Configuration

#### a. 安装依托

macOS 自带 curl，无需担心。

如果你装有 Homebrew，可以在 Terminal 中键入 `brew install jq` 来安装。

OR … 你也可以从 [GitHub](https://github.com/stedolan/jq/releases) 下载然后将文件拖进 `/usr/local/bin` 目录。下载完成后，在 Terminal 中键入 `chmod +x /usr/local/bin/jq` 赋其可执行权限。

#### b. 配置 Automator

![img](https://i.loli.net/2018/01/28/5a6da5f8bc538.jpg)

首先，我们打开 Automator，在弹出的窗口中选择新建服务 (Service)，然后从左边的资源库中依次拖拽出「拷贝至剪贴板」(Copy to Clipboard)，「运行 Shell 脚本」(Run Shell Script) 和「显示通知」(Display Notification) 三个操作。

![img](https://i.loli.net/2018/01/28/5a6da7f3e297d.png)

接着在 Shell 窗口中粘贴 `curl -F smfile=@$@ https://sm.ms/api/upload | /usr/local/bin/jq -r '.data.url' | sed 's/^/![img](&/; s/$/)&/'| pbcopy` ，并将右上角的「传递输入」选项设为「作为自变量」，即：Pass input: as arguments.

上面我们在 Shell 窗口中所执行的命令主体依次是：`curl`，`jq`，`sed` 和 `pbcopy` 。

1. 通过 `curl -F smfile=@$@ https://sm.ms/api/upload` 这一命令，我们选择的图片就已经上传到 SM.MS 图床上了，同时，服务器给我们返回了我们所需要的 JSON 文件，如果我们直接在终端执行这一命令会更直观的看到 JSON 的样子，如下图。

   ![img](https://i.loli.net/2018/01/28/5a6dad980acd6.jpg)

2. 通过 `/usr/local/bin/jq -r '.data.url'` 这个命令，我们就将服务器返回的 JSON 文件进行解析，得到我们的图片外链 url 并输出。

3. 不过我还想直接得到 Markdown 格式图片链接，那么这段命令就起作用了 `sed 's/^/![img](&/; s/$/)&/'`，这段命令会调用 sed 流编辑器将图片链接转换为 Markdown 格式。

4. 最后我们用 `pbcopy` 将得到的图片外链复制到剪贴板。

然后我们在 Shell 脚本后添加一个通知提醒自己图片上传成功：Display Notifications.

最后，我们保存服务，一个一键上传图片至 SM.MS 并复制图片链接的小工具就完成了。

![img](https://i.loli.net/2018/01/28/5a6dab73911df.jpg)

正常使用这个 Service 的时候，我们可以通过在图片上方鼠标右键选择服务 (Service) 然后点击我们刚刚保存的 Workflow 名字 (PicbedSM - MD) 来执行这个操作。

更高阶的玩法，我们还可以将这个 Service 直接绑定全局快捷键 （`⌘ + U`），这样我们选中一个图片就可以通过按键组合飞速上传，岂不美哉！

<br>

鞠躬。

<br>

<br>

© Spencer Woo
