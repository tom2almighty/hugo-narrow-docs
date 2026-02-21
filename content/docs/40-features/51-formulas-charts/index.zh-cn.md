---
title: 公式和图表
weight: 51
date: 2026-02-20
categories: ["特色配置"]
tags: ["公式", "图表"]
series: ["特色配置"]
series_order: 51
---

## 公式

Hugo Narrow 通过 [Katex](https://katex.org/) 支持公式。

> [!TIP]
> Katex 参数设置可以通过文章 frontmatter 覆盖。

```yaml{filename="params.yaml"}
katex:
  enabled: true
  delimiters:
    - left: "$$"
      right: "$$"
      display: true
    - left: "$"
      right: "$"
      display: false
    - left: "\\("
      right: "\\)"
      display: false
    - left: "\\["
      right: "\\]"
      display: true
```

## 图表

Hugo Narrow 通过 [Mermaid](https://mermaid.js.org/) 支持图表。

> [!TIP]
> 图表参数可以在文章 frontmatter 覆盖。
>
> ```yaml
> mermaid: 
>   enabled: true
> ```

```yaml{filename="params.yaml"}
mermaid:
  enabled: true
```

`mermaid: true` 形式也支持。
