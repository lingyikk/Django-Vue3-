<template>
  <div>
    <van-nav-bar title="羊狮幕旅游指南" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <h2>交通指南-怎么来羊狮幕</h2>
      <p>景区位置：
中国>江西省>吉安市>安福县>江西安福高新技术产业园区
到达方式：
吉安市—安福县—横龙镇—严田镇—泰山乡-文家村社边组-羊狮慕南福门游客中心
宜春市—温汤镇—明月山景区广场—明月山索道—高山小火车—羊狮慕风景区</p>
      <!-- 更多内容请按照以上格式继续添加 -->
      <img src="@/assets/img/front/ScenicSpot/ysm地图2.jpeg" alt="图片1">
      <h2>观光指南-游在羊狮幕</h2>
      <p>
1. 自然风光：羊狮慕景区的山水风光秀美，有着壮观的瀑布、清澈的溪流和奇特的石林景观。游览路线包括观光栈道、悬空吊桥和悬崖栈道等，可以欣赏到景区的全景。
2. 人文景观：景区内有许多古建筑和寺庙，如天门寺、古井、天门洞等，有着悠久的历史和文化底蕴。此外，还可以参观当地的民俗文化村，了解当地的风俗习惯和民族信仰。</p>
      <img src="@/assets/img/front/ScenicSpot/ysm地图1.png" alt="图片2">
      <!-- 更多内容请按照以上格式继续添加 -->
    </div>
  </div>
</template>

<script setup>

const onClickLeft = () => history.back();

</script>

<style scoped>
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  margin-top: 10px;
  color: #333;
  font-size: 24px;
}

p {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}</style>

