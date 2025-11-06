# Analytics Configuration

Hugo Narrow supports common analytics tools.

## Basic Configuration

Configure analytics tools in `hugo.yaml`:

```yaml
params:
  analytics:
    enabled: true    # Master switch
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
      id: "your-clarity-analytics-id"
```





## Umami Analytics Configuration

```yaml
params:
  analytics:
    umami: 
      enabled: true
      id: "your-umami-website-id"
      src: "https://umami.com/myscript.js"   # Umami script URL
      domains: "example.domain.com"           # Domains to track
```

