<template>
 <el-button  @click="goLogin">登录</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
} 
</script>

<style>

</style>