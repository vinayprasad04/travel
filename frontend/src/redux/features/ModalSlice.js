import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratings: [
    { id: 0, name: "Quality of Event", value: 0 },
    { id: 1, name: "Services at Event", value: 0 },
    { id: 2, name: "Facilities of Event", value: 0 },
    { id: 3, name: "Operator of Event", value: 0 },
    { id: 4, name: "Staff Politeness", value: 0 },
  ],
  feedback: "",
  experience: "",
};
console.log(initialState);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addRating: (state, action) => {
      state.ratings[action.payload.id].value = action.payload.newValue;
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



const userSlice= createSlice({
  name:"userSlice",
  initialState : {
    name:"",
    email:"",
    phone:"",
    dob:"",
    interests:[]
  },
  reducers: {
    setUser: (state, action)=>{
      
    }
  }
})




export default modalSlice.reducer;
export const { ModalDisplayReducer } = ModalDisplaySlice.reducer;
export const { displayModal } = ModalDisplaySlice.actions;
export const { addRating, addComment } = modalSlice.actions;
