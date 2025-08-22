# 代码块配置

Hugo Narrow 支持代码高亮，并增强了代码块功能，包括：

- 语言显示
- 代码复制
- 代码块折叠

## 基础代码块配置

在 `hugo.yaml` 中配置代码块样式：

```yaml
markup:
  highlight:
    codeFences: true           # 启用代码围栏
    guessSyntax: true         # 自动猜测语言
    lineNos: true             # 显示行号
    lineNumbersInTable: false  # 使用表格式行号，为适配主题请设置为 false
    noClasses: false          # 使用 CSS 类而不是内联样式
    style: "monokai"          # 代码高亮主题，在此处设置无效，下有详细说明
    tabWidth: 4               # Tab 宽度
```

## 代码高亮样式

主题使用 chroma 代码高亮，并使用 github 和 github-dark 作为亮色和暗色模式下的样式。

为更好的适配主题，本主题通过 `hugo gen chromastyles --style=github > ./assets/css/github.css` 方式创建样式文件并适配主题。

### 自定义代码高亮

修改高亮样式同样需要通过命令生成样式。

```bash
# 查看所有样式
hugo gen chromastyles --help

# 生成样式文件
hugo gen chromastyles --style=github > ./github.css
hugo gen chromastyles --style=github-dark > ./github-dark.css
```
完成后将对应的主题变量颜色在 `~/assets/css/chroma.css` 中替换。

你也可以将对应的高亮变量名替换为自定义的颜色。

## 代码块增强

在 `hugo.yaml`中配置：

```yaml
params:
  codeblock:
    collapse:
      enabled: true
      defaultState: expanded  # 默认折叠行为：expanded, collapsed
      autoCollapseLines: 30   # 超出指定行数折叠
      autoCollapseHeight: 400  # 超出指定高度折叠
      collapsedHeight: 120    # 折叠后的高度
```




