// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: ["@/assets/styles/main.scss"],
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores"],
  },
});
