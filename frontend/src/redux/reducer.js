


import { createReducer } from '@reduxjs/toolkit'

export const userReducer = createReducer({
    isValidUser: false,
    user: null
},

    (builder) => {
        builder.addCase('login', (state, action) => {
            state.user = action.payload;
            state.isValidUser = true;
        })


            .addCase('load', (state, action) => {
                state.user = action.payload;
                state.isValidUser = true;
            })


    })