---
title: Dock
weight: 45
date: 2026-02-20
categories: ["Features"]
tags: ["dock"]
series: ["Features"]
series_order: 45
---

Hugo Narrow provide common function by dock, include back to top, back to previous page, jump to comments, search, table of contents.

Dock has three display modes:

- `scroll`： show on scroll up
- `always`： always visible
- `float`： show on floating

```yaml {filename="params.yaml"}
dock: "scroll" # scroll | always | float
```

## Table of Contents

> [!TIP]
> The parameters of table of contents could cover by posts frontmatter.

In the initial design, the table of contents was displayed in the middle of the page and controlled via the Dock, which aligns with the theme’s design philosophy and ensures consistent performance across different devices. However, multiple issues requesting a sidebar table of contents were submitted, so support for the sidebar table of contents and the parameter for configuring its position were added in version 1.2.

```yaml {filename="params.yaml"}
toc:
  enabled: true
  position: "center" # center | side
```
