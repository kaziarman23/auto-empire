import baseApi from "./baseApi";

const orderListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/api/orders",
      providesTags: ["Orders"],
    }),
    addOrder: builder.mutation({
      query: (bodyInfo) => ({
        url: "/api/orders",
        method: "POST",
        body: bodyInfo,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrdersQuery, useAddOrderMutation } = orderListApi;
export default orderListApi;
