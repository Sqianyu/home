import axios from 'axios'
import util from 'util'

const http = axios.create({
  baseURL: import.meta.env.VITE_SEVER_URL,
  timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    // 添加请求头等前置处理
    config.headers['Authorization'] = 'Bearer' + ' ' + localStorage.getItem('token')
    return config
  },
  error => {
    // 请求错误处理
    util.ElMessageBox('Request Error:'+ error)
    console.log('Request Error:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  response => {
    // 响应后处理
    if (response.status === 200 && response.data.code === 200) {
      return Promise.resolve(response.data)
    } else {
      util.ElMessageBox(response.data.msg)
      return Promise.reject(response.data)
    }
  },
  error => {
    util.ElMessageBox('Response Error:'+ error)
    console.log('Response Error:', error)
    return Promise.reject(error)
  }
)

export default http
