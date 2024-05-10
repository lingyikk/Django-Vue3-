<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img src="@/assets/img/front/recommend/recommend_hotel1.jpg" alt="">
      </div>
      <div class="info">
        <div class="list-name">武功山君澜温泉酒店</div>
        <div class="list-location">江西萍乡芦溪武功山风景区 </div>
        <div class="list-data">
          <span class="list-price">￥128</span>
          <span class="list-sales">销量12</span>
        </div>
      </div>
    </div>
  </div>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img src="@/assets/img/front/recommend/recommend_hotel2.jpg" alt="">
      </div>
      <div class="info">
        <div class="list-name">武功山飞来钱山庄</div>
        <div class="list-location">武功山风景名胜区游客服务中心 </div>
        <div class="list-data">
          <span class="list-price">￥108</span>
          <span class="list-sales">销量32</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  float: left;

  .item-inner {
    margin: 15px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      height: 120px;

      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }

    .info {
      padding: 8px 10px;
      color: #666;
      font-size: 12px;
    }

    .list-name {
      margin: 5px 0;
      font-size: 14px;
      color: #333;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .list-data {
      position: relative;
      margin-top: 10px;

      .list-price {
        color: #ff9645;
        font-size: 14px;
      }

      .list-sales {
        position: absolute;
        right: 0px;
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
      }
    }
  }
}
</style>