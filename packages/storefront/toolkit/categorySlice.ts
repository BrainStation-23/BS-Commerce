import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NestedCategoryList } from 'models';

export interface categoryState {
  categoryList: NestedCategoryList[];
}

const initialState: categoryState = {
  categoryList: [],
};

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    storeCategory: (
      state: categoryState,
      action: PayloadAction<NestedCategoryList[]>
    ) => {
      state.categoryList = action.payload;
    },
  },
});

export const { storeCategory } = categorySlice.actions;

export default categorySlice.reducer;
