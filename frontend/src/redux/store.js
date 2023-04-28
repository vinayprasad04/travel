import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./features/ModalSlice";
import ModalDisplayReducer from "./features/ModalSlice";
const store = configureStore({
  reducer: {
    modal: ModalReducer,
    showModal: ModalDisplayReducer,
  },
});

export default store;
