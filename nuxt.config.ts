// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      base_url: process.env.API_BASE_URL,
      domain: process.env.DOMAIN,
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [// 'vuetify-nuxt-module',
  '@nuxtjs/tailwindcss', // '@nuxtjs/i18n'
  '@nuxt/fonts', // '@nuxt/eslint'
  // '@nuxtjs/color-mode'
  '@nuxt/icon', '@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  }
})