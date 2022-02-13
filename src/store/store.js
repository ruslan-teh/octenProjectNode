import {movieReducer} from "./movie.slice";
import {configureStore} from "@reduxjs/toolkit";
import genreReducer from "./genres.slice";

const store = configureStore({
    reducer: {
        movieReducer,
        genreReducer

    }

})

export default store