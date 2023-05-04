import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./features/ModalSlice";
import { reducer } from "./features/ModalSlice";
const store = configureStore({
  reducer: {
    modal: ModalReducer,
    showModal: reducer,
  },
});

export default store;
