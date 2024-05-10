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
              <el-button :icon="Search" @click="select" />
            </template>
          </el-input>
        </div>
      </el-row>
    </template>

    <template v-slot:main>
      <!-- 表格 -->
      <el-table ref="multipleTableRef" :data="list" style="width: 100%" @selection-change="handleSelectionChange"
        size="large">
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
      <el-dialog v-model="dialogVisible" width="30%">
        <!-- 表单 -->
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm"
          :size="formSize" status-icon>
          <el-form-item label="用户" prop="user">
            <el-input v-model="ruleForm.user" placeholder="用户" />
          </el-form-item>
          <el-form-item label="酒店" prop="hotel">
            <el-input v-model="ruleForm.hotel" placeholder="酒店" />
          </el-form-item>
          <el-form-item label="数量" prop="quantity">
            <el-input v-model="ruleForm.quantity" placeholder="数量" />
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input v-model="ruleForm.status" placeholder="状态" />
          </el-form-item>
          <el-form-item label="总价" prop="total_price">
            <el-input v-model="ruleForm.total_price" placeholder="总价" />
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
import { getHotelOrder, postHotelOrder, updataHotelOrder, delHotelOrder, searchHotelOrder } from "@/service";
import AppLayout from "@/components/admin/AppLayout.vue";

// 网络请求-->推荐
let list = ref([])

onMounted(() => {
  getHotelOrder()
    .then((res) => {
      list.value = res
      console.log(res);
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
  user: "",
  hotel: "",
  quantity: '',
  total_price: "",
  status: ""
  // order_date: ""
})

// 表单字段数据
const table_header = [
  { property: 'id', label: "id", width: "100" },
  { property: 'user__username', label: "用户", width: "auto" },
  { property: 'hotel__name', label: "酒店", width: "260" },
  { property: 'quantity', label: "数量", width: "auto" },
  { property: 'total_price', label: "总价", width: "auto" },
  { property: 'status', label: "状态", width: "auto" },
  { property: 'order_date', label: "下单时间", width: "auto" },
]

// 表单-》 main
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 表单提交
// 控制是post和put
const isEidt = ref(false)

// 新增表格数据
const TableAdd = () => {
  dialogVisible.value = true
  isEidt.value = true

  // 默认是空值，点击修改按钮的时候会默认将当前的值传入，所以新增需要将表单值为空值
  for (let key in ruleForm) {
    ruleForm[key] = ""
  }
}

// 表单确认按钮
const tableSubmit = () => {
  if (isEidt.value) {
    console.log(ruleForm);
    // post新增
    postHotelOrder(ruleForm)
      .then(res => {
        if (res.status == 200) {
          dialogVisible.value = false
          // 弹出框
          ElMessage({
            message: '提交成功',
            type: 'success',
          })
          list.value = res.newData
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
    updataHotelOrder(oldUpdate.value.id, ruleForm)
      .then(res => {
        // 弹出框
        ElMessage({
          message: '提交成功',
          type: 'success',
        })
        dialogVisible.value = false
        console.log(res);
        list.value = res.newData
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
const oldUpdate = ref({})
const updataTable = (index) => {
  dialogVisible.value = true
  // 获取当前点击修改按钮的行数据
  oldUpdate.value = list.value[index]
  // 将数据添加到表单上
  ruleForm.user = oldUpdate.value.user__username
  ruleForm.hotel = oldUpdate.value.hotel__name
  ruleForm.total_price = oldUpdate.value.total_price
  ruleForm.status = oldUpdate.value.status
  ruleForm.quantity = oldUpdate.value.quantity
  
  
  if (dialogVisible.value == false) {
    for (let key in ruleForm) {
      ruleForm[key] = ""
    }
  }
}

// 删除
const deleteTr = (index) => {
  delHotelOrder(list.value[index].id)
    .then(res => {
      // 弹出框
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
      list.value = res.newData
      console.log(res);
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
const select = () => {
  console.log(inputSearchData.value);
  searchHotelOrder(inputSearchData.value)
    .then(res => {
      list.value = res
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
}

// 监听inputSearchData的变化
// watch(inputSearchData, (newValue, oldValue) => {
//   searchHotelOrder(newValue)
//     .then(res => {
//       list.data = res;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });


// 分页器
const dataList = ref([]);  // 存放从后端返回的数据列表
const total = ref(0);  // 数据总数
const pageSize = ref(10);  // 每页显示的条目数
const currentPage = ref(1);  // 当前页数
const route = useRoute();

const handleCurrentChange = (page) => {

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