/*
 * @Author: EDSPower
 * @Date: 2024-05-07 20:13:31
 * @LastEditTime: 2024-05-11 11:24:01
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
          additionalData: `@use "~/assets/scss/_var.scss" as *;@use "~/assets/scss/global.scss" as *;`,
        },
      },
    },
  },
});