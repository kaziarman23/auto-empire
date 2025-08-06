import baseApi from "./baseApi";

const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/api/ssl-payment/init",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["Payments"],
    }),
  }),
});

export const { useInitPaymentMutation } = paymentsApi;
export default paymentsApi;
