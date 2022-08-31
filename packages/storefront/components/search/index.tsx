import type { NextComponentType } from "next";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";
import SearchItem from "./searchItem";

const SearchComponent: NextComponentType = () => {
  return (
    <>
      <Breadcrumb
        title="Search: 4 results foun..."
        pathArray={["Home", "Search: 4 results foun..."]}
        linkArray={["/home", "/search"]}
      />
      <div className="container w-fit px-15 m-auto tracking-wider items-center justify-center">
        <div className="flex flex-wrap mx-15">
          <div className="lg:mx-1/5 md:w-full pr-4 pl-4">
            <h4 className="text-gray-900 text-sm title-font font-normal text-center  mt-16 mb-1">
              Your search for <strong className="highlight">Demo</strong>{" "}
              revealed the following:
            </h4>

            <div className="flex justify-center mt-5">
              <div className="mb-3 w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4">
                <div className="w-full input-group relative flex flex-wrap items-stretch mb-4">
                  <input
                    type="search"
                    className="w-full form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                  ></input>
                  <button
                    type="submit"
                    className="text-white absolute right-0 py-1.5 pb-2 text-base bg-green-600 hover:bg-black rounded-lg px-4"
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
