import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartProduct, ResponseItem } from "models";

export interface AllCartItemsState {
  allCartItems: ResponseItem[];
}

const initialState: AllCartItemsState = {
  allCartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    storeAllCartItems: (
      state: AllCartItemsState,
      action: PayloadAction<ResponseItem[]>
    ) => {
      state.allCartItems = action.payload;
    },
    deleteCartItem: (
      state: AllCartItemsState,
      action: PayloadAction<ResponseItem>
    ) => {
      state.allCartItems = state.allCartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
  },
});

export const { storeAllCartItems, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
