import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Home from "./views/Home";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.component('app-Home',Home);

Vue.config.productionTip = false;

new Vue({
  router,
  
  render: h => h(App)
}).$mount("#app");
