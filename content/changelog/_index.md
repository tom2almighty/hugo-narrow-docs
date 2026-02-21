---
title: "Changelog"
date: 2026-02-20
layout: "timeline"
---

# Changelog

## v1.3.1 - 2026-02-21

### Refactor

- Refactor project card and single template.
- Reduce projectfrontmatter.

## v1.3.0 - 2026-02-20

### Refactor

- Replace justified gallery library with custom implementation, now supports justify, masonry and grid layout, and supports switching layout on the frontend.
- Replace Glightbox with photoswipe.
- Remove masonry shortcode.
- Refactor TOC, now supports top and side floating display.
- Refactor article cover, remove redundant placeholder logic.

### Style

- Simplify some styles, remove redundant style files.
- Restore breadcrumb icons.

### New Features

- New `timeline` layout, use `h2` define time, use native markdown syntax.

## v1.2.3 - 2026-02-03

### New Features

- define main sections for search in `hugo.yaml`.

### Refactor

- baseof template uses grid style when there is a sidebar
- REMOVE the series parameter
- REMOVE toc sideabr width parameter

## v1.2.2 - 2026-01-09

### New Features

- Notice template at homepage with i18n supported.
- Series post supported.

### Bug Fixes

- Fix related posts counts parameter
- Fix comments parameter
- Fix header button overflow in some language

## v1.2.1 - 2025-12-26

### Features

- Add toggleable Table of Contents (enable via `params.toc.enabled: true`)
- Support custom head partials
- Add projects content support
- button & icon shortcodes

#### Button Shortcodes

```markdown
{\{< button text="Learn More" url="/about" >}\}
{\{< button text="GitHub" url="https://github.com" icon="github" target="\_self" >}\}
{\{< button text="Download" url="/download" variant="outline" size="lg" >}\}
```

**Parameters:**

- `text`: Button text (required, or use inner content)
- `url`: Link address (required)
- `variant`: `primary`, `secondary`, `outline` (default: primary)
- `size`: `sm`, `md`, `lg` (default: `md`)
- `icon`: Theme icon name
- `target`: `_blank`, `_self` (default: `_blank`)
- `rel`: Link relationship (noopener noreferrer is automatically added when `_blank` is used)

#### Icon Shortcodes

Display SVG icons from the `~/assets/icons/` directory:

```markdown
{\{< icon name="heart" >}\}
{\{< icon name="github" size="lg" >}\}
{\{< icon name="sun" class="text-primary" >}\}
```

**Parameters:**

- `name`: Icon name (required) - Check `assets/icons/` for available icons or place custom icons in this directory, or place the custom icon in this directory
- `size`: `xs`, `sm`, `md`, `lg`, `xl`, `2xl` (default: `md`)
- `class`: Custom CSS class, which can be used to change colors

### Bug Fixes

- Remove redundant style files
- Adjust link class to fix unwanted element underlines

## v1.2.0 - 2025-12-24

### Breaking Changes

Some parameter levels have been adjusted and the TOC parameter has been added. The specific parameter changes are as follows:

```diff
- params:
-   logo:
-     image: ""
-     link: ""
-   stickyHeader: true
-   showThemeSwitch: true
-   showDarkModeSwitch: true
-   showLanguageSwitch: true
-   languageSwitchMode: "dropdown"
+ params:
+   header:
+     sticky: true
+     logo:
+       image: ""
+       link: ""
+     showThemeSwitch: true
+     showDarkMode: true
+     showLanguageSwitch: true
+     languageSwitchMode: "dropdown"
+   toc:
+     position: left # left | right | card
+     maxWidth: "280px"
+     maxHeight: "80vh"
```

### New Features

- Supports sidebar table of contents (TOC).
- Initialize go.mod to support importing the theme via Hugo mod
- Support custom order for homepage sections

### Refactors

- Split the example site configuration
- Adjust the parameter hierarchy of the header

### Bug Fixes

- Icon templates now support solid icons without affecting references in the configuration file
- Adjust some style class names

## v1.1.6 - 2025-11-16

### New Features

- Homepage author information now supports i18n translation

- Added custom content template between homepage author information and recent posts

### Bug Fixes

- Fixed incorrect parameter name for clarity in the site configuration file

## v1.1.5 - 2025-09-05

### New Features

- Open external links in new tabs.
- Support for custom JavaScript files.
- Add a 404 template.
- Add dock display mode parameters.

```diff
params
+  dock: float # Options: "scroll" (show on scroll up), "always" (always visible), "float" (floating)
```

### Style

- Modify the color of superscripts and subscripts
- Adjust the bottom padding of alert blockquotes

## v1.1.4 - 2025-08-22

### Bug Fixes

- fix post card summary index order.
- fix reading progress and codeblock configuration.

### New Features

- add language switch mode, new params `params: languageSwitchMode`, support `dropdown` and `cycle` options.

### Style

- add license information at footer.

## v1.1.3 - 2025-08-06

### Bug Fixes

- Post cover placeholder not effect.
- regular page comments doesn't display.
- License url too long to page overflow.

### Style

- Codeblock plaintext style.
- Github Alert style.
- Post card style.
- Order list number color.
- Related post style minilize.
- Post navigation height.

### Feature

- New `About` partials.
- New `link` shortcode.
- Improve search and TOC user experience.

### Refactor

- Refactor CSS framework, delete `@tailwindcss/typography` dependency.

## v1.1.2 - 2025-07-02

### Bug Fixes

- Fixed frontmatter license params is not taking effect.

### Style

- Image display center.

### Breaking Changes

- license params add `author` and `show` params
- delete `showLicense` params

## v1.1.1 - 2025-06-25

### Bug Fixes

- Fixed masonry shortcode ID duplicate issue, causing style failure.
- Fixed glightbox and justified parameter settings not taking effect.

### Styling Improvements

- Optimized link and footnote styles.
- Added scrollbar styles.
- Added theme colors from [tweakcn](https://tweakcn.com/).

## v1.1.0 - 2025-06-17

This release refactor the configuration of gallery, add a shortcode of masonry gallery.

### Breaking Changes

Gallery configuration structure has been updated. Please update your Hugo configuration.

Visit [Release Notes](https://github.com/tom2almighty/hugo-narrow/releases/tag/v1.1.0).

### New Features

- Masonry Gallery Shortcode: Added support for masonry/waterfall layout with the new `{\{< masonry >}}` shortcode

```markdown
{\{< masonry columns=4 gutter=15 >}\}
![Image 1](image1.jpg)
![Image 2](image2.jpg)
{\{< /masonry >}\}
```

### Improvements

- New Lightbox System: Migrated from lightGallery to GLightbox for improved performance and modern user experience
- Enhanced Justified Layout: Replaced jQuery-based justified gallery with flickr-justified-gallery for better native JavaScript support
- Removed jQuery Dependency: Complete elimination of jQuery from the gallery system, resulting in faster loading times and reduced bundle size

### Bug Fixes

- Fixed i18n translation issues in post-meta component
- Resolved analytics template inclusion problem

## v1.0.0 - 2025-06-14

This release introduces the gallery; additionally, booth maps are automatically generated for posts cover, and SEO metadata is rendered via Hugo's native templates.

### New Features

- Integrated Hugo's built-in SEO templates
- Implemented gallery and justified gallery support
- Added customizable placeholder images for article covers

### Improvements

- Removed redundant metadata fields
- Fixed article navigation descriptions in post pages
