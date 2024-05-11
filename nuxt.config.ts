/*
 * @Author: EDSPower
 * @Date: 2024-05-07 20:13:31
 * @LastEditTime: 2024-05-11 13:37:17
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\nuxt.config.ts
 * 766782971@qq.com
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@pinia/nuxt", "nuxt-icon"],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '$fontColor1: #111827; $fontColor2: #6b7280;',
        },
      },
    },
  },
});
