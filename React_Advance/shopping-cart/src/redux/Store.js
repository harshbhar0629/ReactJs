import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slice/CartSlice"

export const store = configureStore({
    reducer: {
        cart: CartSlice
    }
});