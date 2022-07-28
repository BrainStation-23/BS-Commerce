import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerProduct, Product, WishlistProduct } from "models";

export interface CartModalState {
  showModal: boolean,
  product?: Product | WishlistProduct | CustomerProduct | null
}

export interface ModalState {
  setModal: boolean;
  setModalWishlist: boolean
  setModalCart: CartModalState
}

const initialState: ModalState = {
  setModal: false,
  setModalWishlist: false,
  setModalCart: {
    showModal: false
  },
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
    setCartModalState: (state: ModalState, action: PayloadAction<CartModalState>) => {
      const modalObj = {
        showModal: action.payload.showModal,
        product: action.payload.product ? action.payload.product : null
      }
      state.setModalCart = modalObj;
    },
  },
});

export const { setModalState, setWishlistModalState, setCartModalState } = modalSlice.actions;

export default modalSlice.reducer;
