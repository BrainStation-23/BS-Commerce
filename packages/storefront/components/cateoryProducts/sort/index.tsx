import type { NextComponentType } from 'next';

const ProductSort: NextComponentType = () => {
  const sortOptions = [
    { id: Math.random() * 100, meta: { name: 'Alphabetically' } },
    { id: Math.random() * 100, meta: { name: 'Price High to Low' } },
    { id: Math.random() * 100, meta: { name: 'Price Low to High' } },
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
        <div className="box-border h-auto w-full border px-4 text-sm">
          <div className="flex justify-between">
            <div className="flex  py-2">
              <label className="grid content-center justify-center px-4">
                Sort By:
              </label>
              <select
                name="cars"
                className="-ml-3 box-border h-auto w-3/5 border bg-white py-2 px-1 text-sm"
              >
                {dropdownSortOptions}
              </select>
            </div>
            <div className="grid content-center justify-center pl-4">
              Showing 1-3 of 3 result
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
