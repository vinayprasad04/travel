import { createSlice } from "@reduxjs/toolkit";

const rescheduleForm = createSlice({
  name: "rescheduleForm",
  initialState: {
    visible: false,
  },
  reducers: {
    RescheduleVisible: (state) => {
      state.visible = true;
    },
    RescheduleHide: (state) => {
      state.visible = false;
    },
  },
});

const rescheduleFormData = createSlice({
  name: "RescheduleFormDetails",
  initialState: {
    date: new Date(),
    time: "",
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default rescheduleForm.reducer;
export const { RescheduleVisible, RescheduleHide } = rescheduleForm.actions;
export const { rescheduleDataReducer } = rescheduleFormData.reducer;
export const { setData } = rescheduleFormData.actions;
