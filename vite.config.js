import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// unplugin-vue-components 插件可以在Vue文件中自动引入组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import svgIcons from 'vite-plugin-vue-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // AntDesignVueResolver 配置
      // dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({ importStyle: false, resolveIcons: true })]
    }),
    svgIcons({
      iconDirs: [ 
        'src/assets/img/front/recommend',
      ],
      symbolId: 'icon-[name]',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
