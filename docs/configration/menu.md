# Menu Configuration

## Menu Types

Hugo Narrow supports the following types of menus:

1. Main Menu (`main`)
2. Footer Menu (`footer`)
3. Social Links Menu (`social`)

## Main Menu

```yaml
menus:
  main:
    - name: nav.posts      # Display name
      pageRef: /posts      # Page reference
      weight: 20          # Sort weight
      params:
        icon: posts       # Icon name

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

## Footer Menu

```yaml
menus:
  footer:
    - name: About
      pageRef: /about
      weight: 10
      params:
        icon: about

    - name: Contact
      url: https://example.com/contact  # Using external link
      weight: 20
      params:
        icon: contact

    - name: RSS Feed
      url: /index.xml
      weight: 30
      params:
        icon: rss
```

## Social Links Menu

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

## Menu Item Parameters

Each menu item supports the following parameters:

```yaml
- name: "display name"    # required
  pageRef: "/path"        # pageref (alternative with url)
  url: "https://..."      # url (alternative with pageref)
  weight: 10              # weight
  params:
    icon: "icon-name"     # icon filename
```

## Icons

1. **Build-in Icons**
Hugo Narrow support common icons at `assets/icons/`:

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
- etc.

2. **Custom Icons**


Download you icons with SVG format at `assets/icons/`, You can find a lot awesome icon at [Iconify Design](https://icon-sets.iconify.design/).

Use: `icon: SVG filename`

```
assets/
└── icons/
    ├── custom-icon.svg
    └── another-icon.svg
```

## i18n

use i18n value as menu name:

```yaml
menus:
  main:
    - name: nav.posts
      pageRef: /posts
      weight: 20
```

i18n file(eg: `i18n/zh-cn.yaml`)

```yaml
nav:
  posts: "文章"
  categories: "分类"
  tags: "标签"
  archives: "归档"
```

You can set the name value as any string: `name: String`.
