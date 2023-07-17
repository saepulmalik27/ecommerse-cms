import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

type Product = {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    discountedPrice: number;
    quantity: number;
    total: number;
};

type Cart = {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: 5;
    totalQuantity: 10;
};

type CartData = {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
};

export const cartApi = createApi({
    reducerPath: "cartApi",
    refetchOnFocus: true,
    baseQuery: baseQuery,
    tagTypes: ["carts"],
    endpoints: builder => ({
        getCarts: builder.query<CartData, {}>({
            query: ({ ...params }) => ({
                url: "carts",
                method: "GET",
                params: {
                    ...params,
                },
            }),
            providesTags: ["carts"],
        }),
        getCartById: builder.query<Cart, { id: string }>({
            query: ({ id }) => `carts/${id}`,
        }),
    }),
});

export const { useGetCartByIdQuery, useGetCartsQuery } = cartApi;
