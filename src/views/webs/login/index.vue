<template>
  <div class="login">
    <div class="input_login" v-if="loggle">
      <h3>武功山旅游登录</h3>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" :error-message="spwErr"/>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <div class="login_info">
        <span @click="isshow">注册</span>
        <span>忘记密码</span>
      </div>
    </div>
    <div class="input_login" v-else>
      <h3>武功山旅游注册</h3>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :error-message="userErr" />
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
            :error-message="pwErr" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
      <div class="login_info">
        <span @click="isshow">登录</span>
        <span>忘记密码</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Toast } from 'vant';
import { LoginUser, registerUser } from '@/service/modules/admin/User.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const username = ref('');
const password = ref('');
const userErr = ref('')
const pwErr = ref('')
const spwErr = ref('')



const onSubmit = (values) => {
  if (!username.value && !password.value) {
    userErr.value = '请填写用户名';
    pwErr.value = '请填写密码';
  } else if (!username.value) {
    userErr.value = '请填写用户名';
    pwErr.value = '';
  } else if (!password.value) {
    pwErr.value = '请填写密码';
    userErr.value = '';
  } else {
    if (loggle.value) {
      LoginUser(values)
        .then(res => {
          console.log(res);
          if (res.isLogin) {
            router.push('api/home')
            localStorage.setItem('username', res.username);
          }
        })
        .catch(err => {
          console.log(err);
          spwErr.value = '用户名或密码错误'
        })
    } else {
      console.log('submit', values);
      registerUser(values)
        .then(res => {
          router.push('api/home')
          localStorage.setItem('username', res.username);
        })
        .catch(err => {
          console.log(err);
          if (err.username || err.password) {
            // 校验函数返回 true 表示校验通过，false 表示不通过
            userErr.value = err.username
            pwErr.value = err.password[0]
          }
          else if (err.message) {
            userErr.value = ''
            pwErr.value = ''
            userErr.value = err.message
          }
        })

    }
  }





};

const loggle = ref(true)

const isshow = (() => {
  loggle.value = !loggle.value
  username.value = ''
  password.value = ''
})

</script>


<style scoped lang="less">
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(@/assets/img/front/login.jpg) no-repeat;
  background-size: contain;
  object-fit: cover;

  .input_login {
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
    opacity: .9;
  }

  .login_info {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin: 20px 0;
  }

  h3 {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    margin: 20px 0;
  }
}
</style>