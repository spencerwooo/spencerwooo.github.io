---
title: Java | 在 Java 中调用 Shell 脚本
subtitle: Teacher Kim's curse.
date: 2017-11-25 23:51:29
top_img: "http://owkccdyrm.bkt.clouddn.com/uros-jovicic-322314%281%29.jpg"
tags:
    - code
    - Java
    - Linux
    - sexy-moves
---

# [金旭亮](http://www.jinxuliang.com/MainWebSite)真是个可怕的人

Java 大作业。

Java 本是一个美丽端庄的语言。

本以为 Java 有着 C++ 所缺失的素雅。

可因为 Java 和数值分析考试被安排在了一周。

**令人头疼。**

<br>

# Demons

我和阳阳是 Partners.

我们要做一个时间管理桌面应用。

大概是要在运行的时候把不合适的网站屏蔽掉。

酱紫。

<br>

就叫他「Demons」吧。

中文「迪蒙」。

<br>

# 实现

感谢开发者[Brad Jasper](http://github.com/bradjasper)。

利用系统级别的 `Shell` 命令能通过修改 `.host` 文件来防止特定网站的浏览。

如何将 `Shell` 直接嵌套在 `Java` 里面呢？

我是这样实现的：



### Shell.java

```java
package focus;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created by spencerwoo on 2017/11/25.
 * Project Name: IdeaProjects
 */

public class Shell {

    public static void runScript(String scriptPath) {

        try {
            Process process = Runtime.getRuntime().exec("bash " + scriptPath);
            BufferedReader read = new BufferedReader(new InputStreamReader(process.getInputStream()));
            try {
                process.waitFor();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }

            while (read.ready()) {
                System.out.println(read.readLine());
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
```



然后再在 main 函数中这样引用就可以直接运行 `Shell script`了。

```java
 Shell.runScript("focusShell/testShell.sh");
```

其中参数是 `Shell` 文件的相对路径。(Relative path)

<br>

# 效果

emmm。

这是我们 UI 的初稿。

### 主页面

![](http://owkccdyrm.bkt.clouddn.com/2.jpg)

### 菜单

![](http://owkccdyrm.bkt.clouddn.com/UI1.jpg)

不知道阳阳能给我实现到什么程度。

西西。

</br>
**鞠躬。**
</br>
</br>

©2017 Spencer Woo
