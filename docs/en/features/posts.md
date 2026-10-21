---
title: Posts
---

Posts support related content and a license title. Both can be overridden in post front matter without nesting a `post` key.

```yaml {filename="params.yaml"}
post:
  showRelated: true
  relatedPostsCount: 3
  license: "CC BY-NC-SA 4.0" # shown in the post meta line; empty to hide
```

A post can disable it, or override the title:

```yaml {filename="first-post.md"}
showRelated: false
relatedPostsCount: 5

# disable
license: false
```

```yaml {filename="another-post.md"}
license: "MIT"
```

The license title appears in the same top meta line as the date, reading time, and word count. There is no link and no separate license block.

## Projects

Projects live in the `projects` section and support `summary`, `featured`, `tags`, and `link`. Version 2.0 removes the `status` field, so project lists no longer maintain status colors.

```yaml {filename="content/projects/my-project.md"}
title: "My Project"
summary: "One-line summary shown on the project card."
featured: true
tags: ["Hugo", "Tailwind CSS"]
link: "https://github.com/you/project"
```
