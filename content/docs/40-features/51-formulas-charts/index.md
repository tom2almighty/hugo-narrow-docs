---
title: Formulas and Charts
weight: 51
date: 2026-02-20
categories: ["Features"]
tags: ["formulas", "charts"]
series: ["Features"]
series_order: 51
---

## Formulas

Hugo Narrwo supports formulas by [Katex](https://katex.org/).

> [!TIP]
> The parameters of Katex can be covered by the frontmatter of posts.

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

## Charts

Hugo Narrwo supports charts by [Mermaid](https://mermaid.js.org/).

> [!TIP]
> The parameter of mermaid can be covered by frontmatter of posts.
>
> ```yaml
> mermaid:
>   enabled: true
> ```

```yaml{filename="params.yaml"}
mermaid:
  enabled: true
```

`mermaid: true` is also supported.
