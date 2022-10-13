import { NextComponentType } from 'next';

const SecurePaymentIcon: NextComponentType = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9"
      fill="none"
      viewBox="0 0 24 24"
      // stroke="#40a944"
      strokeWidth="1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );
};

export default SecurePaymentIcon;
