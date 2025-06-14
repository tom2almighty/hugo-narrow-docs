# Comments System Configuration

Hugo Narrow theme supports multiple comment systems.

## Basic Configuration

Enable the comment system in `hugo.yaml` or `frontmatter`:

```yaml
params:
  comments:
    enabled: true           # Master switch for comment system
    system: "giscus"       # Choose comment system: giscus, disqus, utterances, waline, artalk, twikoo
```

Supported comment systems:

- [artalk](https://artalk.js.org/)
- [disqus](https://disqus.com/)
- [giscus](https://giscus.app/)
- [twikoo](https://twikoo.js.org/)
- [utterances](https://utteranc.es/)
- [waline](https://waline.js.org/)

For detailed configuration, please visit the respective system documentation.

## Artalk

```yaml
params:
  comments:
    system: "artalk"
    artalk:
      server: "your-artalk-server"   # Artalk server address
      site: "your-site-name"         # Site name
      locale: "en"                   # Language
      darkMode: "auto"               # Dark mode
      gravatar:                      # Gravatar settings
        mirror: "https://secure.gravatar.com/avatar/"
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

A comment system based on GitHub Discussions.

```yaml
params:
  comments:
    system: "giscus"
    giscus:
      repo: "username/repo"           # GitHub repository
      repoId: "R_xxx"                # Repository ID
      category: "General"            # Discussion category
      categoryId: "DIC_xxx"          # Category ID
      mapping: "pathname"            # Mapping method
      strict: "0"                    # Strict matching
      reactionsEnabled: "1"          # Enable reactions
      emitMetadata: "0"             # Metadata
      inputPosition: "bottom"        # Input box position
      theme: "preferred_color_scheme" # Theme
      lang: "en"                    # Language
```

### Setup Steps
1. Visit [Giscus App](https://github.com/apps/giscus)
2. Install it to your repository
3. Enable Discussions in your repository
4. Use the [Giscus configuration tool](https://giscus.app/) to generate configuration
5. Copy configuration to `hugo.yaml`


## Twikoo

```yaml
params:
  comments:
    system: "twikoo"
    twikoo:
      envId: "your-env-id"          # Environment ID
      region: "ap-shanghai"         # Region (optional)
      path: "window.location.pathname"  # Path
      lang: "en"                   # Language
```


## Utterances

A lightweight comment system based on GitHub Issues.

```yaml
params:
  comments:
    system: "utterances"
    utterances:
      repo: "username/repo"    # GitHub repo
      issueTerm: "pathname"   # Issue map
      label: "comment"        # Issue label
      theme: "preferred-color-scheme"  # theme
```


## Waline

```yaml
params:
  comments:
    system: "waline"
    waline:
      serverURL: "your-waline-server"  # Waline server
      lang: "zh-CN"                   # language
```




