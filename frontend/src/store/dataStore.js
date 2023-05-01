import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialEventData = { loading: false, events: [], error: "" };
const initialReviewData = { loading: false, reviews: [], error: "" };

export const getEventsData = createAsyncThunk("events/getEventsData", () => {
  return axios.get("http://localhost:8080/api/events/event-details");
});

export const getUserReviews = createAsyncThunk("reviews/getUserReviews", () => {
  return axios.get("http://localhost:8080/api/user-reviews/get-user-reviews");
});

const eventsSlice = createSlice({
  name: "events",
  initialState: initialEventData,
  extraReducers: (builder) => {
    builder.addCase(getEventsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEventsData.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload;
      state.error = "";
    });
    builder.addCase(getEventsData.rejected, (state, action) => {
      state.loading = false;
      state.events = [];
      state.error = action.error.message;
    });
  },
});

const userReviewsSlice = createSlice({
  name: "reviews",
  initialState: initialReviewData,
  extraReducers: (builder) => {
    builder.addCase(getUserReviews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
      state.error = "";
    });
    builder.addCase(getUserReviews.rejected, (state, action) => {
      state.loading = false;
      state.reviews = [];
      state.error = action.error.message;
    });
  },
});

const store = configureStore({
  reducer: { events: eventsSlice.reducer, reviews: userReviewsSlice.reducer },
});

export default store;
