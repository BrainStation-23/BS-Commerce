import React, { FC, useState } from 'react';
import PriceFilter from '@/modules/cateoryProducts/components/filter/component/priceFilter';
import AvaialabilityOptions from '@/modules/cateoryProducts/components/filter/component/availability';
import ProductTypeOptions from '@/modules/cateoryProducts/components/filter/component/productTypes';
import BrandTypeOptions from '@/modules/cateoryProducts/components/filter/component/brandTypes';
import ColourTypeOptions from '@/modules/cateoryProducts/components/filter/component/colorAvailibility';
import useTranslation from 'next-translate/useTranslation';

const CategoryFilter: FC = () => {
  const [displayStatus1, setDisplayStatus1] = useState(false);
  const [displayStatus2, setDisplayStatus2] = useState(false);
  const [displayStatus3, setDisplayStatus3] = useState(false);
  const [displayStatus4, setDisplayStatus4] = useState(false);
  const [displayStatus5, setDisplayStatus5] = useState(false);

  const accorditionStatus1 = () => {
    setDisplayStatus1(!displayStatus1);
  };
  const accorditionStatus2 = () => {
    setDisplayStatus2(!displayStatus2);
  };
  const accorditionStatus3 = () => {
    setDisplayStatus3(!displayStatus3);
  };
  const accorditionStatus4 = () => {
    setDisplayStatus4(!displayStatus4);
  };
  const accorditionStatus5 = () => {
    setDisplayStatus5(!displayStatus5);
  };

  const upArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 stroke-dark_bg dark:stroke-dark_text"
      fill="none"
      viewBox="0 0 24 24"
      // stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 stroke-dark_bg dark:stroke-dark_text"
      fill="none"
      viewBox="0 0 24 24"
      // stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-16 w-full dark:text-dark_text">
        <div id="accordionExample5">
          {/* Price Filter Section */}
          <div className="">
            <h2 className="mb-0" id="headingOne5">
              <button
                className="flex w-full items-center justify-between rounded-none border-0 px-0 pb-2 text-left text-sm text-gray-800 transition focus:outline-none dark:text-dark_text"
                type="button"
                onClick={accorditionStatus1}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {t('collections:price')}
                </span>
                <span>{displayStatus1 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div
              id="collapseOne5"
              className={displayStatus1 ? '' : 'hidden'}
              aria-labelledby="headingOne5"
            >
              <PriceFilter />
            </div>
          </div>
          <div>
            <h2 className="mb-0" id="headingTwo5">
              <button
                className="flex w-full items-center justify-between rounded-none border-0 px-0 pt-8 pb-2 text-left text-base text-gray-800 transition focus:outline-none dark:text-dark_text"
                type="button"
                onClick={accorditionStatus4}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {' '}
                  {t('collections:brand')}
                </span>
                <span>{displayStatus4 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className={displayStatus4 ? '' : 'hidden'}>
              <BrandTypeOptions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
