import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
// 引入插件
import elementPlus from 'element-plus'
// 引入组件
import 'element-plus/dist/index.css'
//引入汉化语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入图标插件
// import * as elementPlusIcons from '@element-plus/icons-vue'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 内部
import "@/assets/css/index.css"
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(createPinia())
app.use(router)
// size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
// app.use(ElementPlus,  { size: 'small', zIndex: 3000 })
// 配置中文
app.use(elementPlus, {
        locale: zhCn,  
        size: 'small', 
        zIndex: 3000 
    })

// 注册vant
app.use(Vant)
app.mount('#app')
app.config.globalProperties.$axios = axios

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
