<template>
  <div class="tab-bar">
    <template v-for="(items, index) in tabbar_date" key="items.text">
      <div class="tabbar-items" @click="tabToggle(items,index)">
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(items.img)"
          alt=""
          class="tabbar-img"
        />
        <img v-else :src="getAssetURL(items.imgActive)" alt="" class="tabbar-img" />
        <span class="tabbar-text" :class="{ active: currentIndex === index }">{{
          items.text
        }}</span>
      </div>
    </template>
 
  </div>
</template>

<script setup>
import tabbar_date from "@/assets/js/tabbar.js";

// 使用URL类实例来动态加载静态资源 ---> 将其src路径进行拼接
import getAssetURL from "../../utils/getAssetURL";

import { toRef } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const currentIndex = toRef(0);

function tabToggle(items, index) {
  currentIndex.value = index;
  router.push(items.path);
}


</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tabbar-items {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .tabbar-text {
      margin-top: 4px;
      flex: 1;
      font-size: 2px;

      &.active {
        color: var(--primary-color);
      }
    }
    .tabbar-img {
      margin-top: 2px;
      width: 34px;
    }
  }
}
</style>