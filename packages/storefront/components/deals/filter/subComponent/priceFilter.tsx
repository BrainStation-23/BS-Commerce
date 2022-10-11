import type { NextComponentType } from 'next';

import CounterElement from '@/components/deals/filter/subComponent/counterElement';

const PriceFilter: NextComponentType = () => {
  return (
    <>
      <div className="accordion-body py-4 px-5">
        <div className="py-2">
          <CounterElement />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="flex flex-row">
            <span className="flex grid content-center justify-center text-sm">
              $
            </span>
            <span className="px-2">
              <input
                type="number"
                className="mt-1 block h-12 w-20 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="0"
              />
            </span>
            <span className="flex grid content-center justify-center">
              From
            </span>
          </div>
          {/* <div className="text-sm ml-4 text-center flex justify-center grid content-center lg:py-2 xl:px-2">
            From
          </div> */}
          <div></div>
          <div>
            <div className="flex flex-row">
              <span className="mr-2 flex grid content-center justify-center text-sm">
                $
              </span>
              <span className="mr-4">
                <input
                  type="number"
                  className="mt-1 block h-12 w-20 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="0"
                />
              </span>
              <span className="flex grid content-center justify-center">
                To
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          {/* temporaty button here */}
          <button className="rounded bg-primary py-2 px-4 font-bold text-white hover:bg-black dark:bg-dark_primary">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
