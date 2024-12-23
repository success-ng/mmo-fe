// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  },
})