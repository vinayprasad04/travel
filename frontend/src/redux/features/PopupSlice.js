import { createSlice } from "@reduxjs/toolkit";

const PopupSlice = createSlice({
  name: "popup",
  initialState: {
    display: false,
  },
  reducers: {
    DisplayModal: (state) => {
      state.display = true;
    },
    HideModal: (state) => {
      state.display = false;
    },
  },
});

export default PopupSlice.reducer;
export const { DisplayModal, HideModal } = PopupSlice.actions;
