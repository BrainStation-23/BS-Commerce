import React, { useState, FC } from 'react';

import CounterElement from '@/components/deals/filter/subComponent/counterElement';
import radio from 'styles/radioButton.module.css';
import { userAPI } from 'APIs';
import { GetServerSideProps } from 'next/types';
import { useAppSelector } from 'customHooks/hooks';
import { useRouter } from 'next/router';

const BrandTypeOptions: FC<any> = ({ brands }) => {
  const router = useRouter();
  const [brandTypesOptionVal, setBrandTypesOptionVal] = useState('');
  const availableOptions = useAppSelector(
    (state) => state.persistedReducer.product.brands
  );
  const brandsOnClick = (brandName: string) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    console.log(params);
    router.replace({
      pathname: `/collections/${params.name}`,
      query: {
        categoryId: params.categoryId,
        name: params.name,
        orderBy: params.orderBy,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
        brand: brandName,
      },
    });
  };
  return (
    <>
      <div className="py-4">
        <CounterElement />
      </div>
      <div className={radio.custom}>
        {availableOptions &&
          availableOptions.map((option, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between py-1">
                  <input
                    id={option}
                    type="radio"
                    value={brandTypesOptionVal}
                    onChange={(e) => setBrandTypesOptionVal(e.target.value)}
                    onClick={() => {
                      brandsOnClick(option);
                    }}
                  />
                  <label
                    htmlFor={option + ''}
                    className="flex cursor-pointer items-center"
                  >
                    {option}
                  </label>
                  <div>(3)</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BrandTypeOptions;
