import { ResponseItem, updateCartItemRequest } from '@bs-commerce/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AllCartItemsState {
  allCartItems: ResponseItem[];
}

const initialState: AllCartItemsState = {
  allCartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: AllCartItemsState,
      action: PayloadAction<ResponseItem>
    ) => {
      const existingCartProduct = state.allCartItems?.find(
        (item) => item.productId === action.payload.productId
      );
      existingCartProduct
        ? (existingCartProduct.quantity = action.payload.quantity)
        : state.allCartItems?.push(action.payload);
    },
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
      const newCart = state.allCartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
      state.allCartItems = newCart;
    },
    deleteCart: (state: AllCartItemsState) => {
      state.allCartItems = [];
    },
    updateCartItem: (
      state: AllCartItemsState,
      action: PayloadAction<updateCartItemRequest>
    ) => {
      const list = state.allCartItems;
      list.forEach((item) => {
        if (item.productId === action.payload.productId) {
          item.quantity = action.payload.quantity!;
        }
      });
      state.allCartItems = list;
    },
    resetCart: (state: AllCartItemsState) => {
      state.allCartItems = [];
    },
  },
});

export const {
  storeAllCartItems,
  deleteCartItem,
  deleteCart,
  updateCartItem,
  addToCart,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;