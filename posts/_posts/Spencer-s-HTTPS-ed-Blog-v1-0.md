---
title: Spencer's HTTPS-ed Blog - v1.0
subtitle: 弄个证书真难。
date: 2018-01-26 20:18:24
top_img: "https://i.loli.net/2018/01/28/5a6d7b196f31a.jpg"
tags:
    - code
---

![](https://i.loli.net/2018/01/28/5a6d7b398184c.jpg)

一个网站开头的小绿标是网站管理员的基本素养。

<br>

---

是滴，我的博客今天早上 7 点 19 分正式开始**全站 HTTPS 了！**

**Well, almost.**

其实托管在 GitHub 上面的博客 + 自定义域名实现`全站 HTTPS `真是超级难搞定的。

<br>

# 一. BASELINE

在 GitHub Pages 上托管的博客最最最最初的网址：***.github.io 本来是全站 HTTPS 的，证书是 GitHub 分发的，可是自定义域名就让这个证书失效了。我们可爱的小绿标也消失了。

> “师傅，你在……赛车？”
>
> “不，我在追风。”
>
> <br>
>
> 一道完美的弧线，如同流星追月，长河入海。王建国的出租车像一把银梭，如同浩瀚宇宙里的夺目灿星，又似汪洋中跃起的飞鱼，将那批出租车瞬间抛远。

<br>

# 二. UPGRADE

非常难过的是，GitHub Pages 不支持上传SSL证书。 我们曲线救国：用 CloudFlare 的 CDN 服务器反向代理。
CloudFlare 是一家 CDN 提供商，它提供了免费的 HTTPS 服务，但不是应用SSL证书。CloudFlare 的基本实现模式是，用户到 CDN 服务器的连接为`https`，而 CDN 服务器到 Github 的服务器的连接为`http`，即在 CDN 服务器那里加上反向代理。

1. 注册并登录 CloudFlare，并在自己的域名提供商（我的是阿里云万网）将自己域名下的 Name Server 修改为 CloudFlare 的 Name Server.
2. 在 CloudFlare 的 DNS 设置域名匹配到自己的博客，然后启用动态 DNS 加速.
3. 在 CloudFlare 的 Crypto 设置 SSL 为 Full，等待一定时间实现建立连接后，就可以通过 `https` 来访问博客咯~
4. 在 CloudFlare 的 Page Rules 中设置路由规则。一般情况下，利用 `Always use https` 设置两条规则，规则链接分别为 `http://your_site_url.com/*` 与 `http://www.your_site_url/*`，这样就可以开启 `https` 强制跳转.

到这里我们就基本实现了全站 HTTPS (Almost).

> 杨秋之以为自己见到了美，他听老师说，美是人类内心的根源，你见到了美，自然而然地，就明白人类为什么前行，为什么进步，为什么义无反顾。

<br>

# 三. WRAP_UP

虽然通过上面的方法我们把全站大部分内容 实现了用 HTTPS 传输，可是这时候如果用 Chrome 访问我们的博客，会发现 Console 里面出现警告：`Mixed Content` 。其实这个是因为我在我的网站上放置图片的时候用的是七牛云的图床服务，而这部分资源（Resources）的传输是 HTTP 协议传输的。So...

![](https://i.loli.net/2018/01/28/5a6d7b66971f9.jpg)

> 遇见是两个人的事，离开却是一个人的决定。

我可能要离开我现在的图床了。

知乎告诉我了两个免费的支持 HTTPS 外链的图床：

- 图床001：https://www.tuchuang001.com/
- 爱信息图床：https://tu.aixinxi.net/index.php

还在测试中，不知道哪个更好一点。

> 陶小红一直笑，第二天，她说当晚回去，脚就肿了，她还说，杨秋之，你跳舞很有节奏，旁人是踩点，你是踩脚，每一下都能够恰到好处，位置恰到好处，集中在脚背、脚趾，力量也恰到好处，不会小到让我没有感觉，也不会大到让我终身残废。

emmm 我是多么希望七牛云能支持没有备案的域名 HTTPS 外链啊。

<br>

鞠躬。

<br>

<br>

© Spencer Woo
