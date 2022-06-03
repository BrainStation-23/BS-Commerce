import type { NextComponentType } from "next";
const PriceFilter: NextComponentType = () => {
  return (
    <>
      <div className="accordion-body py-4 px-5">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-row">
            <span className="text-sm">$</span>
            <span className="px-2">
              <input
                type="number"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-24 h-12 rounded-md sm:text-sm focus:ring-1"
                placeholder="0"
              />
            </span>
          </div>
          <div className="text-sm ml-4 text-center">From</div>
          <div>
            <div className="flex flex-row">
              <span className="text-sm mr-2">$</span>
              <span className="mr-4">
                <input
                  type="number"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-24 h-12 rounded-md sm:text-sm focus:ring-1"
                  placeholder="0"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          {/* temporaty button here */}
          <button className="bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
