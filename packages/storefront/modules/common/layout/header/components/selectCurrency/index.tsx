import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import React, { useState } from 'react';
import { setCurrencyName } from 'store/slices/currencySlice';

interface currency {
  abbv: string;
  name: string;
}

const Currency: React.FC = () => {
  const [open, setOpen] = useState(false);

  const currencyList: currency[] = [
    { abbv: 'USD', name: 'US Dollar' },
    { abbv: 'EUR', name: 'Euro' },
    { abbv: 'GBP', name: 'British Pound' },
    { abbv: 'INR', name: 'Indian Rupee' },
    { abbv: 'BDT', name: 'Bangladeshi Taka' },
  ];
  const currencyName = useAppSelector(
    (state) => state.persistedReducer.currency.currencyName
  );

  const [selectedCurrency, setSelectedCurrency] = useState(currencyName);
  const dispatch = useAppDispatch();
  const currencyOnclick = async (currencyName: string) => {
    dispatch(
      setCurrencyName({
        currencyStyle: 'IN',
        currencyName: `${currencyName}`,
      })
    );
    setSelectedCurrency(currencyName);
  };
  return (
    <div
      className="relative inline-block h-8"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="mr-1">{selectedCurrency}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        className={`absolute top-7 z-50 overflow-hidden whitespace-nowrap border bg-white p-4 text-gray-700 transition-all duration-500 ease-linear dark:bg-dark_bg dark:text-dark_text ${'left-0'} ${
          open ? 'transition-all duration-100 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {currencyList.map((currency) => (
          <li
            key={currency.abbv}
            className={`cursor-pointer py-1 ${
              currency.abbv === currencyName
                ? 'text-primary dark:text-dark_primary'
                : 'hover:text-primary dark:hover:text-dark_primary'
            }`}
            onClick={() => currencyOnclick(currency.abbv)}
          >
            {currency.abbv} - {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Currency;
