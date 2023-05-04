import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialEventData = { loading: false, events: [], error: "" };
const initialReviewData = { loading: false, reviews: [], error: "" };
const initialScheduledEventData = { loading: false, schedules: [], error: "" };
const initialOperationManageData = {
  loading: false,
  operations: [],
  error: "",
};
const initialExperience = { experience: [] };

export const getEventsData = createAsyncThunk("events/getEventsData", () => {
  return axios.get("http://localhost:8080/api/events/event-details");
});

export const getUserReviews = createAsyncThunk("reviews/getUserReviews", () => {
  return axios.get("http://localhost:8080/api/user-reviews/get-user-reviews");
});

export const getEventOperations = createAsyncThunk(
  "operations/getEventOperations",
  () => {
    return axios.get("http://localhost:8080/api/operations/operated");
  }
);

export const getScheduledEvents = createAsyncThunk(
  "schedules/getScheduledEvents",
  () => {
    return axios.get(
      "http://localhost:8080/api/scheduled/get-scheduled-events"
    );
  }
);

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

const scheduledEventsSlice = createSlice({
  name: "schedules",
  initialState: initialScheduledEventData,
  extraReducers: (builder) => {
    builder.addCase(getScheduledEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getScheduledEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.schedules = action.payload;
      state.error = "";
    });
    builder.addCase(getScheduledEvents.rejected, (state, action) => {
      state.loading = false;
      state.schedules = [];
      state.error = action.error.message;
    });
  },
});

const eventOperationsSlice = createSlice({
  name: "operations",
  initialState: initialOperationManageData,
  extraReducers: (builder) => {
    builder.addCase(getEventOperations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEventOperations.fulfilled, (state, action) => {
      state.loading = false;
      state.operations = action.payload;
      state.error = "";
    });
    builder.addCase(getEventOperations.rejected, (state, action) => {
      state.loading = false;
      state.operations = [];
      state.error = action.error.message;
    });
  },
});

const experienceSlice = createSlice({
  name: "experience",
  initialState: initialExperience,
  reducers: {
    getExperience(state, action) {
      state.experience = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    reviews: userReviewsSlice.reducer,
    schedules: scheduledEventsSlice.reducer,
    operations: eventOperationsSlice.reducer,
    experience: experienceSlice.reducer,
  },
});

export const experienceActions = experienceSlice.actions;
export default store;
