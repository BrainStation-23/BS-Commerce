import type { NextComponentType } from 'next';
import { Router, useRouter } from 'next/router';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

const ProductSort: FC = () => {
  const { t } = useTranslation();

  const sortOptions = [
    // { id: Math.random() * 100, meta: { name: 'Alphabetically' } },
    {
      id: Math.random() * 100,
      meta: { name: t('collections:price_low_to_high'), value: 'asc' },
    },
    {
      id: Math.random() * 100,
      meta: { name: t('collections:price_high_to_low'), value: 'desc' },
    },
  ];
  const router = useRouter();
  const gridIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  );

  const getDefaultValue = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.orderBy;
  };

  const replaceQuery = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const queryObject: {
      [key: string]: string | number;
    } = { categoryId: params.categoryId };
    params.categoryId ? (queryObject['categoryId'] = params.categoryId) : '';
    params.name ? (queryObject['name'] = params.name) : '';
    params.brand ? (queryObject['brand'] = params.brand) : '';
    params.minPrice ? (queryObject['minPrice'] = params.minPrice) : '';
    params.maxPrice ? (queryObject['maxPrice'] = params.maxPrice) : '';
    params.skip ? (queryObject['skip'] = params.skip) : '';
    params.limit ? (queryObject['limit'] = params.limit) : '';
    queryObject['orderBy'] = (
      document.getElementById('selectSortOptions') as HTMLInputElement
    ).value;
    router.replace({
      pathname: `/collections/${params.name}`,
      query: queryObject,
    });
  };
  const dropdownSortOptions =
    sortOptions &&
    sortOptions.map((sortOption) => {
      return (
        <option key={sortOption.id} value={sortOption.meta.value}>
          {sortOption.meta.name}
        </option>
      );
    });
  return (
    <>
      <div>
        <div className="px-x box-border h-auto w-full border text-sm">
          <div className="flex justify-between">
            <div className="flex  py-2">
              <label className="grid content-center justify-center px-4">
                {t('collections:sortBy')}:
              </label>
              <select
                id="selectSortOptions"
                name="cars"
                value={getDefaultValue()}
                className="-ml-3 box-border h-auto border py-2 px-1 text-sm"
                onChange={() => {
                  replaceQuery();
                }}
              >
                {dropdownSortOptions}
              </select>
            </div>
            {/* <div className="grid content-center justify-center pl-4">
              Showing 1-3 of 3 result
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
