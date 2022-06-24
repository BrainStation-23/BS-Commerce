import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from "./toolkit/ProductsSlice";
import tokenReducer from "./toolkit/userAuth/signinSlice";
import addToCartReducer from "./toolkit/cart/addToCartSlice";
import getAllCartItemsReducer  from "toolkit/cart/getAllCartItems";

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ["addToCartReducer", "tokenReducer", ],
}

const persistedProductReducer = persistReducer(persistConfig, productsReducer); 
const persistedTokenReducer = persistReducer(persistConfig, tokenReducer);
const persistedAddToCartReducer = persistReducer(persistConfig, addToCartReducer);
const persistedgetAllCartItemsReducer = persistReducer(persistConfig, getAllCartItemsReducer); 


export const store = configureStore({
  reducer: {
    productsStore: persistedProductReducer,
    tokenStore: persistedTokenReducer,
    addToCartStore: persistedAddToCartReducer,
    getAllCartItemsStore: persistedgetAllCartItemsReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;