import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItineraries = createAsyncThunk(
    "itineraries/fetchItineraries",
    () => {
        const user_id = localStorage.getItem("user");
        console.log(user_id);
        return axios.get(process.env.REACT_APP_URL + "/users/itineraries/50");
    }
);

const itinerarySlice = createSlice({
    name: "itineraries",
    initialState: {
        loading: false,
        itineraryData: [],
        error: "",
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItineraries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchItineraries.fulfilled, (state, action) => {
            state.loading = false;
            state.itineraryData = action.payload;
            state.error = "";
        });
        builder.addCase(fetchItineraries.rejected, (state, action) => {
            state.loading = false;
            state.itineraryData = [];
            state.error = action.error.message;
        });
    },
});

export const itineraryReducer = itinerarySlice.reducer;
