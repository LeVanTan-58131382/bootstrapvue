import service from "../services/file-manager-service.js";


    const state = {
        listFiles: [],
        message: "",
    };

    const getters = {
        getListFiles: state => state.listFiles,

        getMessage: state => state.message,
    };

    const mutations = {

        SET_LIST_FILES: (state, files) => (state.listFiles = files), 

        SET_MESSAGE: (state, message) => { 
            
            state.message = message;

            setTimeout(function(){
                state.message = "";
            }, 2000);
        },

        NEW_FILE: (state, file) => { 

            state.listFiles.push(file);
        },

        REMOVE_FILE: (state, fileData) => { 

            state.listFiles = state.listFiles.filter(file => file.id !== fileData.id);

            state.listFiles = state.listFiles.filter(file => file.name !== fileData.name);
        }

    };

    const actions = {

        handleSetMessage(context, message){
            service.handleSetMessage(context, message)
        },

        handleGetListFiles(context){
            service.handleGetListFiles(context)
        },

        handleAddFile(context, dataForm){
            service.handleAddFile(context, dataForm)
        },

        handleDeleteFile(context, id){
            service.handleDeleteFile(context, id)
        },
    }

    const file_manager = {
        namespaces: true,
        state,
        getters,
        actions,
        mutations
    };

export default file_manager;

