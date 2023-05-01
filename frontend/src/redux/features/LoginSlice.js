import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    Login: (state) => {
      state.isLoggedIn = true;
    },
    Logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { Login, Logout } = userSlice.actions;
export const UserLoginReducer = userSlice.reducer;
