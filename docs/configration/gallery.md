# Gallery Configuration

Hugo Narrow supports lightbox, use [GLightbox](https://github.com/biati-digital/glightbox) library. Also justified layout, use [lickr-justified-gallery](https://github.com/nk-o/flickr-justified-gallery) library, writing by markdown.
Masonry layout use [Macy.js](https://github.com/bigbite/macy.js) library, writting by shortcode.

> [!IMPORTANT]
> The lightbox and justified/masonry layout will introduce additional CSS and JS resources.
> 
> You can control the lightbox and Justified Gallery switches separately.

## Basic Configuration

Configure gallery functionality in `hugo.yaml` or `frontmatter`:

```yaml
params:
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

  # Justified Gallery
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


## Justified Gallery

Directly import image resources using markdown syntax, with one resource link per line. Image groups without empty lines between them are considered as one gallery.
The example below shows two galleries, the first containing two image resources, and the second containing three image resources.

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```

## Masonry Gallery

Masonry gallery use shortcode, visit [Shortcodes](../posts/shortcodes#masonry).
