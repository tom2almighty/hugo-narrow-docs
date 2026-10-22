---
title: 代码块
---

# 代码块

代码块支持一键复制、语言/文件名显示和折叠。

```yaml {filename="params.yaml"}
codeblock:
  collapse:
    enabled: true
    defaultState: expanded # expanded | collapsed
    maxLines: 30
    collapsedHeight: 120
```

超过 `maxLines` 的代码块默认折叠到 `collapsedHeight` 像素。单个代码块可以在 Markdown 属性里覆盖：

````markdown
```go {filename="main.go" collapsed=true}
package main
```
````

## 代码高亮

语法高亮由 Hugo 的 `css.ChromaStyles` 在构建时生成，不需要手动维护 Chroma 样式文件。主题只读取 Hugo 标准的 `markup.highlight.style`，并用同一 style 的 dark counterpart 生成暗色样式，因此站点只需要配置一个亮色 style。

```yaml {filename="hugo.yaml"}
markup:
  highlight:
    noClasses: false
    style: catppuccin-latte
```

Hugo 支持亮暗成对的 style，例如：

| 亮色 style | 暗色 counterpart |
| --- | --- |
| `catppuccin-latte` | `catppuccin-mocha` |
| `github` | `github-dark` |
| `monokailight` | `monokai` |
| `solarized-light` | `solarized-dark` |
| `tokyonight-day` | `tokyonight-night` |

完整列表见 [Hugo 语法高亮样式](https://gohugo.io/quick-reference/syntax-highlighting-styles/)。`css.ChromaStyles` 的用法见 [Hugo 文档](https://gohugo.io/functions/css/chromastyles/)，`markup.highlight` 的配置项见 [Hugo 文档](https://gohugo.io/configuration/markup/#highlight)。

如果选择的 style 没有 dark counterpart，`mode: dark` 会在构建阶段报错。请使用上表中的成对 style，或在自定义 CSS 中覆盖颜色。

> [!NOTE]
> 2.0 移除了 `params.codeblock.style` 和 `params.codeblock.darkStyle`。旧的 `autoCollapseLines` 改为 `maxLines`，`autoCollapseHeight` 已移除。
