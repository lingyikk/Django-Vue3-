<template>
  <div>
    <van-nav-bar title="特产列表" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
  <van-card price="180.00" desc="武功山蜂蜜仔姜" title="武功山蜂蜜仔姜" :thumb="images[0]">
    <template #tags>
      <van-tag plain type="primary">食品</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(1)">购买商品</van-button>
    </template>
  </van-card>
  <van-card price="120.00" desc="萍乡土麻哩盐果子" title="萍乡土麻哩盐果子" :thumb="images[1]">
    <template #tags>
      <van-tag plain type="primary">食品</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(2)">购买商品</van-button>
    </template>
  </van-card>
  <van-card price="180.00" desc="武功山甜酿" title="武功山甜酿" :thumb="images[2]">
    <template #tags>
      <van-tag plain type="primary">食品</van-tag>
    </template>
    <template #footer>
      <van-button @click="confirm(3)">购买商品</van-button>
    </template>
  </van-card>
</template>

<script setup>
import { postProductOrder } from '@/service/modules/admin/ProductOrder.js'
import { showSuccessToast, showFailToast, showConfirmDialog } from 'vant';
import { ref, reactive, onMounted } from 'vue'
const onClickLeft = () => history.back();

const thumbImage = ref('');

// // 导入图片资源
// import('@/assets/img/front/recommend/recommend_hotel1.jpg').then((image) => {
//   thumbImage.value = image.default;
// });

const images = ref([]);

onMounted(async () => {
  const imageFiles = import.meta.globEager('@/assets/img/front/product/*.jpg');

  for (const path in imageFiles) {
    const imagePath = path.substring(2); // 去除前缀“./”
    const image = imageFiles[path].default;
    images.value.push(image);
  }
});

const product = [
  '武功山蜂蜜仔姜',
  '萍乡土麻哩盐果子（果蔬干）',
  '武功山甜酿'
]

const Pprice = [
  58,
  65,
  88
]



// 价格
const quantity = ref(1);
const price = ref(60)
const total_price = ref(60)
const status = ref('已取消')

// 提交数据
const userOrder = reactive({
  "user": localStorage.getItem('username'),
  "product": "武功山蜂蜜仔姜",
  "quantity": quantity.value,
  "total_price": total_price.value,
  "status": status.value
})

const confirm = (index) => {
  userOrder.total_price = Pprice[index - 1]
  userOrder.product = product[index - 1]

  showConfirmDialog({
    title: '购买商品',
    message:
      '请确认付款',
  })
    .then(() => {
      // 提交成功后执行
      showSuccessToast('付款成功');
      userOrder.status = '已支付'
      console.log(userOrder);
      postProductOrder(userOrder).then(res => {
        console.log(res);
      })

    })
    .catch(() => {
      showSuccessToast('付款失败');
      userOrder.status = '已取消'
      console.log(userOrder);
      postProductOrder(userOrder).then(res => {
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
