import { createRouter,createWebHashHistory } from "vue-router";
const Home = () => import('../views/index.vue')
const Login = () => import('../views/login.vue')
const Register = () => import('../views/register.vue')

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
    path: '/register',
    name: 'Register',
    component: Register
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
