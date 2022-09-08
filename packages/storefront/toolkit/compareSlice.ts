import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompareData, CustomerProduct } from '@bs-commerce/models';

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
  },
});

export const { storeCompare } = compareSlice.actions;

export default compareSlice.reducer;
