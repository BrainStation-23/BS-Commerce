import type { NextComponentType } from "next";
import DealsFilter from "./filter/main";
import PageTitle from "../global/components/pageTitle";
import DealProductSegment from "./dealProducts/main";
import ProductSort from "./sort/index";

const DealsComponent: NextComponentType = () => {
  return (
    <div className="mt-20">
      <PageTitle title={"Deals"} />
      <div className="px-4 lg:px-24 xl:px-60 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div>
          <DealsFilter />
        </div>
        <div className="grid col-span-4">
          <div className="py-14 px-4 md:px-12 lg:px-12 xl:px-14">
            <ProductSort />
          </div>
          <DealProductSegment />
        </div>
      </div>
    </div>
  );
};

export default DealsComponent;
