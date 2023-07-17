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

type ProductData = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

export const productApi = createApi({
    reducerPath: "productApi",
    refetchOnFocus: true,
    baseQuery: baseQuery,
    tagTypes: ["products"],
    endpoints: builder => ({
        getProducts: builder.query<ProductData, {}>({
            query: ({ ...params }) => ({
                url: "products",
                method: "GET",
                params: {
                    ...params,
                },
            }),
            providesTags: ["products"],
        }),
        getFilteredProducts: builder.query<ProductData, {}>({
            query: ({ ...params }) => ({
                url: "products/search",
                method: "GET",
                params: {
                    ...params,
                },
            }),
        }),
        getProductById: builder.query<Product, { id: string }>({
            query: ({ id }) => `products/${id}`,
        }),
    }),
});

export const {
    useGetProductByIdQuery,
    useGetProductsQuery,
    useGetFilteredProductsQuery,
} = productApi;
