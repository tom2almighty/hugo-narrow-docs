---
title: 文章
---

文章支持相关文章和版权信息，两者都可以在文章 frontmatter 覆盖，不需要嵌套 `post` 字段。

```yaml {filename="params.yaml"}
post:
  showRelated: true
  relatedPostsCount: 3
  license:
    enabled: true
    name: "CC BY-NC-SA 4.0"
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

文章 frontmatter 可以关闭，或只覆盖名称和链接：

```yaml {filename="first-post.md"}
showRelated: false
relatedPostsCount: 5

# 关闭版权行
license: false
```

```yaml {filename="another-post.md"}
# 提供 name 即视为启用；url 可选
license:
  name: "CC BY-NC-SA 4.0"
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
```

版权行只显示 `name` 和可选链接，不再需要 author、description 或当前页面 URL。

## 项目

项目页使用 `projects` section，支持 `summary`、`featured`、`tags`、`link`。2.0 移除了 `status` 字段，项目列表不再维护状态颜色。

```yaml {filename="content/projects/my-project.md"}
title: "My Project"
summary: "One-line summary shown on the project card."
featured: true
tags: ["Hugo", "Tailwind CSS"]
link: "https://github.com/you/project"
```
