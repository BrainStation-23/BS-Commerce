import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from 'store/slices/productsSlice';
import authReducer from 'store/slices/authSlice';
import cartReducer from 'store/slices/cartSlice';
import userReducer from 'store/slices/userSlice';
import categoryReducer from 'store/slices/categorySlice';
import checkoutReducer from 'store/slices/checkoutSlice';
import modalReducer from 'store/slices/modalSlice';
import compareReducer from 'store/slices/compareSlice';
import CustomerAddressReducer from 'store/slices/customerAddressSlice';
import forgetPasswordReducer from 'store/slices/forgetPasswordSlice';
import currencyReducer from 'store/slices/currencySlice';

const reducers = combineReducers({
  product: productsReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
  category: categoryReducer,
  checkout: checkoutReducer,
  modal: modalReducer,
  compare: compareReducer,
  customerAddress: CustomerAddressReducer,
  forgetPassword: forgetPasswordReducer,
  currency: currencyReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart', 'auth', 'checkout'],
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
