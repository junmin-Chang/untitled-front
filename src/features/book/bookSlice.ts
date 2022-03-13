import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosPrivateInstance } from "../../services";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: axiosPrivateInstance,
  endpoints: (builder) => ({
    getBooksByName: builder.query({
      query: (name) => `/book/${encodeURI(encodeURIComponent(name))}`,
    }),
  }),
  refetchOnFocus: false,
  refetchOnReconnect: true,
});

export const { useGetBooksByNameQuery } = bookApi;
