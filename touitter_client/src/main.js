import Vue from "vue";
import Login from "./Login.vue";
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(Login)
}).$mount("#app");
