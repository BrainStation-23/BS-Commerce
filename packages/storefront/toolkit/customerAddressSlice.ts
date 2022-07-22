import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerAddress } from 'models';

export interface CustomerAddressState {
  addresses: CustomerAddress[];
}

const initialState: CustomerAddressState = {
  addresses: [],
};

export const customerAddressSlice = createSlice({
  name: 'customerAddress',
  initialState,
  reducers: {
    storeAddresses: (
      state: CustomerAddressState,
      action: PayloadAction<CustomerAddress[]>
    ) => {
      state.addresses = action.payload;
    },
    deleteAddress: (
      state: CustomerAddressState,
      action: PayloadAction<string>
    ) => {
      const newAddressList = state.addresses.filter(
        (address) => address.id !== action.payload
      );
      state.addresses = newAddressList;
    },
  },
});

export const { storeAddresses, deleteAddress } =
  customerAddressSlice.actions;

export default customerAddressSlice.reducer;