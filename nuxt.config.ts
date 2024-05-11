/*
 * @Author: EDSPower
 * @Date: 2024-05-07 20:13:31
 * @LastEditTime: 2024-05-08 16:37:09
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\nuxt.config.ts
 * 766782971@qq.com
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@pinia/nuxt", "nuxt-icon"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/_var.scss"; @import "@/assets/scss/global.scss";`,
        },
      },
    },
  },
});