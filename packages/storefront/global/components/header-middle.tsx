import type { NextComponentType } from "next";
import Image from "next/image";
import magnifier from "../../public/magnifier.svg";

const HeaderMiddle: NextComponentType = () => {
  return (
    <div className="flex justify-center py-4 mb-2">
      <div className="flex justify-between items-center container">
        <h2>BS-Commerce</h2>
        <div className="flex flex-row items-center justify-between h-full border-1 border-slate-200 rounded-full text-sm w-2/5">
          <input
            className="ml-4 bg-white focus:outline-none"
            type="search"
            name="search"
            placeholder="Search our store"
          />
          <div className="bg-green-600 h-full w-14 rounded-r-full relative hover:bg-stone-900 transition-all duration-200 ease-linear cursor-pointer">
            <button type="submit" className="absolute top-1/4 left-1/4">
              <Image src={magnifier} height={20} width={20} alt="" />
            </button>
          </div>
        </div>
        <div>
          <span className="uppercase my-0">Register / Login</span>
          <span className="bg-slate-300 rounded-full ml-2 px-1 text-sm">0</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
