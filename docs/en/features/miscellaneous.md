---
title: Miscellaneous
---

# Miscellaneous

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

This block is optional; the theme already uses these defaults. Add it only when changing a format, or override per language:

```yaml {filename="languages.yaml"}
en:
  locale: en-US
  params:
    dateFormat:
      short: "01/02/2006"
```

`long` and `short` should use Hugo's localization tokens; the output depends on `locale`:

- `:date_long`: `January 27, 2023` in English, `2023年1月27日` in Chinese
- `:date_short`: `1/27/23` in English, `23/1/27` in Chinese (the current Hugo locale data uses a two-digit year)

Use a Go layout such as `"2006/1/2"` to force a four-digit year in `short`.

### Archive month heading

Hugo has no "month year" token. `data/dateFormats.yaml` provides defaults for languages whose order or wording differs from the default month-first layout:

- `zh-hans`, `zh-hant`, `zh`, `ja`: `2006年1月`
- `ko`: `2006년 1월`
- `vi`: `Tháng 1, 2006`
- `es`, `pt`: `January de 2006`

Other languages use `"January 2006"`, and Hugo localizes the month name from `locale`. The `month` value normally needs no configuration; override it only for custom wording:

```yaml {filename="languages.yaml"}
en:
  locale: en-US
  params:
    dateFormat:
      month: "January 2006"
```

### Locale values

`locale` must be a BCP 47 tag supported by Hugo. For Chinese, use `zh-Hans` or `zh-Hant`. `zh-CN` and `zh-TW` currently fall back to English dates in Hugo's locale data.

The theme does not render times. Use `time.Format` directly in a custom partial if you need one, for example `time.Format ":time_short"`.
