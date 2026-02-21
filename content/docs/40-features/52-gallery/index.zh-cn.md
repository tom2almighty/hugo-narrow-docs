---
title: 图库
weight: 52
date: 2026-02-20
categories: ["特色配置"]
tags: ["图库"]
series: ["特色配置"]
series_order: 52
---

Hugo Narrow 支持图片点击放大功能，使用 [PhotoSwipe](https://photoswipe.com/) 库创建灯箱，同时支持 `justified` 布局、`Masonry` 布局和 `grid` 布局。使用原生 markdown 输入即可创建图库。

> [!TIP]
> 图库相关参数可以在文章 frontmatter 覆盖设置。

## 图库参数

```yaml {filename="params.yaml"}
gallery:
  enabled: true
  defaultLayout: justified # justified, masonry, grid
  gap: 10
  targetRowHeight: 200
  lastRowBehavior: center # left, center, right, fill, hide
  columnWidth: 200
  columns: 4 # auto 或具体数字

# PhotoSwipe 灯箱
lightbox:
  enabled: true
  bgOpacity: 0.8
  showHideAnimationType: zoom
  showAnimationDuration: 333
  hideAnimationDuration: 333
```

## 图库使用

直接使用 markdown 方式引入图像资源，每行一个资源链接，中间无空行的图像组视为同一个图库。 下面的示例为两个图库，第一个图库包含两个图像资源，第二个图库包含三个图像资源。

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```
