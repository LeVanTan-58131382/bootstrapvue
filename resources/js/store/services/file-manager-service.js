import axios from "axios";

async function handleSetMessage(context, message){
    context.commit('SET_MESSAGE', message);
}

async function handleGetListFiles(context){
    const response = await axios.get("/list_file");
    context.commit('SET_LIST_FILES', response.data);
}

async function handleAddFile(context, dataForm){
    
    const data = dataForm.data;
    const config = dataForm.config;

    var fileData;

    await axios
        .post("/upload", data, config)
        .then(function(res) {

            fileData = res.data.file;

            context.commit('NEW_FILE', fileData);

            context.commit('SET_MESSAGE', res.data.message);
        })
        .catch(function(err) {
        });
}

async function handleDeleteFile(context, id) {
    await axios.delete(`/delete_file/${id}`)
            .then(function(res){
                let fileData = res.data.file;
                context.commit('SET_MESSAGE', res.data.message);
                context.commit('REMOVE_FILE', fileData);
                
            })
            .catch(function(err) {
            });
}

export  default {
    handleSetMessage,
    handleGetListFiles,
    handleAddFile,
    handleDeleteFile,
}