import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerProduct } from "models";

export interface compareState {
    productsToCompare: CustomerProduct[];
}

const initialState: compareState = {
    productsToCompare: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    storeProductsToCompare: (
        state: compareState,
        action: PayloadAction<CustomerProduct>
      ) => {
        state.productsToCompare.push(action.payload);
      },
      deleteComparedProduct: (
        state: compareState,
        action: PayloadAction<string>
      ) => {
        state.productsToCompare = state.productsToCompare.filter(item => item.id != action.payload)
      }
  },
});

export const {  storeProductsToCompare, deleteComparedProduct } = compareSlice.actions;

export default compareSlice.reducer;
