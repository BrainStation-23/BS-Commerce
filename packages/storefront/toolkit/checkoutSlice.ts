import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateCartItemRequest } from "models";
import { Cart, CartProduct, IOrderAddress } from "models";

export interface CheckoutState {
  shippingInfo: {};
  billingInfo: {}

}

const initialState: CheckoutState = {
  shippingInfo: {},
  billingInfo: {}
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToShippingInfo: (
      state: CheckoutState,
      action: PayloadAction<{}>
    ) => {
        state.shippingInfo = action.payload;
    },
    addToBillingInfo: (
      state: CheckoutState,
      action: PayloadAction<{}>
    ) => {
      state.billingInfo = action.payload;
    }
  },
});

export const { addToShippingInfo, addToBillingInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;
