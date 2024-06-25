import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    count: number;
};

const initialState: InitialState = {count: 0};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.count = state.count + 1;
        },
        incrementByValue : (state, action: PayloadAction<number>) => {
            state.count = state.count + action.payload;
        },
        decrement : (state) => {
            state.count = state.count - 1;
        },
    }
});

export const {decrement, increment, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;