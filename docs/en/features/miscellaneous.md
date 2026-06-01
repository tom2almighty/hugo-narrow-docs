---
title: Miscellaneous
---

This include some miscellaneous configurations.

## Reading Progress

```yaml {filename="params.yaml"}
readingProgress:
  enabled: true
  showOnHomepage: false
```

## Date and time localization

Due to different orderings and conventions for displaying dates and times across languages, Hugo Narrow uses Hugo's built-in `time.Format` to localize dates and times. For more details, visit the [Hugo documentation](https://gohugo.io/functions/time/format/).

The following parameters could be overwrited by `languages.yaml` files.

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
