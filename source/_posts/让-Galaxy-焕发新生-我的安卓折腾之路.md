---
title: 让 Galaxy 焕发新生 | 我的安卓折腾之路
subtitle: 辣鸡 Touchwiz，ME like Lineage OS
header-img: "http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-brooke-lark-3855071.jpg"
categories: "教程向"
date: 2018-01-20 20:09:56
tags:
    - code
    - android
    - sexy moves
---

> 世界就是这样告终，不是嘭的一声，而是嘘的一声。

<br>

**- 先来一段回忆杀 -**

2011 年的 6 月，我的生日，我买到了人生中第一台 Apple 的产品：iPod Touch. (4th-gen)

2016 年的 8 月，我迎来了人生中第一台 Mac. (MacBook, 12-inch, Early 2016)

2016 年的 11 月，我买来了人生中第一台 iPhone. (iPhone 7 Plus)

紧接着，我也迎来了不可避免的 Apple Watch，以及好感度爆棚的 AirPods。我想，这可能就标志着我开始了在所谓的「生态系统」中不能自拔的经历。

<br>

---

如今，为了我**大金老师**的安卓开发，我翻出来了陪伴我整个高二，只有在考试的时候失误了一次，才迫使我抛弃了它的 Galaxy S5，让它在 2018 年焕发新生。

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-S5.JPG)

Galaxy S5 是一部 2014 年春天发布的机器。除了它万年不变的塑料廉价质感的外壳，别的都是当年安卓界的翘楚，如日中天的三星令当年的小米华为之流难以望其项背。

但是它那令人难堪的塑料背壳，毫无设计感可言的塑料边框，和难用同嚼蜡的 TouchWiz 真是令人失望。

2018 年的今天，软件部分的改造工程从升级系统开始。

<br>

# 壹. ME :heart: Lineage OS

自从上次刷机我不小心给我的 Galaxy S4 同时刷了两个二进制文件（SuperSU 和 Magisk 的二进制）进去导致了 Bootloop 让我的小 S4 变砖的惨痛经历，我这次异常谨慎。

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-S5_WholeView.JPG)

翻遍了百度，由于我的 S5 是坑父亲的电信定制版，所以就算是大神云集的论坛：[xda-developers](http://www.xda-developers.com) 都很难找到第三方的 ROM。不过还好有 Lineage OS，令人激动。再说一遍，ME :heart: Lineage OS.

这里具体步骤参考了 —> [机锋论坛上的这个帖子](http://bbs.gfan.com/forum.php?mod=viewthread&tid=9153633)

1. 到  [Lineage OS 的官网](http://www.lineageosdownloads.com/lineage-os-rom-downloads-build-status)下载 Lineage OS 卡刷版，电信定制版（G9009W）对应版本为 Galaxy S5 Duos China (kltechnduo)，最高对应版本为 Lineage OS 14.1 基于 Android 7.1.2.
2. 到 [TWRP 官网](http://twrp.me)下载第三方 Recovery 线刷版，最新版本是 2017 年 12 月 9 日更新的 3.2.1-0 Released.
3. 到 [谁知道这是不是 Odin 的官网反正下载的 Odin 挺好用的官网](http://odindownload.com)下载 Windows 版的 Odin3，它是三星刷机用的电脑客户端，最新版本是Odin 3.12.3.
4. 依次刷入：① TWRP Recovery ② Lineage OS

成功的标志：S5 的中国电信开机动画变成了 Lineage OS 的标志性小圈圈，稍等片刻便进入系统。

<br>

# 贰. ME :heart: Magisk

Magisk 是一名台湾的大佬开发的以「系统外挂」方式存在的 Root 插件。

听说 SuperSU 被中国某个毒瘤厂家收购了，于是我转而投靠 Magisk 的怀抱。

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-S5_SystemInfo.JPG)

[XDA Developers Forum: Magisk](http://forum.xda-developers.com/apps/magisk)

Magisk 也是通过 TWRP 第三方 Recovery 卡刷的，原理同上。

丢下一个链接就逃跑。

<br>

# 叁. ME :heart: Xposed

**上帝之手**，我只能这样形容 Xposed。

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-S5-xposed-magisk.jpg)

从安卓 4.x 就存在的神器：Xposed 可以在不修改 apk 本身的情况下直接干预系统行为。

那些 wx 自动抢红包，wx 防撤回，修改应用启动图等等等等玄乎其玄的东东，都是 Xposed 干的。

上一个步骤安装 Magisk 除了提取 root 权限，还有一个目的就是让 Android 7.1.2 吃上 Xposed，具体刷入 Xposed 的步骤在这个链接：[XDA Developers Forum: Systemless Xposed Framework based on Magisk](http://forum.xda-developers.com/xposed/unofficial-systemless-xposed-t3388268)

刷入 Xposed Framework 之后，我们就几乎可以在系统中为所欲为了。

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-S5_Xposed_NeteaseMusic.JPG)

这里，我启用了 Xposed SDK25，安装了这些插件：

- 网易云音乐插件：去除启动页广告，自动签到，**本地显示**会员、网易音乐人等等.
- 绿色守护：组织国产毒瘤软件自启动与链接启动.
- Gravity Box：修改锁屏、桌面、通知栏、状态栏的利器.
- PerfectColorBar：强制全局自适应状态栏颜色.
- MinMinGuard：全局去广告.
- ...

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-xposed%20framework.jpg)

# Finally.

在我折腾的这段时间，我让：

- 一个曾经半天待机就把自己耗没电的老机器变成能坚持一天.
- 一个停留在安卓 5.0.x 时代，还有着辣鸡到炸裂的系统 UI 的老机器吃上 Android Nougat.
- 一个可自定义东西少之又少的机器，拥有上帝之手，整个系统尽在掌控.

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-battery-drain.jpg)

> 是黄书，但也是好书，一本黄书，写得人民群众手不释纸，夜不能寐，虽不能催泪，至少能催情。人民群众喜欢读，自己读了，还要给朋友读，甭管黄不黄，都是好书。

晚安。

![img](http://owkccdyrm.bkt.clouddn.com/blog/2018-01-20-ECD88335-584A-41CE-B44C-E0BC365BC5BF.JPG)

这是我的第二只猫猫，他叫小脑斧。

<br>

<br>

© Spencer Woo
