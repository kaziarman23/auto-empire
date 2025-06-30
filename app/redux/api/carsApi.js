import baseApi from "./baseApi";

const carsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/api/cars",
      providesTags: ["Cars"],
    }),
    getCar: builder.query({
      query: (id) => `/api/cars/${id}`,
      providesTags: ["Cars"],
    }),
    addCar: builder.mutation({
      query: (bodyInfo) => ({
        url: "/api/cars",
        method: "POST",
        body: bodyInfo,
      }),
      invalidatesTags: ["Cars"],
    }),
    updateCar: builder.mutation({
      query: (bodyInfo) => ({
        url: "/api/cars",
        method: "PATCH",
        body: bodyInfo,
      }),
      invalidatesTags: ["Cars"],
    }),

    deleteCar: builder.mutation({
      query: (bodyInfo) => ({
        url: "/api/cars",
        method: "DELETE",
        body: bodyInfo,
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carsApi;
export default carsApi;
