// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Best Service Group | Инженерные решения и строительство в Узбекистане',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Best Service Group - ведущая инжиниринговая и строительная компания в Узбекистане. Профессиональные системы пожарной безопасности, ОВКВ, сантехника, электрика и современный дизайн интерьера.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
