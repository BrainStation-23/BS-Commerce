import type { NextComponentType } from 'next';

const ProductSort: NextComponentType = () => {
  const sortOptions = [
    { id: Math.random() * 100, meta: { name: 'Alphabetically' } },
    { id: Math.random() * 100, meta: { name: 'Featured' } },
    { id: Math.random() * 100, meta: { name: 'Best Selling' } },
    { id: Math.random() * 100, meta: { name: 'Price Low' } },
    { id: Math.random() * 100, meta: { name: 'Date New to Old' } },
    { id: Math.random() * 100, meta: { name: 'Date Old to new' } },
  ];
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
        <div className="h-18 box-border w-full border-2 p-4 ">
          <div className="flex grid grid-cols-1 flex-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="flex grid content-center justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              {gridIcon}
            </div>
            <div className="flex justify-center py-2 sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              <label className="flex grid content-center px-2 sm:mx-2">
                Sort By:
              </label>
              <select
                name="cars"
                className="box-border h-12 w-1/2 border-2 bg-white p-2 text-sm"
              >
                {dropdownSortOptions}
              </select>
            </div>
            <div className="flex grid content-center justify-center sm:ml-4 sm:justify-center md:justify-end lg:justify-end xl:justify-end">
              Showing 1-3 of 3 result
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
