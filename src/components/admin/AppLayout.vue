<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-menu-item index="0">
            <!-- <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" /> -->
            <!-- <img style="width: 40px" src="/public/vite.svg" alt="Element logo" /> -->
            <h2><el-text class="mx-1" size="large">江西武功山旅游后台管理系统</el-text></h2>
          </el-menu-item>
          <div class="flex-grow"></div>
          <el-menu-item index="1">管理员 {{ adminname }}</el-menu-item>
          <el-sub-menu index="2">
            <template #title>已登录</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2" @click="logout()">注销</el-menu-item>
            <!-- <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu> -->
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px" margin="18px" height="640px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                router="true" collapse-transition="true">
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon>
                      <User />
                    </el-icon>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="1-1" route="/admin/User">游客信息</el-menu-item>
                    <el-menu-item index="1-2" route="/admin/admin">管理员信息</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>

                <el-menu-item index="2" route="/admin/ScenicSpot">
                  <el-icon>
                    <OfficeBuilding />
                  </el-icon>
                  <span>景区管理</span>
                </el-menu-item>
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon>
                      <School />
                    </el-icon>
                    <span>酒店管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="3-1" route="/admin/Hotel/">酒店信息</el-menu-item>
                    <el-menu-item index="3-2">房型分类</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="4" route="/admin/product/">
                  <el-icon>
                    <Goods />
                  </el-icon>
                  <span>产品管理</span>
                </el-menu-item>
                <!-- <el-sub-menu index="5">
                  <template #title>
                    <el-icon>
                      <ChatDotRound />
                    </el-icon>
                    <span>评论管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="5-1">评论内容</el-menu-item>
                    <el-menu-item index="5-2">评论分类</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu> -->
                <el-sub-menu index="6">
                  <template #title>
                    <el-icon>
                      <ChatDotRound />
                    </el-icon>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="6-1" route="/admin/ScenicSpotOrder/">景区订单</el-menu-item>
                    <el-menu-item index="6-2" route="/admin/HotelOrder/">酒店订单</el-menu-item>
                    <el-menu-item index="6-3" route="/admin/ProductOrder/">产品订单</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <!-- <el-menu-item index="7">
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>权限管理</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>统计分析</span>
                </el-menu-item> -->
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <slot name="nav"></slot>
          <slot name="main"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  
<script lang="js" setup>
import { ref } from 'vue'
import useUserStore from '@/stores/modules/admin/User.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const adminname = ref()
adminname.value = localStorage.getItem('adminname')

// 注销
const logout = (() => {
  router.push('/admin/login')
  localStorage.setItem('adminname', '')
})




const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}


</script>
    
<style lang="less">
.flex-grow {
  flex-grow: 1;
}

.common-layout {
  background: #f0f2f5;
}

.el-header {
  margin-bottom: 13px;
  padding: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-aside {
  height: 630px;
  background: #fff;
  overflow: hidden;
}

.el-main {
  margin: 0 10px 10px;
  background: #fff;
}


</style>
    