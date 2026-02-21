---
title: Hugo Mod
date: 2026-02-20
weight: 11
categories: ["Quickstart"]
tags: ["Hugo", "module"]
series: ["Quickstart"]
series_order: 11
slug: hugo-mod
---

## Prerequisites

You should install the following softwares before start:

- [Hugo Extended](https://gohugo.io/installation/), Version 0.146 or later
- [Git](https://git-scm.com/)
- [Go](https://go.dev/)

## Steps

### Init a new site

```bash
hugo new site my-site --format=yaml
```

### Import theme with hugo mod

```bash
# Init hugo mod
cd my-site
hugo mod init github.com/username/my-site

# add Hugo Narrow
hugo mod get github.com/tom2almighty/hugo-narrow
```

### Copy exampleSite files

Copy the full files of `hugo-narrow/exampleSite/` to the root folder. This method will **NOT** Create any files at `~/themes/`, visit [theme repository](https://github.com/tom2almighty/hugo-narrow/tree/main/exampleSite) see the files.

Modify `hugo-narrow/config/_default/hugo.yaml`, import theme according to hugo mod：

```bash
module:
  hugoVersion:
    extended: true
    min: 0.146.0
  imports:
    - path: github.com/tom2almighty/hugo-narrow
```

### Localhost preview

```bash
hugo server --buildDrafts --disableFastRender
```

Visit `http://localhost:1313` see your new site.

## Update theme

To update **ALL** mods use the command：

```bash
hugo mod get -u
```

To update the theme mod use the command:

```bash
hugo mod get -u github.com/tom2almighty/hugo-narrow
```

> [!NOTE]
>
> Click [Hugo Mod](https://gohugo.io/hugo-modules/use-modules/#update-all-modules) to visit hugo mod update documentation.
