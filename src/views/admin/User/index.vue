<template>
  <AppLayout>
    <template v-slot:nav>
      <el-row class="mb-4 nav-rows">
        <el-button type="primary" size="default" @click="TableAdd()" class="addbtn">新增</el-button>
        <div class="mt-4">
          <el-input v-model="inputSearchData" style="max-width: 600px" placeholder="用户名" class="input-with-select"
            size="default">
            <template #prepend>
              搜索
            </template>
            <template #append>
              <el-button :icon="Search" @click="searchUsername" />
            </template>
          </el-input>
        </div>
      </el-row>
    </template>

    <template v-slot:main>
      <!-- 表格 -->
      <el-table ref="multipleTableRef" :data="user_list?.data?.data" style="width: 100%"
        @selection-change="handleSelectionChange" size="large">
        <el-table-column type="selection" width="55" />
        <template v-for="(data, index) in table_header" :key="data.property">
          <el-table-column v-if="data.property !== 'id'" :property="data.property" :label="data.label"
            :width="data.width" />
          <!-- <el-table-column :property=data.property :label=data.label :width=data.width /> -->
        </template>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-link type="primary" size="large" style="margin-right: 10px;"
              @click="updataTable(scope.$index)">修改</el-link>
            <el-link type="primary" size="large" style="margin-left: 10px;" @click="deleteTr(scope.$index)">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 数据总数\每页显示的条目数\当前页数\页码改变时的回调 -->
      <!-- <el-pagination background layout="prev, pager, next" :total="50" :page-size="pageSize" :current-page="currentPage"
        @current-change="handleCurrentChange" /> -->
      <!-- 模态框-对话 -->
      <el-dialog v-model="dialogVisible" :title=title width="30%" @open="openDialog()" @close="closeDialog()">
        <!-- 表单 -->
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
          :size="formSize" status-icon>
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.username" placeholder="用户名" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" placeholder="密码" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="邮箱" />
          </el-form-item>
          <el-form-item label="手机号码" prop="phone_number">
            <el-input v-model="ruleForm.phone_number" placeholder="手机号码" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button size="default" @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" size="default" @click="tableSubmit()" :plain="true">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </template>
  </AppLayout>
</template>

<script setup>
import { reactive, ref, watch, toRefs, onMounted, } from 'vue'
import { useRoute } from 'vue-router';
import { ElTable, ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { getUserAll, postUserAddInput, updataUser, deleteUser, searchUser } from "@/service";
import AppLayout from "@/components/admin/AppLayout.vue";
// 网络请求-->推荐
let user_list = ref({})

onMounted(() => {
  getUserAll()
    .then((res) => {
      user_list.value = res
      console.log(user_list.value);
    })
    .catch((err) => {
      console.log(err);
    })
});

// 模态框
const dialogVisible = ref(false)

// 模态框表单

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  password: '',
  email: '',
  phone_number: '',
})

// 表单字段数据
const table_header = [
  { property: 'id', label: "id", width: "100" },
  { property: 'username', label: "用户名", width: "150" },
  { property: 'password', label: "密码", width: "150" },
  { property: 'email', label: "邮箱", width: "200" },
  { property: 'phone_number', label: "手机号码", width: "180" },
  { property: 'registration_date', label: "日期", width: "auto" },
]

// 表单-》 main
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const title = ref("123")
const openDialog = (() => {

})
const closeDialog = (() => {

})

// 表单提交
// 控制是post和put
const isEidt = ref(false)

// 新增表格数据
const TableAdd = () => {
  dialogVisible.value = true
  isEidt.value = true
  title.value = "新增"
  // 默认是空值，点击修改按钮的时候会默认将当前的值传入，所以新增需要将表单值为空值
  for (let key in ruleForm) {
    ruleForm[key] = ""
  }
}

