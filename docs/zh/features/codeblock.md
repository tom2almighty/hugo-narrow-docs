---
title: 代码块
---

代码块支持一键复制、语言/文件名显示和折叠。

```yaml {filename="params.yaml"}
codeblock:
  style: catppuccin-latte # Chroma 亮色样式
  darkStyle: catppuccin-mocha # Chroma 暗色样式
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

语法高亮由 Hugo 的 `css.ChromaStyles` 在构建时生成，不需要手动维护 Chroma 样式文件。切换配色只需要改 `style` 和 `darkStyle`：

```yaml {filename="params.yaml"}
codeblock:
  style: github
  darkStyle: github-dark
```

可用的样式名与 `chroma` 一致，例如 `catppuccin-latte`、`catppuccin-mocha`、`github`、`github-dark`、`nord`、`dracula`。样式名无效时 Hugo 会在构建阶段直接报错。
