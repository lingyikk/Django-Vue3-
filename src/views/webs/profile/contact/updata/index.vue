<template>
  <div>
    <van-nav-bar title="联系人" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-contact-edit :contact-info="editingContact" set-default-label="设为默认联系人" @save="onSave" @delete="onDelete" />
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import  infoStore  from '@/stores/modules/web/info.js'
import { ContactEdit } from 'vant';

const router = useRouter();
const onClickLeft = () => history.back();
const emit = defineEmits(['contactSaved']); // 声明要使用的自定义事件

// 信息
const editingContact = ref({
  tel: '',
  name: '',
});

const onSave = (contactInfo) => {
  emit('contactSaved', contactInfo);
  router.push({
    name: 'profile_contact',
  })
  infoStore().contactInfo = contactInfo
}

const onDelete = (contactInfo) => showToast('删除');
</script>
  
<style scoped lang="less">
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}
</style>
  