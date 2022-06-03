import type { NextComponentType } from "next";

const ProductSort: NextComponentType = () => {
  const sortOptions = [
    { id: Math.random() * 100, meta: { name: "Alphabetically" } },
    { id: Math.random() * 100, meta: { name: "Featured" } },
    { id: Math.random() * 100, meta: { name: "Best Selling" } },
    { id: Math.random() * 100, meta: { name: "Price Low" } },
    { id: Math.random() * 100, meta: { name: "Date New to Old" } },
    { id: Math.random() * 100, meta: { name: "Date Old to new" } },
    { id: Math.random() * 100, meta: { name: "Alphabetically" } },
    { id: Math.random() * 100, meta: { name: "Alphabetically" } },
  ];
  const dropdownSortOptions =
    sortOptions &&
    sortOptions.map((sortOption) => {
      return (
        <option key={sortOption.id} value={sortOption.meta.name}>
          {sortOption.meta.name}
        </option>
      );
    });
  return (
    <>
      <div>
        <div className="box-border h-18 w-full p-4 border-2 ">
          <div className="">
            <div className="flex justify-between">
              <span>
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
              </span>
              <span className="">
                <label className="px-2 sm:mx-2">Sort By:</label>
                <select
                  name="cars"
                  className="p-2 h-12 w-1/2 box-border border-2 bg-white text-sm"
                >
                  {dropdownSortOptions}
                </select>
              </span>
              <span className="sm:ml-4">Showing 1-3 of 3 result</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
