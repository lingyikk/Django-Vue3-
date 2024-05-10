<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="list.img">
      </div>
      <div class="info">
        <div class="list-name">{{ list.name }}</div>
        <div class="list-location">{{ list.location }}</div>
        <div class="list-data">
          <span class="list-price">￥{{ list.price }}</span>
          <span class="list-sales">销售额34</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  list: {
    default: 'edit',
    type: Object,
  },
});


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
      img {
        width: 100%;
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

    .list-location {
      overflow: hidden;
    }

    .list-data {
      position: relative;
      margin-top: 5px;

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