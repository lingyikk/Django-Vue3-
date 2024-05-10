<template>
  <AppLayout>
    <template v-slot:nav>
      <el-row class="mb-4 nav-rows">
        <el-button type="primary" size="default" @click="newSc()">新增</el-button>
        <div class="mt-4">
          <div class="demo-input-size">
            <el-input v-model="inputSearchData" class="w-50 m-2" size="default" placeholder="景区名称">
              <template #prepend>搜索</template>
              <template #append>
                <el-row class="mb-4">
                  <el-button type="primary" @click="search()">
                    <el-icon>
                      <Search />
                    </el-icon>
                  </el-button></el-row>
              </template>
            </el-input>
          </div>
        </div>
      </el-row>
    </template>
    <template v-slot:main>
      <!-- 表格 -->
      <el-table ref="multipleTableRef" :data="ScenicSpot_list" style="width: 100%"
        @selection-change="handleSelectionChange" size="large">
        <el-table-column type="selection" width="55" />
        <template v-for="(elData, index) in table_header">
          <el-table-column :property="elData.property" :label="elData.label" :width="elData.width" style="color: red;" />
        </template>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-link type="primary" size="large" style="margin-right: 10px;" @click="updata(scope.$index)">修改</el-link>
            <el-link type="primary" size="large" style="margin-left: 10px;" @click="Delete(scope.$index)">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-model="dialogVisible" width="30%">
        <!-- 表单 -->
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
          :size="formSize" status-icon>
          <el-form-item label="景点名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="景点名称" />
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="ruleForm.description" placeholder="描述" />
          </el-form-item>
          <el-form-item label="所在城市" prop="city">
            <el-input v-model="ruleForm.city" placeholder="所在城市" />
          </el-form-item>
          <el-form-item label="具体地址" prop="location">
            <el-input v-model="ruleForm.location" placeholder="具体地址" />
          </el-form-item>
          <el-form-item label="景点级别" prop="star">
            <el-input v-model="ruleForm.star" placeholder="景点级别" />
          </el-form-item>
          <el-form-item label="开放时间" prop="open_hours">
            <el-input v-model="ruleForm.open_hours" placeholder="开放时间" />
          </el-form-item>
          <el-form-item label="门票价格" prop="ticket_price">
            <el-input v-model="ruleForm.ticket_price" placeholder="门票价格" />
          </el-form-item>
          <el-form-item label="余票" prop="stock">
            <el-input v-model="ruleForm.stock" placeholder="余票" />
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
import AppLayout from "@/components/admin/AppLayout.vue";
import { getScenicSpot, postScenicSpot, updataScenicSpot, delScenicSpot, searchScenicSpot } from '@/service'
import { reactive, ref, watch, toRefs, onMounted, } from 'vue'
import { useRoute } from 'vue-router';
import { ElTable, ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

const ScenicSpot_list = ref([]);
getScenicSpot()
  .then(res => {
    ScenicSpot_list.value = res
  })
  .catch(err => {
    console.log(err);
  })

// 模态框
const dialogVisible = ref(false)

// 模态框表单
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  name: "",
  description: "",
  city: "",
  location: "",
  star: "",
  open_hours: "",
  ticket_price: '',
  stock: ""
})

const table_header = [
  { property: 'name', label: "景点名称", width: "150" },
  { property: 'description', label: "描述", width: "200" },
  { property: 'city', label: "所在城市", width: "auto" },
  { property: 'location', label: "具体地址", width: "auto" },
  { property: 'star', label: "景点级别", width: "auto" },
  { property: 'open_hours', label: "开放时间", width: "auto" },
  { property: 'ticket_price', label: "门票价格", width: "auto" },
  { property: 'stock', label: "余票", width: "auto" },
]

// 搜索输入框
const inputSearchData = ref(null)


// 表单-》 main

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 表单提交
// 控制是post和put
const isEidt = ref(false)

// 新增
const newSc = (() => {
  dialogVisible.value = true
  isEidt.value = true

  for (let key in ruleForm) {
    ruleForm[key] = ""
  }
})

const tableSubmit = () => {
  if (isEidt.value) {
    // post新增
    postScenicSpot(ruleForm)
      .then(res => {
        ScenicSpot_list.value = res.newData
        console.log(res.newData);
        console.log(ScenicSpot_list.value);
        dialogVisible.value = false
        ElMessage({
          message: '提交成功',
          type: 'success',
        })
      })
      .catch(err => {
        ElMessage({
          message: '提交失败',
          type: 'error',
        })
      })
  } else {
    updataScenicSpot(updataId.value, ruleForm)
      .then(res => {
        // 弹出框
        ElMessage({
          message: '提交成功',
          type: 'success',
        })
        dialogVisible.value = false
        ScenicSpot_list.value = res
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

// 修改
let updataId = ref(0)
const updata = ((id) => {
  dialogVisible.value = true
  isEidt.value = false
  updataId.value = ScenicSpot_list.value[id].id

  // 赋值
  ruleForm.name = ScenicSpot_list.value[id].name
  ruleForm.description = ScenicSpot_list.value[id].description
  ruleForm.city = ScenicSpot_list.value[id].city
  ruleForm.location = ScenicSpot_list.value[id].location
  ruleForm.star = ScenicSpot_list.value[id].star
  ruleForm.open_hours = ScenicSpot_list.value[id].open_hours
  ruleForm.ticket_price = ScenicSpot_list.value[id].ticket_price
  ruleForm.stock = ScenicSpot_list.value[id].stock
})

// 删除
const Delete = ((id) => {
  // console.log(ScenicSpot_list.value[id].id);
  delScenicSpot(ScenicSpot_list.value[id].id)
    .then(res => {
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
      ScenicSpot_list.value = res
    })
    .catch(err => {
      console.log(err);
    })

})

// 搜索
const search = () => {
  searchScenicSpot(inputSearchData.value)
    .then(res => {
      ScenicSpot_list.value = res
    })
}

// // 修改
// const editSc = (()=>{
//   dialogVisible.value = true
// })




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
}

.el-pagination {
  float: right;
  margin-top: 10px;
}
</style>