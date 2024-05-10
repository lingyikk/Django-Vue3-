<template>
  <div>
    <van-nav-bar title="酒店列表" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
  <van-card price="180.00"
    desc="酒店坐落于江西萍乡芦溪武功山风景区，距320国道13分钟车程，芦溪县城15分钟车程，沪瑞高速30分钟车程，萍乡市城区40分钟车程，沪昆高铁萍乡站1小时车程，距长沙黄花机场2小时车程。芦溪县内的景点"
    title="武功山君澜温泉度假酒店" :thumb="images[6]">
    <template #tags>
      <van-tag plain type="primary">酒店</van-tag>
      <van-tag plain type="primary">舒适型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(1)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="120.00" desc="武功山风景名胜区游客服务中心" title="武功山飞来钱山庄" :thumb="images[7]">
    <template #tags>
      <van-tag plain type="primary">民宿</van-tag>
      <van-tag plain type="primary">经济型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(2)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="180.00" desc="萍乡市芦溪麻田大江边村，武功山游客服务中心附近" title="芸阁·朴宿" :thumb="images[0]">
    <template #tags>
      <van-tag plain type="primary">民宿</van-tag>
      <van-tag plain type="primary">舒适型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(3)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="140.00" desc="武功山风景名胜区龙王潭村潭里组" title="武功山丽森酒店" :thumb="images[1]">
    <template #tags>
      <van-tag plain type="primary">民宿</van-tag>
      <van-tag plain type="primary">经济型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(4)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="360.00" desc="江西省萍乡市芦溪县芦溪镇日江东路10号" title="格林联盟酒店" :thumb="images[2]">
    <template #tags>
      <van-tag plain type="primary">酒店</van-tag>
      <van-tag plain type="primary">舒适型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(5)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="220.00" desc="江西省萍乡市芦溪县武功山国家级风景名胜区" title="武功山豪锦丽嘉" :thumb="images[3]">
    <template #tags>
      <van-tag plain type="primary">酒店</van-tag>
      <van-tag plain type="primary">舒适型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(6)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="260.00" desc="芦溪新泉乡麻田办大江边村武功山滑草场" title="武功山滑草场星空帐篷酒店" :thumb="images[4]">
    <template #tags>
      <van-tag plain type="primary">酒店</van-tag>
      <van-tag plain type="primary">舒适型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(7)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
  <van-card price="280.00" desc="武功山游客服务中心往上30米" title="武功山喜相逢酒店" :thumb="images[5]">
    <template #tags>
      <van-tag plain type="primary">酒店</van-tag>
      <van-tag plain type="primary">舒适型</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(8)">预订酒店</van-button>
      <!-- <van-button size="mini">按钮</van-button> -->
    </template>
  </van-card>
</template>

<script setup>
import { postHotelOrder } from '../../../service/modules/admin/HotelOrder.js'
import { showSuccessToast, showFailToast, showConfirmDialog } from 'vant';
import { ref, reactive, onMounted } from 'vue'
const onClickLeft = () => history.back();

const thumbImage = ref('');

// 导入图片资源
// import('@/assets/img/front/recommend/recommend_hotel1.jpg').then((image) => {
//   thumbImage.value = image.default;
// });

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

const hotels = reactive([
  "武功山君澜温泉度假酒店",
  "武功山飞来钱山庄",
  "芸阁·朴宿",
  "武功山丽森酒店",
  "格林联盟酒店",
  "武功山豪锦丽嘉",
  "武功山滑草场星空帐篷酒店",
  "武功山喜相逢酒店",
  "武功山豪锦丽嘉"
]);

const price = reactive([
  100.00,
  120.00,
  150.00,
  170.00,
  130.00,
  180.00,
  220.00,
  180.00,
  150.00
])
const quantity = ref(1);

const status = ref('已取消')

// 提交数据
const userOrder = reactive({
  "user": localStorage.getItem('username'),
  "hotel": hotels[0],
  "quantity": 1,
  "total_price": price.value,
  "status": status.value
})

const confirm = (index) => {
  userOrder.hotel = hotels[index - 1]
  userOrder.total_price = price[index - 1]
  
  showConfirmDialog({
    title: '预订酒店',
    message:
      '请确认付款',
  })
    .then(() => {
      // 提交成功后执行
      showSuccessToast('付款成功');
      userOrder.status = '已支付'
      console.log(userOrder);
      postHotelOrder(userOrder).then(res=>{
        console.log(res);
      })
    })
    .catch(() => {
      showSuccessToast('付款失败');
      userOrder.status = '已取消'
      console.log(userOrder);
      postHotelOrder(userOrder).then(res=>{
        console.log(res);
      })
    });

}



</script>

<style scoped>
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}
</style>
