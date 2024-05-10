<template>
  <el-form ref="ruleFormRef" style="max-width: 400px" :model="ruleForm" label-width="auto" class="demo-ruleForm"
    :size="formSize" status-icon>
    <div class="input-top-text">密码登录</div>
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
      <a href="javascript:;" class="left">注册</a>
      <a href="javascript:;" class="right">忘记密码</a>
    </div>
  </el-form>
</template>
  
<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref, watch } from 'vue'
import { LoginUser } from '@/service'
import { useRouter } from 'vue-router'
const router = useRouter()


// 表单数据
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
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

// 确认
// const submitForm = async (formEl) => {

//   if (!formEl) return
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!', fields)
//     }
//   })
// }

// 登录请求
const submitForm = async () => {
  LoginUser(ruleForm)
    .then((res) => {
      if (res.isLogin) {
        router.push({
          path: "/admin/User"
        });
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
        console.log(res);
      }
    })
    .catch((err) => {
      ElMessage.error('用户名或密码错误')

    })
}


// 重置
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}



</script>
  
<style scoped lang="less">
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


.input-top-text {
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  margin: 60px 0 30px;
}
</style>
  