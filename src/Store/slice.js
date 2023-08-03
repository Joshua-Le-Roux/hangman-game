import { createSlice } from "@reduxjs/toolkit";

export const iterableSlice = createSlice({
    name : "iterate",
    //inital state which will be used to cycle through the gif array
    initialState : {
        value : 0
    },

    reducers : {
        //reducer used to update the inital state
        iterate: (state) => {
            state.value += 1
            if (state.value > 9) {
                state.value = 0
            }
        },

    },
})

export const {iterate} = iterableSlice.actions

export default iterableSlice.reducer