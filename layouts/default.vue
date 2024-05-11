<!--
 * @Author: EDSPower
 * @Date: 2024-05-08 11:10:18
 * @LastEditTime: 2024-05-09 10:54:13
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\layouts\default.vue
 * 766782971@qq.com
-->
<template>
  <div class="layout-content">
    <div class="header max-width">
      <Icon class="sider-icon" name="uim:bars" />
      <div class="logo-box">
        <Icon class="logo-icon" name="uim:adobe-alt" color="pink" />
        <p class="logo-text">WinNuxt</p>
      </div>
      <ul class="nav_ul">
        <li class="nav_li btn-touch">Home</li>
        <li class="nav_li btn-touch">Products</li>
        <li class="nav_li btn-touch">Categories</li>
        <li class="nav_li btn-touch">Contact</li>
      </ul>
      <div class="heandle-box">
        <input
          type="text"
          class="search-input"
          placeholder="Search Products..."
        />
        <Icon
          class="heandle-icon btn-touch"
          name="gravity-ui:person"
          color="black"
        />
        <Icon
          class="heandle-icon btn-touch"
          name="nimbus:shopping-cart"
          color="black"
        />
      </div>
    </div>
    <slot />
  </div>
</template>
<style lang="scss">
.layout-content {
  .header {
    // @apply flex items-center justify-between px-30px xs:px-10px lg:px-80px;
    @apply flex items-center justify-between px-10px;
    height: 50.5px;
    .sider-icon {
      @apply lg:hidden;
      width: 30px;
      height: 30px;
    }
    .logo-box {
      @apply flex items-center;
      .logo-icon {
        width: 30px;
        height: 30px;
      }
      .logo-text {
        margin-left: 4px;
        font-weight: bold;
        font-size: 18px;
        color: $fontColor1;
      }
    }
    .nav_ul {
      @apply hidden lg:flex items-center;
      .nav_li {
        margin-left: 20px;
        color: $fontColor2;
      }
    }
    .heandle-box {
      @apply flex flex-1 items-center justify-end  h-40px gap-6px;
      .search-input {
        @apply hidden sm:block md:block;
      }
      .heandle-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
