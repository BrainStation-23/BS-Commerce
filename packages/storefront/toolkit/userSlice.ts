import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from 'models';

export interface UserState {
  user: string;
  customerDetails: Customer;
}

const initialState: UserState = {
  user: '',
  customerDetails: {
    id: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUserDetails: (state: UserState, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    storeCustomerDetails: (
      state: UserState,
      action: PayloadAction<Customer>
    ) => {
      state.customerDetails = action.payload;
    },
    resetUserDetails: (state: UserState) => {
      state.user = initialState.user;
      state.customerDetails = initialState.customerDetails;
    },
  },
});

export const { storeUserDetails, storeCustomerDetails, resetUserDetails } =
  userSlice.actions;

export default userSlice.reducer;
