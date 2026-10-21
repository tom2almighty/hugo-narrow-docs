---
title: 文章
---

文章支持相关文章和版权信息，两者都可以在文章 frontmatter 覆盖，不需要嵌套 `post` 字段。

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

## 项目

项目页使用 `projects` section，支持 `summary`、`featured`、`tags`、`link`。2.0 移除了 `status` 字段，项目列表不再维护状态颜色。

```yaml {filename="content/projects/my-project.md"}
title: "My Project"
summary: "One-line summary shown on the project card."
featured: true
tags: ["Hugo", "Tailwind CSS"]
link: "https://github.com/you/project"
```
