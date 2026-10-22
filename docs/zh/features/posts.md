---
title: 文章
---

# 文章

文章支持相关文章和版权标题，两者都可以在文章 frontmatter 覆盖，不需要嵌套 `post` 字段。

```yaml {filename="params.yaml"}
post:
  showRelated: true
  relatedPostsCount: 3
  license: "CC BY-NC-SA 4.0" # 显示在文章顶部元信息；留空隐藏
```

文章 frontmatter 可以关闭，或覆盖标题：

```yaml {filename="first-post.md"}
showRelated: false
relatedPostsCount: 5

# 关闭
license: false
```

```yaml {filename="another-post.md"}
license: "MIT"
```

版权标题只显示在文章顶部的日期、阅读时间、字数这一行，没有链接，也没有独立版权区块。

## 项目

项目页使用 `projects` section，支持 `summary`、`featured`、`tags`、`link`。2.0 移除了 `status` 字段，项目列表不再维护状态颜色。

```yaml {filename="content/projects/my-project.md"}
title: "My Project"
summary: "One-line summary shown on the project card."
featured: true
tags: ["Hugo", "Tailwind CSS"]
link: "https://github.com/you/project"
```
