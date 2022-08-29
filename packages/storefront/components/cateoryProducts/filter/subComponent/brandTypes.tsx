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
  const getBrandName = (brandName: string) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries()); 
    return brandName == params.brand;
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
                    id={option.toString()}
                    type="radio"
                    name="brandRadio"
                    value={brandTypesOptionVal}
                    checked={getBrandName(option.toString())}
                    onChange={(e) => setBrandTypesOptionVal(e.target.value)}
                    onClick={() => {
                      brandsOnClick(option.toString());
                    }}
                  />
                  <label
                    htmlFor={option.toString()}
                    className="flex cursor-pointer items-center"
                  >
                    {option.toString()}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BrandTypeOptions;
