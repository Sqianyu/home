import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    setUsername(state,user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    persistedstate() 
  ]
})
