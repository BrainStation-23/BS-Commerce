import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductStore } from "../utils/types";

export interface productsState {
  products: ProductStore[];
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
      action: PayloadAction<ProductStore[]>
    ) => {
      state.products = action.payload;
    },
  },
});

export const { storeProducts } = productsSlice.actions;

export default productsSlice.reducer;
