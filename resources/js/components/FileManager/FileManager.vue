<template>
<div>
    <div class="card">
        <div class="card-header">Laravel Vue JS File Upload Demo</div>

        <div class="card-body">
            <transition name="fade">
                <div v-if="messageComputed != ''" class="alert alert-success">
                    {{ messageComputed }}
                </div>
            </transition>

            <form @submit="addFile" enctype="multipart/form-data">
                <input
                    ref="myFileInput"
                    type="file"
                    multiple="multiple"
                    class="form-control"
                    v-on:change="onChange"
                />
                <br>
                <button class="btn btn-primary">Upload</button>
            </form>

            <br />
            <br />

            <div>
                <transition-group name="slide-fade" tag="div">
                    <div v-for="file in listFilesComputed" :key="file.id">
                        <div class="item-file">
                            <p>{{ file.name }}</p>
                            <img
                                :src="file.path"
                                alt=""
                                style="width:180px; height: 180px; border-radius: 5px"
                            />
                            <button class="btn btn-warning" @click="deleteFile(file.id)">Delete</button>
                            <hr/>
                        </div>
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
    name: "FileManager",
    data() {
        return {
            name: "",
            file: "",
        };
    },

    computed:{
        listFilesComputed(){
            return this.$store.state.listFiles;
        },

        messageComputed(){
            return this.$store.state.message;
        },

        ...mapGetters(["getListFiles", "getMessage"]),
    },
    created() {
        this.getListFile();
    },

    methods: {

        ...mapActions(["getListFiles"]),

        onChange(e) {
            this.file = e.target.files[0];
        },
        formSubmit(e) {
            e.preventDefault();
            let existingObj = this;

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            let data = new FormData();
            data.append("file", this.file);

            axios
                .post("/upload", data, config)
                .then(function(res) {
                    existingObj.message = res.data.message;
                })
                .catch(function(err) {
                    existingObj.output = err;
                });
        },

        getListFile(){
            this.$store.dispatch("handleGetListFiles");
        },

        addFile(e){
            e.preventDefault();
            let existingObj = this;

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            // kiểm tra định dạng nếu cần
            // nếu muốn chỉ nhận ảnh
            let checkTyprFile = this.file.type.slice(-4);

            if(!checkTyprFile.includes("jpg") && !checkTyprFile.includes("jpeg") && !checkTyprFile.includes("png"))
            { 
                let messageAlert = 'Please upload files in the following formats: .jpeg, .jpg, .png ';
                
                this.$store.dispatch("handleSetMessage", messageAlert);

                this.reset();

                return;
            }
            // kết thúc kiểm tra định dạng

            let data = new FormData();
            data.append("file", this.file);

            this.$store.dispatch("handleAddFile", {"config": config, "data": data});
            this.reset();
        },

        deleteFile(id){
            this.$store.dispatch("handleDeleteFile", id);
        },

        reset() {
            this.$refs.myFileInput.value = "";
        }
    }
};
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

// ------ THÊM VÀO ĐOẠN BÊN DƯỚI
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.item-file{
    margin: 5px;
    padding: 3px;
    float: left;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
