import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASEURL}` }),
  tagTypes: ["Users", "Cars", "Orders", "Payments"],
  endpoints: () => ({}),
});

export default baseApi;
