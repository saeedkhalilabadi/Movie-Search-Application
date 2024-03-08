const baseUrl = import.meta.env.VITE_APP_API_URL;
const ApiKey = import.meta.env.VITE_APP_API_KEY;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoveType } from "../types/moves.type";

export const movieSearch = createApi({
  reducerPath: "movieSearch",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    search: builder.query<any, string>({
      query: (query) => `/?apikey=${ApiKey}&${query}`,
    }),
    getById: builder.query<MoveType, string>({
      query: (query) => `/?apikey=${ApiKey}&${query}`,
    }),
  }),
});

export const { useGetByIdQuery, useSearchQuery } = movieSearch;
