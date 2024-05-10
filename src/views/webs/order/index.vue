<template>
  <div>
    <van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
  <van-tabs v-model:active="active">
    <van-tab title="全部">
      <template v-for="item in orderInfo?.all_orders">
        <van-card :price="item.total_price"
          :num="item.quantity"
          :desc="'订单时间：' + item.order_date"
          :title="istitle(item)">
          <template #tags>
          <van-tag plain type="primary">{{ item.status }}</van-tag>
        </template>
        </van-card>
      </template>
    </van-tab>
    <van-tab title="已取消">
      <template v-for="item in orderInfo?.cancelled_orders">
        <van-card :price="item.total_price"
          :num="item.quantity"
          :desc="'订单时间：' + item.order_date"
          :title="istitle(item)">
          <template #tags>
          <van-tag plain type="primary">{{ item.status }}</van-tag>
        </template>
        </van-card>
      </template>
    </van-tab>  
    <van-tab title="已完成">
      <template v-for="item in orderInfo?.paid_orders">
        <van-card :price="item.total_price"
          :num="item.quantity"
          :desc="'订单时间：' + item.order_date"
          :title="istitle(item)">
          <template #tags>
          <van-tag plain type="primary">{{ item.status }}</van-tag>
        </template>
        </van-card>
      </template>
    </van-tab>
  </van-tabs>


  <!-- <van-tabs v-model:active="active">
    <van-tab title="全部">
      <van-card price="180.00"
        desc="酒店坐落于江西萍乡芦溪武功山风景区，距320国道13分钟车程，芦溪县城15分钟车程，沪瑞高速30分钟车程，萍乡市城区40分钟车程，沪昆高铁萍乡站1小时车程，距长沙黄花机场2小时车程。芦溪县内的景点"
        title="武功山君澜温泉度假酒店" :thumb="images[6]">
        <template #tags>
          <van-tag plain type="primary">酒店</van-tag>
          <van-tag plain type="primary">舒适型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已完成
          </van-button>
        </template>
      </van-card>
      <van-card price="120.00" desc="武功山风景名胜区游客服务中心" title="武功山飞来钱山庄" :thumb="images[7]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">经济型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已完成
          </van-button>
        </template>
      </van-card>
      <van-card price="180.00" desc="萍乡市芦溪麻田大江边村，武功山游客服务中心附近" title="芸阁·朴宿" :thumb="images[0]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">舒适型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已完成
          </van-button>
        </template>
      </van-card>
      <van-card price="120.00" desc="武功山风景名胜区游客服务中心" title="武功山飞来钱山庄" :thumb="images[7]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">经济型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已取消
          </van-button>
        </template>
      </van-card>
      <van-card price="180.00" desc="萍乡市芦溪麻田大江边村，武功山游客服务中心附近" title="芸阁·朴宿" :thumb="images[0]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">舒适型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已取消
          </van-button>
        </template>
      </van-card>
    </van-tab>
    <van-tab title="取消">
      <van-card price="120.00" desc="武功山风景名胜区游客服务中心" title="武功山飞来钱山庄" :thumb="images[7]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">经济型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已取消
          </van-button>
        </template>
      </van-card>
      <van-card price="180.00" desc="萍乡市芦溪麻田大江边村，武功山游客服务中心附近" title="芸阁·朴宿" :thumb="images[0]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">舒适型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已取消
          </van-button>
        </template>
      </van-card>
    </van-tab>
    <van-tab title="已完成">
      <van-card price="180.00"
        desc="酒店坐落于江西萍乡芦溪武功山风景区，距320国道13分钟车程，芦溪县城15分钟车程，沪瑞高速30分钟车程，萍乡市城区40分钟车程，沪昆高铁萍乡站1小时车程，距长沙黄花机场2小时车程。芦溪县内的景点"
        title="武功山君澜温泉度假酒店" :thumb="images[6]">
        <template #tags>
          <van-tag plain type="primary">酒店</van-tag>
          <van-tag plain type="primary">舒适型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已完成
          </van-button>
        </template>
      </van-card>
      <van-card price="120.00" desc="武功山风景名胜区游客服务中心" title="武功山飞来钱山庄" :thumb="images[7]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">经济型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已完成
          </van-button>
        </template>
      </van-card>
      <van-card price="180.00" desc="萍乡市芦溪麻田大江边村，武功山游客服务中心附近" title="芸阁·朴宿" :thumb="images[0]">
        <template #tags>
          <van-tag plain type="primary">民宿</van-tag>
          <van-tag plain type="primary">舒适型</van-tag>
        </template>
        <template #footer>
          <van-button style="color: #ff9854; font-weight: 700; font-size: 16px;">
            已完成
          </van-button>
        </template>
      </van-card>
    </van-tab>
  </van-tabs> -->
</template>

<script setup>
import { getAllOrder } from '@/service/modules/web/order'
import { showSuccessToast, showFailToast, showConfirmDialog } from 'vant';
import { ref, reactive, onMounted } from 'vue'
const onClickLeft = () => history.back();

// 网络请求
const orderInfo = ref()
const username = localStorage.getItem('username')
onMounted(() => {
  getAllOrder(username).then(res => {
    orderInfo.value = res
    console.log(res);
  })
})

const istitle = (item) =>{
  if(item.ScenicSpot__name){
    return item.ScenicSpot__name
  }
  else if(item.hotel__name){
    return item.hotel__name
  }
  else {
    return item.product__name
  } 
}

const thumbImage = ref('');

const active = ref(0);

const images = ref([]);

onMounted(async () => {
  const imageFiles = import.meta.globEager('@/assets/img/front/hotel/*.jpg');

  for (const path in imageFiles) {
    const imagePath = path.substring(2); // 去除前缀“./”
    const image = imageFiles[path].default;
    images.value.push(image);
  }
  console.log(images.value[0]);
});
const confirm = () => {
  showConfirmDialog({
    title: '预订酒店',
    message:
      '请确认付款',
  })
    .then(() => {
      // 提交成功后执行
      showSuccessToast('付款成功');
    })
    .catch(() => {
      showSuccessToast('付款失败');
    });

}

</script>

<style scoped>
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}


</style>
