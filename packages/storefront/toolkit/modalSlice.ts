import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  setModal: boolean;
}

const initialState: ModalState = {
  setModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalState: (state: ModalState, action: PayloadAction<boolean>) => {
      state.setModal = action.payload;
    },
  },
});

export const { setModalState } = modalSlice.actions;

export default modalSlice.reducer;
