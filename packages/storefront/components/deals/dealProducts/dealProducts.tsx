import type { NextComponentType } from "next";
import productData from "../../../allData/product-data.json";
import DealProductCard from "./dealProductCard/dealProductCard";
const DealProductSegment: NextComponentType = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4 justify-items-center">
          {productData["products"] &&
            productData["products"].length > 0 &&
            productData.products.map((product: any) => (
              <DealProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default DealProductSegment;
