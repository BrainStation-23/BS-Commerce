import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  state: string;
  postCode: string;
  phoneNumber: string;
}

export interface CheckoutState {
  shippingInfo: ShippingInfo;
  billingInfo: ShippingInfo;
}

const initialState: CheckoutState = {
  shippingInfo: {
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    postCode: '',
    phoneNumber: '',
  },
  billingInfo: {
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    postCode: '',
    phoneNumber: '',
  },
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addToShippingInfo: (
      state: CheckoutState,
      action: PayloadAction<ShippingInfo>
    ) => {
      state.shippingInfo = action.payload;
    },
    addToBillingInfo: (
      state: CheckoutState,
      action: PayloadAction<ShippingInfo>
    ) => {
      state.billingInfo = action.payload;
    },
    deleteCheckoutInfo: (state: CheckoutState) => {
      state.shippingInfo = {
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        postCode: '',
        phoneNumber: '',
      };
      state.billingInfo = {
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        postCode: '',
        phoneNumber: '',
      };
    },
  },
});

export const { addToShippingInfo, addToBillingInfo, deleteCheckoutInfo } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
