import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./toolkit/ProductsSlice";
import authReducer from "./toolkit/authSlice";
import cartReducer from "toolkit/cartSlice";
import userReducer from "toolkit/userSlice";
import modalReducer from "toolkit/modalSlice";
import compareReducer from "toolkit/compareSlice";


const reducers = combineReducers({
  product: productsReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
  modal: modalReducer,
  compare: compareReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "auth", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
