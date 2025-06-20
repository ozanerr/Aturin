import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api",
    }),
    endpoints: (builder) => ({}),
    tagTypes: ["POST", "COMMENT", "REPLY", "DEADLINE", "FINANCE"],
});
