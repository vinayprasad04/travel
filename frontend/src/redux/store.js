import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./features/ModalSlice";
import { reducer } from "./features/ModalSlice";
import { UserLoginReducer } from "./features/LoginSlice";
const store = configureStore({
  reducer: {
    modal: ModalReducer,
    showModal: reducer,
    userLogin: UserLoginReducer,
  },
});

export default store;
