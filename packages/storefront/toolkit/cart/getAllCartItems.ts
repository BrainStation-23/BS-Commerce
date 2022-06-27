import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "models";

export interface AllCartItemsState {
    allCartItems: [];
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
      action: PayloadAction<[]>
    ) => {
      state.allCartItems = action.payload;
    },
    deleteSingCartItem: (
      state: AllCartItemsState,
      action: PayloadAction<[]>
      ) => {
      state.allCartItems = action.payload;
    }
  },
});

export const { storeAllCartItems, deleteSingCartItem } = allCartItems.actions;

export default allCartItems.reducer;
