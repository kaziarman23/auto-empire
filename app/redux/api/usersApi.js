import baseApi from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUserProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    promoteUserRole: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    demoteUserRole: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "DELETE",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserProfileMutation,
  usePromoteUserRoleMutation,
  useDemoteUserRoleMutation,
  useDeleteUserMutation,
} = usersApi;
export default usersApi;
