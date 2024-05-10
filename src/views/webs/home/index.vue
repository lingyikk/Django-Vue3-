<template>
  <div class="home">
    <van-nav-bar title="江西武功山旅游" />
    <div class="banner">
      <img src="@/assets/img/front/home/banner.png" alt="" />
    </div>
    <div class="inlet">
      <a href="/api/ticket/" class="ReItems">
        <el-icon :size="30" color="#ff9854">
          <Tickets />
        </el-icon>
        <span class="homeText">景区门票</span>
      </a>
      <a href="/api/ScenicSpot/" class="ReItems">
        <el-icon :size="30" color="#ff9854">
          <Guide />
        </el-icon>
        <span class="homeText">景区指南</span>
      </a>
      <a href="/api/hotel/" class="ReItems">
        <el-icon :size="30" color="#ff9854">
          <School />
        </el-icon>
        <span class="homeText">酒店</span>
      </a>
      <a href="/api/product/" class="ReItems">
        <el-icon :size="30" color="#ff9854">
          <ShoppingBag />
        </el-icon>
        <span class="homeText">特产</span>
      </a>
    </div>
    <h2 class="title">推荐酒店</h2>
    <div class="content">
      <recommend />
    </div>
    <h2 class="title">推荐特产</h2>
    <div class="content">
      <productRecommend/>
    </div>
    <div class="floot"></div>
  </div>
</template>

<script setup>
import recommend from './child/recommend.vue'
import productRecommend from './child/productRecommend.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter();
const ScenicSpot = (()=>{
  route.push("/api/ScenicSpot/")
})

</script>


<style lang="less" scoped>
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}


.banner {
  img {
    width: 100%;
  }
}

.content {
  background-color: #f5f7f9;
  --van-tabs-bottom-bar-color: var(--primary-color);
}

.inlet {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  font-size: 12px;
}


.inlet .ReItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #525252;
}

.inlet .ReItems el-icon {
  width: 32px;
  height: 32px;
}

.inlet .ReItems .homeText {
  line-height: 1.2;
  font-size: 12px;
  margin-top: 8px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
}
.title{
  margin-left: 20px;
  background: #f5f7f9;
}

.floot{
  margin-bottom: 50px;
}
</style> 