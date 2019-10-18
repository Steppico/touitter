import Vue from "vue";
import Index from "./Index.vue";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(Index)
}).$mount("#app");
