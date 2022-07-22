import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderAddress } from 'models';

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
  shippingInfo: IOrderAddress;
  billingInfo: IOrderAddress;
}

const initialState: CheckoutState = {
  shippingInfo: {
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postCode: '',
    phoneNumber: '',
  },
  billingInfo: {
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
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
      action: PayloadAction<IOrderAddress>
    ) => {
      state.shippingInfo = action.payload;
    },
    addToBillingInfo: (
      state: CheckoutState,
      action: PayloadAction<IOrderAddress>
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
        city: '',
        postCode: '',
        phoneNumber: '',
      };
      state.billingInfo = {
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postCode: '',
        phoneNumber: '',
      };
    },
  },
});

export const { addToShippingInfo, addToBillingInfo, deleteCheckoutInfo } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
