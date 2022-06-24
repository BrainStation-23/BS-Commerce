import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Token } from "models";

export interface TokenState {
  access_token: string;
}

const initialState: TokenState = {
  access_token: "",
};

export const usertokenSlice = createSlice({
  name: "usertokenSlice",
  initialState,
  reducers: {
    storeUserToken: (
      state: TokenState,
      action: PayloadAction<string>
    ) => {
      state.access_token = action.payload;
    },
    removeUserToken: (
        state: TokenState,
        action: PayloadAction<string>
      ) => {
        state.access_token = action.payload;
      },
  },
});

export const { storeUserToken, removeUserToken } = usertokenSlice.actions;

export default usertokenSlice.reducer;
