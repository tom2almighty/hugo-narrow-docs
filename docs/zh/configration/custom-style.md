# 自定义样式

Hugo Narrow 支持自定义样式。

## 基础使用

在站点 `~/assets/css/custom/` 目录下新建任意名称的 CSS 文件，在其中写入自定义样式即可。

## 编译使用

### 安装依赖

站点根目录安装依赖：

```javascript
pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography
```

### 自定义样式

在 `~/assets/css/custom.css` 中或其他样式文件中修改或添加自定义样式。

### 编译

```javascript
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css
```
