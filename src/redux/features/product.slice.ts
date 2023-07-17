import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        total: 0,
        skip: 0,
        limit: 10,
    },
    reducers: {
        addProduct: (state, action) => {},
        removeProduct: (state, action) => {},
        updateProduct: (state, action) => {},
        listProduct: (state, action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
            state.skip = action.payload.skip;
            state.limit = action.payload.limit;
        },
    },
});

export const { addProduct, removeProduct, updateProduct, listProduct } =
    productSlice.actions;

export default productSlice.reducer;
