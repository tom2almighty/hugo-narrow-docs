# 数据统计配置

Hugo Narrow 支持常见的统计工具。

## 基础配置

在 `hugo.yaml` 中配置统计工具：

```yaml
params:
  analytics:
    enabled: true    # 总开关
```

## Baidu

```yaml
params:
  analytics:
    baidu:
      enabled: true
      id: "your-baidu-analytics-id"
```

## Google Analytics

```yaml
params:
  analytics:
    google:
      enabled: true
      id: "G-XXXXXXXXXX"
```


## Microsoft Clarity

```yaml
params:
  analytics:
    clarity:
      enabled: true
      analytics: "your-clarity-analytics-id"
```





## Umami Analytics 配置

```yaml
params:
  analytics:
    umami: 
      enabled: true
      id: "your-umami-website-id"
      src: "https://umami.com/myscript.js"   # Umami 脚本地址
      domains: "example.domain.com"           # 跟踪的域名
```

