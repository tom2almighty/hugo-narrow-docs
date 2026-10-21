---
title: 头信息
---

Frontmatter 是 Markdown 文件开头的 YAML 配置，用两个 `---` 包裹，用于设置文章元数据，并覆盖站点级参数。不同内容模板支持不同的字段。

## 默认内容模板

```yaml
---
title: "文章标题"
date: 2025-06-13
description: "文章描述"
draft: false
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2"]
slug: "custom-url"
cover: ""
---
```

如果不在意 SEO，可以使用 archetype 自动生成 7 位随机 slug。

### 页面级覆盖

```yaml
# 关闭公式
katex: false

# 关闭图表
mermaid: false

# 关闭相关文章
showRelated: false

# 关闭版权行
license: false

# 或覆盖名称和链接；提供 name 即启用
license:
  name: "CC BY-NC-SA 4.0"
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

## 项目内容模板

项目使用 `projects` section，特有字段：

```yaml
summary: "项目卡片上显示的一句话摘要"
featured: false
link: "https://example.com"
```

2.0 移除了 `status` 字段，项目卡片不再显示状态。
