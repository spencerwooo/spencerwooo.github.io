(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{312:function(t,e,s){"use strict";s.r(e);var a=s(2),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("在少数派上阅读本文："),s("a",{attrs:{href:"https://sspai.com/post/52710",target:"_blank",rel:"noopener noreferrer"}},[t._v("给 Scoop 加上这些软件仓库，让它变成强大的 Windows 软件管理器"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("此前我介绍过 "),s("a",{attrs:{href:"https://sspai.com/post/52496",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scoop"),s("OutboundLink")],1),t._v(" 这个优质的 Windows 包管理器。它不仅轻量，还将软件直接安装到我们的用户目录下，安装过程不需要申请管理员权限（UAC）也不会污染系统环境变量。")]),t._v(" "),s("p",[t._v("Scoop 很厉害，但是 Scoop 默认软件仓库（main bucket）软件数量是有限的。同时由于 Scoop 的设计初衷是为了方便 Windows 开发者安装和配置开发工具，其默认软件仓库的收录条件也就很苛刻：")]),t._v(" "),s("ul",[s("li",[t._v("必须是主流的开发者工具")]),t._v(" "),s("li",[t._v("必须是维护中的最新版本的软件")]),t._v(" "),s("li",[t._v("必须是完整版本（非 Trial 版本）的软件")]),t._v(" "),s("li",[t._v("不可以有复杂的安装前与安装后处理步骤")]),t._v(" "),s("li",[s("strong",[t._v("不可以有 GUI")])])]),t._v(" "),s("p",[t._v("这个最后一点恐怕是最严格的条件了，直接否决了一系列用户向软件（Firefox、Typora 等等）的收录。但是我们一样可以安装我们常用的图形界面软件，这就涉及到接下来我要介绍的，与 Homebrew cask 的设计理念类似的 "),s("strong",[t._v("Scoop bucket")]),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"什么是-bucket？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bucket？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 bucket？")]),t._v(" "),s("p",[t._v("在 Scoop 里面，bucket 就是一个软件仓库。Scoop 将一个个仓库缓存至本地，当我们想要安装一个软件的时候，Scoop 就从本地的仓库中挑选出我们想要安装的软件的安装配置文件，并依照这个配置文件进行软件的安装工作，包括：")]),t._v(" "),s("ul",[s("li",[t._v("从哪里下载软件")]),t._v(" "),s("li",[t._v("如何安装软件、安装到哪里、需要修改更新什么环境变量")]),t._v(" "),s("li",[t._v("安装之前、之后都要做什么准备（善后）工作")]),t._v(" "),s("li",[t._v("……")])]),t._v(" "),s("p",[t._v("这就是 Scoop 安装软件的一个具体过程。")]),t._v(" "),s("p",[t._v("举个例子，比如我们希望安装 "),s("code",[t._v("aria2")]),t._v(" 下载工具这个软件，我们先来仔细看看它的详细配置：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop info aria2\n")])])]),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/02/05/5c599f3d72614.png",alt:"aria2 的配置详情"}})]),t._v(" "),s("p",[t._v("这些就是一个软件的安装配置详情。其中 Manifest 项目下的路径指向的文件是 Scoop 具体读取的配置文件，我们的 bucket 就是由这样的一个个配置文件组成的。")]),t._v(" "),s("p",[t._v("默认的，当我们将 Scoop 第一次下载安装好之后，我们就有了主仓库（main bucket）的软件安装配置文件的集合。我们可以 "),s("a",{attrs:{href:"https://github.com/lukesampson/scoop/tree/master/bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里"),s("OutboundLink")],1),t._v(" 看到这些软件的列表。一样的道理，我们可以通过添加 bucket 来添加其他软件仓库，从而下载我们想要的软件的安装配置文件，来安装不在默认仓库中的软件。")]),t._v(" "),s("h1",{attrs:{id:"添加一个-bucket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个-bucket","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加一个 bucket")]),t._v(" "),s("p",[t._v("首先，Scoop 给我们提供了很多可以直接使用的 bucket，就是为了方便我们安装更为常见的带有 GUI 的软件。一个最为常见，也是我推荐大家添加的 bucket 是 extras，这里面基本涵盖了大部分不符合 main bucket 收录条件的常用软件，包括我们熟悉的：各个版本的 Firefox、福昕阅读器、Geek Uninstaller、Inkscape、Snipaste 等等。（甚至有 Steam，但是不推荐用这样的方式安装。）")]),t._v(" "),s("p",[t._v("我们可以通过下面这个命令来添加 extras 这个 bucket：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop bucket add extras\n")])])]),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/02/05/5c599f9e794f3.png",alt:"添加 extras bucket"}})]),t._v(" "),s("p",[t._v("之后，我们就可以下载更多更多常见的软件了。比方说，我们要下载 "),s("a",{attrs:{href:"https://sspai.com/post/40556",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScreenToGif"),s("OutboundLink")],1),t._v(" 这个极为好用的 Gif 屏幕录制软件：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop install screentogif\n")])])]),s("p",[s("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006Q2GRYly1fzvxffxp2lg30v40ibnpd.gif",alt:"安装 ScreenToGif 的过程"}})]),t._v(" "),s("p",[t._v("就这样简单。（这里我安装看起来很快的样子，实际上是由于我之前下载过 ScreenToGif 缓存还在，因此没有下载的过程。）")]),t._v(" "),s("h1",{attrs:{id:"官方维护的-bucket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方维护的-bucket","aria-hidden":"true"}},[t._v("#")]),t._v(" 官方维护的 bucket")]),t._v(" "),s("p",[s("code",[t._v("extras")]),t._v(" 这个 bucket 是最有用，也是我们大部分人肯定会用到的仓库。除此之外，我们可以通过这个命令查看 Scoop 还能直接识别哪些 bucket：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop bucket known\n")])])]),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/02/05/5c59a0c6315bb.png",alt:"列出 Scoop 已知的 bucket"}})]),t._v(" "),s("p",[t._v("下面列出的这几个仓库就是 Scoop 可以直接识别并添加的 bucket，即我们可以通过下面这个命令直接添加相应的 bucket：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop bucket add <仓库名>\n")])])]),s("p",[t._v("这里面，我来介绍一下和开发环境的安装没有太大关系的几个仓库：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("extras")]),t._v("：就是我刚刚介绍的，Scoop 官方维护的一个仓库，涵盖了大部分因为种种原因不能被收录进主仓库的常用软件。地址："),s("a",{attrs:{href:"https://github.com/lukesampson/scoop-extras/tree/master/bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("lukesampson/scoop-extras"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("nirsoft")]),t._v("：是一个 NirSoft 开发的小工具的安装合集。NirSoft 制作了大量的（dozens and dozens）小工具，包括系统工具、网络工具、密码恢复等等，孜孜不倦、持续更新。\n"),s("ul",[s("li",[t._v("Bucket 地址："),s("a",{attrs:{href:"https://github.com/kodybrown/scoop-nirsoft",target:"_blank",rel:"noopener noreferrer"}},[t._v("kodybrown/scoop-nirsoft"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("NirSoft 官网地址："),s("a",{attrs:{href:"http://www.nirsoft.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NirSoft"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("code",[t._v("games")]),t._v("：顾名思义，是游戏（和与游戏相关的工具）合集。包含了大量免费/开源的小游戏，地址："),s("a",{attrs:{href:"https://github.com/Calinou/scoop-games",target:"_blank",rel:"noopener noreferrer"}},[t._v("Calinou/scoop-games"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("剩下的几个 bucket 都是和开发环境相关的，比如 "),s("code",[t._v("java")]),t._v(" 这个 bucket 就是为了安装 JDK 用的 bucket，这些我在这里就不过多赘述了。")]),t._v(" "),s("h1",{attrs:{id:"社区提供的-bucket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#社区提供的-bucket","aria-hidden":"true"}},[t._v("#")]),t._v(" 社区提供的 bucket")]),t._v(" "),s("p",[t._v("上面几个 bucket 都是 Scoop 官方维护认证的 bucket，当然我们也有很多由社区（用户）维护的 bucket。这里是一个按照 Github score（由 Star 数量、Fork 数量和 App 数量综合决定的 Github score）排列的 bucket 列表："),s("a",{attrs:{href:"https://github.com/rasa/scoop-directory/blob/master/by-score.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scoop buckets by Github score"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/02/05/5c59a1577b3a0.png",alt:"Scoop 社区仓库排行榜"}})]),t._v(" "),s("p",[t._v("我们可以通过这样的方式来将社区维护的 bucket 添加至本机的 Scoop bucket 列表：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop bucket add <仓库名> <仓库地址>\n")])])]),s("p",[t._v("再举个例子，比如添加「🐟 dorado」仓：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop bucket add dorado https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h404bi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dorado\n")])])]),s("p",[t._v("这样之后，如果我们要安装「🐟 dorado」仓的某项 App，直接通过下面的这个命令安装即可：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop install dorado"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("<App 名>\n")])])]),s("p",[t._v("往往，Google 搜索「App 的名字 + scoop」就可以找到我们想要安装 App 的仓库有没有存在。")]),t._v(" "),s("h1",{attrs:{id:"更多进阶操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多进阶操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多进阶操作")]),t._v(" "),s("blockquote",[s("p",[t._v("下面的操作涉及到一定的开发经验，需要 "),s("code",[t._v("git")]),t._v(" 的版本控制知识和对 "),s("code",[t._v("json")]),t._v(" 文件的了解。如果上面介绍的方法已经满足了你的需求，就可以忽略这里的介绍了。")])]),t._v(" "),s("p",[t._v("「可是我想要安装的软件这里都没有啊？」")]),t._v(" "),s("p",[t._v("不要慌，我们照样有办法：我们可以自己维护一个 bucket ("),s("a",{attrs:{href:"https://github.com/lukesampson/scoop/wiki/Buckets#creating-your-own-bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating your own bucket"),s("OutboundLink")],1),t._v(")，在里面写上我们所需要软件的安装步骤配置文件，从而自定义一个我们自己的 bucket。以在 GitHub 上托管一个名字为 "),s("code",[t._v("my-bucket")]),t._v(" 的 bucket 为例子：")]),t._v(" "),s("ul",[s("li",[t._v("建立一个 GitHub 仓库名为 my-bucket")]),t._v(" "),s("li",[t._v("在 PowerShell 中执行下面的操作，向 my-bucket 中添加一个名字叫 hello 的 App：")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将仓库克隆至本地")]),t._v("\ngit clone https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("<你的 GitHub 用户名>"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("my"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bucket\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入 my-bucket")]),t._v("\ncd my"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bucket\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 App 的安装配置文件 hello.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ version: "1.0", url: "https://gist.github.com/lukesampson/6446238/raw/hello.ps1", bin: "hello.ps1" }\'')]),t._v(" > hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地更改同步至 GitHub")]),t._v("\ngit add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add hello app"')]),t._v("\ngit push\n")])])]),s("ul",[s("li",[t._v("在 Scoop 中将 my-bucket 添加至你的 Scoop bucket 列表：")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("scoop bucket add my"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bucket https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("<你的 GitHub 用户名>"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("my"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bucket\n")])])]),s("ul",[s("li",[t._v("测试是否成功：")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 hello 这个 App")]),t._v("\nscoop install hello\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行 hello")]),t._v("\nhello\n")])])]),s("p",[t._v("你应该会看到 Hello, <你的 Windows 用户名>!。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/02/05/5c59a1f58b9e1.png",alt:"Demo"}})]),t._v(" "),s("p",[t._v("这就是官方给出的自定义 bucket 的 demo，你需要继续对 hello.json 进行配置，包括你所想要安装 App 的下载地址、安装步骤等一系列配置方法。这些操作更为复杂，我在这里不继续介绍了，感兴趣的话请参考："),s("a",{attrs:{href:"https://github.com/lukesampson/scoop/wiki/App-Manifests",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Manifests"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"尾巴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尾巴","aria-hidden":"true"}},[t._v("#")]),t._v(" 尾巴")]),t._v(" "),s("p",[t._v("这篇文章我就介绍到这里，相信你读到这里，已经可以高效的利用 Scoop 安装和管理自己的 App 了。")]),t._v(" "),s("p",[t._v("Scoop 是一个强大的工具，有着极大的可玩性、设计与实现理念，包括但不限于 shim 的软链接理念、利用 persist 存储用户数据等等，如果你感兴趣，请直接参考 "),s("a",{attrs:{href:"https://github.com/lukesampson/scoop/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scoop 官方的 Wiki"),s("OutboundLink")],1),t._v("。")])])},[],!1,null,null,null);e.default=r.exports}}]);