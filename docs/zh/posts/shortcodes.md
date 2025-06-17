# 短代码

Hugo Narrow 可以直接使用 Hugo 内置的短代码模板，包括：

- Figure
- Vimeo
- YouTube
- ...

你可以访问[Hugo 文档](https://gohugo.io/content-management/shortcodes/#embedded)获取更多内置短代码。

此外还添加了两个短代码：

- Bilibili
- Tencent Video


短代码来自 [Hugo Stack](https://stack.jimmycai.com/)。

## 内置短代码

### Figure

```
{{< figure
  src="/images/examples/zion-national-park.jpg"
  alt="A photograph of Zion National Park"
  link="https://www.nps.gov/zion/index.htm"
  caption="Zion National Park"
  class="ma0 w-75"
>}}
```


### Vimeo

展示 Vimeo 视频：

```
https://vimeo.com/channels/staffpicks/55073825
```

```
{{< vimeo 55073825 >}}
```

### YouTube

展示 YouTube 视频：

```
https://www.youtube.com/watch?v=0RKpf3rK57I
```

```
{{< youtube 0RKpf3rK57I >}}
```

## 主题短代码

### Bilibili

完整的参数如下：

```
{{< bilibili VIDEO_ID PART_NUMBER >}}
```
同时支持 AV 号和 BV 号，其中 PART_NUMBER 是可选参数，指定后展示对应分集。

展示 Bilibili 视频：

```
https://www.bilibili.com/video/BV1GJ411x7h7/
```

```
{{< bilibili BV1GJ411x7h7 >}}
```

### Tencent Video

参数如下：
```
{{< tencent VIDEO_ID >}}
```

展示腾讯视频：

```
https://v.qq.com/x/cover/aav44xv50k8sfjb/o01836xm9bv.html
```

```
{{< tencent o01836xm9bv >}}
```

### Masonry 布局图库

瀑布流布局图库：

```markdown
{{< masonry columns=4 gutter=15 >}}
![Image 1](image1.jpg)
![Image 2](image2.jpg)
{{< /masonry >}}
```

## 自定义短代码

在 `~/layout/_shortcodes` 目录下添加你的短代码模板，如果使用 Tailwind CSS，需要在本地编译样式应用到主题，本地编译详细方式见[自定义样式](/zh/configration/custom-style)