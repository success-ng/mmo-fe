// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      base_url: process.env.API_BASE_URL,
      domain: process.env.DOMAIN,
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [// 'vuetify-nuxt-module',
    // '@nuxtjs/i18n'
    // '@nuxt/fonts', // '@nuxt/eslint'
    '@nuxtjs/tailwindcss', // '@nuxtjs/color-mode'
    '@nuxt/icon', '@pinia/nuxt', '@nuxtjs/google-fonts', 'nuxt-gtag'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Roboto: [300, 400, 500, 600, 700],
      "Noto Sans": [300, 400, 500, 600, 700],
    },
    display: 'swap', // Tùy chọn hiển thị
    prefetch: true, // Tăng tốc độ tải font
    preconnect: true, // Tăng tốc độ kết nối tới nguồn font
    preload: true, // Tải trước font
    download: true, // Tải font về và phục vụ từ máy chủ của bạn
    base64: false, // Không mã hóa font dưới dạng base64
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtag: {
    id: 'AW-16967853926',
    config: {
      anonymize_ip: true,
      send_page_view: false,
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
    }
  }
})