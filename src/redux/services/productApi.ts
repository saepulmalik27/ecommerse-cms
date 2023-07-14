import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
};

export const productApi = createApi({
    reducerPath: "productApi",
    refetchOnFocus: true,
    baseQuery: baseQuery,
    tagTypes: ["products"],
    endpoints: builder => ({
        getProducts: builder.query<Product[], {}>({
            query: ({ ...params }) => ({
                url: "products",
                method: "GET",
                params: {
                    ...params,
                },
            }),
            providesTags: ["products"],
        }),
        getProductById: builder.query<Product, { id: string }>({
            query: ({ id }) => `products/${id}`,
        }),
    }),
});

export const { useGetProductByIdQuery, useGetProductsQuery } = productApi;
