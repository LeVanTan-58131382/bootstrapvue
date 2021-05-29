import BootstrapVue from "bootstrap-vue";

import Vuex from "vuex";

export default{
    install(Vue) {
        Vue.use(BootstrapVue);
        Vue.use(Vuex);
    }
};