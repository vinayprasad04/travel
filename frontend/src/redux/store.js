import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer, userReducer } from "./reducers";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    users: userReducer,
  },
});

export default store;
