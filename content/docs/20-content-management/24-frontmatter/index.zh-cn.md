---
title: 头信息
weight: 24
date: 2026-02-20
slug: frontmatter
categories: ["内容管理"]
tags: ["头信息"]
series: ["内容管理"]
series_order: 24
---

Frontmatter 是每个 Markdown 文件开头的 YAML 格式配置部分，使用两个 `---` 包裹内容（数据格式不同，包裹的符号不同，推荐使用 YAML），用于设置文章的元数据和特定功能，在每篇文章中通过更改 Frontmatter 参数，可以实现对 `hugo.yaml` 相关参数的覆盖，更灵活的修改站点。不同的内容模板支持的 frontmatter 参数不同。

如果你不清楚什么是内容模板，请访问：[内容模板](/docs/content-management/archetypes)。

## 默认内容模板

默认内容模板用于生成文章文件和未定义内容模板的其他内容。

### 基础配置

```yaml
---
# 必填项
title: "文章标题"
date: 2025-06-13
# 可选项
description: "文章描述"
draft: false
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2"]
slug: "custom-url"
cover: ""
---
```

如果你不在意 SEO，可以使用 `~/archetypes/default.md` 文件中的配置自动生成 slug，会生成随机的 7 位字符串。

```yaml
slug: { { substr .File.UniqueID 0 7 } }
```

> [!NOTE]
>
> 访问 [Hugo 文档](https://gohugo.io/configuration/front-matter/) 了解更多 frontmatter 参数。

### 其他配置

文章内容模板还支持其他配置，这些配置涉及到主题的一些功能，通常在 `hugo.yaml` 配置，但你也可以在头信息中修改覆盖。

```yaml
# 公式
katex:
  enabled: true
  delimiters:
    - left: $$
      right: $$
      display: true
    - left: $
      right: $
      display: false

# 图表
mermaid:
  enabled: true

# 相关文章
showRelated: true

# 文章版权信息
post:
  license:
    show: true
    author: "Hugo Narrow"
    name: "CC BY-NC-SA 4.0"
    description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Please attribute the source, use non-commercially, and maintain the same license."
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    displayName: "CC BY-NC-SA 4.0"
```

## 项目内容模板

项目内容模板用于生成项目文件，基础的参数设置和默认内容模板一致，同时还存在特有的配置参数，下面是项目内容模板特有的头信息参数：

```yaml
cover: ""
featured: false
url: "www.example.com"
status: "completed" # Options: completed, in_progress, planning
```
