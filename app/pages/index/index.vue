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
      <ChatSection />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="copy">
          © {{ new Date().getFullYear() }} {{ hero.name }} · 用 AI 思考，用文字表达
        </div>
        <div class="footer-links">
          <a href="#" class="footer-link">GitHub</a>
          <a href="#" class="footer-link">即刻</a>
          <a href="#" class="footer-link">邮箱</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../../components/Navbar/Navbar.vue'
import Hero from '../../components/Hero/Hero.vue'
import AboutSection from '../../components/AboutSection/AboutSection.vue'
import ChatSection from '../../components/ChatSection/ChatSection.vue'

type ContactLink = {
  label: string
  href: string
}

const hero = {
  name: '林安',
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
  contactHint: '你可以通过下面的链接联系我（目前为占位信息，后续可替换）：',
}

const socialLinks: ContactLink[] = [
  { label: '邮箱（待补充）', href: '#' },
  { label: '微信（待补充）', href: '#' },
  { label: '个人站（待补充）', href: '#' },
]
</script>

<style lang="less" scoped>
@import './index.less';
</style>