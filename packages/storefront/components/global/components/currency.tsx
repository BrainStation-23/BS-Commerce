import React, { useState } from "react";

interface currency {
  abbv: string;
  name: string;
}

const Currency: React.FC = () => {
  const [open, setOpen] = useState(false);
  const currencyList: currency[] = [
    { abbv: "USD", name: "US Dollar" },
    { abbv: "EUR", name: "Euro" },
    { abbv: "GBP", name: "British Pound" },
    { abbv: "INR", name: "Indian Rupee" },
    { abbv: "BDT", name: "Bangladesh Taka" },
  ];
  return (
    <div className="inline-block relative">
      <button
        className="inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="mr-1">USD</span>
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
        className={`overflow-hidden top-7 absolute text-gray-700 whitespace-nowrap bg-white border p-4 z-50 transition-all duration-500 ease-linear ${"left-0"} ${
          open ? "h-[190px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        {currencyList.map((currency) => (
          <li key={currency.abbv} className="py-1">
            {currency.abbv} - {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Currency;
