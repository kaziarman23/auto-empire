import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/redux/slices/userSlice.js";
import baseApi from "./api/baseApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
