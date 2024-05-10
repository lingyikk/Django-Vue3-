<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" router active-color="#ff9854">
      <template v-for="(items,index) in tabbar_date">
        <van-tabbar-item badge="" replace :to=items.path>
          <span>{{items.text}}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(items.img)" />
            <img v-else="currentIndex !== index" :src="getAssetURL(items.imgActive)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbar_date from "@/assets/js/tabbar.js";

// 使用URL类实例来动态加载静态资源 ---> 将其src路径进行拼接
import getAssetURL from "../../../utils/getAssetURL";

import { toRef } from "vue";

const currentIndex = toRef(0);

</script>

<style lang="less" scoped>
.tab-bar{
  img{
    height: 28px;
  }
}
</style>