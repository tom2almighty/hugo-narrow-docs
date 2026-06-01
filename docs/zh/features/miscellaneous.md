---
title: 其他
---

本节介绍一些其他设置。

## 阅读进度

```yaml {filename="params.yaml"}
readingProgress:
  enabled: true
  showOnHomepage: false
```

## 日期和时间本地化

由于不同语言下的日期和时间显示存在不同的顺序和习惯，因此 Hugo Narrow 使用 Hugo 内置的 `time.Format` 本地化日期和时间，更多细节访问 [Hugo 文档](https://gohugo.io/functions/time/format/) 获取。

下面的参数可以被 `languages.yaml` 文件覆写。

```yaml {filename="params.yaml"}
# Date format

# Customize the display format for article/page dates.
# Accepted values:
#   1) Hugo localization tokens (recommended): ":date_full" / ":date_long" / ":date_medium" / ":date_short"
#      Automatically localized based on the current language's locale
#      (e.g., en → "January 2, 2006", zh-Hans → "2006年1月2日").
#      NOTE: ":date_medium" currently has an upstream bug under en-GB (month is omitted except September),
#      so the theme uses ":date_long" for places that previously used medium.
#   2) Go time layout string: reference time is "Mon Jan 2 15:04:05 MST 2006". Examples:
#        "2006-01-02"           → 2024-05-01
#        "January 2, 2006"      → May 1, 2024
#        "2006年1月2日"         → 2024年5月1日
#        "Jan 2, 2006"          → May 1, 2024
#        "02 Jan 2006"          → 01 May 2024
# Usage (which variants the theme actually renders):
#   full   : reserved for opt-in custom usage
#   long   : article detail page, homepage hero, list / card / timeline / JSON Feed,
#            archive page, previous/next article (i.e. all theme-rendered dates)
#   medium : not used by the theme by default (kept here for user customization)
#   short  : not used by the theme by default (kept here for user customization)
# Leave empty to keep the defaults below.
# To configure per language, override via languages.<lang>.params.dateFormat in languages.yaml.
dateFormat:
  full: ":date_full"
  long: ":date_long"
  medium: ":date_medium"
  short: ":date_short"
  # Custom examples:
  # long: "January 2, 2006"
  # medium: "2006-01-02"
  # short: "01/02"

# Time format (optional)
#
# Used by helpers/date.html when called with kind="time", e.g.:
#   {{ partial "helpers/date.html" (dict "date" .Date "variant" "short" "kind" "time") }}
# Same value rules as dateFormat: either Hugo localization tokens
# (":time_full" / ":time_long" / ":time_medium" / ":time_short") or a Go time layout
# string (e.g. "15:04", "3:04 PM"). The theme does not render time values out of the
# box; this block exists so users / custom partials can use it without extra config.
# Per-language override is also supported via languages.<lang>.params.timeFormat.
timeFormat:
  full: ":time_full"
  long: ":time_long"
  medium: ":time_medium"
  short: ":time_short"
  # Custom examples:
  # long: "15:04:05"
  # short: "3:04 PM"
```
