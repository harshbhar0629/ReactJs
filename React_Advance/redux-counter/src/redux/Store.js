/** @format */

import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

// this is a centralised store which contains all slices and its functionality
export const store = configureStore({
    reducer: {
        counter: CounterSlice // name: and name its function
    },
});
