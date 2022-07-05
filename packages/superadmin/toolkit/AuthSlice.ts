import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface authState {
  token: string;
}

const initialState: authState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = '';
    },
  },
});

export const { saveToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
