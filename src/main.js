import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

// css
import "@/assets/scss/style.scss";

// global components
import overlay from "@/components/common/Overlay.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// 設定 global components
Vue.component("global-overlay", overlay);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
