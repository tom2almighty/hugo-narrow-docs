---
title: v1 配置（旧版）
---

# v1 配置（旧版）

本页是 Hugo Narrow 1.x 的配置参考，适用于 `v1` 分支上的 v1.4.1 及更早版本。2.0 的配置请以本站其他页面为准。

> [!NOTE]
> v1.4.1 是 v1 的最终版本。v1 保留在 `v1` 分支，不再接收功能更新。

## v1 与 v2 的对应关系

| v1 配置 | v2 状态 |
| --- | --- |
| `header.sticky`、`header.logo` | 已移除，导航由 Dock 和上下文栏承担 |
| `header.showThemeSwitch`、`showDarkModeSwitch`、`showContentWidthSwitch` | 已移除，外观面板始终显示全部区块 |
| `header.showLanguageSwitch`、`languageSwitchMode` | 已移除，语言切换固定为外观面板内的二级弹层 |
| `dock` | 已移除，Dock 根据视口自动选择位置 |
| `toc.position`、`toc.pinned` | 已移除，目录为单一面板；pin 状态保存在浏览器 |
| `params.themes` | 移到 `data/themes.yaml` |
| `post.license` 对象 | 改为单个字符串 |
| `gallery.gap`、`targetRowHeight`、`lastRowBehavior`、`columnWidth`、`columns` | 移到页面 front matter |
| `codeblock.style`、`darkStyle` | 改为 `markup.highlight.style` |
| `codeblock.collapse.autoCollapseLines` | 改名为 `maxLines` |
| `codeblock.collapse.autoCollapseHeight` | 已移除 |
| `dateFormat.full`、`medium`、`timeFormat` | 已移除；保留 `long`、`short`、`month` |
| 项目 `status` front matter | 已移除 |

## v1 参数示例

```yaml {filename="params.yaml"}
description: "..."
keywords: ["Hugo", "Blog"]
defaultAuthor: "Hugo Narrow"
language: "en"
shortName: "Hugo Narrow"
images:
  - "/images/og-default.avif"

favicon:
  svg: "/favicon.svg"

author:
  name: "Hugo Narrow"
  title: "..."
  description: "..."
  avatar: "/images/avatar.svg"
  social:
    - name: "GitHub"
      url: "https://github.com/username"
      icon: "github"

header:
  sticky: true
  logo:
    image: "/images/logo.svg"
    link: "/"
  showThemeSwitch: true
  showDarkModeSwitch: true
  showContentWidthSwitch: true
  showLanguageSwitch: true
  languageSwitchMode: "dropdown" # dropdown | cycle

dock: "scroll" # scroll | always | float

contentWidth: "56rem"

toc:
  enabled: true
  position: "side" # center | side
  pinned: false

colorScheme: "default"
themes: {} # 配色注册表，v2 移至 data/themes.yaml

home:
  recentPostsCount: 5
  contentOrder:
    - author-section
    - page-content
    - recent-posts
    - featured-projects.html

post:
  showRelated: true
  relatedPostsCount: 3
  license:
    show: true
    author: "Hugo Narrow"
    name: "CC BY-NC-SA 4.0"
    description: "..."
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    displayName: "CC BY-NC-SA 4.0"

gallery:
  enabled: true
  defaultLayout: justified
  gap: 10
  targetRowHeight: 200
  lastRowBehavior: center
  columnWidth: 200
  columns: 4

lightbox:
  enabled: true

codeblock:
  style: catppuccin-latte
  darkStyle: catppuccin-mocha
  collapse:
    enabled: true
    defaultState: expanded
    autoCollapseLines: 30
    autoCollapseHeight: 400
    collapsedHeight: 120

dateFormat:
  full: ":date_full"
  long: ":date_long"
  medium: ":date_medium"
  short: ":date_short"

timeFormat:
  full: ":time_full"
  long: ":time_long"
  medium: ":time_medium"
  short: ":time_short"
```

## v1 特有说明

- `header` 控制顶部导航栏和外观面板的分区开关。
- `dock` 支持 `scroll`、`always`、`float` 三种模式。
- `toc.position` 可选 `center` 或 `side`；`toc.pinned` 控制侧边目录是否默认固定。
- `themes` 必须和 `params.yaml` 一起维护，新增配色需要在这里注册。
- `post.license` 是对象，会渲染独立版权区块。
- `gallery` 的布局细节可以直接写在站点参数里。
- `codeblock.style` / `darkStyle` 分别指定亮色和暗色 Chroma style。
- `dateFormat` 支持 `full`、`long`、`medium`、`short` 四个日期变体；`timeFormat` 提供对应的时间变体。

## 迁移到 v2

迁移时至少需要：

1. 删除 `header.*`、`dock`、`toc.position`、`toc.pinned`、`timeFormat`。
2. 把 `themes` 内容移到 `data/themes.yaml`。
3. 把 `post.license` 改为字符串。
4. 把 `gallery` 的布局细节移到页面 front matter。
5. 用 `markup.highlight.style` 替代 `codeblock.style` / `darkStyle`，并把 `autoCollapseLines` 改为 `maxLines`。
6. 删除 `dateFormat.full`、`medium`，只保留 `long`、`short`、`month`。

完整的破坏性变更见 [2.0.0 Release Notes](https://github.com/tom2almighty/hugo-narrow/releases/tag/v2.0.0)。
