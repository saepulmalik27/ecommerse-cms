import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.SERVICE_API_URL,
});
