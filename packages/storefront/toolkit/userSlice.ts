import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "models";

export interface UserState {
  user: string;
}

const initialState: UserState = {
 user: ''
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUserDetails: (state: UserState, action: PayloadAction<string>) => {
      state.user = action.payload
    },
  },
});

export const { storeUserDetails } = userSlice.actions;

export default userSlice.reducer;
