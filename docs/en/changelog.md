---
title: "Changelog"
---

## v1.3.12 - 2026-05-31

- feat: Support Comentario comment system by [@LTSlw](https://github.com/LTSlw)
- chore: Remove redundant dependency descriptions, optimize build and README.md files.
- feat: The unified comment system is not configured with component prompts, and the logic of the jump comment button is optimized.
- feat: Add CLAUDE.md documentation description.

## v1.3.11 - 2026-05-24

- fea:add resume page layout by [@svenvg93](https://github.com/svenvg93)
- feat:move lightbox caption below image by [@svenvg93](https://github.com/svenvg93)

## v1.3.10 - 2026-05-05

- fix: update time and date format partial, avoide upstream bug
- chore: update hugo version to 0.158.0

## v1.3.9 - 2026-05-05

- feat: migrate deprecated language params to new

## v1.3.8 - 2026-05-03

- feat: add date format partial
- feat: update hugo version to 0.156.0

## v1.3.7 - 2026-04-27

- feat: render series taxonomy page as post-style cards by [@svenvg93](https://github.com/svenvg93)

## v1.3.6 - 2026-03-27

- refactor!: Replace PhotoSwipe lightbox with custom implementation

  ```diff
    lightbox:
      enabled: true
  -   bgOpacity: 0.8
  -   showHideAnimationType: zoom
  -   showAnimationDuration: 333
  -   hideAnimationDuration: 333
  ```

## v1.3.5 - 2026-03-18

- refactor: Refactor i18n, reduce translation keys.
- feat: New shortcodes `tabs`.

## v1.3.2 - 2026-03-10

- fix: Fix project meta error.
- fix: Fix date issue caused by translates.
- fix: Tabe add base styles.
- feat: Add submenu for navbar.
- feat: Add anchor for headings.

## v1.3.1 - 2026-02-21

- refactor: Refactor project card and single template.
- refactor: Reduce projectfrontmatter.

## v1.3.0 - 2026-02-20

- refactor: Replace justified gallery library with custom implementation, now supports justify, masonry and grid layout, and supports switching larefactor: yout on the frontend.
- refactor: Replace Glightbox with photoswipe.
- refactor: Remove masonry shortcode.
- refactor: Refactor TOC, now supports top and side floating display.
- refactor: Refactor article cover, remove redundant placeholder logic.
- style: Simplify some styles, remove redundant style files.
- style: Restore breadcrumb icons.
- feat: New `timeline` layout, use `h2` define time, use native markdown syntax.

## v1.2.3 - 2026-02-03

- feat: define main sections for search in `hugo.yaml`.
- refactor: baseof template uses grid style when there is a sidebar
- refactor: REMOVE the series parameter
- refactor: REMOVE toc sideabr width parameter

## v1.2.2 - 2026-01-09

- feat:Notice template at homepage with i18n supported.
- feat: Series post supported.
- fix: Fix related posts counts parameter
- fix: Fix comments parameter
- fix: Fix header button overflow in some language

## v1.2.1 - 2025-12-26

- feat: Add toggleable Table of Contents (enable via `params.toc.enabled: true`)
- feat: Support custom head partials
- feat: Add projects content support
- feat: button & icon shortcodes
- fix: Remove redundant style files
- fix: Adjust link class to fix unwanted element underlines

## v1.2.0 - 2025-12-24

- feat: Supports sidebar table of contents (TOC).
- feat: Initialize go.mod to support importing the theme via Hugo mod
- feat: Support custom order for homepage sections
- refactor: Split the example site configuration
- refactor: Adjust the parameter hierarchy of the header
- fix: Icon templates now support solid icons without affecting references in the configuration file
- fix: Adjust some style class names

## v1.1.6 - 2025-11-16

- feat: Homepage author information now supports i18n translation
- feat: Added custom content template between homepage author information and recent posts
- fix: Fixed incorrect parameter name for clarity in the site configuration file

## v1.1.5 - 2025-09-05

- style: Modify the color of superscripts and subscripts
- style: Adjust the bottom padding of alert blockquotes
- feat: Open external links in new tabs.
- feat: Support for custom JavaScript files.
- feat: Add a 404 template.
- feat: Add dock display mode parameters.

  ```diff
  params
  +  dock: float # Options: "scroll" (show on scroll up), "always" (always visible), "float" (floating)
  ```

## v1.1.4 - 2025-08-22

- fix post card summary index order.
- fix reading progress and codeblock configuration.
- feat: add language switch mode, new params `params: languageSwitchMode`, support `dropdown` and `cycle` options.
- style: add license information at footer.

## v1.1.3 - 2025-08-06

- fix: Post cover placeholder not effect.
- fix: regular page comments doesn't display.
- fix: License url too long to page overflow.
- style: Codeblock plaintext style.
- style: Github Alert style.
- style: Post card style.
- style: Order list number color.
- style: Related post style minilize.
- style: Post navigation height.
- feat: New `About` partials.
- feat: New `link` shortcode.
- feat: Improve search and TOC user experience.
- refactor: Refactor CSS framework, delete `@tailwindcss/typography` dependency.

## v1.1.2 - 2025-07-02

- fix: Fixed frontmatter license params is not taking effect.
- style: Image display center.
- refactor: license params add `author` and `show` params
- refactor: delete `showLicense` params

## v1.1.1 - 2025-06-25

- fix: Fixed masonry shortcode ID duplicate issue, causing style failure.
- fix: Fixed glightbox and justified parameter settings not taking effect.
- style: Optimized link and footnote styles.
- style: Added scrollbar styles.
- style: Added theme colors from [tweakcn](https://tweakcn.com/).

## v1.1.0 - 2025-06-17

- refactor: Refact gallery
- feat: Masonry Gallery Shortcode: Added support for masonry/waterfall layout with the new `{\{< masonry >}}` shortcode
- feat: New Lightbox System: Migrated from lightGallery to GLightbox for improved performance and modern user experience
- feat: Enhanced Justified Layout: Replaced jQuery-based justified gallery with flickr-justified-gallery for better native JavaScript support
- feat: Removed jQuery Dependency: Complete elimination of jQuery from the gallery system, resulting in faster loading times and reduced bundle size
- fix: Fixed i18n translation issues in post-meta component
- fix: Resolved analytics template inclusion problem

## v1.0.0 - 2025-06-14

- feat: Integrated Hugo's built-in SEO templates
- feat: Implemented gallery and justified gallery support
- feat: Added customizable placeholder images for article covers
- fix: Removed redundant metadata fields
- fix: Fixed article navigation descriptions in post pages
