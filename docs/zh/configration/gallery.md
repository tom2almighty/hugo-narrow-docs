# 图库配置

Hugo Narrow 支持图片点击放大功能，使用 [GLightbox](https://github.com/biati-digital/glightbox) 库创建灯箱，同时支持 justified 布局和 Masonry 布局。justified 布局使用 [lickr-justified-gallery](https://github.com/nk-o/flickr-justified-gallery) 库实现，使用原生 markdown 输入，Masonry 布局使用 [Macy.js](https://github.com/bigbite/macy.js) 库实现，使用 shortcode 输入。

> [!IMPORTANT]
> 灯箱和两种布局会引入额外的 CSS 和 JS 资源。
> 
> 你可以单独控制灯箱和布局的开关。

## 基础配置

在 `hugo.yaml` 中或 `frontmatter` 配置图库功能：

```yaml
params:
  # GLightbox 配置
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

  # Justified Gallery 配置 
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
```


## Justified 布局图库

直接使用 markdown 方式引入图像资源，一行一个资源链接，中间无空行的图像组视为同一个图库。
下面的示例为两个图库，第一个图库包含两个图像资源，第二个图库包含三个图像资源。

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```

## Masonry 布局图库

使用短代码实现，详情请参考 [短代码](../posts/shortcodes#masonry)。