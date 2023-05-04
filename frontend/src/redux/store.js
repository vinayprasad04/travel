import { configureStore } from "@reduxjs/toolkit";

import ModalReducer, { ModalDisplayReducer} from "./features/ModalSlice";
import { eventsReducer } from "./features/eventsSlice";
import { itineraryReducer } from "./features/itinerariesSlice";

const store = configureStore({
    reducer: {
        modal: ModalReducer,
        showModal: ModalDisplayReducer,
        events: eventsReducer,
        itinerary: itineraryReducer
    }
});

export default store;
