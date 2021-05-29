<template>
    <div class="">
        <top-navbar></top-navbar>

        <div class="row">
            <div class="col-md-2">
                <left-navbar class="left-navbar"/>
            </div>
            <div class="col-md-10">
                <content-layout/>
            </div>
            
        </div>
        <div class="row">
            <div class="col-md-12">
                <footer-layout/>
            </div>
        </div>
    </div>
</template>

<script>

import TopNavbar from "./TopNavbar.vue";
// import Sidebar from "./Sidebar.vue";
import LeftNavbar from "./LeftNavbar.vue";
import ContentLayout from "./ContentLayout.vue";
import FooterLayout from "./FooterLayout.vue";


export default {
    name: "dashboard-layout",
    components: {
        TopNavbar,
        LeftNavbar,
        ContentLayout,
        FooterLayout
    },
    created(){
        //const currentPath = this.$router.history.current.path;

        // việc này phục vụ cho xác thực đăng nhập - cần open
        // if (window.localStorage.getItem("authenticated") === "false") {
        //     this.$router.push("/login");
        // }

        // if (currentPath === "/" || currentPath === "/app") {
        //     console.log(currentPath);
        //     this.$router.push("/dashboard");
        // }
    }
}
</script>

<style scoped>
.left-navbar{
    position: relative;
    top: 5px;
    height: 1000px;
}
</style>