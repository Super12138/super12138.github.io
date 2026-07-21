---
title: 在使用macOS Boot Camp安装的Windows开启硬件虚拟化
order: 1
---

# 在使用macOS Boot Camp安装的Windows开启硬件虚拟化

![阅读人数统计](https://visitor-badge.laobi.icu/badge?page_id=super12138.blog.bootcamp-virtualization&left_text=reading%20count)

> 本文使用 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans) 协议发布
>
> This article is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 起因
心血来潮在macOS上使用Boot Camp安装Windows后，一切都十分顺利。直到有一天需要使用Hyper-V的时候提示没有硬件虚拟化无法开启，于是我就开始寻找开启硬件虚拟化的方法。

## BIOS 和 UEFI
`BIOS`和`UEFI`是开启硬件虚拟化绕不开的一环，也是计算机启动的关键。二者的作用近乎相同。

`BIOS`（**B**asic **I**nput/**O**utput **S**ystem，基本输入输出系统）是在通电启动阶段执行硬件初始化，以及为操作系统提供运行时服务的固件，在1980年代由IBM公司创造。

在早些时间，计算机的配置较低，发展较慢，BIOS的对这种硬件的支持一致较好，因此当时大多数电脑使用BIOS来进行启动初始化。但是随着近年硬件发展的迅猛，动辄几个TB的硬盘的数量、几个GB的内存的数量逐渐增多，BIOS这个古董级的家伙越来越力不从心。

因此，Intel在1998年着手开发新的“BIOS”固件，名叫`Intel Boot Initiative`。它后来被重命名为**E**xtensible **F**irmware **I**nterface（可扩展固件接口），也就是`EFI`。

最终，Intel于2005年把EFI上交给了统一可扩展固件接口论坛进行后续的发展，`EFI`也被更名为了`UEFI`（**U**nified **EFI**，统一可扩展固件接口）。

`UEFI`相当于`BIOS`的后代，有着对更高规格硬件的支持，也具有自己的设置界面（比BIOS的界面更漂亮也更易操作），甚至向前兼容了BIOS。因此目前新出厂的电脑大多都采用了UEFI。

以下是他们两者的对比（图源：[[Windows 11/10]如何进入BIOS设置界面](https://www.asus.com.cn/support/faq/1008829/)）

BIOS:
![华硕计算机的BIOS界面](https://km-ap.asus.com/uploads/PhotoLibrarys/e16a88c8-bcc4-4dcb-bc7f-fe0809f723b5/20240813171037206_Bi2.jpg)

UEFI: 
![华硕计算机的UEFI界面](https://km-ap.asus.com/uploads/PhotoLibrarys/e16a88c8-bcc4-4dcb-bc7f-fe0809f723b5/20240813170702293_Bi1.png)

## 计算机启动过程
了解完BIOS和UEFI，我们也需要知道硬件虚拟化是在哪里被开启的。

BIOS和UEFI均被直接烧录在主板上的一个芯片上，不可更改。计算机上电后，先启动BIOS/UEFI，再进行硬件初始化。UEFI有一个独特的步骤是读取EFI系统分区中的`.efi`后缀结尾的UEFI可执行镜像进行启动配置及bootloader的加载。

忽略与本文无关的环节，精简后的系统启动过程是这个样子的：
```
上电 -> || BIOS -> 硬件等初始化及配置 -> 控制权移交MBR中的bootloader || -> bootloader引导系统启动

上电 -> || UEFI -> 内存初始化、驱动加载、启动设备选择 -> 读取并运行.efi文件（设置启动选项等操作） -> 移交UEFI bootloader || -> Bootloader引导系统启动
```

说了这么多回到我们的问题上。

在纯血Windows上，硬件虚拟化通常是开启的。就算没有开启，也可以前往BIOS（旧机型）或者UEFI设置（新机型）中找到相关设置轻松开启。但是macOS没有采用BIOS方案，而是完全采用了UEFI的方案。按常理来说UEFI是具有配置界面的，但是macOS下官方提供的UEFI没有对应的设置界面，因此从BIOS/macOS官方UEFI设置中配置虚拟化的路径就不再有效。

结合上图，我们可以清晰的知道，硬件初始化是在BIOS和UEFI中完成的，硬件虚拟化的初始化也是在这里完成的。BIOS和UEFI本体因为烧录不可修改，但是系统EFI分区中的`.efi`文件我们是可以修改的啊！更改了它是不是硬件虚拟化就可以成功配置了呢？答案是肯定的。

开源社区中有一个大名鼎鼎的第三方启动引导程序——`rEFInd`，它提供了我们可以自定义的配置和`.efi`启动文件，正好符合我们的需求。

## 前期准备
这步非常简单，首先进入[rEFInd官方下载链接](https://sourceforge.net/projects/refind/files/latest/download)，下载`rEFInd`的发行版后解压。

同时我们还需要下载另一个极其老牌的软件`DiskGenius`。进入它的官网（[中文官网](https://www.diskgenius.cn/download.php)或[英文官网](https://www.diskgenius.com/download.php)，下载下来的东西语言不一样其他都一样）把它下载下来并解压。

## 文件配置
好了，我们已经准备完成了。首先进入刚才解压的rEFInd发行版的文件夹中的`refind`文件夹。后续所有操作均需要此文件夹本身及其文件。在这个文件夹中找到`refind.conf-sample`文件，把它命名成`refind.conf`。

```bash
refind-bin-0.14.2
├─banners
├─docs
│  ├─man
│  ├─refind
│  └─Styles
├─fonts
├─keys
└─refind # 这个文件夹 // [!code highlight]
    │  refind.conf-sample # [!code --]
    │  refind.conf # [!code ++]
    ├─drivers_aa64
    ├─drivers_ia32
    ├─drivers_x64
    ├─icons
    │  └─licenses
    ├─tools_aa64
    ├─tools_ia32
    └─tools_x64
```

然后打开这个文件，搜索文字`#enable_and_lock_vmx false`，把它修改成`enable_and_lock_vmx true`并保存（记得删除开头的`#`），像这样。
::: code-group
```bash [refind.conf]
#enable_and_lock_vmx false // [!code --]
enable_and_lock_vmx true # [!code ++]
```
:::

## 安装
接着，打开DiskGenius，在左侧菜单栏里找到名为`EFI`的分区，点击左侧的`+`打开文件树，单击`EFI`文件夹（不要点击左侧`+`）进入。把刚刚的`refind`文件夹拖进`DiskGenius`右侧的窗口中。若提示分区正在使用中需要卸载分区重新挂载选择确定即可。

![复制rEFInd目录到EFI目录后的结果](https://files.seeusercontent.com/2026/07/20/lG6e/dg-copy-refind.png)

复制完毕后，在DiskGenius顶部的`工具(T)`菜单的底部找到`设置UEFI BIOS启动项`选择并进入。

![DiskGenius工具菜单中设置UEFI BIOS启动项一项](https://files.seeusercontent.com/2026/07/20/mx5B/dg-set-uefi-menu.png)

> [!IMPORTANT]
> 接下来，**千万不要手欠去编辑`Mac OS X`的项目**，不要问为什么。

在新弹出的窗口里点击`添加`按钮，在新弹出的文件选择窗口里由`EFI`文件夹定位到`refind`文件夹中`refind_x64.efi`一项，点击`打开`。在`设置UEFI BIOS启动项`窗口中找到刚刚添加的项目（通常叫做`New Boot Entry`），点击`上移`移至顶部。

![步骤一：弹出的设置UEFI BIOS启动项窗口中点击添加](https://files.seeusercontent.com/2026/07/20/k1Hb/dg-uefi-set-01.png)

![步骤二：在弹出的文件选择窗口中找到refind_x64.efi并单击打开](https://files.seeusercontent.com/2026/07/20/oq0R/dg-uefi-set-02.png)

![步骤三：在设置UEFI BIOS启动项点击New Boot Entry项目后点击上移调节顺序至顶部](https://files.seeusercontent.com/2026/07/20/w0Kw/dg-uefi-set-03.png)

最后关闭窗口，重新启动电脑，在界面中选择Windows的徽标，进入Windows，大功告成~

![任务管理器性能页面中CPU虚拟化为“已启用”状态](https://files.seeusercontent.com/2026/07/20/1mIj/taskmgr-virtualization-enabled.png)

## 恢复
如果有一天你不需要rEFInd或不需要硬件虚拟化了，你可以十分轻松地移除它。把重新进入`DiskGenius`，删除`refind`的UEFI启动引导项并把`Mac OS X`启动引导项放在第一个；进入EFI分区删除`refind`文件夹即可。

## 其他方法
还有一个方法是使用命令行来进行操作，但在此不展开，有以下几个原因。

首先是因为命令行方法有一个最致命的问题是无法调节启动引导程序的顺序，就算设置成功了也不一定能够成功使用`rEFInd`进行引导。其次是因为命令行的确不如图形界面来的直接。

如果你真的很好奇，请前往[GitHub上由`techysy`编写的教程](https://github.com/techysy/rEFInd#%E6%96%B9%E6%B3%95%E4%B8%80%E4%BD%BF%E7%94%A8-bcdedit%E5%91%BD%E4%BB%A4%E8%A1%8C)，那里有很详细且清晰的步骤可供参考。

## 参考资料
- https://github.com/techysy/rEFInd
- https://www.asus.com.cn/support/faq/1008829/
- https://www.cnblogs.com/davytitan/p/18186640
- https://www.hp.com/hk-en/shop/tech-takes/post/what-is-uefi
- https://zh.wikipedia.org/wiki/%E7%B5%B1%E4%B8%80%E5%8F%AF%E5%BB%B6%E4%BC%B8%E9%9F%8C%E9%AB%94%E4%BB%8B%E9%9D%A2
- https://zh.wikipedia.org/wiki/BIOS