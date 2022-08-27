import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CustomerProduct,
  Product,
  Wishlist,
  WishlistItem,
  Brand,
} from 'models';

export interface productsState {
  publicProducts: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  categorizedProduct: Product[];
  wishlist: Wishlist;
  brands: Brand[];
}

const initialState: productsState = {
  publicProducts: [],
  featuredProducts: [],
  categorizedProduct: [],
  brands: [],
  wishlist: {
    userId: '',
    id: '',
    items: [],
  },
};

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    storeProducts: (
      state: productsState,
      action: PayloadAction<CustomerProduct[]>
    ) => {
      state.publicProducts = action.payload;
    },
    storeFeaturedProducts: (
      state: productsState,
      action: PayloadAction<CustomerProduct[]>
    ) => {
      state.featuredProducts = action.payload;
    },
    storeWishlist: (state: productsState, action: PayloadAction<Wishlist>) => {
      state.wishlist = action.payload;
    },
    deleteItemFromWishlist: (
      state: productsState,
      action: PayloadAction<string>
    ) => {
      const newList = state.wishlist.items?.filter(
        (item: WishlistItem) => item.productId != action.payload
      );
      state.wishlist = { ...state.wishlist, items: newList };
    },
    deleteFullWishlist: (state: productsState) => {
      const newList: any = [];
      state.wishlist = { ...state.wishlist, items: newList };
    },
    resetWishilist: (state: productsState) => {
      state.wishlist = initialState.wishlist;
    },
    storeCategorizedProduct: (
      state: productsState,
      action: PayloadAction<Product[]>
    ) => {
      state.categorizedProduct = action.payload;
    },
    storeBrands: (state: productsState, action: PayloadAction<Brand[]>) => {
      state.brands = action.payload;
    },
    addToWishlist: (
      state: productsState,
      action: PayloadAction<WishlistItem>
    ) => {
      const newList = state.wishlist.items;
      newList?.push(action.payload);
      state.wishlist = { ...state.wishlist, items: newList };
    },
  },
});

export const {
  storeProducts,
  storeFeaturedProducts,
  storeWishlist,
  deleteItemFromWishlist,
  deleteFullWishlist,
  storeCategorizedProduct,
  addToWishlist,
  resetWishilist,
  storeBrands,
} = productsSlice.actions;

export default productsSlice.reducer;
