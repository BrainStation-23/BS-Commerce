import type { NextComponentType } from "next";
import React, { useState } from "react";
// import counterElement from "../../global/components/counter/counterElement";
import PriceFilter from "./subComponent/priceFilter";
import AvaialabilityOptions from "./subComponent/availability";
import ProductTypeOptions from "./subComponent/productTypes";
import BrandTypeOptions from "./subComponent/brandTypes";
import ColourTypeOptions from "./subComponent/colorAvailibility";
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
              <button
                className="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
                flex justify-between
              "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne5"
                aria-expanded="false"
                aria-controls="collapseOne5"
                onClick={accorditionStatus1}
              >
                <span className="text-base font-semibold"> PRICE</span>
                <span>{displayStatus1 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseOne5"
              className={
                displayStatus1
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
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
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus2}
              >
                <span className="text-base font-semibold"> AVAILABILITY</span>
                <span>{displayStatus2 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus2
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
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
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus3}
              >
                <span className="text-base font-semibold"> PRODUCT TYPE</span>
                <span>{displayStatus1 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus3
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
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
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus4}
              >
                <span className="text-base font-semibold"> BRAND</span>
                <span>{displayStatus1 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus4
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
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
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus5}
              >
                <span className="text-base font-semibold"> COLOR</span>
                <span>{displayStatus1 ? upArrow : downArrow}</span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus5
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
                <ColourTypeOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid colspan-4"></div>
    </>
  );
};

export default DealsFilter;
