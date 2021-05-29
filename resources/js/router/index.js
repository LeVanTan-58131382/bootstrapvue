import Vue from "vue";
import Router from "vue-router";

import DashboardLayout from "../pages/dashboard/layout/DashboardLayout.vue";

import FileManager from "../components/FileManager/FileManager.vue";

Vue.use(Router);

// cài đặt router
import routers from "./router.js";

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/dashboard",
            //component: DashboardLayout,
            children: [
                {
                    path: "/filemanager",
                    component: FileManager,
                }
            ]
        },
    ]
});

export default router;