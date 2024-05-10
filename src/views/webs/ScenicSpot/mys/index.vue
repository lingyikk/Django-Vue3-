<template>
  <div>
    <van-nav-bar title="明月山旅游指南" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <h2>交通指南-怎么来明月山</h2>
      <p>自驾车：

1、湖南、萍乡方向的自驾车游客，可在沪昆高速西村路口(出口)下高速，行驶至320国道沙田，再往温沙公路便可至温汤；
2、南昌、上海方向的自驾车游客，可在沪昆高速宜春(出口)下高速，可经城区环城西路、环城南路后，经明月大道可至温汤；
3、湖北、广东方向的自驾车游客，可沿大广高速互通至沪昆高速宜春方向（出口)下高速。



宜春城区出发可在宜春老火车站直上高架桥(或宜春明月北路往南)，直通明月大道抵达明月山温汤镇； 

公交车：在宜春高铁站乘K113、K115公交（K115只到达明月山温汤镇，K113可到达明月山山脚下），老火车站高架桥下有K116，K118公交（K116只到达明月山温汤镇，K118可到达明月山山脚下）,公交车程时间：火车站至温汤镇需约30分钟左右，温汤镇再到景区约25分钟左右。</p>
      <!-- 更多内容请按照以上格式继续添加 -->
      <img src="@/assets/img/front/ScenicSpot/mys地图2.jpg" alt="图片1">
      <h2>明月山旅游区景区景点导览</h2>
      <p>明月山旅游区包括明月广场、云姑沐月、竹林月影、咏月碑林、月之路、新月桂园、荷塘月色、二泉印月、月柳黄昏、生肖闹月、月亮街、晃月桥、抱月亭、浸月潭、月下老人、拜月坛、月亮湖、星月洞等月亮文化主题景点</p>
      <img src="@/assets/img/front/ScenicSpot/mys地图1.jpg" alt="图片2">
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

