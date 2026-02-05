// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxt/tailwindcss',
    '@nuxt/ui'
  ],

  app: {
    head: {
      title: 'ssngn.ru | Дальше уже некуда',
      meta: [
        { name: 'ssngn.ru', content: 'Дальше уже некуда' }
      ]
    }
  },

  devtools: { enabled: true }
})
