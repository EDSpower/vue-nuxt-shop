<!--
 * @Author: EDSPower
 * @Date: 2024-05-08 11:01:25
 * @LastEditTime: 2024-05-11 10:54:28
 * @LastEditors: EDSPower
 * @FilePath: \vue-nuxt\pages\index\index.vue
 * 766782971@qq.com
-->
<script lang="ts" setup>
const shopData = reactive<{ list: any[] }>({ list: [] });
const { data } = await useFetch<any>(
  'https://api.airmart.vip/unx/home/match/v3/search?page=0&limit=4&queryGroups=[["type","in",[1,4,5]],["category_id","eq","6512a55f300ae8005d43a7fe"],["module_id","eq","6512a55f300ae8005d43a806"]]'
);
if (data.value) {
  shopData.list = data.value.data.list;
}
</script>
<template>
  <div class="page-index">
    <div class="poster">
      <img class="poster-img" src="~/assets/imgs/images.png" />
      <div class="desc-box">
        <p class="desc-text-1">Just landed.</p>
        <p class="desc-text-2">The New Year Collection</p>
        <p class="desc-text-3">
          Our latest collection is here. Discover the latest trends and styles
          for the new year.
        </p>
        <button class="buy-btn btn-touch">Shop now</button>
      </div>
    </div>
    <div class="shop-list max-width">
      <div class="list-top">
        <p class="top-title">Shop by Category</p>
        <p class="top-all">view all</p>
      </div>
      <ul class="list-content">
        <li v-for="item in shopData.list" :key="item" class="list-li">
          <img
            class="li-img"
            :src="item.item.cover || item.item.img"
            :alt="item.item.name"
          />
          <p class="li-text">{{ item.item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.page-index {
  .poster {
    position: relative;
    margin-bottom: 20px;
    .poster-img {
      @apply w-full h-420px lg:h-560px lgg:h-640px;
      object-fit: cover;
    }
    .desc-box {
      @apply pos-absolute;
      bottom: 80px;
      left: 40px;
      .desc-text-1 {
        font-size: 60px;
        font-weight: bold;
        color: $fontColor1;
      }
      .desc-text-2 {
        margin: 16px 0;
        font-size: 30px;
        font-weight: bold;
        color: $fontColor1;
      }
      .desc-text-3 {
        width: 400px;
        font-size: 18px;
        color: $fontColor1;
        margin-bottom: 28px;
      }
      .buy-btn {
        color: #fff;
        background-color: $fontColor1;
        width: 130px;
        height: 50px;
        border-radius: 10px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .shop-list {
    .list-top {
      @apply flex items-center justify-between;
      .top-title {
        color: $fontColor1;
        font-size: 28px;
        font-weight: bold;
      }
      .top-all {
        color: $fontColor2;
      }
    }
    .list-content {
      // @apply grid my-24 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
      @apply grid  gap-4 grid-cols-2 md:grid-cols-4 pl-0;
      .list-li {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        .li-img {
          display: block;
          margin: 0 auto;
          height: 260px;
          object-fit: cover;
        }
        .li-text {
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translate(-50%);
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
