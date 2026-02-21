---
title: 页首
weight: 44
date: 2026-02-20
categories: ["特色配置"]
tags: ["页首"]
series: ["特色配置"]
series_order: 44
---

Hugo Narrow 页首设置支持粘性导航设置、logo 设置、主题切换、暗色模式切换、语言切换。

1. logo 放置在 `~/static` 目录下，留空则使用站点标题首字母，并根据主题配色显示不同颜色。
2. 语言切换按钮支持点击直接切换或点击显示语言菜单。

```yaml {filename="params.yaml"}
header:
  sticky: true
  logo:
    image: "/images/logo.svg" # Logo path relative to static folder, leave empty to use site title first letter
    link: "/" # Click to home page
  # UI Components Control (header controls)
  showThemeSwitch: true # Set to false to hide theme style switcher (palette icon)
  showDarkModeSwitch: true # Set to false to hide dark mode switcher (sun/moon icon)
  showLanguageSwitch: true # Set to false to hide language switcher
  languageSwitchMode: "dropdown" # Language switch mode: "dropdown" (show panel) or "cycle" (direct cycle)
```
