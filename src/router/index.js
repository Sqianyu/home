import { createRouter,createWebHashHistory } from "vue-router";
import Home from '../views/index.vue'
import Login from '../views/login.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/',
    redirect:'/home'
  }
  
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router
