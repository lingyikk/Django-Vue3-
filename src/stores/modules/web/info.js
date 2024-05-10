import { defineStore } from "pinia";

const infoStore = defineStore('Info', {
  state: () => ({
    contactInfo: '',
  }),
  actions: {
    // async UserList() {
    //   const res = await getUserAll()
    //   this.user_list = res
    // },
    // async updateUserList() {
    //   await getUserAll(); // 发送 GET 请求获取最新的用户列表数据
    // },
  }
})


export default infoStore

