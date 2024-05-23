import $ from "jquery";
import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";
import * as jwt_decode from "jwt-decode";
import util from "util";

export default createStore({
  state: {
    user: {},
    is_login: false,
  },
  getters: {},
  mutations: {
    updateUser(state, user) {
      state.user = $.extend(state.user, user);
    },
    logout(state){
      state.user = {};
      state.is_login = false;
      localStorage.removeItem('token')
    }
  },
  actions: {
    login: (context, data) => {
      let { username, _id } = jwt_decode.jwtDecode(data);
      util .http({
          url: "/users/userFind",
          data: {_id}
        })
        .then((res) => {
          context.commit('updateUser',res.result)
          context.state.is_login = true
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  modules: {},
  plugins: [persistedstate()],
});
