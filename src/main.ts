import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./_store";
// import axios from "axios";
import vuetify from "./plugins/vuetify";
import "./sass/main.scss";
import VueSweetalert from "vue-sweetalert";

// import { BASE_URL } from "./helper";

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = BASE_URL;
Vue.use(VueSweetalert);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
