import { createReducer } from "@reduxjs/toolkit";

export const categoryReducer = createReducer(
  { category: [], name: "" },
  (builder) => {
    builder.addCase("createCategory", (state, action) => {
      state.category = action.payload;
      state.user = "gourav";
    });
  }
);

export const userReducer = createReducer(
  {
    user: null,
    isValid: false,
    role: null,
    model: false,
  },
  (builder) => {
    builder
      .addCase("login", (state, action) => {
        state.user = action.payload;
        state.isValid = true;
        state.role = action.payload.type;
      })
      .addCase("load", (state, action) => {
        state.user = action.payload;
        state.isValid = true;
        state.role = action.payload.data.type;
      })
      .addCase("logout", (state, action) => {
        state.user = null;
        state.isValid = false;
        state.role = null;
      })
      .addCase("addToFav", (state, action) => {
        state.fav = action.payload;
      })
      .addCase("openModel", (state, action) => {
        state.model = true;
      })
      .addCase("closeModel", (state, action) => {
        state.model = false;
      });
  }
);
