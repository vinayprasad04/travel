import { configureStore, createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialEventData = { loading: false, events: [], error: '' };


export const getEventsData = createAsyncThunk('events/getEventsData', () => {
    return axios.get('http://localhost:8080/api/events/event-details')
})

const eventsSlice = createSlice({
  name: "events",
  initialState:initialEventData,
    extraReducers: (builder) => {
        builder.addCase(getEventsData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getEventsData.fulfilled, (state, action) => {
            state.loading = false
            state.events = action.payload
            state.error= ""
        })
        builder.addCase(getEventsData.rejected, (state, action) => {
            state.loading = false
            state.events = []
            state.error= action.error.message
        })
 }
});

const store = configureStore({
    reducer: { events: eventsSlice.reducer }
})


export default store;
