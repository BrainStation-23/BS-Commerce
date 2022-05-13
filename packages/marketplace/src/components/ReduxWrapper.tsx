import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";

export const ReduxWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
