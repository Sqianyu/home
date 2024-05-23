<template>
  <div class="s-app-wrapper" :class="[light && 'reader-night-mode']">
    <header class="hd f-g-hd">
      <div class="header-wrap">
        <a class="navbar-logo" href="/">
          <img src="@/assets/logo.png" alt="Nav logo">
        </a>
        <div class="navbar-list">
          <span>当前时间：{{ nowTime }}</span>
        </div>
        <div class="navbar-set">
          <div class="style-mode">
            <el-popover placement="bottom" :width="200" trigger="click" :hide-after="0">
              <template #reference>
                <Setting />
              </template>
              <div class="popover-modal" style="left: 656px;">
                <div class="meta"><MoonNight /><span>夜间模式</span></div>
                <div class="switch day-night-group"><a class="switch-btn">开</a> <a class="switch-btn active">关</a></div>
                <hr>
                <div class="switch font-family-group"><a class="switch-btn font-song">宋体</a> <a
                    class="switch-btn font-hei active">黑体</a></div>
                <div class="switch"><a class="switch-btn active">简</a> <a class="switch-btn">繁</a></div>
              </div>
            </el-popover>
            <el-button type="info" class="log-in" text @click="goLogin" v-if="!store.state.is_login">登录</el-button>
            <a class="navbar-head" href="/" v-if="store.state.is_login">
              <img :src="store.state.user.headImg" alt="Nav logo">
            </a>
            <span class="btn log-out" @click="logout" v-if="store.state.is_login">退出登录</span>
            <el-button round size="large" type="danger" style="width: 70px;" @click="goRegister"
              v-if="!store.state.is_login">注册</el-button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onBeforeUnmount, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const light = false;
const isDark = true;
const nowTime = ref('')
const goLogin = () => {
  router.push('/login')
}
const goRegister = () => {
  router.push('/register')
}
const logout = () => {
  store.commit('logout')
}
const complement = (value) => {
    return value < 10 ? `0${value}` : value.toString()
}
/**
 * 格式化时间为XXXX年XX月XX日XX时XX分XX秒
 * @function
 * @returns {string} 返回格式化后的时间
 */
const formateDate = () => {
    const time = new Date()
    const year = time.getFullYear()
    const month = complement(time.getMonth() + 1)
    const day = complement(time.getDate())
    const hour = complement(time.getHours())
    const minute = complement(time.getMinutes())
    const second = complement(time.getSeconds())
    const week = '星期' + '日一二三四五六'.charAt(time.getDay());
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
}
let timer = 0
onMounted(() => {
  timer = setInterval(() => {
    nowTime.value = formateDate()
  }, 1000)
  let token = localStorage.getItem('token')
  if (token) {
    store.dispatch('login', token)
  }
})
onBeforeUnmount(() => {
    clearInterval(timer) //清除定时器
    timer = 0
})
</script>

<style lang="less">
.s-app-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #333;

  .f-g-hd {
    height: 56px;
    border-bottom: 1px solid #f0f0f0;

    .header-wrap {
      display: flex;
      min-width: 768px;
      max-width: 1440px;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 15px;

      .navbar-logo {
        float: left;
        width: 40px;
        height: 40px;


      }

      .navbar-list {
        flex: 1;
        margin: 0 16px;
      }

      .navbar-set {
        .style-mode {
          display: flex;

          svg {
            width: 22px;
          }

          .log-in {
            width: 54px;
            color: #969696;
            font-size: 15px;
            margin: auto 8px;
            margin-left: 12px;
          }

          .log-out {
            width: 80px;
            color: #969696;
            font-size: 15px;
            margin: auto 0;
            margin-left: 12px;
            cursor: pointer;
          }

          .navbar-head {
            width: 40px;
            height: 40px;
            margin: 0 16px;
          }
        }
      }
    }
  }
}

img {
  width: 100%;
  height: 100%;
}

.reader-night-mode {
  background-color: #3f3f3f;
  color: #c8c8c8;

  .f-g-hd {
    border-bottom: 1px solid #181C25;
  }
}
</style>