---
title: Posts
---

Posts support related content and a license note. Both can be overridden in post front matter without nesting a `post` key.

```yaml {filename="params.yaml"}
post:
  showRelated: true
  relatedPostsCount: 3
  license:
    enabled: true
    name: "CC BY-NC-SA 4.0"
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

A post can disable the license, or override only the name and link:

```yaml {filename="first-post.md"}
showRelated: false
relatedPostsCount: 5

# disable the license line
license: false
```

```yaml {filename="another-post.md"}
# providing name enables it; url is optional
license:
  name: "CC BY-NC-SA 4.0"
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

The license line only shows `name` and an optional link. Author, description, and the current page URL are no longer part of the config.

## Projects

Projects live in the `projects` section and support `summary`, `featured`, `tags`, and `link`. Version 2.0 removes the `status` field, so project lists no longer maintain status colors.

```yaml {filename="content/projects/my-project.md"}
title: "My Project"
summary: "One-line summary shown on the project card."
featured: true
tags: ["Hugo", "Tailwind CSS"]
link: "https://github.com/you/project"
```
