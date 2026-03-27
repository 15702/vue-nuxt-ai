<!-- input: none（页面编排层） -->
<!-- output: 首页（个人主页 + 数字分身聊天区） -->
<!-- description: Index 页面拼装 Navbar/Hero/AboutSection/ChatSection/Footer -->
<template>
  <div class="page">
    <Navbar />

    <main class="main">
      <Hero
        :name="hero.name"
        :tagline="hero.tagline"
        :statusText="hero.statusText"
        :letter="hero.letter"
      />
      <AboutSection
        :currentDoingTitle="about.currentDoingTitle"
        :currentDoing="about.currentDoing"
        :strengthsTitle="about.strengthsTitle"
        :strengths="about.strengths"
        :interestsTitle="about.interestsTitle"
        :interests="about.interests"
        :contactTitle="about.contactTitle"
        :contactHint="about.contactHint"
        :contactLinks="socialLinks"
      />
      <WorkSection :works="works" />
      <ChatSection />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="copy">
          © {{ new Date().getFullYear() }} {{ hero.name }} · 用 AI 思考，用文字表达
        </div>
        <div class="footer-links">
          <a href="https://github.com" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" class="footer-link" target="_blank" rel="noopener noreferrer">Twitter/X</a>
          <a href="https://linkedin.com" class="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../../components/Navbar/Navbar.vue'
import Hero from '../../components/Hero/Hero.vue'
import AboutSection from '../../components/AboutSection/AboutSection.vue'
import WorkSection from '../../components/WorkSection/WorkSection.vue'
import ChatSection from '../../components/ChatSection/ChatSection.vue'

type ContactLink = {
  label: string
  href: string
}

const hero = {
  name: '刘豪',
  tagline: '一个正在学习用 AI 做产品的内容策划',
  statusText: '数字分身在线',
  letter: '林',
}

const about = {
  currentDoingTitle: '现在在做什么',
  currentDoing: '搭个人主页，整理作品集，梳理写作方向',
  strengthsTitle: '擅长的方向',
  strengths: '内容表达 · AI 应用 · 知识整理；喜欢把复杂问题讲成人话',
  interestsTitle: '兴趣领域',
  interests: ['AI 应用', '写作', '旅行', '内容策划'],
  contactTitle: '联系方式',
  contactHint: '欢迎通过下方数字分身了解我，或直接发消息给我',
}

const socialLinks: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter/X', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

const works = [
  {
    id: '1',
    title: '个人主页设计',
    description: '使用 Vue 3 + Nuxt 4 构建的个人展示网站，集成了 AI 聊天功能',
    tags: ['Vue 3', 'Nuxt 4', 'TypeScript', 'AI']
  },
  {
    id: '2',
    title: '内容策划案例',
    description: '为科技公司设计的内容营销方案，包含博客、社交媒体和视频脚本',
    tags: ['内容策划', '营销', '文案']
  },
  {
    id: '3',
    title: 'AI 工具开发',
    description: '开发基于 GPT 的智能写作助手，提高内容创作效率',
    tags: ['AI', '工具开发', 'Python', 'API']
  }
]
</script>

<style lang="less" scoped>
@import './index.less';
</style>