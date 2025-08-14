import baseApi from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/api/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUserProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/api/users",
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    promoteUserRole: builder.mutation({
      query: (userInfo) => ({
        url: "/api/users/promote",
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    demoteUserRole: builder.mutation({
      query: (userInfo) => ({
        url: "/api/users/demote",
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (userInfo) => ({
        url: "/api/users",
        method: "DELETE",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteAllUsers: builder.mutation({
      query: () => ({
        url: "/api/users",
        method: "DELETE",
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
