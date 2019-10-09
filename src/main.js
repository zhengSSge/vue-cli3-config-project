import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {baseUrl} from '../env'

Vue.config.productionTip = false;
console.log(baseUrl);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
