import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../services/genre.service";


export const genresAll = createAsyncThunk(
    'genresSlice/genresAll',
    async (_,{rejectWithValue}) => {
        try {
            return await genreService.getAll()
        }catch (e){
            rejectWithValue(e)
        }
    }
)



const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genresMovie: [],
        genresChange: null,
        status: null,
        error: null
    },
    reducers:{
        onGenreChange: (state, action) => {
            state.genresChange = action.payload
        }

    },
    extraReducers:{
        [genresAll.pending]: (state) =>{
            state.status = 'pending'

        },
        [genresAll.fulfilled]: (state, action) =>{
            state.genresMovie = action.payload.genres
        },
        [genresAll.rejected]: (state, action) =>{

        }

    }
})


export const {onGenreChange} = genresSlice.actions

const genreReducer = genresSlice.reducer

export default  genreReducer