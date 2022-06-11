import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalLoading: false,
  },
  mutations: {
    set(state, [variable, value]) {
      state[variable] = value;
    },
  },
  actions: {},
});
