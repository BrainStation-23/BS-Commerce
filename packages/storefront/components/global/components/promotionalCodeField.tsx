import { useRouter } from 'next/router';
import React from 'react';

interface Properties {
  placeholder: string;
}

const PromotionalCodeField: React.FC<Properties> = (props) => {
  const router = useRouter();
  const submitPromoCodeOnClick = () => {
    alert((document.getElementById('promoCode') as HTMLInputElement).value);
  };
  return (
    <>
      <p className="mt-5 text-lg">Promotion</p>
      <p className="pb-2 text-sm text-gray-500">Enter promotion code.</p>
      <div
        className={`flex h-12 w-full flex-row items-center justify-between rounded border border-slate-200 text-sm`}
      >
        <input
          className="ml-4 w-full bg-white focus:outline-none"
          type="search"
          name="promoCode"
          placeholder={`${props.placeholder}`}
          id="promoCode"
        />
        <div className="flex h-12 w-20 cursor-pointer justify-center rounded-r bg-[#40a944] text-white transition-all duration-200 ease-linear hover:bg-stone-900">
          <button
            type="submit"
            id="submitPromoCode"
            className=""
            onClick={() => {
              submitPromoCodeOnClick();
            }}
          >
            APPLY
          </button>
        </div>
      </div>
    </>
  );
};

export default PromotionalCodeField;
