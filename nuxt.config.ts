// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: "light",
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  ssr: false,
  icon: {
    serverBundle: "remote",
    localApiEndpoint: "/icon",
  },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/icon", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      BACK_URL: process.env.NUXT_PUBLIC_BACK_URL,
      BACK_ADMIN_URL: process.env.NUXT_PUBLIC_BACK_ADMIN_URL,
    },
  },

  compatibilityDate: "2024-09-15",
});
