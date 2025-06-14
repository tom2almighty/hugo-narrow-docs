# 评论系统配置

Hugo Narrow 主题支持多种评论系统。

## 基础配置

在 `hugo.yaml` 或 `frontmatter` 中启用评论系统：

```yaml
params:
  comments:
    enabled: true           # 评论系统总开关
    system: "giscus"       # 选择评论系统：giscus, disqus, utterances, waline, artalk, twikoo
```

支持的评论系统如下：

- [artalk](https://artalk.js.org/)
- [disqus](https://disqus.com/)
- [giscus](https://giscus.app/)
- [twikoo](https://twikoo.js.org/)
- [utterances](https://utteranc.es/)
- [waline](https://waline.js.org/)

详细的配置可访问对应的系统文档。

## Artalk

```yaml
params:
  comments:
    system: "artalk"
    artalk:
      server: "your-artalk-server"   # Artalk 服务器地址
      site: "your-site-name"         # 站点名称
      locale: "zh-CN"                # 语言
      darkMode: "auto"              # 暗色模式
      gravatar:                     # Gravatar 配置
        mirror: "https://cravatar.cn/avatar/"
```

## Disqus

```yaml
params:
  comments:
    system: "disqus"
    disqus:
      shortname: "your-disqus-shortname"
```


## Giscus 

基于 GitHub Discussions 的评论系统。

```yaml
params:
  comments:
    system: "giscus"
    giscus:
      repo: "username/repo"           # GitHub 仓库
      repoId: "R_xxx"                # 仓库 ID
      category: "General"            # 讨论分类
      categoryId: "DIC_xxx"          # 分类 ID
      mapping: "pathname"            # 映射方式
      strict: "0"                    # 严格匹配
      reactionsEnabled: "1"          # 启用反应
      emitMetadata: "0"             # 元数据
      inputPosition: "bottom"        # 输入框位置
      theme: "preferred_color_scheme" # 主题
      lang: "zh-CN"                 # 语言
```

### 设置步骤
1. 访问 [Giscus App](https://github.com/apps/giscus)
2. 安装到你的仓库
3. 在仓库中启用 Discussions
4. 使用 [Giscus 配置工具](https://giscus.app/) 生成配置
5. 复制配置到 `hugo.yaml`


## Twikoo

```yaml
params:
  comments:
    system: "twikoo"
    twikoo:
      envId: "your-env-id"          # 环境 ID
      region: "ap-shanghai"         # 区域(非必须)
      path: "window.location.pathname"  # 路径
      lang: "zh-CN"                # 语言
```


## Utterances

基于 GitHub Issues 的轻量级评论系统。

```yaml
params:
  comments:
    system: "utterances"
    utterances:
      repo: "username/repo"    # GitHub 仓库
      issueTerm: "pathname"   # Issue 映射
      label: "comment"        # Issue 标签
      theme: "preferred-color-scheme"  # 主题
```


## Waline

```yaml
params:
  comments:
    system: "waline"
    waline:
      serverURL: "your-waline-server"  # Waline 服务器地址
      lang: "zh-CN"                   # 语言
```





