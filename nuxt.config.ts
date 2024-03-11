// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    jwtAccessSecret: process.env.ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.REFRESH_TOKEN_SECRET
  }
})
