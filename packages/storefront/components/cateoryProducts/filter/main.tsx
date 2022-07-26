import type { NextComponentType } from 'next';
import React, { useState } from 'react';

import PriceFilter from '@/components/cateoryProducts/filter/subComponent/priceFilter';
import AvaialabilityOptions from '@/components/cateoryProducts/filter/subComponent/availability';
import ProductTypeOptions from '@/components/cateoryProducts/filter/subComponent/productTypes';
import BrandTypeOptions from '@/components/cateoryProducts/filter/subComponent/brandTypes';
import ColourTypeOptions from '@/components/cateoryProducts/filter/subComponent/colorAvailibility';

const CategoryFilter: NextComponentType = () => {
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
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
      <div className="mt-16 w-full">
        <div className="accordion" id="accordionExample5">
          {/* Price Filter Section */}
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingOne5">
              <button
                className="
                accordion-button
                relative
                flex
                w-full
                items-center
                justify-between
                rounded-none border-0 bg-white
                px-0
                pb-2
                text-left
                text-sm
                text-gray-800
                transition focus:outline-none
              "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne5"
                aria-expanded="false"
                aria-controls="collapseOne5"
                onClick={accorditionStatus1}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {' '}
                  PRICE
                </span>
                <span>{displayStatus1 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseOne5"
              className={
                displayStatus1
                  ? 'accordion-collapse collapse'
                  : 'accordion-collapse collapse hidden'
              }
              aria-labelledby="headingOne5"
            >
              <PriceFilter />
            </div>
          </div>
          {/* Availability Filter Section */}
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   w-full
                   items-center
                   justify-between
                   rounded-none
                   border-0 bg-white px-0
                   pt-8
                   pb-2
                   text-left
                   text-sm
                   text-gray-800
                   transition focus:outline-none
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus2}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {' '}
                  AVAILABILITY
                </span>
                <span>{displayStatus2 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus2
                  ? 'accordion-collapse collapse'
                  : 'accordion-collapse collapse hidden'
              }
            >
              <div className="accordion-body py-4 transition duration-200">
                <AvaialabilityOptions />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   w-full
                   items-center
                   justify-between
                   rounded-none
                   border-0 bg-white px-0
                   pt-8
                   pb-2
                   text-left
                   text-base
                   text-gray-800
                   transition focus:outline-none
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus3}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {' '}
                  PRODUCT TYPE
                </span>
                <span>{displayStatus3 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus3
                  ? 'accordion-collapse collapse'
                  : 'accordion-collapse collapse hidden'
              }
            >
              <div className="accordion-body py-4">
                <ProductTypeOptions />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   w-full
                   items-center
                   justify-between
                   rounded-none
                   border-0 bg-white px-0
                   pt-8
                   pb-2
                   text-left
                   text-base
                   text-gray-800
                   transition focus:outline-none
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus4}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {' '}
                  BRAND
                </span>
                <span>{displayStatus4 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus4
                  ? 'accordion-collapse collapse'
                  : 'accordion-collapse collapse hidden'
              }
            >
              <div className="accordion-body py-4">
                <BrandTypeOptions />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   w-full
                   items-center
                   justify-between
                   rounded-none
                   border-0 bg-white px-0
                   pt-8
                   pb-2
                   text-left
                   text-base
                   text-gray-800
                   transition focus:outline-none
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus5}
              >
                <span className="text-[15px] font-semibold tracking-wide">
                  {' '}
                  COLOR
                </span>
                <span>{displayStatus5 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus5
                  ? 'accordion-collapse collapse'
                  : 'accordion-collapse collapse hidden'
              }
            >
              <div className="accordion-body py-4 transition duration-200">
                <ColourTypeOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colspan-4 grid"></div>
    </>
  );
};

export default CategoryFilter;
