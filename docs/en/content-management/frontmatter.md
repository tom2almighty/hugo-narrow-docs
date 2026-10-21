---
title: Frontmatter
---

Frontmatter is the YAML block at the top of a Markdown file, wrapped in `---`. It defines page metadata and can override site-level parameters. Different archetypes support different fields.

## Default archetype

```yaml
---
title: "Post Title"
date: 2025-06-13
description: "Post description"
draft: false
categories: ["categories 1", "categories 2"]
tags: ["tags 1", "tags 2"]
slug: "custom-url"
cover: ""
---
```

If SEO does not matter, the archetype can generate a random 7-character slug.

### Page-level overrides

```yaml
# disable math
katex: false

# disable diagrams
mermaid: false

# disable related posts
showRelated: false

# disable the license line
license: false

# or override name and link; providing name enables it
license:
  name: "CC BY-NC-SA 4.0"
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

## Projects archetype

Projects live in the `projects` section. Project-specific fields:

```yaml
summary: "One-line summary shown on the project card."
featured: false
link: "https://example.com"
```

Version 2.0 removes `status`; project cards no longer render status.
