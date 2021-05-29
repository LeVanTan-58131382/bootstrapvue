<template>
    <nav class="nav flex-column left-navbar-content">
        <button class="btn btn-primary active" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
        Examples
        </button>
        <div class="collapse" id="collapseExample1">
            <div class="card card-body">
                <button @click="goto('filemanager')" type="button" class="btn btn-success btn-sm">File manager</button>
                <div class="wall-between-small"></div>
                <button type="button" class="btn btn-success btn-sm">Small button</button>
            </div>
        </div>

        <div class="wall-between"></div>

        <button class="btn btn-primary active" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
        Button
        </button>
        <div class="collapse" id="collapseExample2">
            <div class="card card-body">
                <button type="button" class="btn btn-success btn-sm">Small button</button>
                <div class="wall-between-small"></div>
                <button type="button" class="btn btn-success btn-sm">Small button</button>
            </div>
        </div>

        <div class="wall-between"></div>

        <button class="btn btn-primary active" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
        Button
        </button>
        <div class="collapse" id="collapseExample3">
            <div class="card card-body">
                <button type="button" class="btn btn-success btn-sm">Small button</button>
                <div class="wall-between-small"></div>
                <button type="button" class="btn btn-success btn-sm">Small button</button>
            </div>
        </div>

        <div class="wall-between"></div>

        <button class="btn btn-primary active" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button
        </button>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <button type="button" class="btn btn-success btn-sm">Small button</button>
                <div class="wall-between-small"></div>
                <button type="button" class="btn btn-success btn-sm">Small button</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "left-navbar",
    data() {
      return {
        
      }
    },
    methods: {
        goto(address) {
            console.log(address);
            this.$router.push(`/${address}`);
            console.log(address);
        }
    }
}
</script>

<style scoped>
.wall-between{
    width: 100%;
    height: 1px;
    margin: 3px 0px;
    background-color: rgb(162, 162, 162);
}

.wall-between-small{
    width: 100%;
    height: 0.5px;
    margin: 1px 0px;
    background-color: rgb(200, 200, 200);
}

.left-navbar-content{
    position: relative;
    left: 5px;
}

.card-body{
    padding: 5px !important;
}

.btn{
    border-radius: 0px;
}
</style>