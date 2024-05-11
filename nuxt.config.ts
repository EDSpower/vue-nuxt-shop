/*
 * @Author: EDSPower
 * @Date: 2024-05-07 20:13:31
 * @LastEditTime: 2024-05-11 13:56:19
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\nuxt.config.ts
 * 766782971@qq.com
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  app: {
    baseURL: "/vue-nuxt-shop/",
    buildAssetsDir: "nuxt_assets",
  },
  modules: ["@unocss/nuxt", "@pinia/nuxt", "nuxt-icon"],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_var.scss";',
        },
      },
    },
  },
});
