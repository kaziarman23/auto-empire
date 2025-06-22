"use client";

import { Provider } from "react-redux";
import { makeStore } from "../redux/store";

const store = makeStore();

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
