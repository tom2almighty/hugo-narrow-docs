---
title: 其他
---

## 阅读进度

```yaml {filename="params.yaml"}
readingProgress:
  enabled: true
  showOnHomepage: false
```

## 日期本地化

主题使用 Hugo 的 `time.Format`，按当前语言的 `locale` 自动本地化日期。只保留三个变体：

```yaml {filename="params.yaml"}
dateFormat:
  long: ":date_long" # 文章详情、页头
  short: ":date_short" # 卡片、归档、系列
  month: "January 2006" # 归档页的月份标题
```

`long` 和 `short` 推荐使用 Hugo 的本地化 token：

- `:date_long`：英文 `January 27, 2023`，中文 `2023年1月27日`
- `:date_short`：英文 `1/27/23`，中文 `2023/1/27`

Hugo 没有“年月”token，所以归档页的月份标题单独用 `month`。中文站点建议在 `languages.yaml` 覆盖，避免出现英文月份或错误的顺序：

```yaml {filename="languages.yaml"}
zh-hans:
  locale: zh-Hans
  params:
    dateFormat:
      month: "2006年1月"
```

也支持 Go 时间布局字符串，例如 `"2006-01-02"`、`"2006年1月2日"`。主题不渲染时间，需要时间格式时在自定义模板里直接调用 `time.Format`。
