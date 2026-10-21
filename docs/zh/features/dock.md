---
title: Dock
---

Dock 是主题唯一的页面功能入口，包含首页、菜单、搜索、目录、评论（启用时）、外观和返回顶部。

展示规则固定，没有模式参数：

- 视口宽度 `>= 75rem` 且横屏时，Dock 显示为右侧竖排胶囊。向下滚动会自动收起，只保留菜单按钮；向上滚动、鼠标移入或键盘聚焦时重新展开。
- 其他情况（窄屏、竖屏、折叠屏纵向布局）显示为底部横排胶囊，常驻。
- 返回顶部按钮在滚动超过 80% 视口后出现。
- 评论启用时，Dock 会多一个跳转到评论区的按钮。

```yaml {filename="params.yaml"}
comments:
  enabled: true
  system: "giscus"
```

## 目录

目录由 Dock 的目录按钮打开，只有一个面板形态：宽屏靠右显示，窄屏以底部面板显示。文章 frontmatter 可以单独关闭。

```yaml {filename="params.yaml"}
toc:
  enabled: true
```

```yaml {filename="first-post.md"}
toc: false
```

超宽屏（`>= 105rem` 且横屏）会显示 pin 按钮，可以把目录固定在右侧。pin 状态保存在浏览器本地，不需要站点参数。
