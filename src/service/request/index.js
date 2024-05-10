import axios from 'axios'
import { baseURL, TIMEOUT } from "./config";
import { storeToRefs } from "pinia";
import { getUserAll } from "@/service";

// import usemainLoading from "@/stores/modules/loading";
// const mainLoading = storeToRefs(usemainLoading())

class HYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
    })

    // axios的拦截器--> 通过网络请求控制loading.vue显示与隐藏
    // 发出网络请求之前执行
    this.instance.interceptors.request.use(config => {
      // 发出网络请求之前
      // mainLoading.isloading.value = true
      // console.log(mainLoading.isloading.value);
      return config
    }, err => {
      return err
    })
    // 服务器响应返回后执行 -->也可以用于判断登录返回的响应码
    this.instance.interceptors.response.use(response => {
      // 如果状态码不是 400，直接返回响应数据
      if (response.status !== 400) {
        return response
      } else if (response.status !== 500) {
        return response
      } else {
        // 如果状态码是 400，可以在这里进行自定义处理
        const customError = new Error('Custom error message')
        customError.response = response  // 将响应数据赋值给自定义的错误对象
        throw customError  // 抛出自定义的错误对象
      }
      // 发出网络请求成功之后
      // mainLoading.isloading.value = false
      // console.log(mainLoading.isloading.value);
      return response
    }, err => {
      // 发出网络请求失败之后
      // mainLoading.isloading.value = false
      return Promise.reject(err)
    })

  }

  request(config) {
    // mainLoading.isloading.value = true
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
        // mainLoading.isloading.value = false
      }).catch(err => {
        if (err.response && err.response.status === 400) {
          reject(err.response.data)  // 返回服务器返回的数据
        } else {
          reject(err)
        }
        // mainLoading.isloading.value = false
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }

  put(config) {
    return this.request({ ...config, method: "put" })
  }

  delete(config) {
    return this.request({ ...config, method: "delete" })
  }

}


export default new HYRequest(baseURL)

