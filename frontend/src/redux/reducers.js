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

export const modalReducer = createReducer(
  {
    ratings: [
      { id: 0, name: "Quality of Event", value: 0 },
      { id: 1, name: "Services at Event", value: 0 },
      { id: 2, name: "Facilities of Event", value: 0 },
      { id: 3, name: "Operator of Event", value: 0 },
      { id: 4, name: "Staff Politeness", value: 0 },
    ],
    comments: "",
    display: false,
  },
  (builder) => {
    builder
      .addCase("addRating", (state, action) => {
        for (let i = 0; i < action.payload.length; i++) {
          state.ratings[i].value = action.payload[i].value;
          state.ratings[i].name = action.payload[i].name;
        }
      })
      .addCase("addComment", (state, action) => {
        state.comments = action.payload;
      })
      .addCase("displayModal", (state, action) => {
        state.display = !state.display;
      });
  }
);
