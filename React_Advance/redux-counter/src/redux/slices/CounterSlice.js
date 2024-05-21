import { createSlice } from "@reduxjs/toolkit";

/**
 * step-1 createSlice ({}) we have to send an object which takes 3 parameter name, initialState, function
 * inside createSlice we required 3 parameter name, initialState, reducer 
 * inside reducer we have to tell what functionality we have  
 */

// initial state
const initialState = {
    value: 0
};

// create slice 
export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer; // reducers contains functionality