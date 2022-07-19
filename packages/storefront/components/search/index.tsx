import type { NextComponentType } from 'next';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import SearchItem from '@/components/search/searchItem';

const SearchComponent: NextComponentType = () => {
  return (
    <>
      <Breadcrumb
        title="Search: 4 results foun..."
        pathArray={['Home', 'Search: 4 results foun...']}
        linkArray={['/', '/search']}
      />
      <div className="px-15 container m-auto w-fit items-center justify-center tracking-wider">
        <div className="mx-15 flex flex-wrap">
          <div className="lg:mx-1/5 pr-4 pl-4 md:w-full">
            <h4 className="title-font mt-16 mb-1 text-center text-sm  font-normal text-gray-900">
              Your search for <strong className="highlight">Demo</strong>{' '}
              revealed the following:
            </h4>

            <div className="mt-5 flex justify-center">
              <div className="mb-3 w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4">
                <div className="input-group relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-3xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Search"
                  ></input>
                  <button
                    type="submit"
                    className="absolute right-0 rounded-lg bg-green-600 py-1.5 px-4 pb-2 text-base text-white hover:bg-black"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
