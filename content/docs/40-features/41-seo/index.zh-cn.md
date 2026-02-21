---
title: SEO
weight: 41
date: 2026-02-20
categories: ["特色配置"]
tags: ["SEO"]
series: ["特色配置"]
series_order: 41
---

SEO 配置用于搜索引擎优化，站点 `favicon` 使用 `SVG` 格式。

```yaml {filename="params.yaml"}
# Basic site info with SEO
description: "A modern, clean, and minimal Hugo theme built with Tailwind CSS 4.0. Support custom themes, dark mode, and responsive design."
keywords: ["Hugo", "Blog", "Theme", "Technology", "Programming"]
defaultAuthor: "Hugo Narrow"
language: "en-US"
shortName: "Hugo Narrow"  # PWA
images:
  - "/images/og-default.avif"

# Favicon
favicon:
  svg: "/favicon.svg"  # SVG format favicon (recommended)
```
