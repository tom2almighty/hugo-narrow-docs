---
title: Menus
---

# Menus

Version 2.0 maintains a single `main` menu, shown in a popover from the dock's menu button. The top navbar, footer menu, and social menu are gone; social links live in `params.author.social`.

`icon` is the icon shown before the title. It uses SVG files from `hugo-narrow/assets/icons/`; pass the filename without `.svg`.

> [!TIP]
> You can find more icons at [Iconify Design](https://iconify.design/).

Create language-specific menus with a language suffix: `menus.zh-hans.yaml`.

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

  # Group: children render in one section of the popover
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
