import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/redux/slices/userSlice.js";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      // [baseApi.reducerPath]: baseApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(baseApi.middleware),
  });
