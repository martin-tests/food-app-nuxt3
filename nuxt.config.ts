// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons'
    ]
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/main.css'],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Inter': true,
        download: true,
        inject: true
      }
    }]
  ],
  typescript: {
    strict: true,
    typeCheck: true
  },
  devtools: {
    enabled: false
  }
})
