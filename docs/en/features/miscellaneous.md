---
title: Miscellaneous
---

## Reading progress

```yaml {filename="params.yaml"}
readingProgress:
  enabled: true
  showOnHomepage: false
```

## Date localization

The theme uses Hugo's `time.Format`, so dates follow the current language's `locale`. There are only three variants:

```yaml {filename="params.yaml"}
dateFormat:
  long: ":date_long" # post detail, page headers
  short: ":date_short" # cards, archives, series
  month: "January 2006" # archive month heading
```

`long` and `short` should use Hugo's localization tokens:

- `:date_long`: `January 27, 2023` in English, `2023年1月27日` in Chinese
- `:date_short`: `1/27/23` in English, `2023/1/27` in Chinese

Hugo has no "month year" token, so the archive month heading uses its own `month` value. For Chinese sites, override it in `languages.yaml`:

```yaml {filename="languages.yaml"}
zh-hans:
  locale: zh-Hans
  params:
    dateFormat:
      month: "2006年1月"
```

Go layout strings such as `"2006-01-02"` or `"January 2, 2006"` are also accepted. The theme does not render times; call `time.Format` directly in a custom partial if you need one.
