---
title: Home
---

# Home

The home page renders its sections in `contentOrder`. Built-in sections:

- `author-section`: author card
- `recent-posts`: recent posts, 3 by default
- `featured-projects`: projects with `featured: true`, up to 4
- `page-content`: the home page Markdown body

```yaml {filename="params.yaml"}
home:
  recentPostsCount: 3
  contentOrder:
    - author-section
    - recent-posts
    - featured-projects
```

To add a custom section:

1. Create a partial under `layouts/_partials/home/` in the theme or your site.
2. Add its name to `contentOrder`. The `.html` suffix is optional and is stripped automatically.
3. Remove an entry to hide that section.

`page-content` is not rendered by default. Add it to `contentOrder` if you want the home page Markdown body to appear.
