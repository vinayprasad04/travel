import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/events`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
});

const eventSlice = createSlice({
  name: "events",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default eventSlice.reducer;
