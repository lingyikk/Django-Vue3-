<template>
  <van-nav-bar title="江西武功山旅游" left-text="返回" left-arrow @click-left="onClickLeft" />
  <a class="item" href="/api/ScenicSpot/px/">
    <div class="img">
      <img src="@/assets/img/front/ScenicSpot/px.jpeg" alt="">
    </div>
    <div class="right">
      <h3>萍乡武功山</h3>
      <p>5A景区</p>
      <p>开园时间: 00:00-23:59</p>
      <p class="location">地址: 萍乡市</p>
    </div>
  </a>
  <a class="item" href="/api/ScenicSpot/mys/">
    <div class="img">
      <img src="@/assets/img/front/ScenicSpot/mys.jpg" alt="">
    </div>
    <div class="right">
      <h3>明月山</h3>
      <p>5A景区</p>
      <p>开园时间: 00:00-23:59</p>
      <p class="location">地址: 宜春市</p>
    </div>
  </a>
  <a class="item" href="/api/ScenicSpot/ysm/">
    <div class="img">
      <img src="@/assets/img/front/ScenicSpot/ysm.jpg" alt="">
    </div>
    <div class="right">
      <h3>羊狮幕</h3>
      <p>4A景区</p>
      <p>开园时间: 00:00-23:59</p>
      <p class="location">地址: 吉安市</p>
    </div>
  </a>
</template>

<script setup>

const onClickLeft = () => history.back();
</script>


<style scoped lang="less">
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}

.item {
  display: block;
  position: relative;
  margin: 5px 16px;
  height: 130px;
  

  .img {
    width: 180px;
    height: 180px;
    overflow: hidden;
    border-radius: 6px;


    img {
      width: 90%;
      height: 60%;
      border-radius: 6px;
      object-fit: cover;
      object-position: center;
    }
  }

  .right {
    position: absolute;
    right: 15px;
    top: 10px;
    color: #000;
    h3{
      margin-bottom: 5px;
    }
    p{
      color: #606060;
      font-size: 14px;
    }
    .location{
      margin-top: 10px;
    }
  }
}</style>