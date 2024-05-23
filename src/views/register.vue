<template>
    <div class="content">
        <particles />
        <div class="content-login">
            <div class="content-login-info">
                <div class="content-title">注册</div>
                <el-form ref="loginForm">
                    <el-form-item style="margin:25px 0px">
                        <el-input v-model="username" name="用户名" aria-label="用户名" placeholder="用户名" size="large" 
                            :rules="[{ required: true, message: '请填写用户名' }]" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="password" type="password" name="密码" aria-label="密码" placeholder="密码" size="large" 
                            :rules="[{ required: true, message: '请填写密码' }]" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="large" style="width: 100%;" round @keyup.enter.native="loginBtn" @click="loginBtn">注册</el-button>
                    </el-form-item>
                    <div class="content-bottom">
                        <div @click="topassword">忘记密码？</div>
                        <div @click="toLogin">已有密码，去登录</div>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="back-setting">
            <div class="back-setting-item" @click="router.go(-1)">
                <Back />
                <p>上一页</p>
            </div>
            <div class="back-setting-item" @click="router.push('/')">
                <House />
                <p>回到主页</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import particles from './common/particles.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import util from 'util'
const router = useRouter()
const username = ref('');
const password = ref('');
const loginData = [];
const loginBtn = () => {
    if (!username.value || !password.value) {
        return util.ElMessage(3, '用户名或密码不能为空!')
    }
    let data = { "username": username.value, "pwd": password.value}
    let res = util.http({
        url: "/users/reg",
        data
    }).then(res => {
        router.push('/login')
    }).catch((err) => {
      console.error(err);
    });
} 
    
const toLogin = () => {
    router.push('/login')
};
const topassword = () => {
    util.ElMessage(3, '功能暂未开放!')
};
onMounted(() => {
    console.log('Component is mounted!');
});
</script>
<style lang="less" scoped>
.content {
    width: 100%;
    height: 100%;
    background-image: url('../assets/login.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .content-title {
        text-align: center;
        font-size: 25px;
        color: #fff
    }

    .content-login {
        position: fixed;
        top: calc(~"50% - 150px");
        left: calc(~"50% - 200px");
        width: 400px;
        height: 300px;
        background: rgba(223, 219, 219, 0.5);
        display: flex;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 25px 35px rgba(0, 0, 0, 0.8);
    }

    .content-login-info {
        width: 90%;
    }

    .content-bottom {
        display: flex;
        justify-content: space-between;
        color: blue;
        font-size: 14px
    }

    .content-bottom :hover {
        cursor: pointer;
    }
    .back-setting {
        position: absolute;
        top: 5%;
        left: 5%;
        display: flex;
        svg {
            width: 30px;
        }
        .back-setting-item {
            width: 80px;
            text-align: center;
            p {
                margin: 0;
            }
        }
    }
}
</style>