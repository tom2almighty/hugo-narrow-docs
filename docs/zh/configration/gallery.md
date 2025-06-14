# 图库配置

Hugo Narrow 支持图库和 Justified 布局图库，使用 [Lightgallery](https://www.lightgalleryjs.com/) 和 [Justified Gallery](https://miromannino.github.io/Justified-Gallery/)，你可以使用原生的 markdown 语法创建图库，无需短代码。

> [!IMPORTANT]
> 图库系统和 justified 布局会引入额外的 CSS 和 JS 资源，Justified Gallery 还依赖 jQuery。
> 
> 你可以单独控制图库系统和 Justified Gallery 的开关。

## 基础配置

在 `hugo.yaml` 中或 `frontmatter` 配置图库功能：

```yaml
params:
  gallery:
    justified_gallery: true    # 启用对齐布局
    modal: true                # 启用图库效果
    responsive:
      rowHeight: 180          # 行高
      margins: 5              # 图片间距
```


## 使用

直接使用 markdown 方式引入图像资源，一行一个资源链接，中间无空行的图像组视为同一个图库。
下面的示例为两个图库，第一个图库包含两个图像资源，第二个图库包含三个图像资源。

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```

