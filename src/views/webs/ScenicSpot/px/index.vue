<template>
  <div>
    <van-nav-bar title="萍乡武功山旅游指南" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <h2>交通指南-怎么来武功山</h2>
      <p>武功山交通便利，飞机、高铁、火车、汽车和自驾都能方便快捷到达。到达萍乡市区后，有直达武功山的专线旅游巴士，您可在萍乡北站（高铁站）和萍乡长途汽车站（萍乡火车站斜对面）乘坐，或者租车也可以。</p>
      <!-- 更多内容请按照以上格式继续添加 -->
      <img src="@/assets/img/front/ScenicSpot/px地图.jpg" alt="图片1">
      <h2>观光指南-游在武功山</h2>
      <p>武功山最高峰白鹤峰(金顶)海拔有1918.3米，由于海拔之高每条路线所见的风景都不同，要提前看好路线，合理规划时间，不错过好风景。武功山地图请收好！</p>
      <img src="@/assets/img/front/ScenicSpot/px地图1.jpg" alt="图片2">
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

