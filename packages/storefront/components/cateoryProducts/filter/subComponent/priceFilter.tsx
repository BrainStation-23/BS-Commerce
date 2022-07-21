import type { NextComponentType } from "next";

import CounterElement from "@/components/deals/filter/subComponent/counterElement";

const PriceFilter: NextComponentType = () => {
  return (
    <>
      <div className="accordion-body py-6">
        <div className="py-2">
          <CounterElement />
        </div>
        <div className="scale-95 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="flex flex-row text-sm mt-2">
            <span className="text-sm flex justify-center grid content-center">
              $
            </span>
            <span className="px-2">
              <input
                type="number"
                className="mt-1 px-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-20 h-10 rounded-xs sm:text-sm focus:ring-1"
                placeholder="0"
              />
            </span>
            <span className="flex justify-center grid content-center">
              From
            </span>
          </div>
          {/* <div className="text-sm ml-4 text-center flex justify-center grid content-center lg:py-2 xl:px-2">
            From
          </div> */}
          <div></div>
          <div>
            <div className="flex flex-row text-sm mt-2">
              <span className="text-sm mr-2 -ml-2 flex justify-center grid content-center">
                $
              </span>
              <span className="mr-2">
                <input
                  type="number"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-20 h-10 rounded-xs sm:text-sm focus:ring-1"
                  placeholder="0"
                />
              </span>
              <span className="flex justify-center grid content-center">
                To
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          {/* temporaty button here */}
          <button className="bg-green-600 hover:bg-black text-white font-semibold py-2 px-6 rounded">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
