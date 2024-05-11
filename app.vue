<!--
 * @Author: EDSPower
 * @Date: 2024-05-07 20:13:31
 * @LastEditTime: 2024-05-08 14:26:06
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\app.vue
 * 766782971@qq.com
-->
<script setup lang="ts">
import "@unocss/reset/normalize.css";
import "@/assets/scss/global.scss";
</script>

<template>
  <NuxtLayout>
    <div>
      <!-- 加载进度条 -->
      <NuxtLoadingIndicator />
      <!-- 页面路由入口 -->
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
