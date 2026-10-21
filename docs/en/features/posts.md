---
title: Posts
---

Posts support related content and a license note. Both can be overridden in post front matter without nesting a `post` key.

```yaml {filename="params.yaml"}
post:
  showRelated: true
  relatedPostsCount: 3
  license:
    show: true
    author: "Hugo Narrow"
    name: "CC BY-NC-SA 4.0"
    description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License."
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

```yaml {filename="first-post.md"}
showRelated: false
relatedPostsCount: 5
license:
  show: true
  author: "Hugo Narrow"
  name: "CC BY-NC-SA 4.0"
  description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License."
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

## Projects

Projects live in the `projects` section and support `summary`, `featured`, `tags`, and `link`. Version 2.0 removes the `status` field, so project lists no longer maintain status colors.

```yaml {filename="content/projects/my-project.md"}
title: "My Project"
summary: "One-line summary shown on the project card."
featured: true
tags: ["Hugo", "Tailwind CSS"]
link: "https://github.com/you/project"
```
