[[toc]]
::: info
本文章来自：@cutewrp（csdn），已经过原作者同意（我就是原作者 :) ）
:::
# 一、简介
首先，让我们了解一下，什么是DRM？

> DRM，英文全称Digital Rights Management, 可以翻译为：数字版权管理。 数字版权管理是指数字内容，如音视频节目内容、文档、电子书籍等在生产、传播、销售、使用过程中 进行的权利保护、使用控制与管理的技术。

我们为什么要解除DRM限制呢？

一是我们能在任何设备上访问我们购买的电子书，而不用下载各种各样怪异的App。
二是我们能更好的跟好友分享你手上的这本好书，而您的好友不用再次购买这本书。
# 二、方法
## 2.1、准备

 1. 一本带DRM限制的电子书，格式最好是：`.azw`或`.azw3`。
 2. 你的电脑，我用的是Windows。

## 2.2、下载必备软件以及插件
首先，打开Calibre的官网：[https://calibre-ebook.com/](https://calibre-ebook.com/)，选择Download，下载**Portable版本**
![Calibre - Home](https://img-blog.csdnimg.cn/660f8a9755144359970864e7957b738d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
![Calibre - Download - Portable](https://img-blog.csdnimg.cn/a2ddc2b2700f4de496d1c2f5e9a0730e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
点进去，选择Download calibre Portable，然后，它就会开始下载。
![Download calibre Portable](https://img-blog.csdnimg.cn/d8cb2bc5ec5743ccbd790bad3597fe87.png)
下载完成后，打开，选择你要存放Calibre Portable的地方，点击“确定”。
![在这里插入图片描述](https://img-blog.csdnimg.cn/56d205675f2840638854e853b7e275e2.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
然后，这个安装程序（解压程序）就运行好了，此时，先不要打开软件，等我们下载好了插件，再打开。
![解压](https://img-blog.csdnimg.cn/7509d7f4c593412ba2dd84e26912b932.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ad0769dd5e8d4330b26bfc55f5d1cab2.png)
## 2.3、DeDRM_tools下载与安装
既然要解除DeDRM限制，那么这个有名的插件可少不了！
它就是：
![在这里插入图片描述](https://img-blog.csdnimg.cn/cfd9ee9bfb1d4ada90fe667422fdbf8a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70#pic_center =300x300)
由apprenticeharper开发的DeDRM_tools！

首先我们进入它的项目库地址：[https://github.com/apprenticeharper/DeDRM_tools/releases](https://github.com/apprenticeharper/DeDRM_tools/releases)
然后，找到最上面的一个Release找到一个`.zip`包，下载它。（本作者使用的版本是7.2.1是最新版本 - 2021年8月14日）
![github](https://img-blog.csdnimg.cn/fbeec17e265f457eaa0d201f76872c9c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
等它下载好，打开它，找到`DeDRM_plugin.zip`，解压到你存放Calibre Portable的地方。
## 2.4、解除限制
现在，我们打开`calibre-portable.exe`，配置一下。
![1](https://img-blog.csdnimg.cn/0672caa8cf7e4262a904e91fdb7d3424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c3c7b391fa246e8a33b03a05495fe26.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8412fcc33809446689abfb99fda2f42a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
![ ](https://img-blog.csdnimg.cn/aaf81ba38b984c0f89d81b2e308dc15c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
![ ](https://img-blog.csdnimg.cn/f3a43aeea24140759c72ff033130c448.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9d962b0d3ab642ff90e2152b8ff10d79.png)
至此，我们已经完成了Calibre Portable的全部配置，下面我们来配置DeDRM_tools。
### 2.4.1、安装插件
首先，我们将Calibre Portable进入全屏，找到`首选项`打开。
![在这里插入图片描述](https://img-blog.csdnimg.cn/5121cd3e27964a4dab6c8613c0107e5d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
找到插件，进入。
![在这里插入图片描述](https://img-blog.csdnimg.cn/4a72e8e57b8941c195da088cf0e99cd3.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
选择从文件加载插件。
![在这里插入图片描述](https://img-blog.csdnimg.cn/731570186b5f4e758596bf5421bcfa41.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
找到我们刚才解压出来的zip包，打开。
![在这里插入图片描述](https://img-blog.csdnimg.cn/d2daeccf34c5444fb1c596a552274c9b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
选择“是”。
![在这里插入图片描述](https://img-blog.csdnimg.cn/29d57cbb507141f499c66c7073ceabd6.png)
点击确定。
![在这里插入图片描述](https://img-blog.csdnimg.cn/9adbaf88267044e7805e910ac6d3aaa2.png)
现在，**重启Calibre Portable**。

重启之后，我们再次来到首选项——插件，找到文件类型，打开，找到DeDRM
![在这里插入图片描述](https://img-blog.csdnimg.cn/5679bd668fe94426b89a78e07bbef619.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
双击打开，选择`eInk Kindle ebooks`打开，在“2”出点击，在“3”处输入kindle序列号，点击“4、5、6”处确定。（1-6处如下图↓）  。
![在这里插入图片描述](https://img-blog.csdnimg.cn/336b85f8a98540f0bdc25ba31398b794.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
最后，再点击“应用。
![在这里插入图片描述](https://img-blog.csdnimg.cn/b0f1377b4f97448abfb6716067b68186.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)

再次**重启Calibre Portable**。
## 2.5、完成
现在，点击添加书籍，添加一本电子书。

![在这里插入图片描述](https://img-blog.csdnimg.cn/400c5d93dd95446cb7aa3525a5a2526e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUxMDgyNTg2,size_16,color_FFFFFF,t_70)
等待一会儿，然后选择你的电子书，点击阅读，即可查看你的书籍。
点击转换书籍，即可把电子书转换成任何你想要的格式。
# 结束
以上就是本文章的全部内容，希望对大家有帮助。
在这里祝大家七夕快乐！
2021年8月14日
