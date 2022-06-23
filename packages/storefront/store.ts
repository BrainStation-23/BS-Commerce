import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from "./toolkit/ProductsSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedProductReducer = persistReducer(persistConfig, productsReducer); 

export const store = configureStore({
  reducer: {
    productsStore: persistedProductReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;