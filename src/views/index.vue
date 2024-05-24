<template>
  <div class="s-app-wrapper" :class="[night && 'reader-night-mode']">
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
            <Setting />
            <el-switch v-model="night" style=" --el-switch-on-color: #4C4D4F; --el-switch-border-color: #dcdfe6;"
              :active-action-icon="Moon" :inactive-action-icon="Sunny" />
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
    <div class="p-m-body">
      <div class="p-wrap">
        <div class="p-list" v-for="(host,key) in urlList" :key="key" @click="toHost(host)">
          <div class="p-detail">
            <p class="p-detail-name">{{ host.name }}</p>
            <p class="p-detail-host">{{ host.url }}</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onBeforeUnmount, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Sunny, Moon } from '@element-plus/icons-vue'
const urlList = ref([{ name: '**管理系统', url: import.meta.env.VITE_WEB_URL},
                    { name: '**管理系统', url: import.meta.env.VITE_WEB_URL}, 
                    { name: '**管理系统', url: import.meta.env.VITE_WEB_URL}
                  ])
const router = useRouter()
const store = useStore()
const night = ref(false);
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
const toHost = (host) => {
  window.open(host.url)
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
      box-sizing: border-box;
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

          .el-switch {
            margin: auto 0;
            margin-left: 12px;
          }
        }
      }
    }
  }

  .p-m-body {
    display: flex;
    align-items: center;
    background-image: url('../assets/work.png');
    background-size: cover;
    height: calc(~"100% - 56px");
    min-width: 768px;
    .p-wrap {
      display: flex;
      width: 1200px;
      min-width: 768px;
      margin: auto;
      padding: 18px;
      text-align: center;
      background: #fff;
      height: 90%;
      flex-wrap: wrap;
      justify-content: space-between;
      box-sizing: border-box;
      .p-list {
        display: flex;
        align-items: center;
        width: 355px;
        height: 215px;
        box-sizing: border-box;
        margin: 15px;
        text-align: center;
        color: #555;
        border: 1px solid rgba(0, 0, 0, 0.075);
        border-bottom-color: rgba(0, 0, 0, 0.125);
        border-radius: 4px;
        transition-property: transform;
        transition-duration: 0.3s;
        &:hover {
          transform: translateY(-10px);
        }
        .p-detail {
          width: 100%;
          margin-bottom: 40px;
          .p-detail-name {
            font-weight: 100;
            color: #000;
            font-size: 24px;
            margin-bottom: 14px;
          }
          .p-detail-host {
            color: #777;
            text-overflow: ellipsis;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            max-width: 300px;
            font-size: 14px;
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

    .el-switch__action {
      background-color: #3f3f3f
    }
  }
  .p-wrap {
    background-color: #3f3f3f !important;
    color: #c8c8c8 ;
    .p-list {
      background-color: #fff;
    }
  }
}
</style>