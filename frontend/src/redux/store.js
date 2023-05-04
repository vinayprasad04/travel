import { configureStore } from "@reduxjs/toolkit";

import ModalReducer, { ModalDisplayReducer} from "./features/ModalSlice";
import { eventsReducer } from "./features/eventsSlice";
import { itineraryReducer } from "./features/itinerariesSlice";
import isCanceledReducer from "./features/recommendationSlice";


const store = configureStore({
    reducer: {
        modal: ModalReducer,
        showModal: ModalDisplayReducer,
        events: eventsReducer,
        itinerary: itineraryReducer,
        isCancledEvent: isCanceledReducer
    }
});

export default store;
