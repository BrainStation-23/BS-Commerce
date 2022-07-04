import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerProduct, Product } from "models";
import { ProductStore } from "../utils/types";

export interface productsState {
  publicProducts: CustomerProduct[];
  featuredProducts: CustomerProduct[];
}

const initialState: productsState = {
  publicProducts: [],
  featuredProducts: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    storeProducts: (
      state: productsState,
      action: PayloadAction<CustomerProduct[]>
    ) => {
      state.publicProducts = action.payload;
    },
    storeFeaturedProducts: (
      state: productsState,
      action: PayloadAction<CustomerProduct[]>
    ) => {
      state.featuredProducts = action.payload;
    },
  },
});

export const { storeProducts, storeFeaturedProducts } = productsSlice.actions;

export default productsSlice.reducer;
