import type { NextComponentType } from 'next';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import SearchItem from '@/components/search/searchItem';
import { useEffect, useState } from 'react';

const SearchComponent: NextComponentType = () => {
  const navSearchInput = document.getElementById(
    'navSearchInput'
  ) as HTMLInputElement;
  const navSearchText = navSearchInput?.value;

  const [searchText, setSearchText] = useState(
    navSearchText ? navSearchText : ''
  );
  const [totalProducts, setTotalProducts] = useState(0);
  const onProductSearch = () => {
    setSearchText(
      (document.getElementById('productSearchInput') as HTMLInputElement).value
    );
  };
  useEffect(() => {
    if (navSearchText?.length > 0) {
      setSearchText(navSearchText);
      (
        document.getElementById('productSearchInput') as HTMLInputElement
      ).value = navSearchText;
      navSearchInput?.value ? (navSearchInput.value = '') : '';
    }
  }, [searchText, navSearchText]);
  return (
    <>
      <Breadcrumb
        title={`${
          searchText.length > 0
            ? `Search: ${totalProducts} results found`
            : 'Search'
        }`}
        pathArray={[
          'Home',
          `${
            searchText.length > 0
              ? `Search: ${totalProducts} results found`
              : 'Search'
          }`,
        ]}
        linkArray={['/', '/search']}
      />
      <div className="container mx-auto px-4 tracking-wider">
        <h4 className="title-font mt-16 mb-1 text-center text-sm  font-normal text-gray-900">
          {searchText ? (
            <>
              Your search for{' '}
              <strong className="highlight">{searchText}</strong> revealed the
              following:
            </>
          ) : (
            'Search for products on our site'
          )}
        </h4>

        <div className="mt-5 flex justify-center">
          <div className="mb-3 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="input-group relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                id="productSearchInput"
                className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-3xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Search our Store"
                onChange={() => onProductSearch()}
              />
              <button
                type="submit"
                className="absolute right-0 rounded-3xl bg-green-600 py-1.5 px-4 pb-2 text-base text-white hover:bg-black"
                onClick={() => onProductSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <SearchItem
            searchText={searchText}
            setTotalProducts={setTotalProducts}
          />
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
