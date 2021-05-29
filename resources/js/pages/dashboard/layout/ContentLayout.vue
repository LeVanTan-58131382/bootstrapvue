<template>
    <div class="content">
        <!-- <router-view/> -->
        <file-manager/>
    </div>
</template>

<script>

import FileManager from "../../../components/FileManager/FileManager.vue";

export default {
    name: "content",
    components: {
        FileManager,
    }
}
</script>

<style lang="css" scoped> 
    .content{
        width: 100%;
        min-height: 1000px;
        padding: 10px;
        border: 1px solid rgb(160, 160, 160); 
    }
</style>