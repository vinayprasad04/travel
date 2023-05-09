import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./features/ModalSlice";
import { reducer } from "./features/ModalSlice";
import PopUpReducer from "./features/PopupSlice";
import { UserLoginReducer } from "./features/LoginSlice";

const store = configureStore({
  reducer: {
    modal: ModalReducer,
    showModal: reducer,
    userLogin: UserLoginReducer,
    popup: PopUpReducer,
  },
});

export default store;
