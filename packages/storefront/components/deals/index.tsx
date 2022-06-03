import type { NextComponentType } from "next";
import DealsFilter from "./filter/main";
import PageTitle from "../global/components/pageTitle";
import DealProductSegment from "./dealProducts/main";
import ProductSort from "./sort/index";
const Deals: NextComponentType = () => {
  return (
    <div className="mt-20">
      <PageTitle title={"Deals"} />
      <div className="px-10 lg:px-16 xl:px-40 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div>
          <DealsFilter />
        </div>
        <div className="grid col-span-4">
          <div className="py-14 px-8">
            <ProductSort />
          </div>
          <DealProductSegment />
        </div>
      </div>
    </div>
  );
};

export default Deals;
