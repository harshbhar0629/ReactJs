/** @format */

import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

// this is a centralised store  created by multiple slice
export const store = configureStore({
    reducer: {
        counter: CounterSlice
    },
});
