<!-- input: global layout (NuxtRouteAnnouncer/NuxtPage) -->
<!-- output: 全局字体链接 + 基础样式 + 页面出口 -->
<!-- description: App 根布局（AppLayout） -->
<!-- 技术实现方案：
 - 使用 `useHead` 注入 Google Fonts（Noto Sans SC + JetBrains Mono）与页面标题；
 - 将全局基础样式集中到 `assets/styles/site.css`，并在根布局通过 import 引入。 -->
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'
import '../assets/styles/site.css'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap',
    },
  ],
  title: '林安 · 个人主页',
})
</script>