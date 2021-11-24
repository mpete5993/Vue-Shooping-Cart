import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import el from 'element-ui'
Vue.use(el)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
