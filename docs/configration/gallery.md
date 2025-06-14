# Gallery Configuration

Hugo Narrow supports Justified layout gallery, using [Lightgallery](https://www.lightgalleryjs.com/) and [Justified Gallery](https://miromannino.github.io/Justified-Gallery/). You can create galleries using native markdown syntax without shortcodes.

> [!IMPORTANT]
> The gallery system and justified layout will introduce additional CSS and JS resources, and Justified Gallery depends on jQuery.
> 
> You can control the gallery system and Justified Gallery switches separately.

## Basic Configuration

Configure gallery functionality in `hugo.yaml` or `frontmatter`:

```yaml
params:
  gallery:
    justified_gallery: true    # Enable justified layout
    modal: true               # Enable gallery effects
    responsive:
      rowHeight: 180         # Row height
      margins: 5             # Image spacing
```


## Usage

Directly import image resources using markdown syntax, with one resource link per line. Image groups without empty lines between them are considered as one gallery.
The example below shows two galleries, the first containing two image resources, and the second containing three image resources.

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```

