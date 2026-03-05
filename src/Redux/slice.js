import { configureStore } from "@reduxjs/toolkit";
import { productReducer, cartReducer } from "../Redux/slice/productSlice.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
});

export default store;