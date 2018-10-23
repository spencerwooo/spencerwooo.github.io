---
title: 一个有意思的 Python 训练项目集 | 三周目
date: 2018-05-07 13:29:20
subtitle: Dumb ways to code 3.
header-img: https://i.loli.net/2018/05/07/5aefe7700bbc6.jpg
tags:
    - code
    - sexy moves
    - github
---

[【上一篇：一个有意思的 Python 训练项目集 | 二周目】](https://spencerwoo.com/2018/04/28/PythonTwo/)

今天是五月的第七天。

就在上个周末，我考完了面向对象和网络通信。可以来总结再往前一周的 Python 练习题了。

<br>

# 三周目 | 生成验证码

这次的题目要生成一个数字验证码：

> **【第 0010 题】**
>
> 使用 Python 生成类似于下图中的**字母验证码图片**

![img](https://i.loli.net/2018/05/07/5aefe95386bec.jpg)

如题。

## 需求分析

1. 生成随机字母
2. 生成一个 canvas 来制作图片
3. 生成随机色块，来填充 canvas 背景
4. 在特定区间内，随机增加字母位置的坐标，实现字母的随机间距和随机行距
5. 高斯模糊化全图

经过这样的处理，并经过测试，腾讯提供的 OCR 是无法识别生成图片文本内容的。

![img](https://i.loli.net/2018/05/07/5aefee4fa007a.gif)



# Talk is cheap, show me the code.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
使用 Python 生成类似于下图中的字母验证码图片
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random
import string
import os
import errno

target_dir = 'captcha'


def random_letter():
    letter = random.choice(string.ascii_uppercase)
    # print(letter)
    return letter


def random_color():
    color = (random.randint(0, 255),
             random.randint(0, 255), random.randint(0, 255))
    return color


def generate_captcha(num):
    # If to generate more than one captcha, then put in sub-dir: captcha/*.jpg
    # Else put in same dir, named captcha.jpg
    if num > 1:
        # Check for target directory
        try:
            os.makedirs(target_dir)
        except OSError as e:
            if e.errno != errno.EEXIST:
                raise

    for img_num in range(num):
        # Generate canvas for captcha
        canvas_width = 240
        canvas_height = 60
        canvas = Image.new('RGB', (canvas_width, canvas_height), '#fff')

        font = ImageFont.truetype('Arial.ttf', 45)
        draw = ImageDraw.Draw(canvas)

        # Generate random 4 digit captcha with random color
        for i in range(4):
            text_pox = 60 * i + random.randint(5, 15)
            text_poy = random.randint(2, 10)
            draw.text((text_pox, text_poy), random_letter(),
                      fill=random_color(), font=font)

        # Generate noise in canvas background
        for _ in range(random.randint(1500, 3000)):
            draw.point((random.randint(0, canvas_width),
                        random.randint(0, canvas_height)), fill=random_color())

        # Blur the text
        canvas = canvas.filter(ImageFilter.BLUR)
        if num > 1:
            canvas.save(target_dir + '/' + str(img_num) + '.jpg', 'jpeg')
        else:
            canvas.save(target_dir + '.jpg', 'jpeg')


def main():
    generate_captcha(1)


if __name__ == '__main__':
    main()

```

<br>

## 坑点分析

- 有一个地方需要处理 Exception，就是如果要求创建的验证码多于 1 个，那么就需要新建文件夹 `target_dir`。在创建文件夹的时候需要利用 OSError 抛出异常。如下：

```python
# Check for target directory
try:
    os.makedirs(target_dir)
except OSError as e:
    if e.errno != errno.EEXIST:
        raise
```

- 在填充背景的时候，可以只调 1500~3000 个点进行涂色，考虑到如果全部点全着色会让文字和背景对比度降低，人眼不好识别验证码，即：

```python
# Generate noise in canvas background
for _ in range(random.randint(1500, 3000)):
    draw.point((random.randint(0, canvas_width),
                random.randint(0, canvas_height)), fill=random_color())
```

就这样。

<br>

<br>


© Spencer Woo

