<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img src="@/assets/img/front/recommend/recommend_product1.jpg" alt="">
      </div>
      <div class="info">
        <div class="list-name">武功山蜂蜜仔姜</div>
        <div class="list-location">武功山蜂蜜仔姜 </div>
        <div class="list-data">
          <span class="list-price">￥58.00</span>
          <span class="list-sales">销量30</span>
        </div>
      </div>
    </div>
  </div>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img src="@/assets/img/front/recommend/recommend_product2.jpg" alt="">
      </div>
      <div class="info">
        <div class="list-name">武功山甜酿</div>
        <div class="list-location">武功山甜酿 </div>
        <div class="list-data">
          <span class="list-price">￥88.00</span>
          <span class="list-sales">销量13</span>
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

  .item-inner {
    margin: 5px;
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