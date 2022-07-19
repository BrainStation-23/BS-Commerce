import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from 'models';

export interface UserState {
  user: string;
  customerDetails: Customer
}

const initialState: UserState = {
  user: '',
  customerDetails: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUserDetails: (state: UserState, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    storeCustomerDetails: (state: UserState, action: PayloadAction<Customer>) => {
      state.customerDetails = action.payload
    }
  },
});

export const { storeUserDetails, storeCustomerDetails } = userSlice.actions;

export default userSlice.reducer;
