import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models";
import { ProductStore } from "../utils/types";

export interface productsState {
  products: Product[];
}

const initialState: productsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    storeProducts: (
      state: productsState,
      action: PayloadAction<Product[]>
    ) => {
      state.products = action.payload;
    },
  },
});

export const { storeProducts } = productsSlice.actions;

export default productsSlice.reducer;
