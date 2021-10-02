import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalLoading: false,
  },
  mutations: {
    // 是否顯示global overlay(loading)
    isShowLoading(state, isShow) {
      state.globalLoading = isShow;
    },
  },
  actions: {},
});
