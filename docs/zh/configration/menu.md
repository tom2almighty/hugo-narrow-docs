# 菜单配置

## 菜单类型

Hugo Narrow 支持以下几种菜单：

1. 主导航菜单 (`main`)
2. 页脚菜单 (`footer`)
3. 社交链接菜单 (`social`)

## 主导航菜单配置

```yaml
menus:
  main:
    - name: nav.posts      # 显示名称
      pageRef: /posts      # 页面引用
      weight: 20          # 排序权重
      params:
        icon: posts       # 图标名称

    - name: nav.categories
      pageRef: /categories
      weight: 30
      params:
        icon: categories

    - name: nav.tags
      pageRef: /tags
      weight: 40
      params:
        icon: tags

    - name: nav.archives
      pageRef: /archives
      weight: 50
      params:
        icon: archive
```

## 页脚菜单配置

```yaml
menus:
  footer:
    - name: About
      pageRef: /about
      weight: 10
      params:
        icon: about

    - name: Contact
      url: https://example.com/contact  # 使用外部链接
      weight: 20
      params:
        icon: contact

    - name: RSS Feed
      url: /index.xml
      weight: 30
      params:
        icon: rss
```

## 社交链接菜单配置

```yaml
menus:
  social:
    - name: GitHub
      url: https://github.com/username
      weight: 10
      params:
        icon: github

    - name: Twitter
      url: https://twitter.com/username
      weight: 20
      params:
        icon: twitter

    - name: LinkedIn
      url: https://linkedin.com/in/username
      weight: 30
      params:
        icon: linkedin

    - name: Email
      url: mailto:your.email@example.com
      weight: 40
      params:
        icon: email
```

## 菜单项参数说明

每个菜单项支持以下参数：

```yaml
- name: "显示名称"          # 必填，菜单项显示的文本
  pageRef: "/path"        # 内部页面引用（与 url 二选一）
  url: "https://..."      # 外部链接（与 pageRef 二选一）
  weight: 10              # 排序权重，数字越小越靠前
  params:                 # 额外参数
    icon: "icon-name"     # 图标名称
```

## 图标使用说明

1. **内置图标**
主题在 `assets/icons/` 目录下提供了常用图标：

- posts
- categories
- tags
- archive
- about
- rss
- github
- twitter
- linkedin
- email
等

2. **自定义图标**

下载你的 SVG 图标到 `assets/icons/`目录。

你可以在 [Iconify Design](https://icon-sets.iconify.design/) 找到许多优秀的图标。

使用：`icon: SVG 文件名`

```
assets/
└── icons/
    ├── custom-icon.svg
    └── another-icon.svg
```

## 国际化菜单

使用 i18n 键值作为菜单名称：

```yaml
menus:
  main:
    - name: nav.posts      # 使用 i18n 键值
      pageRef: /posts
      weight: 20
```

对应的 i18n 文件（例如 `i18n/zh-cn.yaml`）：

```yaml
nav:
  posts: "文章"
  categories: "分类"
  tags: "标签"
  archives: "归档"
```

name 值可以为任意字符串：`name: 任意字符串`。
