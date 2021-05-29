import Vue from "vue";
import Vuex from "vuex";

import file_manager from "./modules/file-manager-module.js";

Vue.use(Vuex); 

export default new Vuex.Store({
    modules: {
        file_manager
    }
})