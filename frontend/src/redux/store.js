import { configureStore } from "@reduxjs/toolkit";

import ModalReducer, { ModalDisplayReducer } from "./features/ModalSlice";

console.log(ModalDisplayReducer)

const store = configureStore({
    reducer: {
        modal: ModalReducer,
        showModal: ModalDisplayReducer,
    
    },
});

export default store;
