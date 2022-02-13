import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";


export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            return await moviesService.getAll(page)

        } catch (e) {
            rejectWithValue(e);
        }
    }
)

export const getOneMovie = createAsyncThunk(
    'movieSlice/getOneMovie',
    async (_, {rejectWithValue}) => {
        try {
            return await moviesService.getOne()
        } catch (e) {
            rejectWithValue(e)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
    },
    reducers: {

    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload.results
        },
        [getAllMovies.rejected]: (state) => {

        }

    }


})


const movieReducer = movieSlice.reducer


export {movieReducer}




