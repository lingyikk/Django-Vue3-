<template>
  <div>
    <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="top">
      <img :src="thumbImage" alt="" style="width: 100%; height: 170px; object-fit: cover; ">
      <div class="username">
        <div class="tx">
          <van-icon name="user" size="30px" color="#aaa" />
        </div>
        <h4>{{ username}}</h4>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="个人信息" value=">" @click="UserInfo"/>
      <van-cell title="常用联系人" value=">" @click="contact"/>
      <van-cell title="预售订单" value=">" />
      <van-cell title="我的票券" value=">" />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const onClickLeft = () => history.back();

const username = ref(localStorage.getItem('username'))

const thumbImage = ref('');
import('@/assets/img/admin/wsg_blackground.jpg')
  .then((image) => {
    thumbImage.value = image.default;
  });

const UserInfo = () =>{
  router.push('/api/profile/userInfo')
}

const contact = () => {
  router.push('/api/profile/contact')
}

</script>

<style scoped lang="less">
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}

.top {
  position: relative;

  .username {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;

    .tx {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 50px;
      height: 50px;
      background-color: #dadada;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border: 3px solid #fff;
    }

    h4 {
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translate(-50%);
      color: #fff;
    }
  }


}
</style>
