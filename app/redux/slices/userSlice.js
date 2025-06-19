import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userName = payload.userName;
      state.userPhoto = payload.userPhoto;
      state.userEmail = payload.userEmail;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logoutUser: (state) => {
      state.userName = "";
      state.userPhoto = "";
      state.userEmail = "";
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
