import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ForgetPasswordState {
  username: string,
  otp: number
}

const initialState: ForgetPasswordState = {
  username: '',
  otp: 0
};

export const forgetPasswordSlice = createSlice({
  name: 'forgetPassword',
  initialState,
  reducers: {
    storeUsername: (state: ForgetPasswordState, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    storeOtp: (
      state: ForgetPasswordState,
      action: PayloadAction<number>
    ) => {
      state.otp = action.payload;
    },
  },
});

export const { storeUsername, storeOtp } =
  forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
