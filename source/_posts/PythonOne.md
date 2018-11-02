---
title: 一个有意思的 Python 训练项目集 | 一周目
subtitle: Dumb ways to code 1.
date: 2018-04-26 19:09:27
top_img: https://i.loli.net/2018/04/26/5ae1b8e56b358.jpg
tags:
    - code
    - sexy moves
    - github
---

> A python a day keeps the PM away.
>
> 因为太菜，所以这是第一篇技术博， 很紧张。

逛 GitHub 的时候，发现了一个很酷的 Python 训练项目集。一共有 25 个题目，基本涵盖了用 Python 实现的各种功能。

上一周没有复习 C++ 和网络通信全部用来玩这几个题了。题目地址在 --> [GitHub | Dumb Ways To Code](https://github.com/spencerwoo98/Dumb-Ways-To-Code)

现在已经通过各种办法，解决了 0000 ~ 0007 还有一个 0010 这些题目。

今天先来总结一下第 0000 题目的思路。

**面向 Google, CSDN, StackOverflow 编程。**:smile:

<br>

# 一周目的问题 Solutions | PIL or Pillow

第一天遇到的问题是这样的：

> **【第 0000 题】** 
>
> 将你的 QQ 头像（或者微博头像）右上角加上红色的数字，类似于微信未读信息数量那种提示效果。（类似于图中效果）

<div style="display:block; margin-left: auto; margin-right: auto; width:20%; ">

![](https://i.loli.net/2018/04/26/5ae1bd7469715.jpg)

</div>

问题分解为：

- 加载图片
- 识别图片大小
- 识别字体文件 TrueType
- 将文本加到图片右上角并保存

在 PIL 中有 `Image`, `ImageFont`, `ImageDraw` 这三个对象，分别用来实现：

- `Image`: 加载原始图片并将其转换为对象 Object
- `ImageFont`: 加载字体文件
- `ImageDraw`: 将字符添加到图片对象上

<br>

# Talk is cheap, show me the code.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from PIL import Image, ImageDraw, ImageFont


def add_unread_count(img):
    draw = ImageDraw.Draw(img)
    width, height = img.size
    textSize = int(width*0.15)
    textColor = '#CB1B45'
    textFont = ImageFont.truetype('Arial.ttf', textSize)
    draw.text((width*0.8, height*0.02), '99', font=textFont, fill=textColor)
    img.save('icon_added.jpg', 'jpeg')


def main():
    img = Image.open('icon.jpg')
    add_unread_count(img)


if __name__ == '__main__':
    main()

```

<br>

## 代码中：

`add_unread_count()` 是添加 ‘99’ 字样的主函数，参数为图片对象 `img`.

`draw = ImageDraw.Draw(img)` 将图片对象 `img` 导入并成为图层背景，我叫它 `canvas`.

然后 `width, height = img.size` 确定背景底照的长宽。

`ImageFont.truetype('Arial.ttf', textSize)` 将字体文件 `Arial.ttf` 导入并在下一步绘制文本图层时使用。

`draw.text((width*0.8, height*0.02), '99', font=textFont, fill=textColor)` 将文本 ‘99’ 绘制到图片右上角。

最后保存图片文件：`img.save('icon_added.jpg', 'jpeg')`

<br>

# Reference

参考了 Python 官方文档 PIL 相关使用。

参考了 [这个 Repo 里面](https://github.com/Show-Me-the-Code/python) 大佬们的思路。

面向 Google 和 StackOverflow 编程成功。

<br>

<br>

©Spencer Woo