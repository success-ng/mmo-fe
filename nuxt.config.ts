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
  modules: [
    '@nuxtjs/tailwindcss', // 'vuetify-nuxt-module',
    '@nuxt/fonts', // '@nuxtjs/i18n'
    // '@nuxt/eslint'
    '@nuxt/icon',
    // '@nuxtjs/color-mode'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})