# Markdown 语法增强

Hugo Narrow 通过 Hugo 内置的 `render`函数支持 GitHub Alert，同时支持 Katex 和 Mermaid。

## GitHub Alert

支持 GitHub 风格的引用块和 Obsidian 形式的折叠引用（+/-）

> [!NOTE]
> Obsidian 的折叠和自定义标题会在 Typora 中显示为原始的引用块。

### 基本使用

```markdown
> [!NOTE]
> 这是一个注意提示框。用于显示用户应该注意的有用信息，即使在快速浏览内容时也应该注意。

> [!TIP]
> 这是一个提示提示框。提供有助于更好或更轻松地完成任务的建议。

> [!IMPORTANT]
> 这是一个重要提示框。显示用户成功完成任务所需的关键信息。

> [!WARNING]
> 这是一个警告提示框。由于潜在风险，需要用户立即注意的关键内容。

> [!CAUTION]
> 这是一个注意提示框。建议采取行动以避免负面后果。
```

> [!NOTE]
> 这是一个注意提示框。用于显示用户应该注意的有用信息，即使在快速浏览内容时也应该注意。

> [!TIP]
> 这是一个提示提示框。提供有助于更好或更轻松地完成任务的建议。

> [!IMPORTANT]
> 这是一个重要提示框。显示用户成功完成任务所需的关键信息。

> [!WARNING]
> 这是一个警告提示框。由于潜在风险，需要用户立即注意的关键内容。

> [!CAUTION]
> 这是一个注意提示框。建议采取行动以避免负面后果。

### 折叠功能

```markdown
> [!NOTE]+ 可折叠的注意事项
> 这是一个可折叠的注意提示框。点击标题可以展开或折叠内容。
> 
> 这里可以包含更多详细信息，当用户需要时可以展开查看。
```

### 复杂内容

可以嵌套使用复杂的内容

```markdown
> [!CAUTION] 复杂内容示例
> 这个可折叠框包含复杂的 Markdown 内容：
> 
> #### 子标题
> 
> 这是一个包含[链接](https://example.com)和其他格式的段落。
> 
> ```javascript
> // 代码块示例
> function hello() {
>   console.log("你好，世界！");
> }
> ```
> 
> | 表格 | 示例 |
> |------|------|
> | 行1 | 数据1 |
> | 行2 | 数据2 |
```

> [!CAUTION] 复杂内容示例
> 这个可折叠框包含复杂的 Markdown 内容：
>
> #### 子标题
>
> 这是一个包含[链接](https://example.com)和其他格式的段落。
>
> ```javascript
> // 代码块示例
> function hello() {
>   console.log("你好，世界！");
> }
> ```
>
> | 表格 | 示例 |
> |------|------|
> | 行1 | 数据1 |
> | 行2 | 数据2 |

## Katex

Hugo Narrow 通过 Katex 支持数学公式。

在 `hugo.yaml` 或页面 `frontmatter` 中启用 KaTeX：

```yaml
params:
  katex:
    enabled: true    # 启用 KaTeX
    delimiters:     # 定义数学公式分隔符
      - left: "$$"
        right: "$$"
        display: true    # 块级公式
      - left: "$"
        right: "$"
        display: false   # 行内公式
      - left: "\\("
        right: "\\)"
        display: false   # 行内公式
      - left: "\\["
        right: "\\]"
        display: true    # 块级公式
```

## Mermaid

Hugo Narrow 支持 Mermaid 图表。

在 `hugo.yaml` 或页面 `frontmatter` 中启用 Mermaid：

```yaml
params:
  mermaid:
    enabled: true      # 启用 Mermaid
```
