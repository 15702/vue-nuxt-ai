// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="node" />

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://api.example.com' // 可以设置环境变量
    }
  }
})