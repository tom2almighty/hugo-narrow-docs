---
title: v1 Configuration (Legacy)
---

This page documents Hugo Narrow 1.x configuration for v1.4.1 and earlier on the `v1` branch. Use the other pages of this site for 2.0 configuration.

> [!NOTE]
> v1.4.1 is the final v1 release. The `v1` branch is preserved for existing sites and no longer receives feature updates.

## v1 to v2 mapping

| v1 setting | v2 status |
| --- | --- |
| `header.sticky`, `header.logo` | Removed; navigation is handled by the dock and context bar |
| `header.showThemeSwitch`, `showDarkModeSwitch`, `showContentWidthSwitch` | Removed; the appearance panel always shows every section |
| `header.showLanguageSwitch`, `languageSwitchMode` | Removed; language selection is a secondary popover in the appearance panel |
| `dock` | Removed; dock placement is automatic |
| `toc.position`, `toc.pinned` | Removed; there is one TOC panel and pin state lives in the browser |
| `params.themes` | Moved to `data/themes.yaml` |
| `post.license` object | Replaced by a single string |
| `gallery.gap`, `targetRowHeight`, `lastRowBehavior`, `columnWidth`, `columns` | Moved to page front matter |
| `codeblock.style`, `darkStyle` | Replaced by `markup.highlight.style` |
| `codeblock.collapse.autoCollapseLines` | Renamed to `maxLines` |
| `codeblock.collapse.autoCollapseHeight` | Removed |
| `dateFormat.full`, `medium`, `timeFormat` | Removed; only `long`, `short`, and `month` remain |
| Project `status` front matter | Removed |

## v1 parameter example

```yaml {filename="params.yaml"}
description: "..."
keywords: ["Hugo", "Blog"]
defaultAuthor: "Hugo Narrow"
language: "en"
shortName: "Hugo Narrow"
images:
  - "/images/og-default.avif"

favicon:
  svg: "/favicon.svg"

author:
  name: "Hugo Narrow"
  title: "..."
  description: "..."
  avatar: "/images/avatar.svg"
  social:
    - name: "GitHub"
      url: "https://github.com/username"
      icon: "github"

header:
  sticky: true
  logo:
    image: "/images/logo.svg"
    link: "/"
  showThemeSwitch: true
  showDarkModeSwitch: true
  showContentWidthSwitch: true
  showLanguageSwitch: true
  languageSwitchMode: "dropdown" # dropdown | cycle

dock: "scroll" # scroll | always | float

contentWidth: "56rem"

toc:
  enabled: true
  position: "side" # center | side
  pinned: false

colorScheme: "default"
themes: {} # colour registry; moved to data/themes.yaml in v2

home:
  recentPostsCount: 5
  contentOrder:
    - author-section
    - page-content
    - recent-posts
    - featured-projects.html

post:
  showRelated: true
  relatedPostsCount: 3
  license:
    show: true
    author: "Hugo Narrow"
    name: "CC BY-NC-SA 4.0"
    description: "..."
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    displayName: "CC BY-NC-SA 4.0"

gallery:
  enabled: true
  defaultLayout: justified
  gap: 10
  targetRowHeight: 200
  lastRowBehavior: center
  columnWidth: 200
  columns: 4

lightbox:
  enabled: true

codeblock:
  style: catppuccin-latte
  darkStyle: catppuccin-mocha
  collapse:
    enabled: true
    defaultState: expanded
    autoCollapseLines: 30
    autoCollapseHeight: 400
    collapsedHeight: 120

dateFormat:
  full: ":date_full"
  long: ":date_long"
  medium: ":date_medium"
  short: ":date_short"

timeFormat:
  full: ":time_full"
  long: ":time_long"
  medium: ":time_medium"
  short: ":time_short"
```

## v1-specific behaviour

- `header` controls the top navigation bar and the appearance panel section flags.
- `dock` supports `scroll`, `always`, and `float` modes.
- `toc.position` accepts `center` or `side`; `toc.pinned` controls whether the side TOC starts pinned.
- `themes` is maintained in `params.yaml`; adding a scheme requires an entry here.
- `post.license` is an object and renders a separate licence block.
- Gallery layout details are configured at site level.
- `codeblock.style` and `darkStyle` select separate light and dark Chroma styles.
- `dateFormat` supports `full`, `long`, `medium`, and `short`; `timeFormat` provides the matching time variants.

## Migrating to v2

At minimum:

1. Remove `header.*`, `dock`, `toc.position`, `toc.pinned`, and `timeFormat`.
2. Move `themes` entries to `data/themes.yaml`.
3. Replace the `post.license` object with a string.
4. Move gallery layout details to page front matter.
5. Replace `codeblock.style` / `darkStyle` with `markup.highlight.style`, and rename `autoCollapseLines` to `maxLines`.
6. Remove `dateFormat.full` and `medium`; keep `long`, `short`, and `month`.

See the [2.0.0 release notes](https://github.com/tom2almighty/hugo-narrow/releases/tag/v2.0.0) for the complete breaking-change list.
