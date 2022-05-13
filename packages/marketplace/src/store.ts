import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./toolkit/ProductsSlice";

export const store = configureStore({
  reducer: {
    productsStore: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;