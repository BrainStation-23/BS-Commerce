import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NestedCategoryList } from "models";
import { ProductStore } from "../utils/types";

export interface categoryState {
  category: NestedCategoryList[];
}

const initialState: categoryState = {
  category: [],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    storeCategory: (
      state: categoryState,
      action: PayloadAction<NestedCategoryList[]>
    ) => {
      state.category = action.payload;
    },
  },
});

export const { storeCategory } = categorySlice.actions;

export default categorySlice.reducer;
