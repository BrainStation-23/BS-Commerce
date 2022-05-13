import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types"

export interface productsState {
  products: Product[];
}

const initialState: productsState = {
    products: [],
};

export const reservationsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    storeProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { storeProducts } = reservationsSlice.actions;

export default reservationsSlice.reducer;