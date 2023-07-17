import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";
import productSlice from "./features/product.slice";
import { cartApi } from "./services/cartApi";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        product: productSlice,
        // productApi: productApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            cartApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
