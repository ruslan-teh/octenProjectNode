import {configureStore} from "@reduxjs/toolkit";
import formReduce from "./form.slice";


const store = configureStore({
    reducer: {
        formReduce

    }
})

export default store