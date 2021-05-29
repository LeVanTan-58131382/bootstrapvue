require('./bootstrap');

window.Vue = require('vue');

import App from "./App.vue";

import router from "./router"; // bằng cách này có thể vào thẳng file index.js trong folder router
import store from "./store"; // tương tự trên

// import và sử dụng các cài đặt từ file service.js
import DashboardPlugin from "./service.js";
Vue.use(DashboardPlugin);


const app = new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount("#app");

