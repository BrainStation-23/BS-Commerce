import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from "./toolkit/ProductsSlice";
import tokenReducer from "./toolkit/userAuth/signinSlice";
import addToCartReducer from "./toolkit/cart/addToCartSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedProductReducer = persistReducer(persistConfig, productsReducer); 
const persistedTokenReducer = persistReducer(persistConfig, tokenReducer);
const persistedTotalCartItemsReducer = persistReducer(persistConfig, addToCartReducer); 

export const store = configureStore({
  reducer: {
    productsStore: persistedProductReducer,
    tokenStore: persistedTokenReducer,
    totalCartItemsStore: persistedTotalCartItemsReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;