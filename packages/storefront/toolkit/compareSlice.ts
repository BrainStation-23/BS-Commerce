import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerProduct } from 'models';

export interface compareState {
  productsToCompare: CustomerProduct[];
}

const initialState: compareState = {
  productsToCompare: [],
};

export const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    storeProductsToCompare: (
      state: compareState,
      action: PayloadAction<CustomerProduct>
    ) => {
      const existingCartProduct = state.productsToCompare.find(
        (item) => item.id === action.payload.id
      );
      if(existingCartProduct) {
        state.productsToCompare
      }
      else {
        if(state.productsToCompare.length >= 3) {
          state.productsToCompare.shift();
        }
        state.productsToCompare.push(action.payload);
      }
    },
    deleteComparedProduct: (
      state: compareState,
      action: PayloadAction<string>
    ) => {
      const newCompareList = state.productsToCompare.filter(
        (item) => item.id != action.payload
      );
      state.productsToCompare = newCompareList;
    },
  },
});

export const { storeProductsToCompare, deleteComparedProduct } =
  compareSlice.actions;

export default compareSlice.reducer;
