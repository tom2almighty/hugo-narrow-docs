---
title: Multilingual
---

Hugo Narrow supports multilingual sites. Language switching lives in the dock's appearance panel. Built-in UI translations cover:

- `ar`, `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `ru`, `vi`, `zh-hans`, `zh-hant`

> [!NOTE]
> Translations are AI-generated. Issues and PRs are welcome.

Set the default language first:

```yaml {filename="hugo.yaml"}
defaultContentLanguage: en
```

Create the language configuration:

```yaml {filename="languages.yaml"}
en:
  locale: en
  label: "English"
  weight: 1

zh-hans:
  locale: zh-Hans
  label: "简体中文"
  weight: 2
  # Hugo has no "month year" token, so archives need a per-language override.
  params:
    dateFormat:
      month: "2006年1月"
```

See [Miscellaneous](/en/features/miscellaneous) for date formatting. `dateFormat` has three keys: `long`, `short`, and `month`, all overridable per language. `timeFormat` is gone.

## Translation by file name

Hugo supports two main approaches: file name translation and directory translation.

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

## Translation by content directory

Directory translation requires `contentDir`:

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
> This layout has more nesting. See the [Hugo documentation](https://gohugo.io/content-management/multilingual/#translation-by-content-directory) for details.
