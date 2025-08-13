import baseApi from "./baseApi";

const transactionListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/api/transactions",
      providesTags: ["Transactions"],
    }),
    addTransaction: builder.mutation({
      query: (bodyInfo) => ({
        url: "/api/transactions",
        method: "POST",
        body: bodyInfo,
      }),
      invalidatesTags: ["Transactions"],
    }),
  }),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } =
  transactionListApi;
export default transactionListApi;
