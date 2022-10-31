import type { NextComponentType } from 'next';
import React, { useState } from 'react';

import PriceFilter from '@/modules/deals/components/dealsFilter/components/priceFilter';
import AvaialabilityOptions from '@/modules/deals/components/dealsFilter/components/availability';
import ProductTypeOptions from '@/modules/deals/components/dealsFilter/components/productTypes';
import BrandTypeOptions from '@/modules/deals/components/dealsFilter/components/brandTypes';
import ColourTypeOptions from '@/modules/deals/components/dealsFilter/components/colorAvailibility';
import ElementButton from '@/modules/common/buttons/elementButton';

const DealsFilter: NextComponentType = () => {
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
      <div className="mt-20">
        <div className="accordion" id="accordionExample5">
          {/* Price Filter Section */}
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingOne5">
              <ElementButton
                onClickFunction={accorditionStatus1}
                className="w-full"
              >
                <div className="flex justify-between" id="headingOne5">
                  <span className="text-[15px] font-semibold">PRICE</span>
                  <span>{displayStatus1 ? upArrow : downArrow}</span>
                </div>
              </ElementButton>
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
              <ElementButton
                onClickFunction={accorditionStatus2}
                className="w-full"
              >
                <div className="flex justify-between" id="headingOne5">
                  <span className="text-[15px] font-semibold">
                    AVAILABILITY
                  </span>
                  <span>{displayStatus2 ? upArrow : downArrow}</span>
                </div>
              </ElementButton>
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
              <div className="accordion-body py-4 px-5">
                <AvaialabilityOptions />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <ElementButton
                onClickFunction={accorditionStatus3}
                className="w-full"
              >
                <div className="flex justify-between" id="headingOne5">
                  <span className="text-[15px] font-semibold">
                    PRODUCT TYPE
                  </span>
                  <span>{displayStatus3 ? upArrow : downArrow}</span>
                </div>
              </ElementButton>
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
              <div className="accordion-body py-4 px-5">
                <ProductTypeOptions />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <ElementButton
                onClickFunction={accorditionStatus4}
                className="w-full"
              >
                <div className="flex justify-between" id="headingOne5">
                  <span className="text-[15px] font-semibold">BRAND</span>
                  <span>{displayStatus4 ? upArrow : downArrow}</span>
                </div>
              </ElementButton>
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
              <div className="accordion-body py-4 px-5">
                <BrandTypeOptions />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <ElementButton
                onClickFunction={accorditionStatus4}
                className="w-full"
              >
                <div className="flex justify-between" id="headingOne5">
                  <span className="text-[15px] font-semibold">COLOR</span>
                  <span>{displayStatus4 ? upArrow : downArrow}</span>
                </div>
              </ElementButton>
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
              <div className="accordion-body py-4 px-5">
                <ColourTypeOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsFilter;
