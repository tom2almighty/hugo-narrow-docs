---
title: SEO
---

# SEO

SEO configuration used for search engine optimization. The author meta comes from `params.author.name`, and the page language comes from Hugo's `site.Language.Locale`; the separate `defaultAuthor` and `language` parameters are gone.

```yaml {filename="params.yaml"}
description: "A modern, clean, and minimal Hugo theme built with Tailwind CSS 4.0."
keywords: ["Hugo", "Blog", "Theme", "Technology", "Programming"]
shortName: "Hugo Narrow" # PWA
images:
  - "/images/og-default.avif"

favicon:
  svg: "/favicon.svg" # SVG format favicon (recommended)
```
