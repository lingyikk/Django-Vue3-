<template>
  <div class="contain">
    <el-form ref="ruleFormRef" style="max-width: 400px" :model="ruleForm" label-width="auto" class="demo-ruleForm"
      :size="formSize" status-icon v-if="isshow">
      <div class="input-top-text">登录</div>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-form :model="form" label-width="80px">
          <el-form-item label="" prop="agreed" @click="handleClickRadio()">
            <el-radio v-model="form.agreed" :label="true">我已阅读并同意《用户协议》</el-radio>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm(ruleFormRef)" :plain="true">
          登录
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
      <div class="botton">
        <a href="javascript:;" class="left" @click="isshowFrom()">注册</a>
        <a href="javascript:;" class="right">忘记密码</a>
      </div>
    </el-form>

    <el-form ref="ruleFormsRef" style="max-width: 400px" :rules="rules" :model="ruleForms" label-width="auto"
      class="demo-ruleForm" :size="formSizes" status-icon v-else>
      <div class="input-top-text">注册</div>
      <el-form-item prop="username">
        <el-input v-model="ruleForms.username" placeholder="请输入两位以上的用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForms.password" placeholder="请输入包含大小写字母和数字的十到二十位密码" />
      </el-form-item>
      <el-form-item>
        <el-form :model="form" label-width="80px">
          <el-form-item label="" prop="agreed" @click="handleClickRadio()">
            <el-radio v-model="form.agreed" :label="true">我已阅读并同意《用户协议》</el-radio>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForms(ruleFormsRef)" :plain="true">
          注册
        </el-button>
        <el-button @click="resetForms(ruleFormsRef)">重置</el-button>
      </el-form-item>
      <div class="botton">
        <a href="javascript:;" class="left" @click="isshowFrom()">登录</a>
        <a href="javascript:;" class="right">忘记密码</a>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref, computed } from 'vue'
import { Loginadmin, registeradmin } from '@/service'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/modules/admin/User.js'
const router = useRouter()


// 切换登录注册
const isshow = ref(true)
const isshowFrom = (() => {
  isshow.value = !isshow.value
})

// 表单数据
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  password: '',
})

// 表单数据(注册)
const formSizes = ref('default')
const ruleFormsRef = ref()
const ruleForms = reactive({
  username: '',
  password: '',
})


const form = ref({
  agreed: false
});

// 点击单选框时切换选中状态
const handleClickRadio = () => {
  form.agreed = !form.agreed
};


// 登录请求
const submitForm = () => {
  if (ruleForm.username == '' || ruleForm.password == '') {
    ElMessage.error('用户名或密码不能为空')
  } else {
    Loginadmin(ruleForm)
      .then((res) => {
        if (res.isLogin) {
          router.push({
            path: "/admin/User"
          });
          ElMessage({
            message: '登录成功',
            type: 'success',
          })
          useUserStore().loginUsername = res.username
          // localStorage.setItem('adminname', useUserStore().loginUsername);
          localStorage.setItem('adminname', res.username)
        }
      })
      .catch((err) => {
        ElMessage.error('用户名或密码错误')
        console.log(err);
      })
  }

}

// 注册
const submitForms = () => {
  if (ruleForms.username == '' || ruleForms.password == '') {
    ElMessage.error('用户名或密码不能为空')
  } else {
    registeradmin(ruleForms)
      .then((res) => {
        console.log(res);
        if (res.isRegister) {
          router.push({
            path: "/admin/User"
          });
          localStorage.setItem('adminname', res.usernames)
          ElMessage({
            message: '注册成功',
            type: 'success',
          })
        }
      })
      .catch((err) => {
        console.log(err);
        if(err.username){
          ElMessage.error(err.username[0])
        }else if(err.password){
          ElMessage.error(err.password[0])
        }
        else if(err.message){
          ElMessage.error(err.message)
        }
      })
  }
}


// 重置
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const resetForms = (form) => {
  if (!form) return
  form.resetFields()
}

</script>

<style scoped lang="less">
.contain {
  position: relative;
  width: 100vw;
  /* 让容器宽度占满整个视口 */
  height: 100vh;
  /* 让容器高度占满整个视口 */
  background: url(../../../assets/img/admin/wsg_blackground.jpg) no-repeat center/cover;
  ;
  overflow: hidden;

  .demo-ruleForm {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(0, -50%);
    width: 336px;
    height: 500px;
    padding: 0 30px;
    background: #fff;
    // opacity: .9;



    .el-input {
      width: 500px;
      height: 50px;
    }

    .el-button {
      margin-top: 20px;
      width: 100vw;
      height: 50px;
      margin-left: 0;
    }

    .botton {
      width: 100%;
      height: 30px;

      .left {
        float: left;
        color: #5b96ff;
      }

      .right {
        float: right;
        color: #5b96ff;
      }
    }
  }

}

.input-top-text {
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  margin: 60px 0 30px;
}
</style>
