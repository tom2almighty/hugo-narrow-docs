---
sidebar: false
aside: false
---

# Changelog

## v1.1.0 (July 17, 2025)

### Breaking Changes
Gallery configuration structure has been updated. Please update your Hugo configuration, visit [Release Notes](https://github.com/tom2almighty/hugo-narrow/releases/tag/v1.1.0).
### New Features
- Masonry Gallery Shortcode: Added support for masonry/waterfall layout with the new `{\{< masonry >}}` shortcode

### Improvements
- New Lightbox System: Migrated from lightGallery to GLightbox for improved performance and modern user experience
- Enhanced Justified Layout: Replaced jQuery-based justified gallery with flickr-justified-gallery for better native JavaScript support
- Removed jQuery Dependency: Complete elimination of jQuery from the gallery system, resulting in faster loading times and reduced bundle size

### Bug Fixes
- Fixed i18n translation issues in post-meta component
- Resolved analytics template inclusion problem

## v1.0.0 (June 14, 2025)
### New Features
- Integrated Hugo's built-in SEO templates
- Implemented gallery and justified gallery support
- Added customizable placeholder images for article covers

### Improvements
- Removed redundant metadata fields
- Fixed article navigation descriptions in post pages
