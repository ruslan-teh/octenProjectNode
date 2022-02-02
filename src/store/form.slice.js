import {createSlice} from "@reduxjs/toolkit";


const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        delItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        changeStatus: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            item.status = !item.status
        }

    }
})


export const {addItem, delItem, changeStatus} = formSlice.actions

const formReduce = formSlice.reducer


export default formReduce
