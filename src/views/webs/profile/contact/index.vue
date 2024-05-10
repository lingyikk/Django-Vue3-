<template>
  <div>
    <van-nav-bar title="常用联系人" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-contact-list v-model="chosenContactId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit"
      @select="onSelect" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast, ContactEdit } from 'vant';
import { useRouter, useRoute } from 'vue-router';
import infoStore from '@/stores/modules/web/info'

const router = useRouter();
const route = useRoute();
const contactInfo = ref(route.query.contactInfo);

const onClickLeft = () => history.back();

const contactList = ref(true);
const chosenContactId = ref('1');
const list = ref([
  // {
  //   id: '1',
  //   name: '张三',
  //   tel: '13979915684',
  //   isDefault: true,
  // },
]);

if (infoStore().contactInfo) {
  infoStore().contactInfo.id = list.value.length + 1
  list.value.push(infoStore().contactInfo)
}

const onAdd = () => {
  router.push('/api/profile/contact/updata')
};
const onEdit = (contact) => showToast('编辑' + contact.id);
const onSelect = (contact) => showToast('选择' + contact.id);
</script>

<style scoped>
:deep(.van-nav-bar__title) {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 600;
}
</style>