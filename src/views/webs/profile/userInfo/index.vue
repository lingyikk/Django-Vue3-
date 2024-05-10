<template>
  <div>
    <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名" />
        <van-field v-model="password" type="passwords" name="password" label="密码" placeholder="密码" />
        <van-field v-model="email" type="email" name="email" label="邮箱" placeholder="邮箱" />
        <van-field v-model="phone_number" type="phone" name="phone_number" label="手机号码" placeholder="手机号码" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
  
<script setup>
import { searchUser,updataUser } from '@/service/modules/admin/User.js'
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import infoStore from '@/stores/modules/web/info.js'
import { showToast } from 'vant';

const router = useRouter();
const onClickLeft = () => history.back();

const username = ref('');
const password = ref('');
const email = ref('');
const phone_number = ref('');

const user = ref()
username.value = localStorage.getItem('username')
onMounted(() => {
  searchUser(username.value)
  .then(res => {
    user.value = res[0]
    console.log(user.value);
    username.value = user.value.username
    password.value = user.value.password
    email.value = user.value.email
    phone_number.value = user.value.phone_number
  })
  .catch(err=>{
    console.log(err);
  })
})

const onSubmit = (values) => {
  updataUser(user.value.id, values)
  .then(res=>{
    console.log(res);
    showToast('提交成功');
    if(!res) showToast('提交失败');
  })
  .catch(err=>{
    showToast('提交失败');
  })
};


</script>
  
<style scoped lang="less">
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}
</style>
  