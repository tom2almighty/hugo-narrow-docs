# Front Matter 配置指南

Front Matter 是每个 Markdown 文件开头的 YAML 格式配置部分，用于设置文章的元数据和特定功能。Hugo Narrow 主题支持常用 Front Matter 配置。

## 基础配置项

```yaml
---
# 必填项
title: "文章标题"
date: 2025-06-13
# 可选项
description: "文章描述"
draft: false  # 是否为草稿
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2"]
slug: "custom-url"  # 自定义 URL
---
```

> [!NOTE] 
> 如果你不在意 SEO，你可以在 ~/archetypes/default.md` 文件中使用如下配置自动生成 slug
> ```yaml
> slug: {{ substr .File.UniqueID 0 7 }}
> ```

## 文章封面

```yaml
---
cover: ''
---
```

文章封面存在回退机制：

- 优先使用 `cover` 参数指定的值
- 未设置 cover 时
  - 如果在 `~/data/placeholder_images.yaml` 中设置 `enabled: true`，则使用随机封面列表
  - 如果在 `~/data/placeholder_images.yaml` 中设置 `enabled: false`，则主体自动生成随机占位图。

### 指定链接

`cover` 值支持外部 URL 和本地资源，优先使用页面资源，其次是全局资源，最后支持静态目录资源。

本地资源引用见 [图像资源](/zh/posts/image)


### 指定列表

可在 `~/data/placeholder_images.yaml` 中设置随机封面列表，配置如下：

```yaml
# 功能启用开关
enabled: false

# 图片URL列表（支持外部URL和本地路径）
images:
  # Picsum Photos
  #- "https://picsum.photos/800/600?random=1"
  #- "https://picsum.photos/800/600?random=2"
  #- "https://picsum.photos/800/600?random=3"
  #- "https://picsum.photos/800/600?random=4"
  #- "https://picsum.photos/800/600?random=5"
  #- "https://picsum.photos/800/600?random=6&blur=1"
  #- "https://picsum.photos/800/600?random=7&grayscale"
  # local images
  - "/images/placeholder/1.jpg"
  - "/images/placeholder/2.jpg"
  - "/images/placeholder/3.jpg"  
  - "/images/placeholder/4.jpg"
  - "/images/placeholder/5.jpg"
  - "/images/placeholder/6.jpg"
  - "/images/placeholder/7.jpg"
  - "/images/placeholder/8.jpg"
```

### 自动生成

未设置 `cover` 值且 `~/data/placeholder_images.yaml` 文件 enabled 字段值为 `false` 时，主题会自动生成几种颜色的占位图，且适配不同主题配色。


## 数学公式支持

```yaml
---
katex:
  enable: true
  delimiters:
    - left: $$
      right: $$
      display: true
    - left: $
      right: $
      display: false
---
```

## 图表支持

```yaml
---
mermaid: true
---
```

## 评论设置

```yaml
---
comments: true
---
```

## 版权信息

```yaml
---
# 版权信息显示
showLicense: true
# 自定义版权信息（可选）
license:
  name: "CC BY-NC-SA 4.0"
  link: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
---
```

## 相关文章

```yaml
---
# 相关文章显示
showRelated: true
relatedPostsCount: 3
---
```

## 灯箱

```yaml
---
# GLightbox
lightbox:
  enabled: true
  loop: true
  width: 80vw
  height: 80vh
  touchNavigation: true
  draggable: true
  zoomable: true
  preload: true
  descPosition: bottom
---
```

## Justified 布局图库

```yaml
---
justified_gallery:
  enabled: true
  rowHeight: 300
  gutter: 30
  lastRow: center
  transitionDuration: 0.3s
  resizeDebounce: 100
  rowHeightTolerance: 0.25
  maxRowsCount: 999999
  calculateItemsHeight: false
---
```

访问 [图库功能](../configration/gallery)


## 完整的 Front Matter

```yaml
---
# 基础信息
title: "完整的 Front Matter 示例"
date: 2025-06-13T10:00:00+08:00
description: "这是一篇展示所有 Front Matter 配置的示例文章"
draft: false

# 分类和标签
categories: ["教程"]
tags: ["Hugo", "Front Matter", "配置"]

# 封面设置
cover: "cover.jpg"

# 功能开关
katex:
  enable: true
  delimiters:
    - left: $$
      right: $$
      display: true
    - left: $
      right: $
      display: false
mermaid: true
comments: true
showLicense: true
showRelated: true

# 灯箱
lightbox:
  enabled: true
  loop: true
  width: 80vw
  height: 80vh
  touchNavigation: true
  draggable: true
  zoomable: true
  preload: true
  descPosition: bottom

# Justified 布局图库
justified_gallery:
  enabled: true
  rowHeight: 300
  gutter: 30
  lastRow: center
  transitionDuration: 0.3s
  resizeDebounce: 100
  rowHeightTolerance: 0.25
  maxRowsCount: 999999
  calculateItemsHeight: false
---
```

