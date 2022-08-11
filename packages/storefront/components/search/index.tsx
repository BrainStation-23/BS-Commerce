import type { NextComponentType } from 'next';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import SearchItem from '@/components/search/searchItem';
import { useState } from 'react';

const SearchComponent: NextComponentType = () => {
  const [searchText, setSearchText] = useState('');
  const onProductSearch = () => {
    setSearchText(
      (document.getElementById('productSearchInput') as HTMLInputElement).value
    );
  };
  return (
    <>
      <Breadcrumb
        title="Search: 4 results found"
        pathArray={['Home', 'Search: 4 results found']}
        linkArray={['/', '/search']}
      />
      <div className="container px-4 mx-auto tracking-wider">
        <h4 className="title-font mt-16 mb-1 text-center text-sm  font-normal text-gray-900">
          Your search for <strong className="highlight">{searchText}</strong>{' '}
          revealed the following:
        </h4>

        <div className="mt-5 flex justify-center">
          <div className="mb-3 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="input-group relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                id="productSearchInput"
                className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-3xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Search"
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
          <SearchItem searchText={searchText} />
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
