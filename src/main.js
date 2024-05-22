import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import ElementPlus from 'element-plus';
import axios from 'axios'
import * as Icons from '@element-plus/icons-vue';  
import 'element-plus/theme-chalk/index.css'


const app = createApp(App)
Object.keys(Icons).forEach(key => {  
  app.component(key, Icons[key]);  
}); 
app.provide('$axios',axios)
app.config.productionTip = false


app.use(router).use(store).use(ElementPlus).use(Particles, {
    init: async (engine) => {
      // 加载精简版本
      await loadSlim(engine);
    },
  }).mount('#app')