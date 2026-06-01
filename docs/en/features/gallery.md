---
title: Gallery
---

Hugo Narrow supports lightbox and three layouts gallery: justified, masonry, and grid, type in markdown.

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
  columns: 4 # auto | number

# Lightbox
lightbox:
  enabled: true
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
