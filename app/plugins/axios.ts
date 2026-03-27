import axios from 'axios'
import { useRequestHeaders } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const instance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000,
  })

  instance.interceptors.request.use((config) => {
    if (process.server) {
      const headers = useRequestHeaders(['cookie'])
      config.headers.cookie = headers.cookie
    }

    return config
  })

  instance.interceptors.response.use(
    (res) => res.data,
    (error) => {
      const status = error.response?.status

      if (status === 401) {
        console.warn('未登录')
      }

      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: instance,
    },
  }
})