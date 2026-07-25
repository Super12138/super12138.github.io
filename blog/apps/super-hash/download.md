---
title: 下载
order: 2
---

# 下载
Super Hash 支持 Windows 和 macOS 双平台，你可以在下方找到 Windows 和 macOS 应用的下载链接。

## 前置条件（仅限桌面端）
我使用 `Tauri` 框架来进行桌面端的开发。`Tauri` 依赖于系统 `WebView`，请确保您的设备中具有相应的运行时。当然，这也会在应用安装过程中进行检查。

使用 `Windows` 设备举例，设备中必须具有 [WebView2](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/) 运行时。

通常情况下，`WebView` 在系统出厂时预装，**因此您无需担心**。如果没有，将会在安装过程中自动使用[由 Microsoft 提供的在线安装器](https://developer.microsoft.com/microsoft-edge/webview2/#download)下载并安装，会消耗200-300MB的数据流量。如果你的设备中没有安装 `WebView` 且当前的环境无法访问互联网，请考虑在其他设备上[访问此链接](https://developer.microsoft.com/microsoft-edge/webview2/#download)以下载固定版本的 `WebView` 安装器。

## Windows <Badge type="tip" text="3.0.0" />
::: warning
Windows 支持 Windows 10 或更高版本和 64 位架构。如要在 Windows 10 以下旧版本或 32 位、arm64架构的电脑上使用，请尝试使用[网页版](https://super-hash.pages.dev/)
:::

### x64 架构
- [安装包 (.exe)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x64-setup.exe)
- [便携版 (.exe)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x64-portable.exe)
- [安装包 (.msi)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x64_zh-CN.msi)

### x86 架构
- [安装包 (.exe)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x86-setup.exe)
- [便携版 (.exe)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x86-portable.exe)
- [安装包 (.msi)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x86_zh-CN.msi)

### Microsoft Store
如果你希望更简单的进行安装并接收来自Microsoft Store的自动更新，请前往 Microsoft Store 进行下载，功能上没有任何差别。

<a href="https://apps.microsoft.com/detail/9nqq6z539qv2?referrer=appbadge&mode=direct">
	<img src="https://get.microsoft.com/images/zh-cn%20dark.svg" width="200"/>
</a>

## macOS <Badge type="tip" text="3.0.0" />
::: warning
macOS 支持 macOS 10.11 (El Capitan) 以及更高版本，并且支持 Apple Silicon (arm64) 设备
<br>
:::

- [通用架构 (.dmg)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_universal.dmg)
- [Intel 版 (.dmg)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_x64.dmg)
- [Apple Silicon 版 (.dmg)](https://github.com/Super12138/Hash-Checker/releases/download/3.0.0/Super.Hash_3.0.0_aarch64.dmg)

## 网页版 <Badge type="tip" text="4.0.0-dev" />
::: warning
本应用理论支持所有主流浏览器的**较新版本**。由于使用了 Web 的新特性，所以在某些过旧版本的浏览器上会出现无法计算 Hash 值的情况。
<br>
推荐您使用基于 [Chromium](https://www.chromium.org/) 内核构建的浏览器（如 [Chrome](https://www.google.cn/chrome/)、[Edge](https://www.microsoft.com/zh-cn/edge/download) 等）进行访问，以确保您的体验。
<br>
网页版支持PWA
:::
- [点击此处前往网页版](https://super-hash.pages.dev/)

## Beta
此版本是测试版本，相比正式版更不稳定。但它包含了比 Dev 版更稳定的功能和安全更新

::: warning
请注意，某些新功能可能会在正式版中移除，请根据自身需求下载
:::

目前暂无 `Beta` 版

## Dev
此版本是预览版本，它由 GitHub Actions 构建的版本，相比 Beta 版**更不稳定**。<br>
它在每次提交代码后构建，具有最新的功能和修复，但也具有很强的不稳定性，可能出现某些影响使用体验的 bug。<br>
如遇问题，可在 [GitHub Issues](https://github.com/Super12138/Hash-Checker/issues) 上反馈，并**写清版本号**（可在【设置】→【关于】→【版本】一行查看）以便确定问题所在分支；同时也请您**准确描述问题**以更好复现并修复。

::: warning
请注意，某些新功能可能会在后续提交中移除，请根据自身需求下载
:::

[前往 Github Actions](https://github.com/Super12138/Hash-Checker/actions/workflows/build.yml)