<!-- input: hero props (name/tagline/status/letter) -->
<!-- output: Hero UI block with responsive layout -->
<!-- description: 展示头像、姓名、一句话与在线状态 -->
<template>
  <section class="hero">
    <div class="inner">
      <div class="left">
          <div class="avatar">LA</div>
          <div class="meta">
            <h1 class="name">{{ name }}</h1>
            <p class="tagline">{{ tagline }}</p>
            <div class="status">
              <span class="status-dot" />
              <span class="status-text">{{ statusText }}</span>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface HeroProps {
  name: string
  tagline: string
  statusText: string
  letter: string
}

withDefaults(defineProps<HeroProps>(), {
  name: '林安',
  tagline: '一个正在学习用 AI 做产品的内容策划',
  statusText: '数字分身在线',
  letter: '林',
})
</script>

<style lang="less" scoped>
@import './Hero.less';
</style>