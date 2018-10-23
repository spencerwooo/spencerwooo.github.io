---
title: 一个有意思的 Python 训练项目集 | 二周目
date: 2018-04-28 23:42:11
subtitle: Dumb ways to code 2.
header-img: https://i.loli.net/2018/04/28/5ae497625015a.jpg
tags:
    - code
    - sexy moves
    - github
---

[【上一篇：一个有意思的 Python 训练项目集 | 一周目】](https://spencerwoo.com/2018/04/26/PythonOne/)

今天没有进展。

4 月的尾巴我把它消耗在折腾 Linux 上面了。

Linux 是个无底洞。我在虚拟机上玩耍甚至能让我着迷 3 天。我先后安装了 CentOS 四次，Arch Linux 一次，Ubuntu 一次。折腾 Gnome 桌面，折腾 `yum`, `pacman` 和 `apt` 源，折腾 `wine`，折腾各种东西。

![img](https://i.loli.net/2018/04/28/5ae49915eca0d.jpg)

我最终得到结论是：macOS 是最好的 Linux(-like) Distribution.

> 因为，我有原生的 QQ 和微信，我有依赖干活的原生的 Photoshop 和 Illustrator，我还有独占的 Final Cut Pro X 和 Motion。而且我看到的好看的 Gnome 主题，（他敏感词的）居然都是类 macOS 的，我这按着我的审美配置之后，结果不是 macOS-like 就是 Ubuntu-like，甚至是 Combined flavor，就如上图。

**— EOF —**

<br>

# 二周目的题目 | 批量压缩图片

> **【第 0005 题】**
>
> 你有一个目录，装了很多照片，把它们的尺寸变成都不大于 iPhone5 分辨率的大小。

### 需求分析

这个题要求实现的内容，讲道理，真的超级实用。特别是对于拥有大篇幅图片的博客作者，like 我。之前我的图片压缩操作是：

1. 从 Unsplash 上面下载 4 MB 甚至更大的图片；
2. 拖到 Photoshop 里面；
3. 另存为：选择最小尺寸，保存。

然后图片就能变成大概 500 KB 左右那样子。然后压缩之后的照片还是超级难看，有摩尔斑纹那种的难看。

但是为了网页的访问速度，我不得不一张一张压缩图片。

### 目标具象


![img](https://i.loli.net/2018/04/29/5ae49bd8eb8b4.jpg)

如图里面两个文件夹的五张图片，要用 `os` 库将 `original` 文件夹里面的全部图片读取，进行压缩，然后输出到 `result` 文件夹里面。这是我们的目标。

用到了 `os`, `glob` 库和 `PIL` 里面的 `Image` 库。

<br>

# Talk is cheap, show me the code.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
你有一个目录，装了很多照片，把它们的尺寸变成都不大于 iPhone5 分辨率的大小。
"""

import os
from PIL import Image
import glob


origin_dir = 'original'
target_dir = 'result'
# threshold: iPhone 5 maximum resolution
width_limit = 1136
height_limit = 640


def compress_image(image_dir, result_dir, target_width, target_height):
    working_dir = os.path.dirname(os.path.realpath(__file__))

    try:
        print('---> Loading images...')
        my_images = glob.glob('{}/*'.format(image_dir))
        if not os.path.exists(result_dir):
            os.makedirs(result_dir)

        for each_img, i in zip(my_images, range(1, len(my_images)+1)):
            print(str(i) + ':', each_img)
            with Image.open(each_img) as img:
                width, height = img.size
                # print(each_img, width, height, os.path.getsize(each_img))
                if os.path.getsize(each_img) > target_width * target_height:
                    # print(each_img)
                    if width > height:
                        new_width = target_width
                        new_height = int(new_width * height / width)
                    else:
                        new_height = target_width
                        new_width = int(new_height * width / height)
                    # print(new_width, new_height)
                    result_img = img.resize((new_width, new_height))
                    result_img_name = each_img.replace(image_dir, result_dir)
                    result_img.save(result_img_name)

        print('--->', i, 'images loaded and compressed.')
        print('---> Saved in', working_dir + '/' + result_dir)

    except OSError as e:
        print(e)


def main():
    compress_image(origin_dir, target_dir, width_limit, height_limit)


if __name__ == '__main__':
    main()

```

### 坑点分析

- 利用 `glob` 来进行文件匹配：
  - ` my_images = glob.glob('{}/*'.format(image_dir))` 即表示找到 `image_dir` 下面的全部文件
- 因为压缩目标是根据图片分辨率来判断的，即在 `compress_image()` 函数中两个参数：`width_limit` 和 `height_limit`，so 得判断一下图片是横着还是竖着。
- 我就想到这两个坑点。
- 我悄咪咪写了如果只有一张图片就直接输出到 `workspace` 目录，省事er。

就这些。

<br>

# REPO

【项目地址】[spencerwoo98 | Dumb ways to code](https://github.com/spencerwoo98/Dumb-Ways-To-Code)

<br>

<br>

© Spencer Woo