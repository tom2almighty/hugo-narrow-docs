---
title: Gallery
weight: 52
date: 2026-02-20
categories: ["Features"]
tags: ["gallery"]
series: ["Features"]
series_order: 52
---

Hugo Narrow supports lightbox, use [PhotoSwipe](https://www.photoswipe.com/).The gallery supports three layouts: justified, masonry, and grid, type in markdown.

> [!TIP]
> The parameters of gallery can be coverd by posts frontmatter.

## Gallery Parameters

```yaml {filename="params.yaml"}
gallery:
  enabled: true
  defaultLayout: justified # justified, masonry, grid
  gap: 10
  targetRowHeight: 200
  lastRowBehavior: center # left, center, right, fill, hide
  columnWidth: 200
  columns: 4 # auto or number

# PhotoSwipe
lightbox:
  enabled: true
  bgOpacity: 0.8
  showHideAnimationType: zoom
  showAnimationDuration: 333
  hideAnimationDuration: 333
```

## Gallery Usage

Directly import image resources using markdown syntax, with one resource link per line. Image groups without empty lines between them are considered as one gallery.
The example below shows two galleries, the first containing two image resources, and the second containing three image resources.

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```
