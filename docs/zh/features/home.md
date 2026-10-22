---
title: 首页
---

# 首页

首页由若干区块按 `contentOrder` 顺序渲染。内置区块：

- `author-section`：作者卡片
- `recent-posts`：最近文章，默认 3 篇
- `featured-projects`：`featured: true` 的项目，最多 4 个
- `page-content`：首页 Markdown 正文

```yaml {filename="params.yaml"}
home:
  recentPostsCount: 3
  contentOrder:
    - author-section
    - recent-posts
    - featured-projects
```

添加自定义区块：

1. 在主题或站点的 `layouts/_partials/home/` 下创建模板文件。
2. 把文件名加入 `contentOrder`，不需要写 `.html` 后缀；写了也会被自动去掉。
3. 删除列表中的某一项即可隐藏对应区块。

`page-content` 默认不渲染。需要展示首页 Markdown 时，把它加到 `contentOrder`。
