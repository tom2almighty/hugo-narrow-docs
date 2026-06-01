---
title: 图库
---

Hugo Narrow 支持图片点击放大和 `justified` 布局、`Masonry` 布局和 `grid` 布局三种布局图库。使用原生 markdown 即可创建图库。

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
  columns: 4 # auto | number

# Lightbox
lightbox:
  enabled: true
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
