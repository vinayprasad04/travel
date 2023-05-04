import { createSlice } from "@reduxjs/toolkit";

const isCancledSlice=createSlice({
    name:"isCancled",
    initialState: {
        isCancled: false
    },
    reducers: {
        cancelSheduled : (state)=>{
            state.isCancled=true;
        }
    }
})

export default isCancledSlice.reducer;
export const {cancelSheduled}= isCancledSlice.actions;