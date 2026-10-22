---
title: 多语言
---

# 多语言

Hugo Narrow 支持多语言站点。语言切换位于 Dock 的外观面板中：面板里显示当前语言按钮，点击后打开二级语言列表。当前内置以下语言的 UI 文案：

- `ar`、`de`、`en`、`es`、`fr`、`it`、`ja`、`ko`、`pt`、`ru`、`vi`、`zh-hans`、`zh-hant`

> [!NOTE]
> 翻译由 AI 完成，欢迎提 issue 或 PR 修正。

多语言站点首先需要设置默认语言：

```yaml {filename="hugo.yaml"}
defaultContentLanguage: zh-hans
```

创建语言配置：

```yaml {filename="languages.yaml"}
en:
  locale: en
  label: "English"
  weight: 1

zh-hans:
  locale: zh-Hans
  label: "简体中文"
  weight: 2
```

日期格式说明见[其他](/zh/features/miscellaneous)。`dateFormat` 支持 `long`、`short`、`month` 三个键，可以按语言覆盖；主题已内置常见语言的月份格式，不再需要为中文手工配置 `month`，也不再保留 `timeFormat`。

`locale` 请使用 Hugo 支持的 BCP 47 标签。中文使用 `zh-Hans` / `zh-Hant`；`zh-CN`、`zh-TW` 会回退到英文日期。阿拉伯语等 RTL 语言需要在语言配置中设置 `direction: rtl`。

## 翻译文件

Hugo 支持两种主要的多语言文件组织方式：文件名翻译和目录翻译。

文件名翻译示例：

```yaml
content/
├── posts/
│   ├── my-first-post.md
│   ├── my-first-post.zh-hans.md
│   ├── my-first-post.ja.md
│   └── my-first-post.fr.md
├── about/
│   ├── _index.md
│   ├── _index.zh-hans.md
│   └── _index.ja.md
└── _index.md
```

## 翻译目录

目录翻译需要指定 `contentDir`：

```yaml {filename="languages.yaml"}
languages:
  en:
    contentDir: content/english
    label: English
    weight: 10
  zh-hans:
    contentDir: content/zh-hans
    label: 简体中文
    weight: 20
```

```yaml
content/
├── english/
│   ├── posts/
│   │   └── my-first-post.md
│   └── _index.md
├── zh-hans/
│   ├── posts/
│   │   └── my-first-post.md
│   └── _index.md
└── _index.md
```

> [!NOTE]
> 这种方式目录层级更多，详见 [Hugo 文档](https://gohugo.io/content-management/multilingual/#translation-by-content-directory)。
