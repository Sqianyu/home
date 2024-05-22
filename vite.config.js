import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入path用于写别名配置,自带无须安装
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 在此处为需要解决跨域的 API 配置代理
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 去掉 /api 前缀
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    //别名配置
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src'),
      'util': path.resolve(__dirname, 'src/util/util')
    },
    //引入文件的时候，可以忽略掉以下文件后缀
    extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css']
  },
  css:{
    //预处理器配置项
    preprocessorOptions:{
      less:{
        javascriptEnabled: true,
        //支持直接使用表达式 width: 100px - 20px;得到值为width:80px;
        math: "always"
      }
    }
  }
})