// 表单确认按钮
const tableSubmit = () => {
  if (isEidt.value) {
    // post新增
    postUserAddInput(ruleForm)
      .then(res => {
        if (res.status == 200) {
          dialogVisible.value = false
          // 弹出框
          ElMessage({
            message: '提交成功',
            type: 'success',
          })
          user_list.value.data.data = res.data
        }
      })
      .catch(err => {
        // 处理请求失败的情况
        if (err.status == 400 || 500) {
          // 弹出框
          ElMessage({
            message: '提交失败',
            type: 'error',
          })
        }
        dialogVisible.value = true
      });
  } else {
    updataUser(oldUpdate.value.id, ruleForm)
      .then(res => {
        // 弹出框
        ElMessage({
          message: '提交成功',
          type: 'success',
        })
        dialogVisible.value = false
        user_list.value.data.data = res.data
      })
      .catch(err => {
        // 弹出框
        ElMessage({
          message: '提交失败',
          type: 'error',
        })
        dialogVisible.value = true
      })
  }
}

// 表单规则
// const rules = reactive({
//   name: [
//     { required: true, message: '请输入您的用户名', trigger: 'blur' },
//     { min: 2, max: 15, message: '用户名为2位到10位', trigger: 'blur' },
//   ],
//   password: [
//     { required: true, message: '请输入您的密码', trigger: 'blur' },
//     { min: 9, max: 15, message: '密码为9位到15位', trigger: 'blur' },
//   ],
//   email: [
//     { required: true, message: '邮箱输入错误', trigger: 'blur' },
//     { min: 9, max: 20, message: '邮箱为9位到30位', trigger: 'blur' },
//   ],
//   phone_number: [
//     { required: true, message: '手机号输入错误', trigger: 'blur' },
//     { min: 9, max: 11, message: '手机号为9位到30位', trigger: 'blur' },
//   ],
// })

// 修改
const oldUpdate = ref({})
const updataTable = (index) => {
  dialogVisible.value = true
  // 获取当前点击修改按钮的行数据
  oldUpdate.value = user_list.value.data?.data[index]
  // 将数据添加到表单上
  ruleForm.username = oldUpdate.value.username
  ruleForm.email = oldUpdate.value.email
  ruleForm.password = oldUpdate.value.password
  ruleForm.phone_number = oldUpdate.value.phone_number

  if (dialogVisible.value == false) {
    for (let key in ruleForm) {
      ruleForm[key] = ""
    }
  }
  title.value = "修改"
}

// 删除
const deleteTr = (index) => {
  deleteUser(user_list.value.data?.data[index].id)
    .then(res => {
      // 弹出框
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
      user_list.value.data.data = res.data
    })
    .catch(err => {
      ElMessage({
        message: '删除失败',
        type: 'error',
      })
    })
}

// 搜索
const inputSearchData = ref('')
const searchUsername = () => {
  searchUser(inputSearchData.value)
    .then(res => {
      console.log(res);
      user_list.value.data.data = res
      console.log(user_list.value.data.data);

    }).catch(err => {
      console.log(err);
    })
}

// 监听inputSearchData的变化
watch(inputSearchData, (newValue, oldValue) => {
  searchUser(newValue)
    .then(res => {
      user_list.data = res;
    })
    .catch(err => {
      console.log(err);
    });
});


// 分页器
const dataList = ref([]);  // 存放从后端返回的数据列表
const total = ref(0);  // 数据总数
const pageSize = ref(10);  // 每页显示的条目数
const currentPage = ref(1);  // 当前页数
const route = useRoute();

const handleCurrentChange = (page) => {
  // 当前页码改变时的回调函数，此处可以发送请求获取指定页码的数据
  // 假设你的API接口为/api/users，需要传递page参数表示页码
  // getUserAll(page)
  //   // .then(response => response.json())
  //   .then(data => {
  //     dataList.value = data.results;  // 更新数据列表
  //     console.log(dataList.value);
  //     user_list.value.data = dataList.value
  //     total.value = data.count;  // 更新数据总数
  //     currentPage.value = page;  // 更新当前页码
  //     // route.push({ 
  //     //   path: '/admin/User',
  //     //   query: { 
  //     //     page: page 
  //     //   } 
  //     // })
  //   })
}

</script>

<style lang="less" scoped>
.el-page-header__header {
  height: 40px;
}

.nav-rows {
  float: right;

  .demo-input-size {
    margin-left: 10px;
  }

  .addbtn {
    margin-right: 10px;
  }
}

.el-pagination {
  float: right;
  margin-top: 10px;
}

// 模态框
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>