import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./features/ModalSlice";
import { reducer } from "./features/ModalSlice";
import PopUpReducer from "./features/PopupSlice";
import EventReducer from "./features/EventsSlice";
import { UserLoginReducer } from "./features/LoginSlice";
import RescheduleReducer from "./features/RescheduleForm";
import { RescheduleDataReducer } from "./features/RescheduleForm";

const store = configureStore({
  reducer: {
    modal: ModalReducer,
    showModal: reducer,
    userLogin: UserLoginReducer,
    popup: PopUpReducer,
    events: EventReducer,
    rescheduleForm: RescheduleReducer,
    rescheduleData: RescheduleDataReducer,
  },
});

export default store;
