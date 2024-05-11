/*
 * @Author: EDSPower
 * @Date: 2024-05-08 13:59:49
 * @LastEditTime: 2024-05-09 10:51:51
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\uno.config.ts
 * 766782971@qq.com
 */
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
    breakpoints: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgg: "1400px",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
