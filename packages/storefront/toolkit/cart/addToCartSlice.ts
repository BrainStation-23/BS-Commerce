import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartTotalItemsState {
  totalCatItems: number;
}

const initialState: CartTotalItemsState = {
    totalCatItems: 0
};

export const addToCart = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    storeTotalCartItems: (
      state: CartTotalItemsState,
      action: PayloadAction<number>
    ) => {
      state.totalCatItems += action.payload;
    },
  },
});

export const { storeTotalCartItems } = addToCart.actions;

export default addToCart.reducer;
