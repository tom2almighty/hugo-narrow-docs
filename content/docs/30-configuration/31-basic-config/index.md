---
title: Basic Site Configuration
weight: 31
date: 2026-02-20
categories: ["Configuration"]
tags: ["Site Configuration"]
series: ["Configuration"]
series_order: 31
slug: basic-config
---

Hugo supports `hugo.toml`、`hugo.yaml`、`hugo.json` format and follow the order, supporting split configuration file by envirament, root configuration key, and language.

> [!NOTE]
> See [Hugo Documentation](https://gohugo.io/configuration/introduction/#configuration-directory) for more details.

Hugo Narrow uses split configuration with `YAML`.

```bash
exampleSite/
├── config/
│   └── _default/
│       ├── hugo.yaml
│       ├── languages.yaml
│       ├── menus.yaml
│       └── params.yaml
└── content/
```

The site configuration is not much different from that of a regular Hugo site; the special part is:

1. `permalinks.projects` sets the permalinks for projects.
2. `outputFormats.WebAppManifest` automatically generates the `WebAppManifest` configuration for the theme.
3. `highlight.lineNumbersInTable` needs to be set to `false`.
4. `highlight.style` setting does not take effect. To change the Hugo Narrow codeblock style, you need to modify the CSS files.
5. The minimum required version of Hugo is 0.146.

```yaml
baseURL: https://hugo-narrow.vercel.app/
languageCode: en-US
defaultContentLanguage: en
defaultContentLanguageInSubdir: false
title: Hugo Narrow
theme: "hugo-narrow"

hasCJKLanguage: true
enableEmoji: true

permalinks:
  posts: /posts/:slug/
  projects: /projects/:slug/
  pages: /:slug/

pagination:
  pagerSize: 6
  path: "page"

taxonomies:
  category: categories
  tag: tags
  series: series

markup:
  tableOfContents:
    startLevel: 2
    endLevel: 4
    ordered: false
  goldmark:
    renderer:
      unsafe: true
    extensions:
      extras:
        delete:
          enable: true
        insert:
          enable: true
        mark:
          enable: true
        subscript:
          enable: false
        superscript:
          enable: false
      strikethrough: false
  highlight:
    codeFences: true
    guessSyntax: false
    lineNos: false
    lineNumbersInTable: false # Set to false
    noClasses: false
    style: github # No need to change
    tabWidth: 2

outputs:
  home: ["HTML", "RSS", "JSON", "WebAppManifest"]

# Custom output
outputFormats:
  WebAppManifest:
    mediaType: "application/manifest+json"
    baseName: "site"
    isPlainText: true

module:
  hugoVersion:
    extended: true
    min: 0.146.0
```

## 主要 Sections

Hugo Narrow could configure the main sections, which are used for global search.

```yaml {filename="config/_default/hugo.yaml"}
mainSections: ["posts", "projects", "pages"]
```

The recent posts of home page will use the first section.
