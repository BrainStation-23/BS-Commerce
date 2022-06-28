import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateCartItemRequest } from "models";
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
    deleteCart: (
      state: AllCartItemsState,
    ) => {
      state.allCartItems = [];
    },
    updateCartItem: (
      state: AllCartItemsState,
      action: PayloadAction<updateCartItemRequest>
    ) => {
      const list = state.allCartItems;
      list.forEach(item => {
        if(item.productId === action.payload.productId) {
          item.quantity = action.payload.quantity!;
        }
      })
      state.allCartItems = list;
    }
  },
});

export const { storeAllCartItems, deleteCartItem, deleteCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
