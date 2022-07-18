import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerAddress } from 'models';

export interface CustomerAddressState {
  addresses: [];
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
      action: PayloadAction<[]>
    ) => {
      state.addresses = action.payload;
    },
  },
});

export const { storeAddresses } = customerAddressSlice.actions;

export default customerAddressSlice.reducer;
