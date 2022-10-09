import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

export interface currencyState {
  currencyStyle: string;
  currencyName: string;
  currencyLanguage: string;
}

const initialState: currencyState = {
  currencyStyle: 'IN',
  currencyName: 'BDT',
  currencyLanguage: 'en',
};

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    setCurrencyName: (
      state: currencyState,
      action: PayloadAction<{ currencyStyle: string; currencyName: string }>
    ) => {
      state.currencyName = action.payload.currencyName;
    },
    setCurrencyLanguage: (
      state: currencyState,
      action: PayloadAction<string>
    ) => {
      state.currencyLanguage = action.payload;
    },
  },
});

export const { setCurrencyName, setCurrencyLanguage } = currencySlice.actions;

export default currencySlice.reducer;
