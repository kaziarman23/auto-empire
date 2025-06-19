import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "@/app/redux/slices/userSlice.js";

const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      // [baseApi.reducerPath]: baseApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(baseApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
