import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// Form Validation
import { ValidationObserver, ValidationProvider, extend, localize } from "vee-validate";
// Form Validation rules and localization
import { required, email } from "vee-validate/dist/rules";
import TW from "vee-validate/dist/locale/zh_TW.json";
// Install VeeValidate rules and localization
extend("required", required);
extend("email", email);
localize("zh_TW", TW);

// css
import "@/assets/scss/style.scss";

// global components
import overlay from "@/components/common/Overlay.vue";
import herotitle from "@/components/common/HeroTitle.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// 設定 global components
Vue.component("global-overlay", overlay);
Vue.component("global-title", herotitle);
// Install VeeValidate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
