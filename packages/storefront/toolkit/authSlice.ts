import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TokenState {
  access_token: string;
}

const initialState: TokenState = {
  access_token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUserToken: (state: TokenState, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
  },
});

export const { storeUserToken } = authSlice.actions;

export default authSlice.reducer;
