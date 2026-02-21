---
title: Frontmatter
weight: 24
date: 2026-02-20
slug: frontmatter
categories: ["Content Management"]
tags: ["frontmatter"]
series: ["Content Management"]
series_order: 24
---

Frontmatter is configruation section at the beginning of markdown files, it uses two `---` wrap (different data uses different symbol wrap, YAML is recommended) to define posts' basic information, or cover some parameters in `hugo.yaml`. Every archetypes has common and unique frontmatters.

If you don't know what is archetypes, see [Archetypes](/docs/content-management/archetypes).

## Default Archetypes

Default archetypes is used to generate posts and other content for which no content template is defined.

### Basic

```yaml
---
# required
title: "Post Title"
date: 2025-06-13
# Optinal
description: "Post description"
draft: false
categories: ["categories 1", "categories 2"]
tags: ["tags 1", "tags 2"]
slug: "custom-url"
cover: ""
---
```

If you don't matter SEO, you can use the theme archetypes to auto generate slug, it generates a random 7-digit string.

```yaml
slug: { { substr .File.UniqueID 0 7 } }
```

> [!NOTE]
>
> See [Hugo Documentation](https://gohugo.io/configuration/front-matter/) for more frontmatter.

### Other frontmatter

Default(Posts) archetypes also support other frontmatters, these configurations involve some features of the theme, usually configured in `hugo.yaml`, but you can also modify the overrides in the frontmatter.

```yaml
# math formula
katex:
  enabled: true
  delimiters:
    - left: $$
      right: $$
      display: true
    - left: $
      right: $
      display: false

# charts
mermaid:
  enabled: true

# related posts
showRelated: true

# posts license
post:
  license:
    show: true
    author: "Hugo Narrow"
    name: "CC BY-NC-SA 4.0"
    description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Please attribute the source, use non-commercially, and maintain the same license."
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    displayName: "CC BY-NC-SA 4.0"
```

## Projects Archetype

The projects archetype is used to generate project files. The basic frontmatter parameter are the same as the default archetype. There are also unique frontmatter. The following are the unique parameters of the projects archetype:

```yaml
cover: ""
featured: false
github: ""
demo: ""
website: ""
tech_stack:
  - Technology 1
  - Technology 2
status: "completed" # Options: completed, in_progress, planning
```
