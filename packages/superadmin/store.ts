import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "./toolkit/AuthSlice";

// add your custor reducers in below list
const reducers = combineReducers({
  auth: authReducers,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // add the reducer you want to persist
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
