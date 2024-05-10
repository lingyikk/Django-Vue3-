<script setup>
import { useRoute } from "vue-router";
import TabBar from '@/components/web/tab-bar/tab-bar.vue'
const route = useRoute()

// import { getUserAll } from "@/service";
// import { ref } from "vue";
</script>

<template>
  <div class="app">
    <router-view></router-view>

    <tab-bar  v-show="!route.meta.isTabbar" /> 

  </div>
</template>

<style scoped>

</style>
