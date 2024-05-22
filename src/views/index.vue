<template>
  <div class="s-app-wrapper" :class="[light && 'reader-night-mode']">
    <header class="hd f-g-hd">
      <div class="header-wrap">
        <a class="navbar-logo" href="/">
          <img src="@/assets/logo.png" alt="Nav logo">
        </a>
        <div class="navbar-list">1</div>
        <div class="navbar-set">
          <div class="style-mode">
            <Setting />
            <div class="popover-modal" style="left: 656px; display: none;">
              <div class="meta"><i class="iconfont ic-navigation-night"></i><span>夜间模式</span></div>
              <div class="switch day-night-group"><a class="switch-btn">开</a> <a class="switch-btn active">关</a></div>
              <hr>
              <div class="switch font-family-group"><a class="switch-btn font-song">宋体</a> <a
                  class="switch-btn font-hei active">黑体</a></div>
              <div class="switch"><a class="switch-btn active">简</a> <a class="switch-btn">繁</a></div>
            </div>
            <span class="btn log-in" @click="goLogin">登录</span>
            <el-button round @click="goRegister">注册</el-button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const light = false;
const isDark = true
const goLogin = () => {
  router.push('/login')
} 
const goRegister = () => {
  router.push('/register')
} 
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

        img {
          width: 100%;
          height: 100%;
        }
      }
      .navbar-set {
        .style-mode {
          display: flex;
          svg {
            width: 22px;
          }
          .log-in {
            width: 30px;
            color: #969696;
            font-size: 15px;
            margin: 0 8px;
            padding: 0 8px;
            line-height: 32px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.reader-night-mode {
  background-color: #3f3f3f;
  color: #c8c8c8;

  .f-g-hd {
    border-bottom: 1px solid #181C25;
  }
}
</style>