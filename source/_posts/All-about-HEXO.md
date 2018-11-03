---
title: All about HEXO
subtitle: A curated list of awesome things you get to do with 'Hexo'
date: 2017-12-13 15:30:37
tags:
	- tutorial
	- code
  - sexy-moves
---

![](http://owkccdyrm.bkt.clouddn.com/blog/2017-12-13-hexo_logo.jpg)

这是一篇 `List`：A curated list of awesome things you can do with `Hexo` <3 `Github Pages`.

本页面长期不定期更新。

<br>

# Hexo

Hexo 是个好东西啊。

> HEXO - A fast, simple & powerful blog framework

不多说，`Hexo` 就是一个能在不到1分钟的时间里生成一个网站所有网页的框架。

现在我用的就是它来维护[我的博客](www.spencerwoo.com)。

<br>

# Hexo Plugins

## 1. hexo-tag-aplayer

Yet another HTML5 music player.

又一个 HTML5 音频播放器。

项目地址：Find me on [Github](http://github.com/MoePlayer/hexo-tag-aplayer)

### Demo

> Removed.

### 安装

```shell
npm install --save hexo-tag-aplayer
```

### 使用

```markdown
{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```

### 参数

- `title`: music title
- `author`: music author
- `url`: music file url
- `picture_url`: optional, music picture url
- `narrow`: optional, narrow style
- `autoplay`: optional, autoplay music, not supported by mobile browsers
- `width:xxx`: optional, prefix `width:`, player's width (default: 100%)
- `lrc:xxx`: optional, prefix `lrc:`, LRC file url

## 2. hexo-tag-dplayer

Yet another HTML5 video player.

又是一个 HTML5 视频播放器。

项目地址：Find me on [Github](http://github.com/MoePlayer/hexo-tag-dplayer)

### Demo

> Removed.

### 安装

```shell
npm install hexo-tag-dplayer --save
```

### 使用

```
{% dplayer key=value ... %}

```

其中 key 可以有：

```
dplayer options:
    'autoplay', 'loop', 'screenshot', 'hotkey', 'mutex', 'dmunlimited' : bool options, use "yes" "y" "true" "1" "on" or just without value to enable
    'preload', 'theme', 'lang', 'logo', 'url', 'pic', 'thumbnails', 'vidtype', 'suburl', 'subtype', 'subbottom', 'subcolor', 'subcolor', 'id', 'api', 'token', 'addition', 'dmuser' : string arguments
    'volume', 'maximum' : number arguments
container options:
    'width', 'height' : string, used in container element style
other:
    'code' : value of this key will be append to script tag

```

### 参数 Arguments to DPlayer options mapping:

```
{
    container: "you needn't set this",
    autoplay: 'autoplay',
    theme: 'theme',
    loop: 'loop',
    lang: 'lang',
    screenshot: 'screenshot',
    hotkey: 'hotkey',
    preload: 'preload',
    logo: 'logo',
    volume: 'volume',
    mutex: 'mutex',
    video: {
        url: 'url',
        pic: 'pic',
        thumbnails: 'thumbnails',
        type: 'vidtype',
    },
    subtitle: {
        url: 'suburl',
        type: 'subtype',
        fontSize: 'subsize',
        bottom: 'subbottom',
        color: 'subcolor',
    },
    danmaku: {
        id: 'id',
        api: 'api',
        token: 'token',
        maximum: 'maximum',
        addition: ['addition'],
        user: 'dmuser',
        unlimited: 'dmunlimited',
    },
    icons: 'icons',
    contextmenu: 'menu',
}
```



## 3. hexo-filter-github-emojis

It's Github emojis for hexo! 🎉

项目地址：Find me on [Github](http://github.com/crimx/hexo-filter-github-emojis)

>  A Hexo plugin that adds emoji support, using [Github Emojis API](http://api.github.com/emojis).
>  Check out the [Emoji Cheat Sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/) for all the emojis it supports.

### 安装

```shell
npm install hexo-filter-github-emojis --save
```

### 使用

You can configure this plugin in `_config.yml`. Default options:

```
githubEmojis:
  enable: true
  className: github-emoji
  unicode: false
  styles:
  localEmojis:
```

The filter will try to download the latest version of [Github Emojis](http://api.github.com/emojis) list. If the network is unavailable or too slow it will use the backup version.

- **className** - Image class name. For ✨ `:sparkles:` the filter will generate something like this:

  ```
  <img class="github-emoji" title=":sparkles:" alt=":sparkles:" src="http://assets-cdn.github.com/images/icons/emoji/unicode/2728.png" height="20" width="20">
  ```

- **unicode** - If you set this option to true, the filter will generate something like this:

  ```
  <span class="github-emoji" title=":sparkles:" data-src="http://assets-cdn.github.com/images/icons/emoji/unicode/2728.png">&#x2728;</span>
  ```

  Then you can fallback to image with JavaScript. For example, with jQuery:

  ```
    $('span.github-emoji').each(function (i, emoji) {
      var $emoji = $(emoji)
      var codepoint = $emoji.html()
      $('<img height="20" width="20">')
        .on('error', function () {
          // image loading failed
          $emoji.html(codepoint)
        })
        .prop('alt', $emoji.attr('title'))
        .prop('src', $emoji.data('src'))
        .appendTo($emoji.empty())
    })
  ```

- **styles** - inline styles for the images. For example:

  ```
  githubEmojis:
    styles:
      display: inline
      vertical-align: bottom
  ```

  outputs:

  ```
  <img class="github-emoji" style="display:inline;vertical-align:bottom" ...>
  ```

- **localEmojis** - You can specify your own list. An object or JSON string is valid. The filter will first check the `localEmojis` then fallback to the [Github Emojis](http://api.github.com/emojis) list.

  For example:

  ```
  githubEmojis:
    localEmojis:
      arrow_left: http://path/to/arrow_left.png
      arrow_right: http://path/to/arrow_right.png
  ```

  If you need to add code points that are not in the Github list, you can do this:

  ```
  githubEmojis:
    localEmojis:
      man_juggling:
        src: http://path/to/man_juggling.png
        codepoints: ["1f939", "2642"]
      arrow_right: http://path/to/arrow_right.png
  ```

# Hexo Themes

Click me for [Themes](http://hexo.io/themes/)

# Dependencies

```
hexo: 3.4.2
hexo-cli: 1.0.3
os: Darwin 17.0.0 darwin x64
http_parser: 2.7.0
node: 8.9.1
v8: 6.1.534.47
uv: 1.15.0
zlib: 1.2.11
ares: 1.10.1-DEV
modules: 57
nghttp2: 1.25.0
openssl: 1.0.2m
icu: 59.1
unicode: 9.0
cldr: 31.0.1
tz: 2017b
```
