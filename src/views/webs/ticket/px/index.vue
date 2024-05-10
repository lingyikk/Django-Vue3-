<template>
  <div>
    <van-nav-bar title="萍乡武功山景区门票" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="banner">
      <img src="@/assets/img/front/home/banner.png" alt="" />
    </div>
    <div class="ticket">
      <div class="title">
        <h4>萍乡武功山风景名胜区</h4>
        <p>武功山是江西省西部旅游资源最为丰富的大型山岳型风景名胜区</p>
      </div>
      <div class="time">
        开园时间：08:00-17:00
      </div>
      <div class="location">
        江西省萍乡市武功山国家级风景名胜区
      </div>
    </div>
    <div class="index">
      <h2>武功山门票</h2>
      <div class="price">
        <h4>门票价格</h4>
        <span class="right">￥{{ userOrder.total_price }}</span>
      </div>
      <div class="count">
        <h4>门票份数</h4>
        <van-stepper v-model="userOrder.quantity" theme="round" button-size="22" disable-input class="stepper" @change="change()" />
      </div>
      <div class="datatime">
        <van-cell title="日期选择" :value="date" @click="show = true" class="times"
          style="font-size: 16px; padding: 0; font-weight: 600;" />
        <van-calendar v-model:show="show" @confirm="onConfirm" />
      </div>
    </div>

    <h2 class="recommend">推荐酒店</h2>
    <div class="content">
      <recommend />
    </div>

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-action-bar-button type="danger" text="购买门票" @click="onClickButton" />
    </van-action-bar>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue';
import { showSuccessToast, showFailToast, showConfirmDialog } from 'vant';
import recommend from '../child/recommend.vue'
import { postScenicSpotOrder } from '../../../../service/modules/admin/ScenicSpotOrder.js'


const onClickLeft = () => history.back();

// 选择日期
const currentDate = ref(new Date());
const getCurrentTime = () => {
  currentDate.value = new Date();
};
getCurrentTime();
const date = ref(currentDate.value.getMonth() + 1 + '月' + currentDate.value.getDate() + '日');
const show = ref(false);

const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;
const onConfirm = (value) => {
  show.value = false;
  date.value = formatDate(value);
};

// 价格
const quantity = ref(1);
const price = ref(60)
const total_price = ref(60)
const change = () => {
  userOrder.total_price = price.value * userOrder.quantity
}
const status = ref('已取消')

// 提交数据
const userOrder = reactive({
  "user": localStorage.getItem('username'),
  "ScenicSpot": "萍乡武功山景区",
  "quantity": quantity.value,
  "total_price": total_price.value,
  "status": status.value
})

// 付款
const onClickButton = (() => {
  showConfirmDialog({
    title: '景区门票',
    message:
      '请确认付款',
  })
    .then(() => {
      // 提交成功后执行
      showSuccessToast('付款成功');
      userOrder.status = '已支付'
      postScenicSpotOrder(userOrder).then(res=>{
        console.log(res);
      })
      quantity.value = 1;
      date.value = '';
    })
    .catch(() => {
      showSuccessToast('付款失败');
      userOrder.status = '已取消'
      postScenicSpotOrder(userOrder).then(res=>{
        console.log(res);
      })
      quantity.value = 1;
      date.value = '';
    });
})



// // 监听 quantity 和 total_price 的变化，更新 userOrder 中对应的值
// watch([quantity, total_price], ([newQuantity, newTotalPrice]) => {
//   userOrder.value.quantity = newQuantity;
//   userOrder.value.total_price = newTotalPrice;
// });

// // 监听 status 的变化，更新 userOrder 中的 status
// watch(status, (newStatus) => {
//   userOrder.value.status = newStatus;
// });


// const userOrder = {
//   "user": localStorage.getItem('username'),
//   "ScenicSpot": "萍乡武功山景区",
//   "quantity": 5,
//   "total_price": 5,
//   "status": status.value
// }


</script>

<style scoped lang="less">
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}

.content {
  background-color: #f5f7f9;
  --van-tabs-bottom-bar-color: var(--primary-color);
}

.recommend {
  margin: 15px
}

.banner {
    height: 200px;
    overflow: hidden; 
  }

  .banner img {
    width: 100%;
    height: 200px;
    object-fit: cover; 
  }

.ticket {
  background-color: #fff;
  border-bottom: 10px solid #eaeff8;

  .title {
    padding: 10px 15px 15px;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;

    h4 {
      font-size: 18px;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      color: #999;
      margin-top: 5px;
    }
  }

  .time {
    padding: 10px 15px 15px;
    border-bottom: 1px solid #e2e2e2;
  }

  .location {
    padding: 10px 15px 15px;
  }
}

.index {
  padding: 10px 15px 15px;

  .price {
    position: relative;
    margin-top: 10px;

    .right {
      position: absolute;
      top: 0;
      right: 0;
      color: #ff9854;
      font-weight: 700;
      font-size: 16px;
    }
  }

  .count {
    margin-top: 10px;
  }

  .datatime {
    margin-top: 10px;

    .times {
      font-size: 18px;

      :deep(.van-nav-bar__title) {
        --van-nav-bar-title-text-color: var(--primary-color);
        --van-font-bold: 600;
      }
    }
  }

  .count {
    position: relative;

    .stepper {
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }


  .van-cell__value {
    color: red;
  }
}
</style>