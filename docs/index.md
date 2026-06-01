---
# The site root (/) has no locale of its own — the locales are 'zh' and 'en',
# served at /zh/ and /en/. This stub redirects visitors from / to the default
# Chinese docs. `withBase` keeps it correct even if `base` changes for deploy.
layout: page
title: Hugo Narrow
sidebar: false
aside: false
---

<script setup>
import { useRouter, withBase } from 'vitepress'
import { onMounted } from 'vue'

const router = useRouter()
onMounted(() => {
  router.go(withBase('/zh/'))
})
</script>

正在跳转到中文文档 / Redirecting to the Chinese docs…

如果没有自动跳转，请点击 [这里 / here](/zh/)。
