# 图像资源使用指南

Hugo Narrow 主题支持多种图像资源引用方式，本问将详细介绍如何在你的内容中使用图像资源。

## 图像资源来源

Hugo 支持以下几种图像资源来源：

1. 页面资源（Page Resources）
2. 全局资源（Global Resources）
3. 静态文件夹（Static Folder）
4. 外部 URL（External URLs）

## 页面资源（推荐）

### 基本用法

页面资源是指与 Markdown 文件位于同一目录下的资源文件。这是最推荐的图像资源管理方式。

```
content/
└── posts/
    └── my-post/
        ├── index.md
        ├── featured.jpg
        └── gallery/
            ├── image1.jpg
            └── image2.jpg
```

在 Markdown 中引用：

```markdown
![图像资源描述](featured.jpg)
![图像资源描述](gallery/image1.jpg)
```



### Page Bundle 结构建议

```
content/
└── posts/
    └── my-post/
        ├── index.md          # 文章内容
        ├── featured.jpg      # 文章封面
        ├── images/           # 文章图像资源
        │   ├── diagram.png
        │   └── screenshot.jpg
        └── gallery/          # 图库图像资源
            ├── image1.jpg
            └── image2.jpg
```

## 全局资源

### 在 assets 目录中使用

```
assets/
└── images/
    ├── hero.jpg
    └── background.png
```

在 Markdown 中引用：

```markdown
![](images/hero.jpg)
![](images/background.png)
```





## 静态文件

### 基本用法

静态文件存放在 `static` 目录下：

```
static/
└── images/
    ├── logo.png
    └── icons/
        └── github.svg
```

在 Markdown 中引用：

```markdown
![Logo](/images/logo.png)
![GitHub Icon](/images/icons/github.svg)
```

## 外部 URL

```markdown
![External Image](https://example.com/image.jpg)
```


