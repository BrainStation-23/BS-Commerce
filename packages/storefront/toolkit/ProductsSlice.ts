import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerProduct, Product } from "models";
import { ProductStore } from "../utils/types";

export interface productsState {
  publicProducts: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  categorizedProduct: Product[];
}

const initialState: productsState = {
  publicProducts: [],
  featuredProducts: [],
  categorizedProduct: []
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
    storeCategorizedProduct: (
      state: productsState,
      action: PayloadAction<Product[]>
    ) => {
      state.categorizedProduct = action.payload;
    },
  },
});

export const { storeProducts, storeFeaturedProducts, storeCategorizedProduct } = productsSlice.actions;

export default productsSlice.reducer;
