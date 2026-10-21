---
title: 导航菜单
---

2.0 只维护一份 `main` 菜单，由 Dock 的菜单按钮以弹出面板展示。顶部导航栏、页脚菜单和社交菜单都已移除；社交链接放在 `params.author.social`。

`icon` 是标题前的图标，使用 `SVG`，放置在 `hugo-narrow/assets/icons/`，参数值就是文件名（不带 `.svg`）。

> [!TIP]
> 可以在 [Iconify Design](https://iconify.design/) 找到更多图标。

支持通过语言后缀文件为不同语言创建菜单：`menus.zh-hans.yaml`。

```yaml {filename="exampleSite/config/_default/menus.yaml"}
main:
  - name: Posts
    pageRef: /posts
    weight: 10
    params:
      icon: posts

  - name: Archives
    pageRef: /archives
    weight: 20
    params:
      icon: archive

  # 分组：子项会显示在弹出面板的同一个分区里
  - name: More
    weight: 30
    params:
      icon: layers

  - name: Categories
    weight: 1
    pageRef: /categories
    parent: More
    params:
      icon: categories

  - name: Tags
    weight: 2
    pageRef: /tags
    parent: More
    params:
      icon: tags

  - name: Series
    weight: 3
    pageRef: /series
    parent: More
    params:
      icon: bookmark

  - name: Projects
    weight: 4
    pageRef: /projects
    parent: More
    params:
      icon: projects

  - name: Timeline
    weight: 5
    pageRef: /timeline
    parent: More
    params:
      icon: chart

  - name: About
    weight: 6
    pageRef: /about
    parent: More
    params:
      icon: about

  - name: Resume
    weight: 7
    pageRef: /resume
    parent: More
    params:
      icon: file-text

  - name: RSS Feed
    url: /index.xml
    weight: 8
    parent: More
    params:
      icon: rss
```
