import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer, modalReducer, userReducer } from "./reducers";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    users: userReducer,
    modal: modalReducer,
  },
});

export default store;
