import { getUserAll } from "@/service";
import { defineStore } from "pinia";

const useUserStore = defineStore('User', {
  state: () => ({
    user_list: {},
    loginUsername: '123'
  }),
  actions: {
    async UserList() {
      const res = await getUserAll()
      this.user_list = res
    },
    async updateUserList() {
      await getUserAll(); // 发送 GET 请求获取最新的用户列表数据
    },
  }
})


export default useUserStore

