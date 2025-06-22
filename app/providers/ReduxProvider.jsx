"use client";

import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import { Toaster } from "react-hot-toast";

const store = makeStore();

function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
}

export default ReduxProvider;
