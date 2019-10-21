import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./Index.vue";
import { createProvider } from "./vue-apollo";
import Modal from "vue-js-modal";
import Confirm from "./components/confirmLogin.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Modal);

const routes = [{ path: "/confirm", component: Confirm }];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(Index)
}).$mount("#app");
