import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  ratings: [
    { id: 0, name: "Quality of Event", value: 0 },
    { id: 1, name: "Services at Event", value: 0 },
    { id: 2, name: "Facilities of Event", value: 0 },
    { id: 3, name: "Operator of Event", value: 0 },
    { id: 4, name: "Staff Politeness", value: 0 },
  ],
  comments: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    addRating: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.ratings[i].value = action.payload[i].value;
        state.ratings[i].name = action.payload[i].name;
      }
    },

    addComment: (state, action) => {
      state.comments = action.payload;
    },
  },
});

const ModalDisplaySlice = createSlice({
  name: "showModal",
  initialState: {
    display: false,
  },

  reducers: {
    displayModal: (state) => {
      state.display = !state.display;
    },
  },
});





export default modalSlice.reducer;
export const  ModalDisplayReducer  = ModalDisplaySlice.reducer;
export const { displayModal } = ModalDisplaySlice.actions;
export const { addRating, addComment } = modalSlice.actions;

