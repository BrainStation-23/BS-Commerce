import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "models";

export interface AllCartItemsState {
    allCartItems: Cart[];
}

const initialState: AllCartItemsState = {
    allCartItems: [],
};

export const allCartItems = createSlice({
  name: "allCartItems",
  initialState,
  reducers: {
    storeAllCartItems: (
      state: AllCartItemsState,
      action: PayloadAction<Cart[]>
    ) => {
      state.allCartItems = action.payload;
    },
  },
});

export const { storeAllCartItems } = allCartItems.actions;

export default allCartItems.reducer;
