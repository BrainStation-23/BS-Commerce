import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CompareData,
  CustomerProduct,
  ICompareItems,
} from '@bs-commerce/models';

export interface compareState {
  compareList: CompareData;
}

const initialState: compareState = {
  compareList: {
    id: '',
    userId: '',
    items: [],
  },
};

export const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    storeCompare: (state: compareState, action: PayloadAction<CompareData>) => {
      state.compareList = action.payload;
    },

    storeProductsToComparePublic: (
      state: compareState,
      action: PayloadAction<ICompareItems>
    ) => {
      const existingCartProduct = state.compareList.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingCartProduct) {
        state.compareList;
      } else {
        if (state.compareList.items.length >= 3) {
          state.compareList.items.shift();
        }
        state.compareList.items.push(action.payload);
      }
    },

    deleteComparedProductPublic: (
      state: compareState,
      action: PayloadAction<string>
    ) => {
      const newCompareList = state.compareList.items.filter(
        (item) => item.productId != action.payload
      );
      state.compareList.items = newCompareList;
    },

    resetCompare: (state: compareState) => {
      state.compareList = initialState.compareList;
    },
  },
});

export const {
  storeCompare,
  storeProductsToComparePublic,
  deleteComparedProductPublic,
  resetCompare,
} = compareSlice.actions;

export default compareSlice.reducer;
