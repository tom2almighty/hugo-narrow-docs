---
title: 站点统计
weight: 49
date: 2026-02-20
categories: ["特色配置"]
tags: ["站点统计"]
series: ["特色配置"]
series_order: 49
---

Hugo Narrow 支持多种站点统计：

- [百度分析](https://tongji.baidu.com/)
- [Clarity](https://clarity.microsoft.com)
- [Google](https://tagmanager.google.com)
- [Umami](https://umami.is/)

```yaml {filename="params.yaml"}
analytics:
  enabled: false
  baidu:
    enabled: false
    id: "your-baidu-analytics-id"
  clarity:
    enabled: false
    id: "your-clarity-analytics-id"
  google:
    enabled: false
    id: "your-google-analytics-id"
  umami:
    enabled: false
    id: "your-umami-website-id"
    src: "https://umami.com/myscript.js"
    domains: "example.domain.com"
```
