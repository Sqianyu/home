<template>
   <router-view></router-view>
</template>
<script setup>
import { ref, nextTick, onMounted } from 'vue'
let list = ['haruto','hibiki','hijiki','koharu','shizuku','tororo','unitychan','wanko','z16']
let random = list[Math.floor(Math.random() * list.length)];
onMounted(() => {
   nextTick(() => {
      window.L2Dwidget.init({
         pluginRootPath: 'live2dw/',
         pluginJsPath: 'lib/',
         pluginModelPath: `live2d-widget-model-${random}/assets/`,
         tagMode: false,
         debug: false,
         model: { jsonPath: `/live2dw/live2d-widget-model-${random}/assets/${random}.model.json` },
         display: { position: 'right', width: 150, height: 300 },
         mobile: { show: true },
         log: false
      })
   })
})
</script>
<style lang="less">
svg,
.el-button:focus {
   outline: none;
}
</style>
