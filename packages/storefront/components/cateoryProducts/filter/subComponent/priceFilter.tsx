import { FC } from 'react';
import CounterElement from '@/components/deals/filter/subComponent/counterElement';

const PriceFilter: FC = () => {
  return (
    <>
      <div className="accordion-body py-2">
        <div className="">
          <CounterElement />
        </div>
        <div className="grid w-full scale-95 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="mt-2 flex flex-row text-sm">
            <span className="flex grid content-center justify-center text-sm">
              $
            </span>
            <span className="px-2">
              <input
                type="number"
                className="rounded-xs mt-1 block h-10 w-16 border border-slate-300 bg-white px-3 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
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
          <div>
            <div className="mt-2 flex flex-row text-sm">
              <span className="mx-4 flex grid content-center justify-center text-sm">
                $
              </span>
              <span className="mr-2">
                <input
                  type="number"
                  className="rounded-xs mt-1 block h-10 w-16 border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="0"
                />
              </span>
              {/* <span className="flex grid content-center justify-center">
                To
              </span> */}
            </div>
          </div>
        </div>
        <div className="p-2">
          {/* temporaty button here */}
          <button className="rounded bg-green-600 py-2 px-6 font-semibold text-white hover:bg-black">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
