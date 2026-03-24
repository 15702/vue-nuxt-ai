<!-- input: about props (cards + interests + contact links) -->
<!-- output: AboutSection UI block -->
<!-- description: 关于我信息卡片区（2x2/单列响应式） -->
<template>
  <section class="about">
    <div class="inner">
      <h2 class="title">关于我</h2>

      <div class="grid">
        <div class="card">
          <div class="card-title">
            <span class="icon">📄</span>
            {{ currentDoingTitle }}
          </div>
          <div class="card-body">{{ currentDoing }}</div>
        </div>

        <div class="card">
          <div class="card-title">
            <span class="icon">🎯</span>
            {{ strengthsTitle }}
          </div>
          <div class="card-body">{{ strengths }}</div>
        </div>

        <div class="card">
          <div class="card-title">
            <span class="icon">💡</span>
            {{ interestsTitle }}
          </div>
          <div class="card-body">
            <div class="tags">
              <span v-for="t in interests" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <span class="icon">📧</span>
            {{ contactTitle }}
          </div>
          <div class="card-body">
            <p class="contact-hint">{{ contactHint }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface ContactLink {
  label: string
  href: string
}

export interface AboutSectionProps {
  currentDoingTitle: string
  currentDoing: string
  strengthsTitle: string
  strengths: string
  interestsTitle: string
  interests: string[]
  contactTitle: string
  contactHint: string
  contactLinks: ContactLink[]
}

withDefaults(defineProps<Partial<AboutSectionProps>>(), {
  currentDoingTitle: '现在在做什么',
  currentDoing: '搭个人主页，整理作品集，梳理写作方向',
  strengthsTitle: '擅长的方向',
  strengths: '内容表达 · AI 应用 · 知识整理；喜欢把复杂问题讲成人话',
  interestsTitle: '兴趣领域',
  interests: ['AI 应用', '写作', '旅行', '内容策划'],
  contactTitle: '联系方式',
  contactHint: '欢迎通过下方数字分身了解我，或直接发消息给我',
  contactLinks: [
    { label: '邮箱（待补充）', href: '#' },
    { label: '微信（待补充）', href: '#' },
    { label: '个人站（待补充）', href: '#' },
  ],
})
</script>

<style lang="less" scoped>
@import './AboutSection.less';
</style>