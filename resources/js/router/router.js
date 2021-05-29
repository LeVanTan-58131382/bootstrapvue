import DashboardLayout from "../pages/dashboard/layout/DashboardLayout.vue";

import FileManager from "../components/FileManager/FileManager.vue";

let routers = [
    {
        path: "/dashboard",
        component: DashboardLayout,
        children: [
            {
                path: "/filemanager",
                component: FileManager,
            }
        ]
    },
    
];

export default routers;