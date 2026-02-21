---
title: Local Resources
weight: 22
date: 2026-02-20
categories: ["Content Management"]
tags: ["resources"]
series: ["Content Management"]
series_order: 22
slug: local-resources
---

Hugo Narrow support import local resources such as images with three methods:

- Page Bundles (markdown folder)
- Global Resources (assets folder)
- Static Resources (static folder)

> [!TIP]
>
> Hugo Narrow follow the order to index the local resources：Page Bundles > Global Resources > Static Resources

## Page Bundles

Page Bundles refer to resource files located in the same directory as the Markdown file. This is the most recommended method for managing image resources.

```bash
content/
└── posts/
    ├── post-1.md
    ├── post-1.zh-cn.md
    └── post-2/
        ├── index.md
        ├── index.zh-cn.md
        ├── featured.jpg
        └── gallery/
            ├── image-1.jpg
            └── image-2.jpg
```

Use in Markdown:

```markdown
![](featured.jpg)
![](gallery/image-1.jpg)
![](gallery/image-2.jpg)
```

> [!NOTE]
>
> See [Hugo documentation](https://gohugo.io/content-management/page-bundles/) for more details.

## Global Resources

Global resources are placed in the assets folder at the root directory of the site: `~/assets/`. Resources placed in this folder will be **processed** by Hugo during the build.

```bash
my-site/
├── assets/
│   └── images/
│       └── hero.jpg
├── content/
└── themes/
    └── hugo-narrow/
```

Use in Markdown:

```markdown
![](images/hero.jpg)
```

> [!NOTE]
>
> See [Hugo documentation](https://gohugo.io/quick-reference/glossary/#global-resource) for more details.

## Static Resources

Static resources are placed in the assets folder at the root directory of the site: `~/static/`. Resources placed in this folder will **NOT** be processed by Hugo during the build.

```bash
my-site/
├── static/
│   └── images/
│       └── hero.jpg
├── content/
└── themes/
    └── hugo-narrow/
```

Use in Markdown:

```markdown
![](/images/hero.jpg)
```

> [!NOTE]
>
> See [Hugo documentation](https://gohugo.io/getting-started/directory-structure/#static) for more details.

## Different

|                  | Location                              | Use                    |
| ---------------- | :------------------------------------ | ---------------------- |
| Page Bundles     | `~/content/posts/post-1/featured.jpg` | `featured.jpg`         |
| Global Resources | `~/assets/images/featured.jpg`        | `images/featured.jpg`  |
| Static Resources | `~/static/images/featured.jpg`        | `/images/featured.jpg` |

> [!NOTE]
>
> `images` is not necessary, you can change it.
