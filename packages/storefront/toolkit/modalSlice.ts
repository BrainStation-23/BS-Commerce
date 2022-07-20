import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  setModal: boolean;
  setModalWishlist: boolean
}

const initialState: ModalState = {
  setModal: false,
  setModalWishlist: false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalState: (state: ModalState, action: PayloadAction<boolean>) => {
      state.setModal = action.payload;
    },
    setWishlistModalState: (state: ModalState, action: PayloadAction<boolean>) => {
      state.setModalWishlist = action.payload;
    },
  },
});

export const { setModalState, setWishlistModalState } = modalSlice.actions;

export default modalSlice.reducer;
