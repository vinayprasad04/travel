import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchEvents = createAsyncThunk("events/fetchEvents", () => {
    return axios.get(process.env.REACT_APP_URL + "/events");
});

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        loading: false,
        events: [],
        error: "",
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.loading = false;
            state.events = action.payload;
            state.error = "";
        });
        builder.addCase(fetchEvents.rejected, (state, action) => {
            state.loading = false;
            state.events = [];
            state.error = action.error.message;
        });
    },
});

export const eventsReducer=eventsSlice.reducer;
